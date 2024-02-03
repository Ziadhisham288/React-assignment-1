import React from 'react'
import style from './footer.module.css'

export default function Footer() {
  
  return (
    <>
      <div className={` ${style.bg} footer text-center`}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <div className="social d-flex">
                <div>
                  <div classname="circle"><i className="fa-brands fa-facebook"/></div>
                  <div classname="circle"><i className="fa-brands fa-twitter" /></div>
                  <div classname="circle"><i className="fa-brands fa-linkedin" /></div>
                  <div classname="circle"><i class="fa-solid fa-globe"></i></div>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.footerCopyRight} py-3 w-100`}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  )


}
