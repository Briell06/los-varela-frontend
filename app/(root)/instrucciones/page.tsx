const About = () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 text-default-foreground">
      <h1 className="mb-6 text-center text-4xl font-extrabold text-primary-400 drop-shadow-lg">
        ¿Cómo funciona esta página?
      </h1>
      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-primary-300">
          1. Selección de productos
        </h2>
        <p className="text-lg text-default-foreground opacity-80">
          Navega por nuestro catálogo y selecciona los productos que deseas
          comprar. Puedes ver detalles y precios de cada producto antes de
          agregarlos a tu carrito.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-primary-300">
          2. Carrito de compras
        </h2>
        <p className="text-lg text-default-foreground opacity-80">
          Accede a tu carrito para ver todos los productos seleccionados. Aquí
          puedes:
        </p>
        <ul className="ml-8 mt-2 list-disc text-lg text-default-foreground opacity-70">
          <li>Eliminar productos que ya no deseas.</li>
          <li>Cambiar la cantidad de cada producto según tu necesidad.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-primary-300">
          3. Finalizar compra vía WhatsApp
        </h2>
        <p className="text-lg text-default-foreground opacity-80">
          Cuando estés listo, presiona el botón{" "}
          <span className="font-semibold text-primary-400">Comprar</span> en el
          carrito. Se abrirá WhatsApp y se enviará automáticamente tu pedido al
          encargado.{" "}
          <span className="font-semibold">
            No se realizan pagos ni compras dentro de la página
          </span>
          ; toda la gestión y confirmación se realiza directamente por WhatsApp.
        </p>
      </section>
      <div className="mt-10 text-pretty text-center text-base text-default-foreground opacity-60">
        Si tienes dudas o necesitas ayuda, puedes contactarnos directamente por
        WhatsApp u otra red social de su gusto.
      </div>
    </main>
  );
};

export default About;
