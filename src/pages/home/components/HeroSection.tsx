import { UilWhatsapp, UilInstagram, UilEnvelope } from '@iconscout/react-unicons'
import { Button } from '@chakra-ui/react'
import fondo from '../../../assets/fondo2.jpg'
import { useNavigate } from 'react-router'


export const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className="col-span-2 flex items-center">
            <div className='flex flex-col gap-3'>
                <div className='flex justify-center'>
                    <div className='bg-[color:var(--text-secondary)] w-[1.5px] h-32'></div>
                </div>
                    <UilEnvelope color='var(--text-secondary)' size="25" />
                    <UilInstagram color='var(--text-secondary)' size="25" />
                    <UilWhatsapp color='var(--text-secondary)' size="25"/>
                <div className='flex justify-center'>
                    <div className='bg-[color:var(--text-secondary)] w-[1.5px] h-32'></div>
                </div>
            </div>
        </div>

        <div className="col-span-5 flex flex-col items-center justify-center mr-6">
            <div className='grid grid-cols-1 gap-10'>
                <div>
                    <div>
                        <h1 className='text-4xl font-semibold mb-6'>
                            Hacemos realidad tus ideas.
                        </h1>
                    </div>
                    <div className='mb-6 text-[color:var(--text-secondary)]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, officia. Suscipit, maxime totam. Modi placeat earum animi qui sit, dignissimos quia. Praesentium, tempora sint nesciunt molestias ea aliquid est beatae!</p>
                    </div>
                    <div>
                        <Button onClick={() => navigate('/contacto')} variant='primary'>
                            Contactar
                        </Button>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between mt-10 mr-2'>
                        <div>
                            <p className='text-center text-2xl font-semibold'>+200</p>
                            <p className='text-sm'>Productos fabricados</p>
                        </div>
                        <div>
                            <p className='text-center text-2xl font-semibold'>+5</p>
                            <p className='text-sm'>Años en el mercado</p>
                        </div>
                        <div>
                            <p className='text-center text-2xl font-semibold'>+80</p>
                            <p className='text-sm'>Clientes contentos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-5 flex items-center">
           <img className='home_hero_img' style={{borderRadius:'90px', opacity: 0.9}} src={fondo} alt="" />
        </div>
    </>
  )
}
