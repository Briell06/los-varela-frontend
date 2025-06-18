import { Metadata } from "next";

const PrivacyPolicy = () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 text-white">
      <h1 className="mb-6 text-center text-4xl font-extrabold text-primary-400 drop-shadow-lg">
        Política de Privacidad
      </h1>
      <div className="prose prose-lg prose-invert mx-auto text-default-foreground opacity-90">
        <p>
          En Los Varela, valoramos tu privacidad. Recopilamos y utilizamos
          únicamente la información necesaria para procesar tus pedidos y
          brindarte el mejor servicio posible.
        </p>
        <ul>
          <li>
            No compartimos tu información personal con terceros, excepto para la
            gestión de tu pedido vía WhatsApp.
          </li>
          <li>No almacenamos datos de pago ni información bancaria.</li>
          <li>
            Puedes contactarnos en cualquier momento para solicitar la
            eliminación de tus datos personales.
          </li>
        </ul>
        <p>
          Al utilizar nuestro sitio, aceptas nuestra política de privacidad. Si
          tienes preguntas, no dudes en escribirnos.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad",
  keywords: ["política de privacidad", "los varela"],
};
