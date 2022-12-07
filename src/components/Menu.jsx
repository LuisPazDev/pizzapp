import { db } from '../components/Firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';

import '../components/Menu.css';


export const Menu = () => {
  const [ list, setList ] = useState([]);

  useEffect(() => {
    const q = query( collection( db, 'users'));
    onSnapshot( q, (querySnapshot) => {
      setList(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      )
    });
  },[]);

  console.log(setList)

  return(

  <div className='container-menu'>

  </div>
  )
};


