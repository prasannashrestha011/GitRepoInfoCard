import { GenerateAuthor, GenerateCommitList, GenerateLastCommitPushed, GenerateTitle, GenerateTotalCommitNumber } from "@/methods/GenerateSvgMethods"
import { SvgData } from "../svgDataFormat/svgDataClass"

import { BackGroundGridPrimary } from "@/app/utils/backgroundGrid"

const GenerateSvgCard=(svgData:SvgData)=>{
    const author=GenerateAuthor(svgData.owner)
    const titleCard=GenerateTitle(svgData.repoTitle)
    const commitList=GenerateCommitList(svgData.repoCommits)
    const totalCommits=GenerateTotalCommitNumber(svgData.total_commits)
    const pushed_at=GenerateLastCommitPushed(svgData.pushed_at)
    return `
  <svg width="780" height="373" viewBox="0 0 746 373" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 ${BackGroundGridPrimary()}
<rect width="77" height="77" fill="url(#pattern0_14_11)" x="40" y="40"/>
    ${author}
    ${titleCard}
    <text x="40" y="220" fill="#FFDDDD" font-size="25" class="inter-text" font-family="Trebuchet MS">Recent Commits</text>
    ${commitList}
      ${totalCommits}
      ${pushed_at}
    </svg>
    `;
}
export {GenerateSvgCard}