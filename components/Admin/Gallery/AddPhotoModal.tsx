import { getGallery } from "@/functions/firestore/getGallery";
import { uploadGalleryPhoto } from "@/functions/firestore/uploadGalleryPhoto";
import { Photo } from "@/types/types";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useRef, useState } from "react";

export default function AddPhotoModal({
  isOpen,
  onClose,
  setPhotos,
}: {
  isOpen: boolean;
  onClose: () => void;
  setPhotos: Dispatch<SetStateAction<Photo[] | undefined>>;
}) {
  const [photoId, setPhotoId] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isThumbnail, setIsThumbnail] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log(file); // File object
    setFile(file);
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setIsLoading(true);

      const res = await fetch("/api/upload_image", {
        method: "POST",
        headers: {
          "content-type": file.type,
        },
        body: file,
      });

      if (!res.ok) {
        throw new Error("アップロード失敗");
      }

      const { url } = await res.json();

      console.log("Uploaded image url: ", url);
      await uploadGalleryPhoto({
        id: photoId,
        title: photoName,
        url: url,
        thumbnail: isThumbnail,
      });

      const photos = await getGallery();
      setPhotos(photos);
      setPhotoId("");
      setPhotoName("");
      setIsThumbnail(false);

      setFile(null);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onCancel = () => {
    setPhotoId("");
    setPhotoName("");
    setIsThumbnail(false);
    setFile(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>写真をアップロード</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Photo ID</FormLabel>
              <Input
                value={photoId}
                onChange={(e) => setPhotoId(e.target.value)}
                placeholder="例: rose_001"
              />
            </FormControl>

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

            <Button onClick={() => inputRef.current?.click()}>
              画像を選択
            </Button>
            <Input
              ref={inputRef}
              type="file"
              accept="image/*"
              display="none"
              onChange={handleFileSelect}
            />

            {file && (
              <Image
                src={URL.createObjectURL(file)}
                alt="Preview"
                borderRadius="md"
                maxH="200px"
                objectFit="contain"
              />
            )}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onCancel}>
            キャンセル
          </Button>
          <Button
            colorScheme="blue"
            onClick={handleUpload}
            isLoading={isLoading}
          >
            アップロード
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
