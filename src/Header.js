import React, { useContext } from 'react'
import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa'
import DataContext from './context/DataContext'
import useWindowSize from './hooks/useWindowSize'

const Header = ({title}) => {

  const {width}=useWindowSize();

  return (

    <header className='Header'>
        <h1>{title}</h1>
        {
          width < 768 ? <FaMobileAlt/>
          :width < 922? <FaTabletAlt/>
          : <FaLaptop/>
        }
    </header>
  )
}

export default Header