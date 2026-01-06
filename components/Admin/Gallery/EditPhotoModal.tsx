import { deleteGalleryPhoto } from "@/functions/firestore/deleteGalleryPhoto";
import { getGallery } from "@/functions/firestore/getGallery";
import updateGalleryPhoto from "@/functions/firestore/updateGalleryPhoto";
import { Photo } from "@/types/types";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function EditPhotoModal({
  isOpen,
  onClose,
  setPhotos,
  photo,
}: {
  isOpen: boolean;
  onClose: () => void;
  setPhotos: Dispatch<SetStateAction<Photo[] | undefined>>;
  photo: Photo;
}) {
  const [photoName, setPhotoName] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [isThumbnail, setIsThumbnail] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen || !photo) return;
    setPhotoName(photo.title);
    setIsThumbnail(photo.thumbnail);
  }, [isOpen, photo]);

  const handleEdit = async () => {
    try {
      setIsLoading(true);
      await updateGalleryPhoto(photo.id, {
        id: photo.id,
        title: photoName,
        url: photo.url,
        thumbnail: isThumbnail,
      });

      const photos = await getGallery();
      setPhotos(photos);

      setIsLoading(false);
      onClose();
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleteLoading(true);
      await deleteGalleryPhoto(photo.id);

      const res = await fetch("/api/delete_image", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ url: photo.url }),
      });

      if (!res.ok) {
        throw new Error("削除失敗");
      }

      const photos = await getGallery();
      setPhotos(photos);

      setIsDeleteLoading(false);
      onClose();
    } catch (err) {
      console.error(err);
      setIsDeleteLoading(false);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const onCancel = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>写真を編集</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Photo Name</FormLabel>
              <Input
                value={photoName}
                onChange={(e) => setPhotoName(e.target.value)}
                placeholder="例: バラのスケッチ"
              />
            </FormControl>

            <Checkbox
              isChecked={isThumbnail}
              onChange={(e) => setIsThumbnail(e.target.checked)}
            >
              ホームに表示する
            </Checkbox>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onCancel}>
            キャンセル
          </Button>
          <Button
            mr={3}
            colorScheme="red"
            onClick={handleDelete}
            isLoading={isDeleteLoading}
          >
            削除
          </Button>
          <Button colorScheme="blue" onClick={handleEdit} isLoading={isLoading}>
            変更
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
