"use client";

import LazyLoad from "react-lazy-load";

const FooterVideo = () => {
  return (
    <LazyLoad>
      <video
        muted
        autoPlay
        src="/logo-video.mp4"
        className="size-32 rounded-full"
      >
        Su navegador no soporta el video
      </video>
    </LazyLoad>
  );
};

export default FooterVideo;
