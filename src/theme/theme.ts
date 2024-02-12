
import { extendBaseTheme, theme as chakraTheme,  } from '@chakra-ui/react';
import { globalProps } from './globalTheme'
import { inputTheme, menuTheme } from '.'

const { Form, Spinner, Tabs, Card, Divider, Skeleton } = chakraTheme.components

  
  export const theme = extendBaseTheme({
    styles:{
      global: globalProps
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: '12px',
          padding: '14px 1.5rem',
          fontWeight:'bold',
        },
        variants:{
            primary:{
                backgroundColor: 'var(--bg-secondary)',
                color:'white',
                _hover:{
                    backgroundColor: 'gray',
                    transition:'0.2s',
                    color:'var(--bg-secondary)'
                }
            },
            secondary:{
              backgroundColor: 'var(--bg-primary)',
              _hover:{
                backgroundColor: 'gray',
                transition:'0.2s',
                color:'var(--text-primary)'
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
      Textarea:{
        baseStyle:{
          fontFamily: 'Poppins',
          padding: '2rem',
          borderRadius: 'xl',
          width: '100%',
          bg: '#F1F0ED',
          border: '2px solid var(--bg-primary)',
          _focus: { 
            outlineColor: 'var(--bg-primary)',
          }
        }
      }
    },
  })
  
