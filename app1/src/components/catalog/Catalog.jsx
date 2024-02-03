import React from 'react'
import image1 from './Assests/Images/port1.png'
import image2 from './Assests/Images/port2.png'
import image3 from './Assests/Images/port3.png'
import style from './catalog.module.css'

export default function Catalog() {


  return (
    <div className={`${style.portfolio}`}>
      <div className="header text-center">
        <h2 className={`${style.portfolioHeader}`}>PORTFOLIO COMPONENT</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className={`${style.card} col-md-4 p-3`}>
            <div className="image">
              <img src={image1} className='rounded-3 w-100' alt="" />
            </div>
          </div>
          <div className={`${style.card} col-md-4 p-3`}>
            <div className="image">
              <img src={image2} className='rounded-3 w-100' alt="" />
            </div>
          </div>
          <div className={`${style.card} col-md-4 p-3`}>
            <div className="image">
              <img src={image3} className='rounded-3 w-100' alt="" />
            </div>
          </div>
          <div className={`${style.card} col-md-4 p-3`}>
            <div className="image">
              <img src={image1} className='rounded-3 w-100' alt="" />
            </div>
          </div>
          <div className={`${style.card} col-md-4 p-3`}>
            <div className="image">
              <img src={image2} className='rounded-3 w-100' alt="" />
            </div>
          </div>
          <div className={`${style.card} col-md-4 p-3`}>
            <div className="image">
              <img src={image3} className='rounded-3 w-100' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
