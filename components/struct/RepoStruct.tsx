interface RepoStruct{
    name:string,
    full_name:string,
    owner:{
        login:string
    }
    branch:string
    language:string
   
}
interface RepoCommitStruct{
    
    sha:string,
    commit:{
        committer:{
            date:string
        }
        message:string
    }
}
interface SvgDataStruct{
    owner:string
    repoTitle:string,
    repoCommits:RepoCommitStruct[]
    pushed_at:string
    total_commits:number
}
export type{ SvgDataStruct,RepoCommitStruct,RepoStruct}