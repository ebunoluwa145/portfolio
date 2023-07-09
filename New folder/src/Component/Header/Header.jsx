import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='hero-container'>
        <div className="home__content">
            <div className='home__meta'>
                <h1 className='home__text pz__10'>Hi, i am Ebunoluwa</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Frontend developer</div>
                        <div className='i-title-item'>Backend developer</div>
                        
                        
                    </div>
                </div>
                {/* <h4 className='home__text pz_10'>Based in Ibadan</h4> */}
            </div>
            

        </div>

    </div>
  )
}

export default Header