import { Box } from "@chakra-ui/react";
import { LoadingSkelleton } from "./LoadingSkelleton";
import { ProductCard } from "./ProductCard";
import { Product } from "../../../interfaces";
import { useEffect, useState } from "react";
import { NotFoundProduct } from "./NotFoundProduct";

type Props = {
  loading: boolean;
  products: Product[];
  selectedCategory: string;
};
export const ProductGrid = ({ loading, products, selectedCategory }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (selectedCategory === "ALL") {
      setFilteredProducts(products);
      return;
    }
    const filteredProducts = products.filter(
      (product) => product.product_category === selectedCategory
    );
    setFilteredProducts(filteredProducts);
  }, [products, selectedCategory]);

  return (
    <>
      {loading ? (
        <LoadingSkelleton />
      ) : (
        <Box
          display="flex"
          justifyContent={{ base: "center", md: "flex-start" }}
          flexWrap="wrap"
          gap="4"
          p={{ base: "1rem", md: "0" }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <NotFoundProduct />
          )}
        </Box>
      )}
    </>
  );
};
