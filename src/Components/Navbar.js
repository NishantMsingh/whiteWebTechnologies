import React, { useState } from 'react'
import { SiWindows11 } from 'react-icons/si';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import "./Main.css"
const Navbar = (props) => {
    const [menu,setMenu]=useState(false);
    const MenuHandler=()=>{
        if(window.innerWidth<=768)
        {
            setMenu(!menu);
        }
    }
  return (
    <nav id='navbar' className='d-flex'>
              <div id='title-hamburger' className='d-flex'>
                 <span id="title" className='display-2'>W</span>
                 <span onClick={MenuHandler} id='hamburger' className='pointer'><SiWindows11 fontSize={"1.3rem"} /></span>
              </div>
              <ul className={menu===true?"menu-list menu-left":"menu-list"} >
                <li><a className='cancel' onClick={MenuHandler} ><RxCross2 color='white' fontSize={"1.3rem"}/></a></li>
                <li><a href="/" className={props.mod===true?"text-light":"text-dark"}>Home</a></li>
                <li><a href="/" className={props.mod===true?"text-light":"text-dark"}>About me</a></li>
                <li><a href="/" className={props.mod===true?"text-light":"text-dark"}>Works</a></li>
                <li><a href="/" className={props.mod===true?"text-light":"text-dark"}>Contact</a></li>
                <li><a href="/" className={props.mod===true?"text-light":"text-dark"}>Services</a></li>
                <div id='transition' className='dark-mode'> <button className={props.mod===false?"dark-mode-btn left-dark-mode" :"dark-mode-btn"} onClick={props.mode}>{props.mod===false?<BsFillSunFill fontSize={".8rem"}/>:<BsFillMoonStarsFill fontSize={".8rem"}/>}</button></div>
              </ul>
    </nav>
  )
}
export default Navbar
