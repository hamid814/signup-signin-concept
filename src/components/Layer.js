import React, { useContext } from 'react'

import Context from '../context/Context'; 

import './layer.scss';

const Layer = () => {
  const { state, setState } = useContext(Context)

  const onbuttonClick = () => {
    state === 'signin'
      ? setState('signup')
      : setState('signin')
  }

  return (
    <div id='layer' className={`${state}`}>
      <div className='background'>
        <div className='shape circle'>

        </div>
        <div className='shape square'>
        
        </div>
        <div className='shape triangle'>
        
        </div>
        <div className='shape rectangle'>
        
        </div>
        <div className='shape square2'>
        
        </div>
        <div className='shape rectangle2'>
        
        </div>
        <div className='shape circle2'>
        
        </div>
        <div className='shape triangle2'>
        
        </div>
        <div className='shape triangle3'>
        
        </div>
        <div className='shape square3'>
        
        </div>
      </div>
      <div className='content'>
        <div className='signin-area'>
          <h1>
            Welcome Back!
          </h1>
        </div>
        <div className='signup-area'>
          <h1>
            Hello, Friend!
          </h1>
        </div>
        <button onClick={onbuttonClick} className={`${state}`}>
          {
            state === 'signin'
              && 'sign up'
          }
          {
            state === 'signup'
              && 'sign in'
          }
        </button>
      </div>
    </div>
  )
}

export default Layer
