import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)


  const baseStyle = definePartsStyle({
    // define the part you're going to style
    field: {
      fontFamily: 'Poppins', // change the font family
      padding: '0.5rem', // change the padding
      borderRadius: 'xl', // change the border radius
      width: '100%', // change the width
      bg: '#F1F0ED',
      border: '2px solid var(--bg-primary)',
      _focus: { 
        outlineColor: 'var(--bg-primary)', // change the focus color
      }
    },
  })
  

export const inputTheme = defineMultiStyleConfig({ baseStyle })
