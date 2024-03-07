import React from 'react'
import Heading from './heading'
import GlassDiv from './GlassDiv'
import './styles/Aboutus.css'

const AboutUs = () => {
    return (
        <section id='aboutus' className='About-main'>
            <Heading heading="About Us" textColor="white" lineColor="white" />
            <p className='info'>The Game Storm Studios, a Top Game Development Company is dedicated to giving brilliance to our clients and players by fulfilling their needs about the best mobile games. We even offer customized services to develop mobile applications and mobile games on platforms including iOS and Android.</p>
            <div className='glassdivs'> 
            <GlassDiv
                heading="Who We Are?"
                detail="Recognized globally as one of the Best Game Development agencies powered by Google. With multiple featuring by Google Play and other android stores, we have successfully conducted over one billion downloads across the globe. We outshine in developing mobile games with custom build development services for Android, iOS, artificial intelligence, augmented reality, and virtual reality." />
            <GlassDiv
                heading="Our Specifications:"
                detail="Game Storm Studios is one of the largest game development companies in Pakistan with over a decade of experience in the industry. Established in 2013, the company has grown to have a team of 300 employees, with physical offices located in Lahore, Karachi, the United States, and the United Arab Emirates." />
        </div>
        </section>
    )
}

export default AboutUs
