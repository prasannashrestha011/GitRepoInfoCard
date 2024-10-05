import escapeSvg from "@/app/utils/escape"
import RelativeTimeFormatter from "@/app/utils/relativeTimeFormatter"
import TruncateString from "@/app/utils/TruncateString"
import { RepoCommitStruct } from "@/components/struct/RepoStruct"

const GenerateTitle=(title:string):string=>{
    const titleFontSize=(title.length>=20?28:40)
    return(
        `
            <text x="373" y="55" fill="#FFDDDD" text-anchor="middle" font-size="${titleFontSize}" font-weight="700" font-family="Trebuchet MS" >${title}</text>
        `
    )
}
const GenerateAuthor=(author:string)=>{
    return(
        `
         <text x="40" y="160" fill="#786F6F" font-size="24" font-family="Segoe UI" >${escapeSvg(author)}</text>
        `
    )
}
const GenerateCommitList=(commitList:RepoCommitStruct[]):string=>{
    let count=0
    let commitText=""
    const svgCommitList=commitList.slice(0,3).map((commit)=>{
        commitText+= `<text x="40" y="${250+5*count}" font-size="21.8" fill="#FFDDDD" font-family="Segoe UI">
             - ${TruncateString(escapeSvg(commit.commit.message),40)}
        </text>
       `
       count+=5
       
    })
    return commitText
}
const GenerateLastCommitPushed=(pushed_at:string)=>{
        return(
            `
              <text x="500" y="220" fill="#786F6F" font-family="Segoe UI" font-size="22">Last pushed-${escapeSvg(RelativeTimeFormatter(pushed_at))}</text>
           
        `
        )
        
}


const GenerateTotalCommitNumber=(commitLength:number):string=>{
    return(
        `
        <text x="535" y="310" fill="#FFDDDD" font-size="23" font-family="Arial" font-weight="700"> Total Commits-${escapeSvg(commitLength.toString())}</text>
 
        `
    )
}

export{GenerateTitle,GenerateCommitList,GenerateTotalCommitNumber,GenerateLastCommitPushed,GenerateAuthor}
