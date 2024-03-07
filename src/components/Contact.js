import React from 'react'
import './styles/Contact.css'
import Heading from './heading'
import Button3D from './3dButton/3dbutton';

const Contact = () => {
    return (
        <section id='contact' className='contact-main-div'>
        <div className='contact-div'>
            <img className='contact-img' src='https://www.thegamestormstudios.com/wp-content/uploads/2021/03/3d-dhar-1-removebg-preview.png' alt=''/>
            <div className='contact-text'>
              <Heading heading="Talk With Us"  textColor="white" lineColor="white" />
              <p>If you are looking for any job opportunity or require to get in touch with our customer provider representative think free to reach out.</p>
              <Button3D />
            </div>
           
        </div>
        
        </section>
    )
}

export default Contact
