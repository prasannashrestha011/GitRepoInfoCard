import { RepoCommitStruct } from "@/components/struct/RepoStruct";
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
const GetRepoCommits=async(owner:string,repo:string):Promise<RepoCommitStruct[]>=>{
    return await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`)
                 .then(response=>response.data)
                 .catch(err=>err)
}
export {GetRepoList,GetRepoCommits}