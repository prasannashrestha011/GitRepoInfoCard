"use client"
import React from 'react'
import {useSession} from 'next-auth/react'

const DisplayUserData = () => {
    const {data:session}=useSession()
  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex gap-2 justify-center items-center'>
        {session?.user?.image&&(
            <img src={session.user.image} className='w-10 rounded-full' alt={session.user.name as string} />
        )}
        <span className='text-xl font-normal ' style={{color:'#FFF1F1'}} > {session?.user?.name}</span>
        </div>
       
        
      </div>
    </div>
  )
}

export default DisplayUserData
