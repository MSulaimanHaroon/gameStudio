import React from 'react'
import './styles/GlassDiv.css'
import ButtonAll from './Button'

const GlassDiv = (props) => {
  return (
    <div className='glasscard' style={{float:props.float}}>
      <h1>{props.heading}</h1>
      <p>{props.detail}</p>
      {/* <a href='#contact'>{props.externalLink}</a> */}
      {/* <ButtonAll /> */}
    </div>
  )
}
GlassDiv.defaultProps={
  heading:"hello",
  detail:"hello",
  externalLink:"hello"
}
export default GlassDiv
