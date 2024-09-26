const TruncateString=(commit_message:string,message_length:number)=>{
    if(commit_message.length>message_length){
        return commit_message.slice(0,message_length)+"..."
    }
    return commit_message
}
export default TruncateString