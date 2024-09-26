import type {NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
const clientID=process.env.OAuth_CLIENT_ID
const clientSecret=process.env.OAuth_CLIENT_SECRET
const nextAuthSecret=process.env.NEXT_AUTH_SECRET
if(!clientID|| !clientSecret || !nextAuthSecret){
    throw Error("invalid cred")
}
declare module 'next-auth'{
    interface Session{
        accessToken?:string
    }
}
const authOptions:NextAuthOptions={
    providers:[
        GitHubProvider({
            clientId:clientID,
            clientSecret:clientSecret,
        })
    ],
    secret:nextAuthSecret,
    callbacks:{
        async jwt({token,account}){
            if(account){
                token.accessToken=account.access_token
            }
            return token
        },
        async session({session,token}){
            session.accessToken=token.accessToken as string
            return session
        }
    }

}
export {authOptions}