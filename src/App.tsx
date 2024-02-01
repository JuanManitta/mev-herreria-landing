import { useEffect, useState } from "react";
import Papa from 'papaparse';

type Product = {
  product_category: string;
  product_description: string;
  product_img: string;
  product_name: string;
}

async function getData() {
  const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSRmbOSt1vDkrvj1_Cu9mw2mUGEkMiFx__KDqeFAN65UJQC6WnIpIjSwJIFgAcC0dYyg-4tBRA2QciU/pub?gid=0&single=true&output=csv');
  const data = await response.text();
  const parsedData = Papa.parse<Product>(data, { header: true });

  return parsedData;
}

export default function App() {
  const [products, setProducts] = useState<Papa.ParseResult<Product>>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProducts(data);
      console.log(data);
      
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {!products ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.data.map((product) => (
            <li key={product.product_name}>
              {product.product_name}
              <div>
                <img className="w-20" src={product.product_img} alt="" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
