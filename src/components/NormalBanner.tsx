"use client";

import Image from "next/image";
import BGLine from "../assets/images/bg-line.png";

interface NormalBannerProps {
  title: string;
}

const NormalBanner: React.FC<NormalBannerProps> = ({ title }) => {
  return (
    <section className="normal-banner">
      <div className="wrapper">
        <div className="bg">
          <Image
            src={BGLine}
            alt=""
            width={1920}
            height={1080}
            className="img-fluid"
          />
        </div>

        <div className="title">
          <div className="container text-center">
            <h2>{title}</h2>
            <p>Any question or remarks? Just write us a message!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NormalBanner;
