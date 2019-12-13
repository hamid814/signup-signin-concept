import React, { useContext } from 'react'

import Layer from '../Layer';

import Context from '../../context/Context';

import './container.scss';

const Container = () => {
  const { state } = useContext(Context)

  return (
    <>
      <div id='app-container'>
        <Layer />
      </div>
      <div className={`back-circle ${state === 'signin' ? 'red' : 'yellow'}`}>
      
      </div>
      <div className={`back-triangle ${state === 'signin' ? 'red' : 'yellow'}`}>
      
      </div>
    </>
  )
}

export default Container
