import React from 'react'

import './form.scss';

const SigninForm = () => {
  const header = <h1 className='form-title'>Create Account</h1>

  const text = <div className='form-desc'>or use your email for registration:</div>

  const nameInput = <div className='form-group'>
                      <span className='icon'>N</span>
                      <input type='text' placeholder='name'/>
                    </div>

  const emailInput = <div className='form-group'>
                      <span className='icon'>E</span>
                      <input type='text' placeholder='Emial'/>
                     </div>

  const passwordInput = <div className='form-group'>
                          <span className='icon'>P</span>
                          <input type='password' placeholder='password'/>
                        </div>

  const inputs = <div>
    { nameInput }
    { emailInput }
    { passwordInput }
  </div>

  return {
    header,
    text,
    inputs
  }
}

export default SigninForm
