import { useEffect, useState } from "react";

import { getCategories, getData } from "../../api";

import { Categories, Product } from "../../interfaces";

import { Filters } from "./components/Filters";
import { ProductGrid } from "./components/ProductGrid";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: products } = await getData();
      setProducts(products);

      const { data: categories } = await getCategories();
      setCategories(categories);

      setLoading(false);
    };
    fetchData();
  }, []);

  
  return (
    <main className="max-w-7xl min-h-[70vh] m-auto p-0 sm:px-6 py-14">
      <Filters
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid
        loading={loading}
        products={products}
        selectedCategory={selectedCategory}
      />
    </main>
  );
};
