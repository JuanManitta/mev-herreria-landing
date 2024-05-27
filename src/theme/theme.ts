
import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
import { globalProps } from './globalTheme'
import { inputTheme, menuTheme } from '.'

const { Form, Spinner, Tabs, Card, Divider, Skeleton } = chakraTheme.components


export const theme = extendBaseTheme({
  styles: {
    global: globalProps
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '10px',
        padding: '8px 1rem',
        fontWeight: 'bold',
      },
      variants: {
        primary: {
          backgroundColor: 'var(--bg-terciary)',
          color: 'white',
          _hover: {
            backgroundColor: 'gray',
            transition: '0.2s',
            color: 'var(--bg-secondary)'
          }
        },
        secondary: {
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-secondary)',
          _hover: {
            backgroundColor: 'gray',
            transition: '0.2s',
            color: 'var(--text-primary)'
          }
        },
        menu: {
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid',
          borderColor: '#61606252',
          color: 'var(--text-secondary)',
          padding: '0.6rem 1rem',
          fontWeight: '500',
          transition: '0.2s',
          _hover: {
            backgroundColor: '#61606252',
            transition: '0.2s',
            color: 'var(--bg-secondary)',
            border: 'none',
            borderColor: '#61606252',
          }
        }
      }
    },
    Spinner,
    Card,
    Form,
    Tabs,
    Divider,
    Skeleton,

    Menu: menuTheme,
    Input: inputTheme,
    Textarea: {
      baseStyle: {
        fontFamily: 'Poppins',
        padding: '2rem',
        borderRadius: 'xl',
        width: '100%',
        bg: 'var(--bg-primary)',
        border: '1px solid #61606252',
        _focus: {
          outlineColor: 'var(--bg-primary)',
        }
      }
    }
  },
})

