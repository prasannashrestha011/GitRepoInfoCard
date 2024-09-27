import { RepoCommitStruct, RepoStruct } from "@/components/struct/RepoStruct";
import axios from "axios";
const GetRepoList=async(accessToken:string):Promise<any>=>{
    return await axios.get(`https://api.github.com/user/repos`,{
        headers:{
            Authorization:`Bearer ${accessToken}`,
            Accept:'application/vnd.github.v3+json',
        },
    })
    .then(response=> response.data)
    .catch(err=>{ console.log(err); return []})

}
const GetLatestRepoUnAuth=async(owner:string):Promise<RepoStruct>=>{
    return await axios.get(`https://api.github.com/users/${owner}/repos?sort=updated&per_page=1`).then(response=>{
  
        return response.data[0]
    }).catch(err=>err)
}
const GetRepoCommits=async(owner:string,repo:string):Promise<RepoCommitStruct[]>=>{
    return await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`)
                 .then(response=>response.data)
                 .catch(err=>err)
}
export {GetRepoList,GetLatestRepoUnAuth,GetRepoCommits}