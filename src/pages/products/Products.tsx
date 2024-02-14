import { useEffect, useState } from 'react';

import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, } from '@chakra-ui/react';

import { getCategories, getData } from '../../api';

import { LoadingSkelleton, ProductCard } from './components';
import { Categories, Product } from '../../interfaces';


export const Products = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categories[]>([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const { data: products } = await getData();
      setProducts(products);

      const { data: categories }   = await getCategories();
      setCategories(categories);

      setLoading(false);
      console.log(products, categories);
      
    };
    fetchData();
  }, []);



  return (
    <main className="max-w-7xl m-auto p-6 py-14">
      {loading ? (
        <LoadingSkelleton />
      ) : (
        <Tabs position="relative" variant='unestyled'>
          <TabList sx={{display:'flex', justifyContent:'center'}}>
            {categories.map(category => (
              <Tab key={category.id} className='font-semibold'>{category.category_name}</Tab>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="3px"
            bg="var(--bg-secondary)"
            borderRadius="5px"
          />
          <TabPanels className='p-6 '>
            {categories.map(category => (
              <TabPanel key={category.id} className='flex flex-wrap gap-3 justify-center'>
                {products
                  .filter(product => product.product_category === category.id)
                  .map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </main>
  )
}
