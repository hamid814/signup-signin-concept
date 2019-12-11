import React, { useContext } from 'react'

import Context from '../context/Context'; 

import './layer.css';

const Layer = () => {
  const { state, setState } = useContext(Context)

  const onbuttonClick = () => {
    state === 'signin'
      ? setState('signup')
      : setState('signin')
  }

  return (
    <div id='layer' className={`${state}`}>
      <div className={`background ${state}`}>
        <div className='shape triangle1'>

        </div>
        <div className='shape triangle2'>

        </div>
        <div className='shape circle'>

        </div>
        <div className='shape square'>

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
