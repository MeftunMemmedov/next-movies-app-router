import React from 'react'
import Link from 'next/link'
import SignInForm from '@/components/user/SignInForm'


export const metadata={
    title:'Movies | Sign-in'
}

const SignIn = () => {
   
    
  return (
    <main>
        <section className='h-screen '>
            <div className='container m-auto h-full flex justify-center items-center '>
                <div className='lg:w-2/5 md:w-1/2 w-full h-96'>                    
                    <SignInForm />
                    <p className='text-white text-center'>New to Movies? Then <Link href={'/sign-up'} className='text-orange-400'>Register</Link></p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default SignIn