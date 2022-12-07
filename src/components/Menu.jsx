import { db } from '../components/Firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import '../components/Menu.css';


export const Menu = () => {
  const [ list, setList ] = useState([]);

  useEffect(() => {
    const q = query( collection( db, 'menu'));
    onSnapshot( q, (querySnapshot) => {
      setList(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      )
    });
  },[]);

  return(

  <div className='container-menu'>
    {
      list.map((item) => (
        <div>
            <img className='menu-img' src={item.data.img} alt="pizza" />
            <div className='container-menu-text'>
              <p className='p-menu-title'>{item.data.name}</p>
              <p className='p-menu-price'>{item.data.price}</p>
            </div>
        </div>
      ))
    }
  </div>
  )
};


