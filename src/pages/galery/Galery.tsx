import { useEffect, useState } from "react";
import { Spinner } from '@chakra-ui/react'




export const Galery = () => {
  const [imgList, setImgList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImageList = async () => {
      setLoading(true);
      const imageQuantity = 14;
      const imports = [];

      for (let i = 1; i <= imageQuantity; i++) {
        imports.push(import(`./img/slide-${i}.jpg`));
      }
      const loadedImages = await Promise.all(imports);
      const urls = loadedImages.map(module => module.default);
      setImgList(urls);
      setLoading(false);
    };

    loadImageList();
  }, []);



  return (
    <main className="max-w-7xl m-auto py-10">
      <h1 className="">hola</h1>
      { loading ? 
      <div className="h-[calc(100vh-140px)] flex items-center justify-center"> 
        <Spinner thickness='5px' size='xl' speed='1s' emptyColor='#F1F0ED' color='var(--bg-secondary)'/> 
      </div> :

      <section className="p-6 py-12 flex flex-wrap ">
      {imgList.map((img, index) => (
        <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 p-2 ">
          <img src={img} alt="img" className="w-full h-full object-cover rounded-xl "/>
        </div>
      ))}
      </section> 
      }
    </main>
  )
}
