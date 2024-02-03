import { useLocation, useNavigate } from 'react-router'
import Logo from './assets/mev-logo.png'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react';

type LayoutProps = {
    children: React.ReactNode
};
const menu = [
    {
        name: 'Productos',
        url: '/productos'
    },
    {
        name: 'Galeria',
        url: '/galeria'
    },
    {
        name: 'Contacto',
        url: '/contacto'
    },
    {
        name: 'About',
        url: '/about'
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

        <div className='max-w-7xl m-auto flex justify-around'>

            <div>
                <img onClick={() => navigate('/')} 
                className={`${scrolled ? 'w-[120px]' :'w-[200px]'} cursor-pointer' transition-all`} 
                src={Logo} alt="" />
            </div>

            <div className='flex items-center'>
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
