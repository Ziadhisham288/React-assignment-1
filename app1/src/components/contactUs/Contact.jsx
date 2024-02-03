import React from 'react'
import style from './contact.module.css'

export default function Contact() {
  return (
    <div className={`${style.contact} d-flex justify-content-center align-items-center`}>
      <div className="container">
        <div className="header text-center">
          <h2 className={`${style.contactHeader}`}>CONTACT COMPONENT</h2>
        </div>
        <div className={`${style.form}`}>
          <input className='form-control mb-4 p-2' type="text" placeholder='userName' />
          <input className='form-control mb-4 p-2' type="text" placeholder='userAge' />
          <input className='form-control mb-4 p-2' type="text" placeholder='userEmail' />
          <input className='form-control mb-4 p-2' type="text" placeholder='userPassword' />
          <button className={`${style.submitButton}`}>send message</button>
        </div>
      </div>
    </div>
  )
}
