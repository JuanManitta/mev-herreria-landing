import { Skeleton } from "@chakra-ui/react"

export const LoadingSkelleton = () => {
  return (
    <div className='h-screen'>
        <Skeleton height='20px' width='80%' />
        <div className='flex flex-wrap gap-6 p-6'>
          <div className='flex flex-col gap-4'>
            <Skeleton className='' height='250px' width='200px' rounded='lg' />
            <Skeleton height='20px' width='80px' />
            <Skeleton height='20px' width='160px' />
            <Skeleton height='60px' width='150px' rounded='xl' />
          </div>
          <div className='flex flex-col gap-4'>
            <Skeleton className='' height='250px' width='200px' rounded='lg' />
            <Skeleton height='20px' width='80px' />
            <Skeleton height='20px' width='160px' />
            <Skeleton height='60px' width='150px' rounded='xl' />
          </div>
          <div className='flex flex-col gap-4'>
            <Skeleton className='' height='250px' width='200px' rounded='lg' />
            <Skeleton height='20px' width='80px' />
            <Skeleton height='20px' width='160px' />
            <Skeleton height='60px' width='150px' rounded='xl' />
          </div>
          <div className='flex flex-col gap-4'>
            <Skeleton className='' height='250px' width='200px' rounded='lg' />
            <Skeleton height='20px' width='80px' />
            <Skeleton height='20px' width='160px' />
            <Skeleton height='60px' width='150px' rounded='xl' />
          </div>
        </div>   
      </div>
  )
}
