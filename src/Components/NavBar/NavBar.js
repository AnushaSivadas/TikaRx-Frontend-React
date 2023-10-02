import React from 'react'
import "./NavBar.css"
import { TbArrowBackUp } from 'react-icons/tb';
import { HiUserCircle } from 'react-icons/hi2';
import { TbTriangleInvertedFilled } from 'react-icons/tb';



const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='left'>
                <div>
                    <span className='backarrow'><TbArrowBackUp /></span>
                    <span style={{ "font-weight": "600" }}>NEXT SCIENCE</span>
                </div>
                <div className='username'>
                    <div className='user'><HiUserCircle /></div>
                    <div style={{ "font-weight": "400"}}>
                        <u>Erica Fernandes</u>
                    </div>
                </div>
                <div>
                    <span>OCR Status:</span>
                    <span className='dropbox'><TbTriangleInvertedFilled/></span>
                </div>
            </div>
            <div className='middle'>
                middle
            </div>
            <div className='right'>
                right
            </div>
        </div>
    )
}

export default NavBar