import image1 from '../carousel/img/slide-1.jpg'
import image2 from '../carousel/img/slide-2.jpg'
import image3 from '../carousel/img/slide-3.jpg'
import image4 from '../carousel/img/slide-4.jpg'
import image5 from '../carousel/img/slide-5.jpg'
import image6 from '../carousel/img/slide-6.jpg'
import image7 from '../carousel/img/slide-7.jpg'
import image8 from '../carousel/img/slide-8.jpg'
import image9 from '../carousel/img/slide-9.jpg'
import image10 from '../carousel/img/slide-10.jpg'
import image11 from '../carousel/img/slide-11.jpg'
import image12 from '../carousel/img/slide-12.jpg'
import image13 from '../carousel/img/slide-13.jpg'
import image14 from '../carousel/img/slide-14.jpg'
import image15 from '../carousel/img/slide-15.jpg'
import image16 from '../carousel/img/slide-16.jpg'


export const images: string[] = [
        image1, image2, image3, image4, image5,
        image6, image7, image8, image9, image10,
        image11, image12, image13, image14, image15, image16
    ]

const imageByIndex = (index: number): string => images[index % images.length]


export default imageByIndex
