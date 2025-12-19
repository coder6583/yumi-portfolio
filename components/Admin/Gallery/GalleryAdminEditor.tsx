import {
  Box,
  Image,
  SimpleGrid,
  StylesProvider,
  useDisclosure,
} from "@chakra-ui/react";
import { Photo } from "@/types/types";
import { AddIcon } from "@chakra-ui/icons";
import AddPhotoModal from "./AddPhotoModal";
import styles from "./GalleryAdminEditor.module.css";
import { Dispatch, SetStateAction } from "react";

export default function GalleryAdminEditor({
  photos,
  setPhotos,
}: {
  photos: Photo[];
  setPhotos: Dispatch<SetStateAction<Photo[] | undefined>>;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.parent}>
      <SimpleGrid columns={3} spacing={2}>
        {photos.map((photo) => (
          <Box
            key={photo.url}
            aspectRatio={1}
            overflow="hidden"
            borderRadius="md"
            bg="gray.100"
          >
            <Image src={photo.url} alt="" objectFit="cover" w="100%" h="100%" />
          </Box>
        ))}

        <Box
          as="button"
          aspectRatio={1}
          border="2px solid"
          borderColor="lightgray"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{ borderColor: "gray.500" }}
          onClick={onOpen}
        >
          <AddIcon boxSize={8} color="lightgray" />
        </Box>
      </SimpleGrid>

      <AddPhotoModal isOpen={isOpen} onClose={onClose} setPhotos={setPhotos} />
    </div>
  );
}
