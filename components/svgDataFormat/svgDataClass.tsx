import { RepoCommitStruct, SvgDataStruct } from "../struct/RepoStruct";

export class SvgData implements SvgDataStruct{
   owner:string
    repoTitle: string;
    repoCommits: RepoCommitStruct[];
     pushed_at: string;
     total_commits: number;

     constructor(owner:string,repoTitle:string,repoCommits:RepoCommitStruct[],pushed_at:string,total_commits:number){
        this.owner=owner
        this.repoTitle=repoTitle
        this.repoCommits=repoCommits
        this.pushed_at=pushed_at
        this.total_commits=total_commits
     }
    
}