import { GenerateSvgCard } from "@/components/GenerateSvg/GenerageSvgCard";
import { RepoCommitStruct } from "@/components/struct/RepoStruct";
import { SvgData } from "@/components/svgDataFormat/svgDataClass";
import { GetRepoCommits } from "@/methods/FetchRepo";



import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try{
       
        const owner=req.nextUrl.searchParams.get("owner")
        const repo=req.nextUrl.searchParams.get("repo")
        if(!owner || !repo){
            console.log(owner,repo+ " is your data")
            return NextResponse.json({ message: "User or repo not found" }, { status: 500 });
        }
      
        const RepoCommitList:RepoCommitStruct[]=await GetRepoCommits(owner,repo)
   
        const svgData=new SvgData(
                                owner,
                                repo,
                                RepoCommitList,
                                RepoCommitList[0].commit.committer.date,
                                RepoCommitList.length)
        const SvgCard=GenerateSvgCard(svgData)

        
        return new NextResponse(SvgCard,{
            headers:{
                "Content-Type":"image/svg+xml"
            }
        })
    }catch(err){
        console.log("Error: ",err)
       return NextResponse.json({message:"failed to fetch the repo data"},{status:500})
    }
    
}