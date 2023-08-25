import axios from "axios"
import {useState } from "react"
import {  useNavigate } from "react-router-dom"
import  style from"./Product.module.css"

const SignUp=()=>{

    let [name , setName] = useState("")
    let [email , setEmail] = useState("")
    let [phone , setPhone] = useState("")
    let [password , setPassword] = useState("")

    let nameData =(e)=>{
        setName(e.target.value)
    }
    let emailData =(e)=>{
        setEmail(e.target.value)
    }
    let phoneData =(e)=>{
        setPhone(e.target.value)
    }
    let passwordData =(e)=>{
        setPassword(e.target.value)
    }
    let Navigate =useNavigate()
    let formhandle=(e)=>{
        e.preventDefault()
        let payload ={name , email  , phone , password}
        axios.post("http://localhost:8080/users",payload).then((Response)=>{
            alert("user saved with id" + Response.data.data.id);
            Navigate('/userhome')
        }).catch(()=>{
            console.log("somthing went wrong");
        })
       

    }
    return(
        <div id={style.a1}>
                 <div id={style.a2}>
            <form action="">
                <label htmlFor="">Name:</label>
                <input id={style.a5} type="text" name=""  value={name} onChange={nameData}  placeholder="Enter Your name" />
                <br /><br />
                <label htmlFor="">Email :</label>
                <input id={style.a6} type="email" name="" value={email} onChange={emailData} placeholder="Enter your Email"/>
                <br /><br />
                <label htmlFor="">Phone :</label>
                <input id={style.a7} type="tel" name=""  value={phone} onChange={phoneData} placeholder="Enter your phoneNumber" />
                <br /><br />
                <label htmlFor="">Password :</label>
                <input id={style.a8} type="password"  name=""  value={password} onChange={passwordData} placeholder="Enter your Password"/>
                <br /><br />
                <button id={style.btn2} onClick={formhandle}>Register</button>
 
            </form>
            </div>
        </div>
    )
}
export default SignUp