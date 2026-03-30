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
import { useTranslation } from "react-i18next"

export default function Dashboard() {
    const { t } = useTranslation()

    return (
        <section className='dashboard'>
            <div className="dash_wrapper">
                <div className="dash_wrapper2">
                    <img src={Logo} alt="" />
                    <h2 className="dash_h2">{t("dashboard")}</h2>
                </div>

                <NavLink to="/" end className={({ isActive }) => isActive ? "dash_wrapper3 active" : "dash_wrapper3"}>
                    <img src={One} alt="" />
                    <h5 className="dash_h5">{t("overview")}</h5>
                </NavLink>

                <NavLink to="/tickets" className={({ isActive }) => isActive ? "dash_wrapper4 active" : "dash_wrapper4"}>
                    <img src={Two} alt="" />
                    <h5 className="dash_h5">{t("tickets")}</h5>
                </NavLink>

                <div className="dash_wrapper4">
                    <img src={Three} alt="" />
                    <h5 className="dash_h5">{t("ideas")}</h5>
                </div>

                <div className="dash_wrapper4">
                    <img src={Four} alt="" />
                    <h5 className="dash_h5">{t("contacts")}</h5>
                </div>

                <div className="dash_wrapper4">
                    <img src={Five} alt="" />
                    <h5 className="dash_h5">{t("agents")}</h5>
                </div>

                <div className="dash_wrapper4">
                    <img src={Six} alt="" />
                    <h5 className="dash_h5">{t("articles")}</h5>
                </div>

                <hr className="dash_hr" />

                <div className="dash_wrapper4">
                    <img src={Settings} alt="" />
                    <h5 className="dash_h5">{t("settings")}</h5>
                </div>

                <div className="dash_wrapper4">
                    <img src={Subscription} alt="" />
                    <h5 className="dash_h5">{t("subscription")}</h5>
                </div>
            </div>
        </section>
    )
}