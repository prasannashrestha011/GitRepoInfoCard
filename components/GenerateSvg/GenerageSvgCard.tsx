import { GenerateAuthor, GenerateCommitList, GenerateLastCommitPushed, GenerateTitle, GenerateTotalCommitNumber } from "@/methods/GenerateSvgMethods"
import { SvgData } from "../svgDataFormat/svgDataClass"
import GitHubLogoSvg from "@/app/utils/GithubLogoSvg"

const GenerateSvgCard=(svgData:SvgData)=>{
    const author=GenerateAuthor(svgData.owner)
    const titleCard=GenerateTitle(svgData.repoTitle)
    const commitList=GenerateCommitList(svgData.repoCommits)
    const totalCommits=GenerateTotalCommitNumber(svgData.total_commits)
    const pushed_at=GenerateLastCommitPushed(svgData.pushed_at)
    return `
  <svg width="746" height="373" viewBox="0 0 746 373" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_d_10_7)">
<rect x="6" y="2" width="733.556" height="361" rx="6" fill="#210145" stroke="#2F0070" stroke-width="3" stroke-linecap="round"/>
<line x1="459.418" y1="108.626" x2="741" y2="108.626" stroke="#A4F778" stroke-width="3"/>
<line x1="522.955" y1="134.785" x2="741" y2="134.785" stroke="#4794FA" stroke-width="3"/>
<line x1="580.715" y1="160.944" x2="739.556" y2="160.944" stroke="#E20F13" stroke-width="3"/>
</g>
<defs>
 
<filter id="filter0_d_10_7" x="0.5" y="0.5" width="744.556" height="372" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_7"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_7" result="shape"/>
</filter>
${GitHubLogoSvg()}
</defs>
<rect width="77" height="77" fill="url(#pattern0_14_11)" x="40" y="40"/>
    ${author}
    ${titleCard}
    <text x="40" y="220" fill="#FFDDDD" font-size="23.5" class="inter-text" font-family="Trebuchet MS">Recent Commits</text>
    ${commitList}
      ${totalCommits}
      ${pushed_at}
    </svg>
    `;
}
export {GenerateSvgCard}