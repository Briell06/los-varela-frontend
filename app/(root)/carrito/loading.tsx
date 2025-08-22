import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <CgSpinner className="size-16 animate-spin text-primary-400" />
      <p className="text-xl font-semibold text-white/80">Cargando…</p>
    </section>
  );
}
