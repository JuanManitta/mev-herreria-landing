import { Navigate, Route, Routes } from "react-router"
import { About, Contact, Galery, Home, Products } from "../pages"
import { Layout } from "../Layout"
import { ChakraBaseProvider } from "@chakra-ui/react"
import { theme } from "../theme/theme"


export const AppRouter = () => {
  return (
    <ChakraBaseProvider theme={theme}>
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/galeria" element={<Galery />} />
          <Route path="/contacto" element={<Contact />} />
          {/* <Route path="/about" element={<About />} /> */}

          <Route path="/*" element={<Navigate to='/' />} /> 


      </Routes>
    </Layout>
    </ChakraBaseProvider>

  )
}
