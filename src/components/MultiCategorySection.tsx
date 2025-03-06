"use client";
import Image from "next/image";

const MultiCategorySection = () => {
  const categories = [
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/info.png",
      label: "College",
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/feee.png",
      label: "Fee",
      active: true,
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/corse.png",
      label: "Courses",
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cutoff.png",
      label: "CutOff",
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/location-tab.png",
      label: "Location",
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/document.png",
      label: "Document",
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/review.png",
      label: "Reviews",
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/gallery.png",
      label: "Gallery",
    },
  ];

  return (
    <section className="mlticategory">
      <div className="container">
        <div className="category-inner row row-cols-lg-8 gap-3 m-0">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`ca-items col ${category.active ? "active" : ""}`}
            >
              <Image
                src={category.src}
                alt={category.label}
                width={50} // Adjust size as needed
                height={50} // Adjust size as needed
                className="img-fluid"
              />
              <p>{category.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiCategorySection;
