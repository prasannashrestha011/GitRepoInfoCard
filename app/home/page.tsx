import { RepoContextProvider } from '@/components/context/RepoContext'
import DisplayRepoList from '@/components/DisplayRepoList'
import DisplayUserData from '@/components/DisplayUserData'
import SignoutBtn from '@/components/LoginState/SignoutBtn'
import React from 'react'

const page = () => {
  return (
    <div className=" w-screen h-screen  bg-cover bg-center  bg-[url('/images/background.jpg')]">
    
    

          <div className="flex justify-between items-center h-16   " style={{ backgroundColor: "#150606" }}>
          <DisplayUserData />
          <SignoutBtn />
    
      </div>
      <main>
        <RepoContextProvider>
           <DisplayRepoList/>
        </RepoContextProvider>
 
      </main>
     
    </div>
  )
}

export default page
