import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Photo } from "@/types/types";
import { Image } from "@chakra-ui/react";
import styles from "./ArtCarousel.module.css";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const AUTO_ADVANCE_MS = 3000;

export default function ArtCarousel({ photos }: { photos: Photo[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const paginate = useCallback(
    (newDirection: number, nextIndex?: number) => {
      const target = nextIndex ?? currentIndex + newDirection;
      if (target < 0 || target >= photos.length) return;
      setDirection(newDirection);
      setCurrentIndex(target);
    },
    [currentIndex, photos.length]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        setDirection(1);
        return (prev + 1) % photos.length;
      });
    }, AUTO_ADVANCE_MS);
  }, [photos.length]);

  useEffect(() => {
    if (photos.length <= 1) return;
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [photos.length, resetTimer]);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) {
      paginate(1);
      resetTimer();
    } else if (info.offset.x > 50) {
      paginate(-1);
      resetTimer();
    }
  };

  if (photos.length === 0) return null;

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className={styles.slide}
          >
            <Image
              src={photos[currentIndex].url}
              alt={photos[currentIndex].title}
              className={styles.image}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {photos.length > 1 && (
        <div className={styles.dots}>
          {photos.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ""}`}
              onClick={() => {
                paginate(i > currentIndex ? 1 : -1, i);
                resetTimer();
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
