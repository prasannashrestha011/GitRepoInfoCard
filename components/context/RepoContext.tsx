"use client"
import { createContext,ReactNode,useContext, useState } from "react"
import { RepoStruct } from "../struct/RepoStruct"
interface selectedRepoStruct{
    selectedRepo:string,
    setSelectedRepo:(selectedRepo:string)=>void,
    repoList:RepoStruct[]
    setRepoList:(repoList:RepoStruct[])=>void
 
    
}
const initialRepo:selectedRepoStruct={
    selectedRepo:"",
    setSelectedRepo:()=>{},
    repoList:[],
    setRepoList:()=>{},
   
}
const RepoContext=createContext(initialRepo)
const RepoContextProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [selectedRepo,setSelectedRepo]=useState<string>("")
    const [repoList,setRepoList]=useState<RepoStruct[]>([])
    return(
        <RepoContext.Provider value={{selectedRepo,setSelectedRepo,repoList,setRepoList}}>
            {children}
        </RepoContext.Provider>
    )
}
const RepoHook=()=>{
    return(
        useContext(RepoContext)
    )
}
export{RepoContext,RepoContextProvider,RepoHook}