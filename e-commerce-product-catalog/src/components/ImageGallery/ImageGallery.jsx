import { useState } from "react";
import { Dialog } from "@mui/material";
import styles from "./ImageGallery.module.scss";

function ImageGallery({ images, productId }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const galleryImages =
      Array.from({ length: 5 }, (_, i) =>
          `https://picsum.photos/seed/${productId}-${i}/800/1000`
        );

  return (
    <div className={styles.gallery}>
      <div
        className={styles.mainImage}
        onClick={() => setOpen(true)}
      >
        <img
          src={galleryImages[selectedIndex]}
          alt="Product"
        />
      </div>

      <div className={styles.thumbnails}>
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            className={selectedIndex === index ? styles.active : ""}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
        <img
          src={galleryImages[selectedIndex]}
          alt="zoomed"
          className={styles.lightboxImage}
        />
      </Dialog>
    </div>
  );
}

export default ImageGallery;