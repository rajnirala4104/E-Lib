import React from 'react'
import { Login, Signup } from '../components'
import { AppState } from '../context/AppContext'

export const LoginAndSignup = () => {

  const { loginDesign } = AppState()

  return (
    <>
      {!loginDesign ? <Login /> : <Signup />}

    </>
  )
}
