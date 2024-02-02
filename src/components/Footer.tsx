import { UilWhatsapp } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'


import ArmcharLamp from '../assets/armchair-lamp.png'





export const Footer = () => {
  return (
    <section className="h-[400px] bg-[color:var(--bg-secondary)] p-16 relative">
        <div className='absolute top-10 right-0'>
            <img className='w-4/6' src={ArmcharLamp} alt="" />
        </div>

        <div className="max-w-7xl m-auto grid grid-cols-12 gap-4">
            <div className='col-span-8 flex justify-around' >
                <div>
                    <div>
                        <span className="text-xl font-semibold text-[var(--text-primary)] ">
                            Contacto
                        </span>
                    </div>
                    <div className='mt-12'>
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
                
                <div>
                    <div className="flex flex-col gap-6 col-span-4">
                    <span className="text-xl font-semibold text-[var(--text-primary)] cursor-pointer underline hover:text-[var(--bg-primary)]">
                        Productos
                    </span>
                    <span className="text-xl font-semibold text-[var(--text-primary)] cursor-pointer underline hover:text-[var(--bg-primary)]">
                        Galeria
                    </span>
                    <span className="text-xl font-semibold text-[var(--text-primary)] cursor-pointer underline hover:text-[var(--bg-primary)]">
                        Nosotros
                    </span>
                    <span className="text-xl font-semibold text-[var(--text-primary)] cursor-pointer underline hover:text-[var(--bg-primary)]">
                        Reseñas
                    </span>
                    </div>
                </div>

            </div>

            <div className='opacity-25 w-[1px]  bg-[color:var(--bg-primary)] col-span-1'></div>
            <div className='col-span-3'></div>
            <div className='col-span-12 pt-10'>
                <p className='text-center text-white text-xs'>&#169; MEV HERRERIA 2024</p>
            </div>
        </div>
        
    </section>
  )
}
