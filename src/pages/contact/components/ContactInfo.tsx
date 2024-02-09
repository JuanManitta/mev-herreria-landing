import { UilWhatsapp, UilInstagram, UilEnvelope } from '@iconscout/react-unicons'

export const ContactInfo = () => {

    const contactInfo = [
        {
            icon: <UilEnvelope size="25" />,
            text: 'tueamil@gmail.com',
        },
        {
            icon: <UilInstagram size="25" />,
            text: '@instagram.insta',
        },
        {
            icon: <UilWhatsapp size="25" />,
            text: '+54 221 123456',
        },
    ];
    
  return (
    <>
        <h1 className="text-center font-semibold text-4xl mb-6">Contactanos</h1>
        <span className="mb-6">Podes contactarnos a traves de wasap, email, instagram
          o completando el siguiente formulario Lorem ipsum dolor sit amet, consectetur adipisicing 
        </span>
        <ul className="mb-16">
          { contactInfo.map((info, index) => (
            <li key={index} className="flex gap-2 mt-2">
                {info.icon}
                <span >{info.text}</span>
            </li>
            )) }
        </ul>

        <div className="flex justify-around gap-4">
          <div>
            <span className="text-lg font-semibold">La mar en coche</span>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut assumenda dolorem?</p>
          </div>
          <div>
            <span className="text-lg font-semibold">La mar en coche</span>
            <p className="mt-2">Lorem ipsum dolor sit amet co ad? Praesentium voluptate consequatur cor aut assumenda dolorem?</p>
          </div>
          <div>
            <span className="text-lg font-semibold">La mar en coche</span>
            <p className="mt-2">Lorem ipsum dolor sit amet, ad? Praesentium voluptate consequatur cor aut assumenda dolorem?</p>
          </div>
        </div>
    </>
  )
}
