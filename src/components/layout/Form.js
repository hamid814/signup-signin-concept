import React, { useState, useContext } from 'react'

import Social from './Social';

import Context from '../../context/Context';

import './styles/form.scss';

const Form = () => {
  const { state } = useContext(Context)
  
  return (
    <div id='form' className={`${state}`}>
      <Social />
    </div>
  )
}

export default Form
