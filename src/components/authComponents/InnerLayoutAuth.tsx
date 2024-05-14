import Logo from '../../assets/project/logoSecundario.png'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const InnerLayoutAuth = () => {
 
  return (
<section id='auth-section' className='auth-section'>
  <div className='flex flex-col lg:flex-row'>
    <div className='lg:w-1/2 hidden lg:block'> {/* Aquí agregamos la clase para ocultar en dispositivos móviles */}
      <div className='layout-auth-image-bg'>
        <img style={{width:"19rem"}} className="w-full" src={Logo} alt="Logo Vanilla Leaks" title="Vanilla Leaks free Porn Videos"/>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center lg:w-1/2 gap-y-5'>
      <Outlet/>
      <Link to="/" className='w-4subnav p-2 hover:text-pink-500'><i className="fa-solid fa-rotate-left mr-1"></i>Return to main page</Link>
    </div>
  </div>
</section>


  )
}


