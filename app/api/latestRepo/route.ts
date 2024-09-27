
import GenerateLatestRepoSvgCard from "@/components/GenerateSvg/GenerateLatestRepoSvgCard";
import { RepoCommitStruct, RepoStruct } from "@/components/struct/RepoStruct";
import { SvgData } from "@/components/svgDataFormat/svgDataClass";
import { GetLatestRepoUnAuth, GetRepoCommits } from "@/methods/FetchRepo";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try{
        const owner=req.nextUrl.searchParams.get("owner")
        const UserRepoData:RepoStruct=await GetLatestRepoUnAuth(owner as string)
        const RepoCommitData:RepoCommitStruct[]=await GetRepoCommits(owner as string,UserRepoData.name)
        
        const svgData=new SvgData(owner as string,UserRepoData.name,RepoCommitData,RepoCommitData[0].commit.committer.date,RepoCommitData.length) 
        console.log(svgData)
        const SvgCard=GenerateLatestRepoSvgCard(svgData)
        return new NextResponse(SvgCard,{
            headers:{
                "Content-Type":"image/svg+xml"
            }
        })
    }catch(err){
        console.log(err)
        return NextResponse.json({Error:err},{status:500})
    }
}