import Logo from '../../assets/project/logoSecundario.png'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const InnerLayout = () => {
 
  return (
    <section id='auth-section' className='auth-section'>
      <div className='flex flex-row'>
        <div className='layout-auth-image-bg'>
            <img src={Logo} alt="Logo Vanilla Leaks" title="Vanilla Leaks Porn Videos"/>
        </div>
        <div className='flex flex-col items-center justify-center w-1/2 gap-y-5'>
          <Outlet/>
          <Link to="/" className='border rounded-md p-2'>Return to main page</Link>
        </div>
        </div>
    </section>
  )
}


