import React, { useState, useEffect, useContext } from 'react'

import Social from './Social';
import SigninForm from '../signin/Form';
import SignupForm from '../signup/Form';

import Context from '../../context/Context';

import './styles/form.scss';

const Form = () => {
  const { state } = useContext(Context)

  const [FormData, setFormData] = useState(SignupForm())

  useEffect(() => {
    let data;
    
    if(state === 'signin') {
      data = SignupForm()
    } else {
      data = SigninForm()
    }

    setTimeout(() => {
      setFormData(data)
    }, 500);
  }, [state])

  return (
    <div id='form' className={`${state}`}>
      {
        FormData.header
      }
      <Social />
      {
        FormData.text
      }
      {
        FormData.inputs
      }
      <button>
        {
          FormData.buttonText
        }
      </button>
    </div>
  )
}

export default Form
