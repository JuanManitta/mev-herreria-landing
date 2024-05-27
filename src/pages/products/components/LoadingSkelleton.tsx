import { Skeleton } from "@chakra-ui/react"

export const LoadingSkelleton = () => {
  return (
    <div className='pt-12 flex flex-col items-center'>
        <div className='sm:flex sm:flex-wrap grid gap-6 p-6'>
          <div className='flex flex-col gap-4'>
            <Skeleton className='' height='350px' width='100%' rounded='lg' />
            <Skeleton height='20px' width='120px' />
            <Skeleton height='30px' width='100%' />
            <Skeleton height='30px' width='100%' />
            <Skeleton height='60px' width='300px' rounded='xl' />
          </div>
          <div className='flex flex-col gap-4'>
            <Skeleton className='' height='350px' width='100%' rounded='lg' />
            <Skeleton height='20px' width='120px' />
            <Skeleton height='30px' width='100%' />
            <Skeleton height='30px' width='100%' />
            <Skeleton height='60px' width='300px' rounded='xl' />
          </div>
          <div className='flex flex-col gap-4'>
            <Skeleton className='' height='350px' width='100%' rounded='lg' />
            <Skeleton height='20px' width='120px' />
            <Skeleton height='30px' width='100%' />
            <Skeleton height='30px' width='100%' />
            <Skeleton height='60px' width='300px' rounded='xl' />
          </div>
         
        </div>   
      </div>
  )
}
