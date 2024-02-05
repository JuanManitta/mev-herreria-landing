
import { extendBaseTheme, theme as chakraTheme, } from '@chakra-ui/react'
  
const { Menu } = chakraTheme.components
  
  
  
  export const theme = extendBaseTheme({
    styles:{
      global:{
        body:{
          bg:'var(--bg-primary)',
          fontFamily:'var(--font-primary)',
        }
      }
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
      Menu,
    },
  })
  