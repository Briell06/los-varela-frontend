import { Metadata } from "next";

const TermsAndConditions = () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 text-default-foreground">
      <h1 className="mb-6 text-center text-4xl font-extrabold text-primary-400 drop-shadow-lg">
        Términos y Condiciones
      </h1>
      <div className="prose prose-lg prose-invert mx-auto text-default-foreground opacity-90">
        <p>
          Bienvenido a Los Varela. Al utilizar nuestro sitio web, aceptas los
          siguientes términos y condiciones. Por favor, léelos cuidadosamente
          antes de realizar cualquier pedido.
        </p>
        <ul>
          <li>
            Los productos ofrecidos están sujetos a disponibilidad y pueden
            cambiar sin previo aviso.
          </li>
          <li>
            No se realizan pagos ni compras dentro de la página; los pedidos se
            gestionan y confirman exclusivamente por WhatsApp.
          </li>
          <li>
            Nos reservamos el derecho de rechazar o cancelar pedidos en caso de
            errores o circunstancias imprevistas.
          </li>
          <li>
            Tu uso del sitio implica la aceptación de estos términos en su
            totalidad.
          </li>
        </ul>
        <p>
          Si tienes dudas, contáctenos antes de realizar tu pedido. Gracias por
          confiar en Los Varela.
        </p>
      </div>
    </main>
  );
};

export default TermsAndConditions;

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones",
  keywords: ["términos y condiciones", "los varela"],
};
