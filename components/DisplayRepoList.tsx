"use client"
import {GetRepoList } from '@/methods/FetchRepo'
import React, {  useEffect, useState } from 'react'
import {useSession} from 'next-auth/react'

import { Button } from '@nextui-org/react'
import {  RepoHook } from './context/RepoContext'
import SelectInput from './selectInput/selectInput'
import RepoTab from '@/svgFormatting/TabControl/RepoTab'

const DisplayRepoList = () => {
    const {data:session}=useSession()

    const {selectedRepo,setRepoList}=RepoHook()
    const [isDataGenerated,setIsDataGenerated]=useState<boolean>(false)
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const loadRepoList=async()=>{
        console.log(session?.accessToken + " is your acessToken")
        const response=await GetRepoList(session?.accessToken as string)
        console.log(response)
        setRepoList(response)
    }
  
    const getRepodata=async()=>{
    
   
      setIsDataGenerated(true)
      if(!isDataGenerated){
        setIsLoading(!isLoading)
      }
      
    }
    
    useEffect(()=>{
        if (session?.accessToken) { 
            loadRepoList();
        }
    },[session?.accessToken])

  return (
   <div className='flex justify-center items-center  mt-14 lg:pl-0   lg:w-full  overflow-hidden  '>

      <div className='
      
      bg-slate-800  w-96 lg:w-auto border lg:border-blue-800 sm:border-yellow-500 md:border-red-900 flex flex-col justify-between items-center h-auto rounded-md  gap-4 lg:ml-0 md:ml-40  ' >
       
       <SelectInput/>
    
      
          {isDataGenerated&&session?.user?.name?(
           <>
            <RepoTab owner={session.user.name} repo={selectedRepo} isLoading={isLoading} setIsLoading={setIsLoading}/>
           </>
             
          ):""}
      
        <Button 
        onClick={()=>getRepodata()}
        className='w-auto h-11 mb-11 bg-blue-700 text-slate-50 hover:bg-blue-600 rounded-md p-2'>
          Generate  card
        </Button>

      
      </div>
    
  
        
   </div>
  )
}

export default DisplayRepoList
