import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import './Auth.css'

export const Register = () => {
    const username = useRef()
    const password = useRef()
    const first_name = useRef()
    const last_name = useRef()
    const email = useRef()
    const distributor_employee = useRef()
    const nursery_employee = useRef()
    const retail_employee = useRef()
    const event_planner = useRef()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            "first_name": first_name.current.value,
            "last_name": last_name.current.value,
            "email": email.current.value,
            "username": username.current.value,
            "password": password.current.value,
            "distributor_employee": distributor_employee.current.value,
            "nursery_employee": nursery_employee.current.value,
            "retail_employee": retail_employee.current.value,
            "event_planner": event_planner.current.value,
        }

        registerUser(newUser).then(res => {
            if ("token" in res) {
                localStorage.setItem("auth_token", res.token)
                history.push("/")
            }
            })
    }

return (
    <main>
        <form className="loginRegister" onSubmit={handleRegister}>
        <h3 className="registerHeader">Register an account</h3>
        <fieldset className="loginRegisterField">
            <label htmlFor="inputFirst_name">First Name  </label>
            <input className="my-input" ref={first_name} type="text" name="first_name" placeholder="First name" required />
        </fieldset>
        <fieldset className="loginRegisterField">
            <label htmlFor="inputLast_name">Last Name  </label>
            <input className="my-input" ref={last_name} type="text" name="last_name" placeholder="Last name" required />
        </fieldset>
        <fieldset className="loginRegisterField">
            <label htmlFor="inputEmail">Email  </label>
            <input className="my-input" ref={email} type="text" name="email" placeholder="Email" required />
        </fieldset>
        <fieldset className="loginRegisterField">
            <label htmlFor="inputUsername">Username  </label>
            <input className="my-input" ref={username} type="text" name="username" placeholder="Username" required />
        </fieldset>
        <fieldset className="loginRegisterField">
            <label htmlFor="inputPassword"> Password  </label>
            <input className="my-input" ref={password} type="password" name="password" placeholder="Password" required />
        </fieldset>
        <fieldset>
            <label htmlFor="distributorEmployee">Distributor</label>
            <input type="checkbox" className="employeeCheckBox" ref={distributor_employee} />
        </fieldset>
        <fieldset>
            <label htmlFor="nurseryEmployee">Nursery</label>
            <input type="checkbox" className="employeeCheckBox" ref={nursery_employee} />
        </fieldset>
        <fieldset>
            <label htmlFor="retailerEmployee">Retailer</label>
            <input type="checkbox" className="employeeCheckBox" ref={retailer_employee} />
        </fieldset>
        <fieldset>
            <label htmlFor="eventPlanner">Event Planner</label>
            <input type="checkbox" className="employeeCheckBox" ref={event_planner} />
        </fieldset>
        <fieldset className="loginRegisterField">
            <button className="my-Button"type="submit">Register</button>
        </fieldset>
        <section className="RegisterLink">
        Already registered? <Link to="/login">Login</Link>
        </section>
        </form>
    </main>
)
}