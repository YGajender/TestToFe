import Image from "next/image";
import Link from "next/link";
import "glightbox/dist/css/glightbox.min.css";
import { useEffect } from "react";
import GLightbox from "glightbox";
import gallery2 from "../../assets/images/2.png";
import gallery3 from "../../assets/images/3.png";
import gallery4 from "../../assets/images/4.png";
import compare from "../../assets/images/compare.png";

const galleryImages = [
  { src: gallery2, alt: "Gallery Image 1" },
  { src: gallery3, alt: "Gallery Image 2" },
  { src: gallery4, alt: "Gallery Image 3" },
  { src: compare, alt: "Gallery Image 4" },
  { src: gallery2, alt: "Gallery Image 5" },
  { src: gallery3, alt: "Gallery Image 6" },
  { src: gallery4, alt: "Gallery Image 7" },
  { src: compare, alt: "Gallery Image 8" },
];

export default function GalleryImages() {
//   useEffect(() => {
//     const lightbox = GLightbox({ selector: ".glightbox" });
//     return () => lightbox.destroy();
//   }, []);

  return (
    <div className="college-inner-info">
      <div className="gallery-wrapper">
        <h4 className="mt-0">Photo Gallery</h4>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <Link
              href=""
              key={index}
              className="glightbox"
            >
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
