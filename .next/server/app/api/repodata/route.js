"use strict";(()=>{var e={};e.id=194,e.ids=[194],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},46449:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>P,patchFetch:()=>S,requestAsyncStorage:()=>q,routeModule:()=>D,serverHooks:()=>$,staticGenerationAsyncStorage:()=>F});var o={};r.r(o),r.d(o,{GET:()=>v});var s=r(49303),i=r(88716),a=r(60670),n=r(65027),l=r(4867),p=r(78591);let u=e=>{let t=e.length>=20?28:40;return`
            <text x="373" y="55" fill="#FFDDDD" text-anchor="middle" font-size="${t}" font-weight="700" font-family="Trebuchet MS" >${e}</text>
        `},x=e=>`
         <text x="40" y="160" fill="#786F6F" font-size="24" font-family="Segoe UI" >${(0,n.Z)(e)}</text>
        `,m=e=>{let t=0,r="";return e.slice(0,3).map(e=>{r+=`<text x="40" y="${250+5*t}" font-size="21.8" fill="#FFDDDD" font-family="Segoe UI">
             - ${(0,p.Z)((0,n.Z)(e.commit.message),40)}
        </text>
       `,t+=5}),r},d=e=>`
              <text x="500" y="220" fill="#786F6F" font-family="Segoe UI" font-size="22">Last pushed-${(0,n.Z)((0,l.Z)(e))}</text>
           
        `,f=e=>`
        <text x="535" y="310" fill="#FFDDDD" font-size="23" font-family="Arial" font-weight="700"> Total Commits-${(0,n.Z)(e.toString())}</text>
 
        `;var h=r(75917);let c=e=>{let t=x(e.owner),r=u(e.repoTitle),o=m(e.repoCommits),s=f(e.total_commits),i=d(e.pushed_at);return`
  <svg width="780" height="373" viewBox="0 0 746 373" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 ${(0,h.W)()}
<rect width="77" height="77" fill="url(#pattern0_14_11)" x="40" y="40"/>
    ${t}
    ${r}
    <text x="40" y="220" fill="#FFDDDD" font-size="25" class="inter-text" font-family="Trebuchet MS">Recent Commits</text>
    ${o}
      ${s}
      ${i}
    </svg>
    `};var g=r(23100),w=r(76882),y=r(87070);async function v(e){try{let t=e.nextUrl.searchParams.get("owner"),r=e.nextUrl.searchParams.get("repo");if(!t||!r)return console.log(t,r+" is your data"),y.NextResponse.json({message:"User or repo not found"},{status:500});let o=await (0,w.hV)(t,r),s=new g.U(t,r,o,o[0].commit.committer.date,o.length),i=c(s);return new y.NextResponse(i,{headers:{"Content-Type":"image/svg+xml"}})}catch(e){return console.log("Error: ",e),y.NextResponse.json({message:"failed to fetch the repo data"},{status:500})}}let D=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/repodata/route",pathname:"/api/repodata",filename:"route",bundlePath:"app/api/repodata/route"},resolvedPagePath:"D:\\git_stat_card\\git-stat-card\\app\\api\\repodata\\route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:q,staticGenerationAsyncStorage:F,serverHooks:$}=D,P="/api/repodata/route";function S(){return(0,a.patchFetch)({serverHooks:$,staticGenerationAsyncStorage:F})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[948,305,556],()=>r(46449));module.exports=o})();