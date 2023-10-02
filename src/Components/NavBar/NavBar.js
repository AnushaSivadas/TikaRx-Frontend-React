import React from 'react'
import { useState } from 'react';
import "./NavBar.css"
import { TbArrowBackUp } from 'react-icons/tb';
import { HiUserCircle } from 'react-icons/hi2';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { HiDocumentText } from 'react-icons/hi2';
import { IoDocumentAttach } from 'react-icons/io5';
import { IoLogOut } from 'react-icons/io5';
import { FaFax } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Title from '../Title/Title';
import { useNavigate } from "react-router-dom";



const NavBar = () => {
  const navigate = useNavigate();
    
  const [opens, setOpens] = useState(true);
  const openham=()=>{
    setOpens((prev)=>!prev);
  }

    return (
        <div className='navbar'>
            <div className='left'>
                <div>
                    <span className='backarrow'><TbArrowBackUp size={15} /></span>
                    <span style={{ "font-weight": "600" }}>NEXT SCIENCE</span>
                </div>
                <div className='username'>
                    <span className='user'><HiUserCircle size={15} /></span>
                    <span style={{ "font-weight": "400" }}>
                        <u>Erica Fernandes</u>
                    </span>
                </div>
                <div>
                    <span>OCR Status:</span>
                    <span className='dropbox'><TbTriangleInvertedFilled /></span>
                </div>
            </div>
            <div className='middle'>
                FAX LIST
            </div>
            <div className='right'>
                
                <div className='r1'>
                    <div className='faxlist'>
                        <FaFax size={15} />
                        <span>Fax List</span>
                    </div>
                    <div>
                        <HiDocumentText size={16} />
                        <span>Rx Tracker List</span>
                    </div>
                    <div>
                        <IoDocumentAttach size={15} />
                        <span>Case Details</span>
                    </div>
                    <div style={{"cursor":"pointer"}} onClick={ ()=>navigate('/')}>
                        <IoLogOut size={15} />
                        <span >Logout</span>
                    </div>
                    
                </div>
                <div className='menu' id='menu-icon' onClick={openham}><GiHamburgerMenu /></div>
                <div className='nav-title'><Title /></div>
            </div>
        </div>
    )
}

export default NavBar