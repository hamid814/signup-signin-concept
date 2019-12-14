import React from 'react'

import './styles/header.scss';

const Header = () => {
  const onClick = () => {
    window.open('https://selectoglobal.com/')
  }

  return (
    <div id='app-header' onClick={onClick}>
      Idea from <br /> SELECTO
      <div className="circle">
      
      </div>
    </div>
  )
}

export default Header
