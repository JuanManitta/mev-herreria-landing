import image1 from './img/review-1.png'
import image2 from './img/review-2.png'
import image3 from './img/review-3.png'



export const images: string[] = [image1, image2, image3]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
