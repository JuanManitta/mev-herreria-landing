import { FormControl, Input, Textarea } from '@chakra-ui/react'

export const FormContact = () => {


    
  return (
    <div className="bg-[color:#F1F0ED] p-12 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-2 text-center">Contanos tu idea</h2>
        <div className='flex justify-center'>
          <span>Contactanos cuando quieras</span>
        </div>
        <FormControl className='mt-12'>
          <div className='flex gap-2'>
            <div>
              <Input placeholder='Nombre' type="text" />
            </div>
            <div>
              <Input placeholder='Apellido' type="text" />
            </div>
          </div>
          <div className='mt-2'>
            <Input placeholder='Email' type="email" />
          </div>
          <div className='mt-2'>
            <Input placeholder='Telefono' type="number" />
          </div>
          <div className='mt-2'>
            <Textarea placeholder='Here is a sample placeholder' size='lg' />
          </div>
        </FormControl>
       </div>
  )
}
