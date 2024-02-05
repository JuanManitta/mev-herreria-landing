import { useLocation, useNavigate } from 'react-router'
import Logo from './assets/mev-logo.png'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Armchair, Image, Mail, MenuIcon, PersonStanding } from 'lucide-react';

type LayoutProps = {
    children: React.ReactNode
};
const menu = [
    {
        name: 'Productos',
        url: '/productos',
        icon: <Armchair size={20} />
    },
    {
        name: 'Galeria',
        url: '/galeria',
        icon: <Image size={20} />
    },
    {
        name: 'Contacto',
        url: '/contacto',
        icon: <Mail size={20} />
    },
    {
        name: 'About',
        url: '/about',
        icon: <PersonStanding size={20} />
    }
];


export const Layout = ( {children}: LayoutProps ) => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;            
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    
    
  return (
    <>
    <nav className={` h-[60px] sticky top-0 ${scrolled ? 'bg-[color:var(--bg-primary)] z-50 shadow-lg' : ''}`}>

        <div className='max-w-7xl m-auto flex justify-between sm:justify-around px-6 sm:p-0'>

            <div className='sm:hidden flex items-center'>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<MenuIcon />}
                    variant='outline'
                  />
                  <MenuList>
                    {menu.map((item, index) => (
                        <MenuItem 
                            key={index} 
                            onClick={() => navigate(item.url)} 
                            icon={item.icon}
                        >
                            {item.name}
                        </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
            </div>

            <div>
                <img onClick={() => navigate('/')} 
                className={`${scrolled ? 'w-[120px]' :'w-[200px]'} cursor-pointer' transition-all`} 
                src={Logo} alt="" />
            </div>

            <div className='sm:flex items-center hidden'>
                <ul className="flex gap-6">
                    {menu.map((item, index) => (
                        <li 
                            key={index} 
                            onClick={() => navigate(item.url)} 
                            className={`cursor-pointer ${pathname === item.url 
                                ? 'font-semibold' 
                                : ''} hover:font-semibold transition duration-300`
                            }>
                                {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </nav>

        {children}

    <Footer/>
    </>
  )
}
