import React from 'react'
import { Logo,LoginForm } from '../components'

const LoginPage = () => {
  return (
    <div className='font-inter flex flex-wrap-reverse mt-14 mx-7 gap-5 justify-around content-around'>
      <Logo></Logo>
      <LoginForm></LoginForm>
    </div>
  )
}

export default LoginPage