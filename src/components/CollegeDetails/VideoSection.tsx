import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div className="popular videos">
      <h5>Videos</h5>

      {/* YouTube Video 1 */}
      <iframe
        width="100%"
        height="280"
        src="https://www.youtube.com/embed/E9CkoQUjiFc?si=7krtS9ynKev1VtKL"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* YouTube Video 2 */}
      <iframe
        width="100%"
        height="280"
        src="https://www.youtube.com/embed/E9CkoQUjiFc?si=7krtS9ynKev1VtKL"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* View All Videos Link */}
      <div className="link">
        <a href="#">View All Videos</a>
      </div>
    </div>
  );
};

export default VideoSection;
