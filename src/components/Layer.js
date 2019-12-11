import React, { useContext } from 'react'

import Context from '../context/Context'; 

import './layer.css';

const Layer = () => {
  const { state } = useContext(Context)

  const onbuttonClick = () => {
    console.log('button clicked')
  }

  return (
    <div id='layer' className={`${state}`}>
      <div className={`background ${state}`}>

      </div>
      <button onClick={onbuttonClick} className={`${state}`}>
        { state }
      </button>
    </div>
  )
}

export default Layer
