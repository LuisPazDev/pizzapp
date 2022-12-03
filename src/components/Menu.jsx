import '../components/Menu.css';
import menu1 from '../assets/menu1.png';
import menu2 from '../assets/menu2.png';



export const Menu = () => {

  return(

  <div className='container-menu'>
    <div>
      <img className='img-menu2' src={menu1} alt="menu" />
    </div>
    <div>
      <img className='img-menu1' src={menu2} alt="menu2" />
    </div>
  </div>
  )
};