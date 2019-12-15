import React, { useState } from 'react'

import './styles/header.scss';

const Header = () => {
  const [expand, setExpand] = useState(false)

  const onClick = () => {
    // window.open('https://selectoglobal.com/')
    if(expand) {
      
    } else {
      setExpand(true)
    }
  }

  const onMouseLeave = () => {
    setExpand(false)
  }

  return (
    <div id='app-header' onClick={onClick} onMouseLeave={onMouseLeave} className={`${expand ? 'expand' : 'shrink'}`}>
      Idea from <br /> SELECTO
      <div className='circle-half-one'>
      
      </div>
      <div className='half-one-text'>
        Contect Me
      </div>
      <div className='circle-half-two'>
      
      </div>
      <div className='half-two-text'>
        SELECTO
      </div>
    </div>
  )
}

export default Header
