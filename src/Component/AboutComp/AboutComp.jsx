import React from 'react'
import './AboutComp.css'
import img1 from '../../images/pandas.jpg'
import {Link} from 'react-router-dom'


function AboutComp() {
  return (
    <div className='about component__space' id='About'>
        <div className="container">
            <div className="row">
                <div className="col__2">
                    <img src={img1} alt="img1"  className='about__img'/>

                </div>
                <div className="col__2">
                    <h1 className="about__heading" >About Me</h1>
                    <div className="about__meta">
                        <p className="about__text p__color">A full stack developer with experience of building and
                            maintaining web applications. Proficient in both front-end and
                            back-end development, with a strong foundation in computer
                            science principles. Skilled in utilizing a variety of programming
                            languages and frameworks, including HTML, CSS, JavaScript,
                            React, PHP. Able to work and learn in both team and individual
                            settings.</p>
                        {/* <p className="about__text p__color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem sit aut labore veritatis, cumque ipsam velit quae error, assumenda exercitationem ducimus earum quaerat magnam placeat corporis dicta tenetur iste.</p>
                        <p className="about__text p__color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem sit aut labore veritatis, cumque ipsam velit quae error, assumenda exercitationem ducimus earum quaerat magnam placeat corporis dicta tenetur iste.</p> */}
                        <div className="about__button d__text align__items__center">
                            <a href="https://www.slideshare.net/EbunoluwaOmosebi/ebunoluwapdf"><button className="about btn pointer">Download CV</button></a>
                            <a href="mailto:ebunoluwaomosebi007@gmail.com"><button className="about btn pointer">Hire me</button></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutComp