"use client"
import React, { useEffect } from 'react'
import {useSession,signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'

const AuthBtn = () => {
    const {data:session}=useSession()
    const router=useRouter()
    useEffect(()=>{
      if(session?.accessToken){
        router.push("/home")
      }
    },[session,router])
  return (
    <div className='bg-[url("/images/bg2.png")] bg-center bg-cover h-screen w-screen flex justify-center items-center'>
      {session?.accessToken?(
        <p>...Navigating to the home page</p>
      ):(
<Button 
        className='bg-blue-700 text-blue-50 font-serif text-xl rounded-md mt-52'
        onClick={()=>signIn(undefined,{callbackUrl:"/home"})}>
            Sign in with Github
        </Button>
      )}
    </div>
  )
}

export default AuthBtn
