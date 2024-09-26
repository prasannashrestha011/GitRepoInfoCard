import RelativeTimeFormatter from "@/app/utils/relativeTimeFormatter"
import TruncateString from "@/app/utils/TruncateString"
import { RepoCommitStruct } from "@/components/struct/RepoStruct"


const GenerateCommitList=(commitList:RepoCommitStruct[]):string=>{
    let count=0
    let commitText=""
    const svgCommitList=commitList.slice(0,3).map((commit)=>{
        commitText+= `<text x="40" y="${250+5*count}" font-size="21.8" fill="#FFDDDD" font-family="Arial">
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
              <text x="480" y="300" fill="#786F6F" font-family="Arial" font-size="22">Last pushed-</text>
            <text x="610" y="300" fill="#786F6F" font-family="Arial" font-size="22">${escapeSvg(RelativeTimeFormatter(pushed_at))}</text>
        `
        )
        
}
const GenerateAuthor=(author:string)=>{
    return(
        `
         <text x="40" y="160" fill="#786F6F" font-size="24" font-family="Arial" >${escapeSvg(author)}</text>
        `
    )
}
const GenerateTitle=(title:string):string=>{
    const titleFontSize=(title.length>=20?28:40)
    return(
        `
            <text x="373" y="55" fill="#FFDDDD" text-anchor="middle" font-size="${titleFontSize}" font-weight="700" font-family="Trebuchet MS" >${title}</text>
        `
    )
}
const GenerateTotalCommitNumber=(commitLength:number):string=>{
    return(
        `
        <text x="490" y="330" fill="#FFDDDD" font-size="23" font-family="Arial" font-weight="700"> Total Commits-</text>
        <text x="660" y="330"  font-size="23" fill="#FFDDDD" font-family="Arial">${escapeSvg(commitLength.toString())}</text>
        `
    )
}
const escapeSvg = (text: string): string => {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
export{GenerateTitle,GenerateCommitList,GenerateTotalCommitNumber,GenerateLastCommitPushed,GenerateAuthor}
