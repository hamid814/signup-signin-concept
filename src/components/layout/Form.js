import React, { useState, useContext } from 'react'

import Social from './Social';
import SigninForm from '../signin/Form';

import Context from '../../context/Context';

import './styles/form.scss';

const Form = () => {
  const { state } = useContext(Context)

  return (
    <div id='form' className={`${state}`}>
      {
        SigninForm().header
      }
      <Social />
      {
        SigninForm().text
      }
    </div>
  )
}

export default Form
