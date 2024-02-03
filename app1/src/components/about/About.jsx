import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import style from './about.module.css'

export default function About() {


    return (
        <div className={`${style.bg} d-flex justify-content-center align-items-center vh-100`}>
            <div className="content container">
                <div className="header text-center">
                    <h2 className={style.headerh1}>ABOUT COMPONENT</h2>
                </div>
                <div className="text d-flex px-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    )
}
