import Logo from './assets/mev-logo.png'
import { Footer } from './components/Footer'

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <nav className="flex justify-around h-[110px] max-w-7xl m-auto">
        <div>
            <img className='w-[200px]' src={Logo} alt="" />
        </div>
        <div className='flex items-center'>
            <ul className="flex gap-6">
                <li className='font-semibold'>Productos</li>
                <li>Galeria</li>
                <li>Contacto</li>
                <li>About</li>
            </ul>
        </div>
    </nav>

    {children}
    <Footer/>
    </>
  )
}
