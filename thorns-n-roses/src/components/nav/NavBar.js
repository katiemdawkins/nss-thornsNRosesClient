import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ()=> {

    const history = useHistory()

    return(
        <nav className="myNav">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/nurseries">Nurseries</Link>
            <Link className="navLink" to="/distributors">Distributors</Link>
            <Link className="navLink" to="/retailers">Retailers</Link>

        {
        localStorage.getItem("auth_token") !== null ?
            <button className="my-Button" onClick={() => {
                localStorage.removeItem("auth_token")
                history.push({ pathname: "/" })
            }}>
                Logout
            </button>
        :
        <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            
        </>
        }
        </nav>
    )
}