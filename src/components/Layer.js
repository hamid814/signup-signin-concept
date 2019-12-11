import React, { useContext } from 'react'

import Context from '../context/Context'; 

import './layer.css';

const Layer = () => {
  const { state } = useContext(Context)

  const onbuttonClick = () => {
    console.log('button clicked')
  }

  return (
    <div id='layer'>
      <div className="background">

      </div>
      <button onClick={onbuttonClick}>
        { state }
      </button>
    </div>
  )
}

export default Layer
