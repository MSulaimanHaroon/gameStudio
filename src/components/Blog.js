import React from 'react'
import Heading from './heading'
import './styles/Blog.css'

const Blog = () => {
  return (
    <div id='blog' className='blog-main'>
      <Heading heading="Blog" textColor="black" lineColor="black" />
      <div className='blogs'>
        <div className="blog">
          <div className="circle-blog"></div>
          <div className="circle-blog"></div>
          <div className="blog-inner">
            <h2>6 tips to make a storm worthy game</h2>
            <p>By Jawad Amjad|August 16th, 2021|Categories: blogs</p>
            <a href='https://www.thegamestormstudios.com/6-tips-to-make-a-storm-worthy-game/'  className="cta">
              <span className="hover-underline-animation"> Read More </span>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
