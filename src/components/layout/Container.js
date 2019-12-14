import React from 'react'

import Layer from './Layer';
import Form from './Form';

import './styles/container.scss';

const Container = () => {
  return (
    <>
      <div id='app-container'>
        <Layer />
        <Form />
      </div>
      <div className='back-circle'>
      
      </div>
      <div className='back-triangle'>
      
      </div>
    </>
  )
}

export default Container
