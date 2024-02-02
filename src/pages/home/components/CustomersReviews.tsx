import { Button } from "@chakra-ui/react"
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from "../../../components/carousel-small/EmblaCarousel";

import '../../../components/carousel-small/css/embla.css'



const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export const CustomersReviews = () => {
  return (
    <div className="max-w-7xl m-auto grid grid-cols-5 h-full">

      <div className="col-span-2 flex flex-col justify-center p-6">
        <div>
          <h4 className="text-3xl mb-6 text-[var(--text-primary)]">Reseñas de nuestros clientes</h4>
        </div>
        <div className="text-[var(--text-primary)] mb-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tempore repellat voluptates fugiat eveniet mollitia. Voluptate suscipit labore sit vel voluptates aperiam autem? Error voluptate doloribus beatae inventore, asperiores amet.</p>
        </div>
        <div>
        <Button variant='secondary'>Ver más</Button>
        </div>
      </div>

      <div className="col-span-3 flex items-center">
        <main className="rounded-3xl home_carousel_container">
          <section>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </section>
        </main>
      </div>
    
    </div>
  )
}
