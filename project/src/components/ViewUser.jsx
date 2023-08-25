import React from "react"
import style from "./Product.module.css"

const ViewUser = () => {
   
    let User = JSON.parse(localStorage.getItem("User"))
    return (
        <div id={style.a1}>
           <div id={style.b2}>
            <div id ={ style.b3}>
            <h2>Name: {User.name}</h2>
            <br />
            <h2> ID: {User.id}</h2>
            <br />
            <h2>  Phone Number: {User.phone}</h2>
            <br />
            <h2> Email: {User.email}</h2>
        </div>
        </div>
        </div>
    )
}

export default ViewUser
