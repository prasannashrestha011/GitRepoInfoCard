import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest){
   
    const token=await getToken({req,secret:process.env.NEXT_AUTH_SECRET})
   
    if(token&& token.accessToken){
        return NextResponse.next()
    }else{
        return NextResponse.redirect(new URL("/",req.url))
    }
}
export const config={
    matcher:["/home"]
}