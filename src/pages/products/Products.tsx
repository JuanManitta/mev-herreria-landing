import { useEffect, useState } from 'react';


import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Stack, Button, Text } from '@chakra-ui/react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'

import { getData } from '../../api/mev-sheet-api';
import { Categories, Product } from '../../interfaces/mev-sheet';
// import img2 from '../galery/img/slide-2.jpg'
// import img3 from '../galery/img/slide-3.jpg'
// import img4 from '../galery/img/slide-4.jpg'





export const Products = () => {


  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categories>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const { data } = await getData();
      console.log(data);
      
      setProducts(data);
      setLoading(false)
      
      const categories: Categories = [];
      data.map( data => {
        const category = data.product_category;
        if (!categories.includes(category)){
          categories.push(category)
        }
      }) 
      setCategories(categories)
    };
    fetchData();
  }, []);



  return (
    <main className="max-w-7xl m-auto  p-6 py-12">

      { loading ? 'Loading..' : <Tabs position="relative" variant="unstyled ">
        <TabList>
          {categories.map( (category, index )=> (
            <Tab key={index} className='font-semibold'>{ category }</Tab>
          ))}
        
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="var(--bg-secondary)"
          borderRadius="5px"
        />
        <TabPanels>
          {/* <TabPanel>
            <div className="flex flex-wrap gap-6 ">
              {
                products.map( (product, index) => (
                  <Card key={ index } maxW='xs' sx={{ borderRadius:'12px', bg:'#F1F0ED'}} >
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
                ))
              }
            </div>
          </TabPanel>
             */}
          {
            categories.map( (category, index) => (
              <TabPanel key={ index } className='flex flex-wrap gap-6'>
                {products.map( product =>{
                  if(product.product_category === category){
                    return (
                      <Card key={ product.product_name } maxW='xs' sx={{ borderRadius:'12px', bg:'#F1F0ED'}} >
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
                    );
                  } else {
                    return null
                  }
                })}
              </TabPanel>
            ))
          }
        </TabPanels>
      </Tabs>}

    </main>
  )
}
