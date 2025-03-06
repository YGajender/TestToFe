import React from "react";
import cs1 from "../../assets/images/cs1.png";
import cs2 from "../../assets/images/cs2.png";
import cs3 from "../../assets/images/cs3.png";
import cs4 from "../../assets/images/cs4.png";
import cs7 from "../../assets/images/cs7.png";
import cs8 from "../../assets/images/cs8.png";
import cs9 from "../../assets/images/cs9.png";
import cs10 from "../../assets/images/cs10.png";
import Image from "next/image";

const colleges = [
  { name: "ANDHRA PRADESH", imgSrc: cs1 },
  { name: "ASSAM", imgSrc: cs2 },
  { name: "Bihar", imgSrc: cs3 },
  { name: "CHANDIGARH", imgSrc: cs4 },
  { name: "HARYANA", imgSrc: cs7 },
  { name: "HIMACHAL PRADESH", imgSrc: cs8 },
  { name: "JAMMU AND KASHMIR", imgSrc: cs9 },
  { name: "KARNATAKA", imgSrc: cs10 },
];

const CollegeListing = () => {
  return (
    <div className="collage-listing">
      <h2>Find College Listing by States</h2>
      <div className="collage-icon">
        {colleges.map((college, index) => (
          <div
            key={index}
            className="icon-box"
          >
            <Image
              src={college.imgSrc}
              alt={college.name || "College Image"}
              width={64}
              height={64}
              className="mx-auto h-16 w-16 object-contain rounded-lg shadow-md"
              priority // Use for important images (lazy loading is default)
              unoptimized // Remove this if using local images
            />
            <p className="mt-2 font-semibold text-gray-700">{college.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeListing;
