import React from 'react'
import {Tabs, Tab, Card, CardBody, Spinner, Snippet} from "@nextui-org/react"
interface RepoProp{
    owner:string,
    repo:string,
    isLoading:boolean
    setIsLoading:(isLoading:boolean)=>void
}
const RepoTab:React.FC<RepoProp> = ({owner,repo,isLoading,setIsLoading}) => {

    return (
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" color='default' variant='underlined' > 
           <Tab key="Card" title="Card"  >
           
              <div className='flex  flex-col justify-center items-center  '>
             {isLoading?<Spinner/>:""}
            <img src={`https://gitrepocard.vercel.app/api/repodata?owner=${owner as string}&repo=${repo}`}
             onLoad={()=>setIsLoading(false)}
             loading='lazy'
            alt='git_card'  
            className='w-96'
              />
              </div>
              
          
           </Tab>
           <Tab key="Code" title="Code">
           
           <div className='border w-20 break-words border-white lg:border-black '>
           <span className='text-slate-100'>&lt;img src=&quot;{`https://gitrepocard.vercel.app/api/repodata?owner=${owner}&repo=${repo}`}&quot; alt=&quot;git_card&quot; style=&quot;width:480px;&quot;</span>
            </div>

           
           </Tab>
          </Tabs>
        </div>  
      );
}

export default RepoTab
