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
  value: string;
};
export const ProductGrid = ({
  loading,
  products,
  selectedCategory,
  value,
}: Props) => {
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
    console.log(filteredProducts);
  }, [products, selectedCategory]);

  const lowercasedValue = value.toLowerCase();
  const filteredByValue = filteredProducts.filter((product) =>
    product.product_name.toLowerCase().includes(lowercasedValue)
  );

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
          {filteredByValue.length > 0 ? (
            filteredByValue.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <>
              <NotFoundProduct />
            </>
          )}
        </Box>
      )}
    </>
  );
};
