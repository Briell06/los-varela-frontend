const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center border-t-1 border-white/10 py-5 max-md:flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-4 md:gap-8 lg:gap-10">
        <video
          muted
          autoPlay
          src="/logo-video.mp4"
          className="size-32 rounded-full"
        >
          Su navegador no soporta el video
        </video>
        <p className="text-pretty text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Los Varela
        </p>
      </div>

      <div className="flex-1"></div>
    </div>
  );
};

export default Footer;
