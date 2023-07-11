import React from 'react'
// import { Link } from 'react-router-dom'
import './Cardlist.css'

const Cardlist = ({img, link,status}) => {
  return (
   
          
     <div className='p'>
      
      <div className="p-browser">
        <div className='p-dots'>
            <div className="p-circle red"></div>
            <div className="p-circle yellow"></div>
            <div className="p-circle green"></div>
        </div>  
            <h3 className='p-title'>{status}</h3>
        </div>
        
        
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} alt="" className="p-img" />
         
      </a>

    </div>
  
   
  )
}

export default Cardlist