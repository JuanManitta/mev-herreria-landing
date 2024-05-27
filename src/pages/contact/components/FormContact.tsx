import { Box, Button, FormControl, Input, Textarea } from "@chakra-ui/react";

export const FormContact = () => {
  return (
    <Box boxShadow="xl" className="bg-primary border p-6 sm:p-8 rounded-2xl">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center">
        Contanos tu idea
      </h2>
      <Box className="flex justify-center">
        <span className="text-sm sm:text-lg">Contactanos cuando quieras</span>
      </Box>
      <FormControl className="mt-12">
        <Box className="flex flex-col sm:flex-row gap-2">
          <Box>
            <Input placeholder="Nombre" type="text" />
          </Box>
          <Box>
            <Input placeholder="Apellido" type="text" />
          </Box>
        </Box>
        <Box className="mt-2">
          <Input placeholder="Email" type="email" />
        </Box>
        <Box className="mt-2">
          <Input placeholder="Telefono" type="number" />
        </Box>
        <Box className="mt-2">
          <Textarea placeholder="Here is a sample placeholder" size="lg" />
        </Box>
      </FormControl>
      <Button className="mt-8" variant="secondary" w="full">
        Enviar
      </Button>
    </Box>
  );
};
