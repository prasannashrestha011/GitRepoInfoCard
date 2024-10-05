"use strict";(()=>{var e={};e.id=40,e.ids=[40],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},56714:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>U,patchFetch:()=>z,requestAsyncStorage:()=>A,routeModule:()=>D,serverHooks:()=>R,staticGenerationAsyncStorage:()=>$});var o={};r.r(o),r.d(o,{GET:()=>v});var i=r(49303),s=r(88716),a=r(60670),l=r(75917),n=r(65027),p=r(4867),u=r(78591);let f=()=>`
        <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&amp;display=swap');
    </style>
  </defs>
        `,x=e=>{let t=e.length>30?"23":"32";return` <text font-size="${t}" fill="white"      font-family="Segoe UI" font-weight="500" x="250" y="40">${e}</text>`},m=e=>`
    
  
  <text 
    fill="#DFDADA" 
    fill-opacity="0.6"
    y="100" 
    x="20" 
    font-size="23" 
    font-weight="400" 
    font-family="Verdana"
    letter-spacing="1.2"

 
  >${(0,n.Z)(e)}</text>
        `,g=e=>{let t=e.splice(0,3),r="",o=0;for(let e of t)r+=`
            <text x="20" y="${260+27*o}"   
             fill="#DFDADA"  
             font-size="20" 

             fill-opacity="0.8"  
             letter-spacing="1"
              font-weight="300" 
             font-family="Segoe UI,Verdana,Arial">- ${(0,u.Z)((0,n.Z)(e.commit.message),48)}</text>
            `,o++;return r},c=e=>`
        <text x="539" y="318" fill="#DFDADA"  font-size="24" fill-opacity="0.9"   font-family="Segoe UI">TotalCommits- ${e}</text>
        `,d=e=>`
         ${f()}
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
        Last pushed ${(0,p.Z)(e)}
        </text>`,h=e=>{let t=x(e.repoTitle),r=m(e.owner),o=d(e.pushed_at),i=g(e.repoCommits),s=c(e.total_commits);return`
        <svg width="780" height="383" viewBox="0 0 723 383" fill="none" xmlns="http://www.w3.org/2000/svg" >
        
        ${(0,l.X)()}
        ${t}
        ${r}
        ${o}
         <text fill="#DFDADA" 
          fill-opacity="0.9"
          font-weight="500" 
          font-family="Segoe UI"
          letter-spacing="1"
          x="20" y="220"     font-size="26" >Recent Commits</text>
        ${i}
        ${s}
        </svg> 
    `};var y=r(23100),w=r(76882),q=r(87070);async function v(e){try{let t=e.nextUrl.searchParams.get("owner"),r=await (0,w.R6)(t),o=await (0,w.hV)(t,r.name),i=new y.U(t,r.name,o,o[0].commit.committer.date,o.length);console.log(i);let s=h(i);return new q.NextResponse(s,{headers:{"Content-Type":"image/svg+xml"}})}catch(e){return console.log(e),q.NextResponse.json({Error:e},{status:500})}}let D=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/latestRepo/route",pathname:"/api/latestRepo",filename:"route",bundlePath:"app/api/latestRepo/route"},resolvedPagePath:"D:\\git_stat_card\\git-stat-card\\app\\api\\latestRepo\\route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:A,staticGenerationAsyncStorage:$,serverHooks:R}=D,U="/api/latestRepo/route";function z(){return(0,a.patchFetch)({serverHooks:R,staticGenerationAsyncStorage:$})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[948,305,556],()=>r(56714));module.exports=o})();