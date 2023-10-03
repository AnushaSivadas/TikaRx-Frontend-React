import React, { useState } from 'react'
import "./Nav.css"
import { TbArrowBackUp } from 'react-icons/tb';
import { HiUserCircle } from 'react-icons/hi2';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { HiDocumentText } from 'react-icons/hi2';
import { IoDocumentAttach } from 'react-icons/io5';
import { IoLogOut } from 'react-icons/io5';
import { FaFax } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Title from '../Title/Title';

const Nav = () => {
  const [open,setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(prev=>!prev)
  }
  return (
    <>
    <nav>
      <div className='left-nav'>
        <div className='next-science'>
          <span className='backarrow'><TbArrowBackUp size={15} /></span>
            <span style={{ "font-weight": "600" }}>NEXT SCIENCE</span>
        </div>
        <ul id='left-nav' className={open ? "#left-nav active" : "#left-nav"}>
          <li className='username'>
            <span className='user'><HiUserCircle size={17} /></span>
            <span style={{ "font-weight": "400" }}>
              <u>Erica Fernandes</u>
            </span>
          </li>
          <li>
            <span>OCR Status:</span>
            <span className='dropbox'><TbTriangleInvertedFilled /></span>
          </li>
        </ul>
      </div>
      <div className='middle-nav'>
          FAX LIST
      </div>
      <div className='right-nav'>
        <ul id='right-nav' className={open ? "#right-nav active" : "#right-nav"}>
          <li>
            <a href='https://tikarxmanagement.netlify.app/dashboard' className='active'><FaFax size={15}/> Fax List</a>
          </li>
          <li>
            <a href='https://tikarxmanagement.netlify.app/dashboard'><HiDocumentText size={15}/> Rx Tracker List</a>
          </li>
          <li>
            <a href='https://tikarxmanagement.netlify.app/dashboard'><IoDocumentAttach size={15}/> Case Details</a>
          </li>
          <li>
            <a href="/" style={{"cursor":"pointer"}} ><IoLogOut size={15}/> Logout</a>
          </li>
        </ul>
        <div id='hamburger' onClick={handleOpen}>
          <span id='bar'>
            <GiHamburgerMenu /> 
          </span>
        </div>
        <span className='nav-title'><Title/></span>
      </div>
    </nav>
    </>
  )
}

export default Nav