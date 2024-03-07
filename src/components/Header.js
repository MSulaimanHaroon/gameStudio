import React from 'react'
import videoBg from './assets/videoBg.mp4'
import './styles/video.css'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='Header'>
        <div className="overlay"><Navbar/></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h3><span style={{color:"#ff0005"}}> Innovation </span>Through Empowerment.</h3>
        </div>
    </div>
  )
}

export default Header