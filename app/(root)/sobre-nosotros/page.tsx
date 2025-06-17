import { Metadata } from "next";

const AboutUs = () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 text-default-foreground">
      <h1 className="mb-6 text-center text-4xl font-extrabold text-primary-400 drop-shadow-lg">
        Bienvenidos a Los Varela: Enviando Felicidad a Cuba
      </h1>
      <div className="prose prose-lg prose-invert mx-auto text-default-foreground opacity-90">
        <p>
          En <span className="font-semibold text-primary-300">Los Varela</span>,
          creemos en el poder de la confianza, el esfuerzo y el amor por la
          familia. Somos un pequeño negocio con un gran sueño: crecer y mejorar
          cada día con la ayuda de nuestros clientes, ofreciendo una amplia
          variedad de productos a precios accesibles para que puedas enviar
          felicidad y comodidad a tus seres queridos en Cuba.
        </p>
        <p>
          Sabemos lo importante que es cada envío, porque detrás de cada compra
          hay cariño, apoyo y el deseo de hacer sentir cerca a quienes más
          queremos. Aunque estamos comenzando, nos esforzamos para que cada
          pedido sea atendido con responsabilidad, transparencia y compromiso 💛{" "}
          <span className="font-semibold">
            Tu apoyo es clave para que sigamos creciendo juntos.
          </span>
        </p>
        <p>
          En <span className="font-semibold text-primary-300">Los Varela</span>,
          hacemos nuestro trabajo con dedicación, porque sabemos que detrás de
          cada compra hay un gesto de amor. Gracias por confiar en nosotros y
          ser parte de este hermoso camino.
        </p>
        <p className="mt-8 text-center text-2xl font-bold text-yellow-300">
          ¡Vamos a crecer juntos! 🌟
        </p>
      </div>
    </main>
  );
};

export default AboutUs;

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Sobre nosotros",
  keywords: ["sobre nosotros", "los varela"],
};
