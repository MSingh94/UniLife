import React from 'react'
import "./Header.css"
import { MdOutlineHolidayVillage } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai"
import { BsEnvelope} from "react-icons/bs"

function Header() {
  return (
    <div className='header-container'>
      <div className="logo-container">
      <MdOutlineHolidayVillage className='icon'/>
      <h3 className='logo'>UniLife</h3>
      </div>
      <div className="text-container">
        <AiOutlineHeart style={{marginRight:"5px"}}/>
        <p>Shortlist</p>
        <BsEnvelope style={{marginRight:"5px" , marginLeft:"25px"}}/>
        <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Header
