import React  from 'react'
import './Navbar.css'
import {GiMuscleUp} from 'react-icons/gi'
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar() {
 
  return (
  <section className="navbar" id="navbar">
  <div className="nav__title">
    <span className="nav__icons"><GiMuscleUp/></span>
   <span className="nav__name">Ubiff Pro</span>
   </div>

   <div className="nav__options">
    <ul className="nav__links">
        <li className="nav__items">
           <a href="#"> Home</a>
        </li>

        <li className="nav__items">
        <a href="#program"> Program</a>
        </li>

        <li className="nav__items">
        <a href="#choose"> Choose Us</a>
        </li>

        <li className="nav__items">
        <a href="#plans"> Plans</a>
        </li>

       <button className='nav__btn'> <a href="#contact">Contact Now</a></button>
    </ul>

  
</div>
<GiHamburgerMenu className='nav__icon2' />
  

  </section>
  )
}

export default Navbar
