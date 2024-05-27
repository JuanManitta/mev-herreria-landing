import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)


  const baseStyle = definePartsStyle({
    // define the part you're going to style
    
    field: {
      fontFamily: 'Poppins',
      padding:'0.6rem', // change the font family
      paddingLeft:'3rem', // change the padding
      borderRadius: '10px', // change the border radius
      width: '100%', // change the width
      bg: 'var(--bg-primary)', // change the background color
      border: '1px solid',
      borderColor: '#61606252', // change the border color
      _focus: { 
        outlineColor: 'var(--bg-primary)', // change the focus color
      },
      _placeholder: {
        color: 'teal.400', // change the placeholder color
      },
    },
    element:{
      color: '#61606252',
      padding: '0.6rem 1rem',
      fontWeight: '500',
      transition: '0.2s',
      _hover: {
        backgroundColor: 'gray',
        transition: '0.2s',
        color: 'var(--bg-primary)'
      }
    }

  })
  

export const inputTheme = defineMultiStyleConfig({ baseStyle })
