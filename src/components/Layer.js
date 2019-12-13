import React, { useState, useEffect, useContext } from 'react'

import Context from '../context/Context'; 

import './layer.scss';

const Layer = () => {
  const { state, setState } = useContext(Context)

  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setAnimating(true)
    setTimeout(() => {
      setAnimating(false)
    }, 1000);
  }, [state])

  const onbuttonClick = () => {
    state === 'signin'
      ? setState('signup')
      : setState('signin')
  }

  return (
    <div id='layer' className={`${state} ${animating && `layer-${state}-anim`}`}>
      <div className='background'>
        <div className='content'>
          <div className='signin-area'>
            <h1>
              Welcome Back!
            </h1>
            <div className='text'>
              to keep connected with us please login with your personal info
            </div>
          </div>
          <div className='signup-area'>
            <h1>
              Hello, Friend!
            </h1>
            <div className='text'>
              enter your personal details and start journy with us
            </div>
          </div>
        </div>
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
  )
}

export default Layer
