import React from 'react'

import './form.scss';

const SigninForm = () => {
  const header = <h1 className='form-title'>Create Account</h1>

  const text = <div className='form-desc'>or use your email for registration:</div>

  const nameInput = <div className='form-group'>
                      <span className='icon'><i className='fa fa-user-o'></i></span>
                      <input type='text' placeholder='name' readOnly />
                    </div>

  const emailInput = <div className='form-group'>
                      <span className='icon'><i className='fa fa-envelope-o'></i></span>
                      <input type='text' placeholder='Email' readOnly />
                     </div>

  const passwordInput = <div className='form-group'>
                          <span className='icon'><i className='fa fa-lock'></i></span>
                          <input type='password' placeholder='password' readOnly />
                        </div>

  const inputs = <div>
    { nameInput }
    { emailInput }
    { passwordInput }
  </div>

  const buttonText = <div>SIGN UP</div>

  return {
    header,
    text,
    inputs,
    buttonText
  }
}

export default SigninForm
