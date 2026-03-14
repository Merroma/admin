import "../assets/css/dashboard.css"
import Logo from "../assets/images/logo.svg"
import One from "../assets/images/1. overview.svg"
import { NavLink } from "react-router-dom"
import Two from "../assets/images/2. tickets.svg"
import Three from "../assets/images/3. ideas.svg"
import Four from "../assets/images/4. contacts.svg"
import Five from "../assets/images/5. agents.svg"
import Six from "../assets/images/6. articles.svg"
import Settings from "../assets/images/settings.svg"
import Subscription from "../assets/images/1 subscription.svg"

export default function Dashboard() {
    return (
        <section className='dashboard'>
            <div className="dash_wrapper">
                <div className="dash_wrapper2">
                    <img src={Logo} alt="" />
                    <h2 className="dash_h2">Dashboard Kit</h2>
                </div>

                <NavLink to="/" end className={({ isActive }) => isActive ? "dash_wrapper3 active" : "dash_wrapper3"}>
                    <img src={One} alt="" />
                    <h5 className="dash_h5"> Overview</h5>
                </NavLink>

                <NavLink to="/tickets" className={({ isActive }) => isActive ? "dash_wrapper4 active" : "dash_wrapper4"}>
                    <img src={Two} alt="" />
                    <h5 className="dash_h5"> Tickets</h5>
                </NavLink>
                <div className="dash_wrapper4">
                    <img src={Three} alt="" />
                    <h5 className="dash_h5">Ideas</h5>
                </div>

                <div className="dash_wrapper4">
                    <img src={Four} alt="" />
                    <h5 className="dash_h5">Contacts</h5>
                </div>
                <div className="dash_wrapper4">
                    <img src={Five} alt="" />
                    <h5 className="dash_h5">Agents</h5>
                </div>
                <div className="dash_wrapper4">
                    <img src={Six} alt="" />
                    <h5 className="dash_h5">Articles</h5>
                </div>
                <hr className="dash_hr" />
                <div className="dash_wrapper4">
                    <img src={Settings} alt="" />
                    <h5 className="dash_h5">Settings</h5>
                </div>
                <div className="dash_wrapper4">
                    <img src={Subscription} alt="" />
                    <h5 className="dash_h5">Subscription</h5>
                </div>
            </div>
        </section>
    )
}