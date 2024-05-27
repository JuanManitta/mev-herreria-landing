import { Text } from "@chakra-ui/react";
import {
  UilWhatsapp,
  UilInstagram,
  UilEnvelope,
} from "@iconscout/react-unicons";

export const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <UilEnvelope size="25" />,
      text: "tueamil@gmail.com",
    },
    {
      icon: <UilInstagram size="25" />,
      text: "@instagram.insta",
    },
    {
      icon: <UilWhatsapp size="25" />,
      text: "+54 221 123456",
    },
  ];

  return (
    <>
      <h1 className="text-center font-semibold text-4xl mb-6">Contactanos</h1>
      <span className="mb-6">
        Podes contactarnos a traves de wasap, email, instagram o completando el
        siguiente formulario Lorem ipsum dolor sit amet, consectetur adipisicing
      </span>
      <ul className="mb-16">
        {contactInfo.map((info, index) => (
          <li key={index} className="flex gap-2 mt-2">
            {info.icon}
            <span>{info.text}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row justify-around gap-4">
        <div>
          <span className="text-lg font-semibold">Elegí tu diseño</span>
          <p className="mt-2">
            Podes optar por un diseño ya existente en nuestra seccion de{" "}
            <Text
              fontWeight="bold"
              textDecor="underline"
              as="a"
              href="/productos"
            >
              productos
            </Text>{" "}
            o de nuestra{" "}
            <Text
              as="a"
              fontWeight="bold"
              textDecor="underline"
              href="/galeria"
            >
              galeria
            </Text>{" "}
            o bien, nos podes contar tu idea original!
          </p>
        </div>
        <div>
          <span className="text-lg font-semibold">Presupuesto</span>
          <p className="mt-2">
            El presupuesto se realiza en base a la complejidad del diseño, el
            tamaño y los materiales a utilizar, precios congelados y sin trampas!
          </p>
        </div>
        <div className="mb-12 sm:mb-0">
          <span className="text-lg font-semibold">El producto en tus manos</span>
          <p className="mt-2">
            Una vez acordado el diseño y el presupuesto, el tiempo de entrega
            varia dependiendo de la complejidad del diseño y
            la cantidad de pedidos en curso.
          </p>
        </div>
      </div>
    </>
  );
};
