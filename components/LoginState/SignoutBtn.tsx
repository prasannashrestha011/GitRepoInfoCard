"use client"
import React from 'react'
import {signOut} from 'next-auth/react'
import { Button } from '@nextui-org/react'
const SignoutBtn = () => {
  return (
    <Button 
    className='bg-red-700 text-blue-50  text-medium w-24 rounded-md h-10 hover:bg-red-500'
    onClick={()=>signOut({callbackUrl:"/"})}>
        Sign out
    </Button>
  )
}

export default SignoutBtn
