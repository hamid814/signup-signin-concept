import React, { useState, useEffect, useContext } from 'react'

import Context from '../../context/Context'; 

import './styles/layer.scss';

const Layer = () => {
  const { state, setState } = useContext(Context)

  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setAnimating(true)
    setTimeout(() => {
      setAnimating(false)
    }, 1000);
  }, [state])

  const onButtonClick = () => {
    if(!animating) {
      state === 'signin'
        ? setState('signup')
        : setState('signin')
    }
  }

  return (
    <div id='layer' className={`${state} ${animating && `layer-${state}-anim`}`}>
      <div className='background'>
        <div className='content'>
          <div className={`signin-area ${state === 'signin' && 'active'}`}>
            <h1>
              Hello, Friend!
            </h1>
            <div className='text'>
              enter your personal details and start journy with us
            </div>
          </div>
          <div className={`signup-area ${state === 'signup' && 'active'}`}>
            <h1>
              Welcome Back!
            </h1>
            <div className='text'>
              to keep connected with us please login with your personal info
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
      <button onClick={onButtonClick} className={`${animating && `button-${state}-anim`}`}>
        <div className={`text ${state}`}>
          <div className='signin-text'>
            sign in
          </div>
          <div className='signup-text'>
            sign up
          </div>
        </div>
      </button>
    </div>
  )
}

export default Layer
