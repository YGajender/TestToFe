import Image from "next/image";
import Link from "next/link";
import "glightbox/dist/css/glightbox.min.css";
import { useEffect } from "react";
import GLightbox from "glightbox";

const galleryImages = [
  { src: "/assets/images/2.png", alt: "Gallery Image 1" },
  { src: "/assets/images/3.png", alt: "Gallery Image 2" },
  { src: "/assets/images/4.png", alt: "Gallery Image 3" },
  { src: "/assets/images/compare.png", alt: "Gallery Image 4" },
  { src: "/assets/images/2.png", alt: "Gallery Image 5" },
  { src: "/assets/images/3.png", alt: "Gallery Image 6" },
  { src: "/assets/images/4.png", alt: "Gallery Image 7" },
  { src: "/assets/images/compare.png", alt: "Gallery Image 8" },
];

export default function Gallery() {
  useEffect(() => {
    const lightbox = GLightbox({ selector: ".glightbox" });
    return () => lightbox.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className="college-inner-info">
      <div className="gallery-wrapper">
        <h4 className="mt-0">Photo Gallery</h4>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <Link href={image.src} key={index} className="glightbox">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={150}
                className="rounded-lg shadow-md"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
