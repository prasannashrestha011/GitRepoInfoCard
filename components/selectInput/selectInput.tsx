import React from 'react'
import { RepoHook } from '../context/RepoContext'
import {Select, SelectItem} from "@nextui-org/react";
const SelectInput = () => {
    const {setSelectedRepo,repoList,}=RepoHook()
    const handleRepoSelect=async(e:React.ChangeEvent<HTMLSelectElement>)=>{
        
        setSelectedRepo(e.target.value)    
      }
      
  return (

     <div className='w-96 flex justify-center items-center'>
         <Select
        placeholder='Select your repository'
        onChange={handleRepoSelect}
        isRequired
        size='lg'
        radius='sm'
        
        color='primary'
        style={{ backgroundColor: "#252333" }}
        className='w-52 mt-4  outline-none  rounded-none'>
          {repoList&&repoList.map((item)=>(
              <SelectItem key={item.name} value={item.name}
              className='bg-slate-50 rounded-md'
              >{item.name}</SelectItem>
          ))}
        </Select>
     </div>
   
  )
}

export default SelectInput
