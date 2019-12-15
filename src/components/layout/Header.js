import React, { useState } from 'react'

import './styles/header.scss';

const Header = () => {
  const [expand, setExpand] = useState(false)

  const onClick = () => {
    !expand && setExpand(true)
  }

  const onMouseLeave = () => {
    setExpand(false)
  }

  const onContactClick = () => {
    expand && window.open('https://myportfolio.com/')
  }

  const onSELECTOClick = () => {
    expand && window.open('https://selectoglobal.com/')
  }

  return (
    <div id='app-header' onClick={onClick} onMouseLeave={onMouseLeave} className={`${expand ? 'expand' : 'shrink'}`}>
      Idea from <br /> SELECTO
      <div className='circle-half-one'>
      
      </div>
      <div className='half-one-text' onClick={onContactClick}>
        Contect Me
      </div>
      <div className='circle-half-two'>
      
      </div>
      <div className='half-two-text' onClick={onSELECTOClick}>
        SELECTO
      </div>
    </div>
  )
}

export default Header
