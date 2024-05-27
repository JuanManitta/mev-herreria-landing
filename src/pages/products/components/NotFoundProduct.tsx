import { Box, Text } from "@chakra-ui/react";

export const NotFoundProduct = () => {
  return (
    <Box
      className="h-[200px]"
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text as="span" fontSize="2xl" fontWeight="bold">
        No se encontraron productos en esta categoria
      </Text>
    </Box>
  );
};
