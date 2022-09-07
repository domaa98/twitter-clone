import React from 'react'
import Hashtag from './hashtag/Hashtag'
import './rightSide.css'
const RightSide = () => {
  return (
    <div className='rightSide'>
      <h2>What's happening</h2>
      <Hashtag title = '#Madrid' body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit error quos dolor consequatur. Recusandae nostrum rerum ducimus accusamus? Maxime!' />

      <Hashtag title = '#News' body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit error quos dolor consequatur. Recusandae nostrum rerum ducimus accusamus? Maxime!' />

      <Hashtag title = '#Football' body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit error quos dolor consequatur. Recusandae nostrum rerum ducimus accusamus? Maxime!' />

      <Hashtag title = '#Egypt' body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit error quos dolor consequatur. Recusandae nostrum rerum ducimus accusamus? Maxime!' />

      <Hashtag title = '#EL Ahly' body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit error quos dolor consequatur. Recusandae nostrum rerum ducimus accusamus? Maxime!' />

      <Hashtag title = '#Doma' body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit error quos dolor consequatur. Recusandae nostrum rerum ducimus accusamus? Maxime!' />
    </div>
  )
}

export default RightSide