
import { SvgData } from '../svgDataFormat/svgDataClass'
import GenerateBackgroundGrid from '@/app/utils/backgroundGrid'
import { GenerateLatestRepoAuthor, GenerateLatestRepoCommitList, GenerateLatestRepoRecentCommitPushedTime, GenerateLatestRepoTitle, GenerateLatestRepoTotalCommits } from '@/methods/GenerateLatestRepoSvgMethod'

const GenerateLatestRepoSvgCard = (svgData:SvgData) => {

  const repoTitle=GenerateLatestRepoTitle(svgData.repoTitle)
  const authorTitle=GenerateLatestRepoAuthor(svgData.owner)
  const latestCommitPushTimeStamp=GenerateLatestRepoRecentCommitPushedTime(svgData.pushed_at)

  const recentCommitList=GenerateLatestRepoCommitList(svgData.repoCommits)
  const totalCommits=GenerateLatestRepoTotalCommits(svgData.total_commits)
  return(
    `
        <svg width="780" height="383" viewBox="0 0 723 383" fill="none" xmlns="http://www.w3.org/2000/svg" >
        
        ${GenerateBackgroundGrid()}
        ${repoTitle}
        ${authorTitle}
        ${latestCommitPushTimeStamp}
         <text fill="#DFDADA" 
          fill-opacity="0.9"
          font-weight="500" 
          font-family="Segoe UI"
          letter-spacing="1"
          x="20" y="220"     font-size="26" >Recent Commits</text>
        ${recentCommitList}
        ${totalCommits}
        </svg> 
    `
  )
}

export default GenerateLatestRepoSvgCard
