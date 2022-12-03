import { Link, Outlet } from 'react-router-dom';
import '../components/Layout.css';
import logo from '../assets/logopizza.png'

export const Layout = () => {

  return(
    <>
    <div className='container-main'>
      <img src={logo} alt='Arepas Logo' />
      <nav>
        <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <span>|</span>
          <li>
            <Link to='/menu'> Menu </Link>
          </li>
          <span>|</span>
          <li>
            <Link to='/reserve'> Reservation </Link>
          </li>
          <span>|</span>
          <li>
            <Link to='/contact'> Contact </Link>
          </li>
        </ul>
      </nav>    
    </div>
        <div className='container-outlet'>
          <Outlet />  
        </div> 
    </>
  )
};