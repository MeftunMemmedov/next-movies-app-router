import SignUpForm from '@/components/user/SignUpForm'
import React from 'react'

export const metadata={
    title:'Movies | Sign up'
}

const SignUp = () => {
   
  return (
    <div className='h-screen'>
        
      <div className='container h-full flex justify-center items-center'>        
        <SignUpForm />        
      </div>
      
    </div>
  )
}

export default SignUp
