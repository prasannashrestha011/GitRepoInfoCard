import moment from "moment"

const RelativeTimeFormatter=(pushed_at:string)=>{
    console.log(pushed_at)
    return moment.utc(pushed_at).local().startOf("seconds").fromNow()
}
export default RelativeTimeFormatter