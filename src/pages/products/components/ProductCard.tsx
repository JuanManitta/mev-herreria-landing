import { Button, Card, CardBody, CardFooter, Stack, Text } from '@chakra-ui/react'
import { Product } from '../../../interfaces/mev-sheet'

interface ProductCardProps {
  product: Product;
}





export const ProductCard = ({ product }: ProductCardProps) => {

  
  return (
    <Card maxW='xs' sx={{ borderRadius:'12px', bg:'#F1F0ED'}} >
      <CardBody >
        <img className='rounded-lg' src={ product.product_img } alt="" />
        <Stack mt='6' spacing='3'>
          <span className='text-xl font-semibold'>{ product.product_name }</span>
          <Text>
            { product.product_description }
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant='primary' colorScheme='blue'>
          Consultar
        </Button>
      </CardFooter>
    </Card>
  )
}
