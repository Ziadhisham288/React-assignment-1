import React from 'react'
import image from './assests/images/dev.svg'
import style from './home.module.css'

export default function Home() {
  return (
    <div className={`${style.bg} d-flex justify-content-center align-items-center vh-100`}>
      <div className="content container text-center">
        <img src={image} className={`${style.imageSize} mb-4`} alt="" />
        <h2 className={`${style.fontStyle} mb-4`}>START FRAMEWORK</h2>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
