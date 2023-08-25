import React from "react"
import Signln from "./Signln"


const Protect =({Child})=>{

    let verify=()=>{
        let User = localStorage.getItem("User")
        if(User==null){
        return false;
        }
    else
    {
    return true;
    }
}
    return(
       <>
       {
        verify() ? <Child/> :<Signln/>}
       
       </>
    )
       }
export default Protect