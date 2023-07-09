import React from 'react'
import Cardlist from '../Cardlist/Cardlist'
import './Card.css'
import {cardlist} from '../../data'

const Card = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Projects</h1>
            <p className="pl-desc">This are some of the projects I have worked on</p>
        </div>
        <div className="pl-list">
            {cardlist.map((item) => ( <Cardlist key={item.id} img={item.img} link={item.link} status={item.status}/>))
           
}

        </div>
    </div>
  )
}

export default Card