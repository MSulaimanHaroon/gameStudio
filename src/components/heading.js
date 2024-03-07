import React from 'react'
import './styles/heading.css'

const Heading = (props) => {
  return (
    <div className='heading-main' style={{color:props.textColor, fontSize:props.size}}>
      <h1>
        {props.heading}
      </h1>
      <hr className='line' style={{borderColor:props.lineColor}}></hr>
    </div>
  )
}
Heading.defaultProps={
  heading:"hello",
  color:"white"
}

export default Heading
