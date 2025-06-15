import { FooterButton } from "../components/ui/TailwindCssButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-8 px-4 text-center">
      <h1 className="text-7xl font-extrabold text-primary-400 drop-shadow-lg">
        404
      </h1>
      <h2 className="text-3xl font-bold text-white">Página no encontrada</h2>
      <p className="max-w-md text-lg text-white/70">
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>
      <FooterButton href="/">Volver al inicio</FooterButton>
    </div>
  );
}
