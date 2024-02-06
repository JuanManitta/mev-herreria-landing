import { UilBedDouble } from '@iconscout/react-unicons'
import { UilCreditCard } from '@iconscout/react-unicons'
import { UilUsdCircle } from '@iconscout/react-unicons'


export const ValueSection = () => {
  return (
    <div className='p-12'>
    
      <div className="mb-12">
        <h2 className="text-[var(--text-primary)] text-4xl text-center">¿Porqué elegirnos?</h2>
      </div>

      <div className="sm:flex gap-6 max-w-7xl m-auto">

        <div>
          <div className='flex sm:justify-normal'>
            <UilBedDouble color='var(--text-primary)' />
            <p className="text-[var(--text-primary)] text-center ml-2 text-lg font-medium mb-3">Productos personalizados</p>
          </div>
          <p className="text-[var(--text-primary)]">Todos nuestros productos son diseñados <br /> y fabricados a medida. Vos nos das tu idea, nosotros la hacemos realidad.</p>
        </div>


        <div className='mt-12 sm:mt-0'>
          <div className='flex sm:justify-normal'>
            <UilCreditCard color='var(--text-primary)' />
            <p className="text-[var(--text-primary)] ml-2 text-lg font-medium mb-3">Cuotas fijas</p>
          </div>
          <p className="text-[var(--text-primary)]">3, 6 y 12 cuotas fijas sin interes con el banco de la re concha de tu madre.</p>
        </div>

        <div className='mt-12 sm:mt-0'>
          <div className='flex'>
            <UilUsdCircle color='var(--text-primary)' />
            <p className="text-[var(--text-primary)] ml-2 text-lg font-medium mb-3">Descuento en efectivo</p>
          </div>
          <p className="text-[var(--text-primary)]">Congelamos precios en pedidos con anticipación y hacemos descuento en efectivo!</p>
        </div>
      </div>

    </div>
  )
}
