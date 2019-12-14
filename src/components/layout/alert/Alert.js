import React, { useContext } from 'react'

import Context from '../../../context/Context';

const Alert = () => {
  const { alertState } = useContext(Context)
  
  return (
    <div id='alert' className={`${alertState ? 'active' : 'deactive'}`}>
      this page is just a demo for design
      its not connected to any kind of backend
    </div>
  )
}

export default Alert
