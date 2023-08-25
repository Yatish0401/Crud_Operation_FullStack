import { Link, useNavigate } from "react-router-dom"
import React from "react"
import style from "./Product.module.css"

const UserHome=()=>{
    let navigate = useNavigate()
    let logout=()=>{
        localStorage.removeItem("user")
        navigate("/")
    }
    return(
        <div id={style.a1}>

        <div id={style.a9}>
            <div id={style.a10}>
             <h1 id={style.b}><Link to ="/viewuser">View Profile</Link></h1>
             <br />
             <h1 id={style.b}><Link to ="/update">Update Profile</Link></h1>
             <br />
             <h1 id={style.b}><Link to ="/delete">Delete account</Link></h1>
             <br />
             <h1 id={style.b}><Link to = "/addproduct">Add Product</Link></h1>
             <br />
             <h1 id={style.b}><Link to = "/viewproduct">View product</Link></h1>
             <br />
             <button id={style.btn3} onClick={logout}>LogOut</button>
             </div>
        </div>
        </div>
    )
}
export default UserHome