import React from 'react'

import './form.scss';

const SigninForm = () => {
  const header = <h1>Create Account</h1>
  const text = <div>or use your email for registration:</div>

  return {
    header,
    text,
  }
}

export default SigninForm
