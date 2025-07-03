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
                        <p className="about__text p__color">A dedicated full stack developer with 3+ years of hands-on experience in building and maintaining web applications. Proficient in both front-end and back-end development, with a strong foundation in computer science principles. Specialized in WordPress and PHP development, including custom themes, plugin development, and API integrations. Skilled in using a variety of technologies including HTML, CSS, JavaScript, React, and PHP to build responsive, secure, and scalable websites. Able to work and learn effectively both independently and within agile teams to deliver robust, user-friendly CMS platforms.
                        </p>
                        {/* <p className="about__text p__color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem sit aut labore veritatis, cumque ipsam velit quae error, assumenda exercitationem ducimus earum quaerat magnam placeat corporis dicta tenetur iste.</p>
                        <p className="about__text p__color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem sit aut labore veritatis, cumque ipsam velit quae error, assumenda exercitationem ducimus earum quaerat magnam placeat corporis dicta tenetur iste.</p> */}
                        <div className="about__button d__text align__items__center">
                            <a href="https://www.slideshare.net/slideshow/fullstack-web-developer-omosebi-ebunoluwa/275497782"><button className="about btn pointer">Download CV</button></a>
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
