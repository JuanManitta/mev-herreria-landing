import { UilWhatsapp } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'




export const Footer = () => {
  return (
    <section className="h-[350px] bg-[color:var(--bg-secondary)]">
        <div className="max-w-7xl grid grid-cols-3 gap-6">
            <div className="p-10">
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
            <div className="p-10 flex flex-col gap-6">
                <span className="text-xl font-semibold text-[var(--text-primary)] ">
                    Productos
                </span>
                <span className="text-xl font-semibold text-[var(--text-primary)] ">
                    Galeria
                </span>
                <span className="text-xl font-semibold text-[var(--text-primary)] ">
                    Nosotros
                </span>
            </div>
           
        </div>
    </section>
  )
}
