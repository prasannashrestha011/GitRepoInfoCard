import escapeSvg from "@/app/utils/escape"
import RelativeTimeFormatter from "@/app/utils/relativeTimeFormatter"
import TruncateString from "@/app/utils/TruncateString"
import { RepoCommitStruct } from "@/components/struct/RepoStruct"
const fontStyling=()=>{
    return(
        `
        <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&amp;display=swap');
    </style>
  </defs>
        `
    )
}
const fontAttributes=()=>{
    return(
        `
    fill="#DFDADA" 
    fill-opacity="0.6"
   

    font-weight="100" 
    font-family="Segoe UI"
    letter-spacing="1"


        `
    )
}
const GenerateLatestRepoTitle=(title:string):string=>{
    const calTitlefontSize=title.length>30?"23":"32"
    return(
       ` <text font-size="${calTitlefontSize}" fill="white"      font-family="Segoe UI" font-weight="500" x="250" y="40">${title}</text>`
    )
}
const GenerateLatestRepoAuthor=(author:string)=>{
    return(
        `
    
  
  <text 
    fill="#DFDADA" 
    fill-opacity="0.6"
    y="100" 
    x="20" 
    font-size="23" 
    font-weight="400" 
    font-family="Verdana"
    letter-spacing="1.2"

 
  >${escapeSvg(author)}</text>
        `
    )
}
const GenerateLatestRepoCommitList=(commits:RepoCommitStruct[])=>{
    let recentThreeCommits=commits.splice(0,3)
    let commitText=""
    let count=0
    for (let commit of recentThreeCommits){
            commitText+=`
            <text x="20" y="${260+27*count}"   
             fill="#DFDADA"  
             font-size="25" 
             fill-opacity="0.5"  
             letter-spacing="1"
              font-weight="100" 
             font-family="Segoe UI,Verdana,Arial">- ${TruncateString(escapeSvg(commit.commit.message),28)}</text>
            `
            count++
    }
    return commitText
}
const GenerateLatestRepoTotalCommits=(commit_length:number)=>{
    return(
        `
        <text x="488" y="350" fill="#DFDADA"  font-size="24" fill-opacity="0.7"   font-family="Segoe UI">TotalCommits-${commit_length}</text>
        `
    )
}
const GenerateLatestRepoRecentCommitPushedTime=(recent_commit:string)=>{
    return(
        `
         ${fontStyling()}
        <text
           fill="#DFDADA" 
    fill-opacity="0.3"
     font-size="23" 
    font-weight="100" 
      font-family="Segoe UI"
    letter-spacing="1"
   
    
    y="180"
    x="20"
        >
        Last pushed ${RelativeTimeFormatter(recent_commit)}
        </text>`
    )
}
export {GenerateLatestRepoTitle,GenerateLatestRepoAuthor,GenerateLatestRepoCommitList,GenerateLatestRepoRecentCommitPushedTime,GenerateLatestRepoTotalCommits}
