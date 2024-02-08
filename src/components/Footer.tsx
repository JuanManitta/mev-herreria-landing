import { UilWhatsapp } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'


import ArmcharLamp from '../assets/armchair-lamp.png'
import { useNavigate } from 'react-router'


const footerMenu = [
    {
        name: 'Productos',
        url: '/productos'
    },
    {
        name: 'Galeria',
        url: '/galeria'
    },
    {
        name: 'Nosotros',
        url: '/about'
    },
    {
        name: 'Reseñas',
        url: '/reseñas'
    }
]


export const Footer = () => {

    const navigate = useNavigate();

  return (
    <section className="sm:h-[400px] bg-[color:var(--bg-secondary)] p-6 sm:p-16 relative">

        <div className='hidden sm:block absolute top-10 right-0'>
            <img className=' sm:w-4/6' src={ArmcharLamp} alt="" />
        </div>
        <div className='sm:hidden absolute bottom-10 left-52'>
            <img className='w-4/5 sm:w-4/6' src={ArmcharLamp} alt="" />
        </div>

        <div className="max-w-7xl m-auto grid grid-cols-12 gap-4">
            <div className='col-span-12 sm:col-span-8 sm:gap-0 sm:flex justify-around' >
                <div>
                    <div>
                        <span className="text-xl font-semibold text-[var(--text-primary)] ">
                            Contacto
                        </span>
                    </div>
                    <div className='mt-12 mb-16 sm:mb-0 '>
                        <ul>
                            <li className='flex gap-3'>
                                <UilMapMarker size="20" color='white' />
                                <span className="text-[var(--text-primary)]">Calle 123, Ciudad, Pais</span>
                            </li>
                            <li className='flex gap-3 mt-3'>
                                <UilWhatsapp size="20" color='white' />
                                <span className="text-[var(--text-primary)]">+57 123 456 7890</span>
                            </li>
                            <li className='flex gap-3 mt-3'>
                                <UilEnvelope size="20" color='white' />
                                <span className="text-[var(--text-primary)]">lamarencoche@gmail.com</span>
                            </li>
                            <li className='flex gap-3 mt-3'>
                                <UilInstagram size="20" color='white' />
                                <span className="text-[var(--text-primary)]">@instagram</span>
                            </li>
                        </ul>

                    </div>
                </div>
                <hr className='sm:hidden mb-12 opacity-30' />
                
                <div>
                    <div className="flex flex-col gap-6 col-span-4">
                        {footerMenu.map(( { name, url } ) => (
                            <span
                                onClick={() => navigate(url)}
                                key={ url } 
                                className="text-xl font-semibold text-[var(--text-primary)] cursor-pointer underline hover:text-[var(--bg-primary)]">
                                { name }
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            <div className='opacity-25 w-[1px]  bg-[color:var(--bg-primary)] col-span-1'></div>
            <div className='col-span-3'></div>
            <div className='col-span-12 pt-10'>
                <p className='text-left sm:text-center text-white text-xs'>&#169; MEV HERRERIA 2024</p>
            </div>
        </div>
        
    </section>
  )
}
