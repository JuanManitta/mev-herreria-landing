
import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers,  } from '@chakra-ui/react'


const { definePartsStyle, defineMultiStyleConfig } =
createMultiStyleConfigHelpers(menuAnatomy.keys)
  

const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: 'medium',
    bg: 'teal.500',
    color: '',
    _hover: {
      bg: 'teal.600',
      color: 'white',
    },
  },
  list: {
    // this will style the MenuList component
    pr: '12',
    py: '6',
    pl:'2',
    borderRadius: 'xl',
    border: 'none',
    bg: '#F1F0ED',
    shadow: 'lg',
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: 'var(--bg-secondary)',
    p: '1.5',
    _hover: {
      fontWeight: 'bold',
      transition: '0.2s',
    }
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7',
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: '0.8',
    fontFamily: 'mono',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    pl: '4',
  },
  divider: {
    // this will style the MenuDivider component
    my: '4',
    borderColor: 'white',
    borderBottom: '2px dotted',
  },
})

export const menuTheme = defineMultiStyleConfig({baseStyle})