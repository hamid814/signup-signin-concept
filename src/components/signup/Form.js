import React from 'react'

import '../signin/form.scss';

const SigninForm = () => {
  const header = <h1 className='form-title'>Sign in to Diprella</h1>

  const text = <div className='form-desc'>or use your email account:</div>

  const emailInput = <div className='form-group'>
                      <span className='icon'><i className='fa fa-envelope-o'></i></span>
                      <input type='text' placeholder='Email' readOnly />
                     </div>

  const passwordInput = <div className='form-group'>
                          <span className='icon'><i className='fa fa-lock'></i></span>
                          <input type='password' placeholder='password' readOnly />
                        </div>

  const inputs = <div>
    { emailInput }
    { passwordInput }
  </div>

  const buttonText = <div>SIGN IN</div>

  return {
    header,
    text,
    inputs,
    buttonText
  }
}

export default SigninForm
