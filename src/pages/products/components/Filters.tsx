import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search } from "lucide-react";
import { Categories } from "../../../interfaces";
import { useState } from "react";

type Props = {
  categories: Categories[];
  setSelectedCategory: (id: string) => void;
};

export const Filters = ({ categories, setSelectedCategory }: Props) => {
  const [categoryName, setCategoryName] = useState("Selecionar categoria");

  const handleSetCategory = (id: string) => {
    setSelectedCategory(id);
    if (id === "ALL") {
      setCategoryName("Todas las categorias");
      return;
    }

    const category = categories.find((category) => category.id === id);

    if (category) {
      setCategoryName(category.category_name);
    }
  };

  return (
    <Box
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      gap={2}
      justifyContent="space-between"
      my="6"
      p={{ base: "1rem", md: "0" }}
    >
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            variant="menu"
            rightIcon={<ChevronDownIcon />}
          >
            {categoryName}
          </MenuButton>
          {categories.length > 0 && (
            <MenuList zIndex='2'>
              {categories.map((category) => (
                <MenuItem
                
                  key={category.id}
                  onClick={() => handleSetCategory(category.id)}
                >
                  {category.category_name}
                </MenuItem>
              ))}
              <Divider my="2" color="gray.400" />
              <MenuItem onClick={() => handleSetCategory("ALL")}>
                Todas las categorias
              </MenuItem>
            </MenuList>
          )}
        </Menu>
      </Box>
      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search />
          </InputLeftElement>
          <Input type="tel" placeholder="Buscar producto" />
        </InputGroup>
      </Box>
    </Box>
  );
};
