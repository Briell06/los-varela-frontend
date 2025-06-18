"use client";

import LazyLoad from "react-lazy-load";

const FooterVideo = () => {
  return (
    <LazyLoad>
      <video
        autoPlay
        muted
        className="size-32 rounded-full"
        src="/logo-video.mp4"
      >
        Su navegador no soporta el video
      </video>
    </LazyLoad>
  );
};

export default FooterVideo;
