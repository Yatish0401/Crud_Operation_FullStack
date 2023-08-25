import axios from "axios"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import style from "./Product.module.css"

const Delete =()=>{
    let [password , setPassword] = useState("")
    let passwordData =(e)=>{
        setPassword(e.target.value)
    }
    let Navigate = useNavigate()
    let onClick=()=>{
        let user = JSON.parse(localStorage.getItem("User"))
        if(password===user.password)
        {
            axios.delete(`http://localhost:8080/users/${user.id}`).then(()=>{
                localStorage.removeItem("User")
                alert("user deleted successfully")
                Navigate("/")
            }).catch(()=>{
                alert("something went wrong")
            })
        }
        else{
            alert("invalid password")
            Navigate("/userhome")
        }
    }

    
    return(
        <div id={style.a1}>
            <div id={style.c}>
                <div id= {style.c1}>
          <label htmlFor="">Password :</label>
                <input id= {style.b7} type="password"  name=""  value={password} onChange={passwordData} placeholder="Enter your Password"/>
                <br /><br />
                <button id={style.btn5} onClick={onClick}>Delete</button>
        </div>
        </div>
        </div>
    )
}
export default Delete