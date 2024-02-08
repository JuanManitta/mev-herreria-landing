import { Button } from '@chakra-ui/react'

import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from '../../../components/carousel/EmblaCarousel';

import '../../../components/carousel/css'
import { useNavigate } from 'react-router';

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 20
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export const ProductsPreview = () => {

    const navigate = useNavigate();

    

  return (
    <>
        <div className="col-span-12 order-last sm:order-first sm:col-span-6 p-6">
            <main className="bg-[color:#d5d3c9]  rounded-3xl home_carousel_container">
              <section>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              </section>
            </main>
            <div className='sm:hidden mt-12'>
                <Button className='w-full' onClick={() => navigate('/productos')} variant='primary'>Ver más</Button>
            </div>
        </div>

        <div className="p-6 col-span-12 sm:col-span-6 flex flex-col justify-center gap-10">
            <div>
                <h3 className='text-4xl font-semibold pt-12 sm:pt-0'>
                    Inspirá el interior de tu hogar.
                </h3>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quos veritatis est mollitia magnam possimus voluptates totam quaerat, maxime tempore omnis delectus ipsum. Quod praesentium tenetur veniam, ipsa asperiores eaque?</p>

            </div>
            <div className='hidden sm:block'>
                <Button onClick={() => navigate('/productos')} variant='primary'>Ver más</Button>
            </div>
            
        </div>
    </>
  )
}





{/* <div className="h-[400px] w-[400px] absolute left-6 mt-12 bg-[color:var(--text-secondary)] rounded-3xl"></div>
            <div className='absolute top-6 left-0'>
                <img className='w-[400px] rounded-3xl shadow-lg' src={fondo} alt="" />
            </div> */}

            {/* <div className="h-[400px] w-[400px] absolute right-6 bottom-0 mt-12 bg-[color:var(--text-secondary)] rounded-3xl"></div>
            <div className='absolute bottom-6 right-12'>
                <img className='w-[400px] rounded-3xl shadow-lg' src={fondo} alt="" />
            </div> */}
