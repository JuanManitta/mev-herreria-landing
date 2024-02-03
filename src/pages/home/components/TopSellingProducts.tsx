import { Button } from '@chakra-ui/react'
import middleImg from '../../../assets/fondo2.jpg'
import { useNavigate } from 'react-router';


export const TopSellingProducts = () => {

  const navigate = useNavigate();

  return (
    <div className='py-12'>
      <div className="h-[20vh] flex items-center justify-center">
        <h4 className="text-center text-4xl font-semibold">Top ventas</h4>
      </div>

      <div className="grid grid-cols-4 gap-12">

        <div className="col-span-1">
          <img className='w-full h-64 object-cover' style={{borderRadius:'20px', opacity: 0.9}} src={middleImg} alt="" />
          <h6 className='text-xl font-semibold my-6'>La mar en coche</h6>
          <p className='w-full'>Lorem ipsum dolor sit amet consectetur  perspiciatis magnam placeat architecto animi ea, hic nemo impedit accusamus consequuntur. Dicta, eos quia!</p>
        </div>

        <div className="col-span-2">
          <img className='w-full h-[42%] object-cover' style={{borderRadius:'20px', opacity: 0.9}} src={middleImg} alt="" />
          <h6 className='text-xl font-semibold my-6'>La mar en coche</h6>
          <p className='w-full'>Lorem ipsum dolor sit amet consectetur  perspiciatis magnam placeat architecto animi ea, hic nemo impedit accusamus consequuntur. Dicta, eos quia!</p>
          <Button onClick={() => navigate('/contacto')} className='mt-6' variant='primary'>Contactar</Button>
        </div>

        <div className="col-span-1">
          <img className='w-full h-64 object-cover' style={{borderRadius:'20px', opacity: 0.9}} src={middleImg} alt="" />
          <h6 className='text-xl font-semibold my-6'>La mar en coche</h6>
          <p className='w-full'>Lorem ipsum dolor sit amet consectetur  perspiciatis magnam placeat architecto animi ea, hic nemo impedit accusamus consequuntur. Dicta, eos quia!</p>
        </div>
      </div>
      
    </div>
  )
}
