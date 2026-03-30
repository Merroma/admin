import "../assets/css/all.css"
import Sort from "../assets/images/sort.svg"
import Filter from "../assets/images/filter.svg"
import Five from "../assets/images/5.svg"
import Wooman from "../assets/images/wooman.svg"
import Ece from "./Ece"
import { useTranslation } from "react-i18next"

export default function All() {
    const { t } = useTranslation()

    return (
        <section className='all'>
            <div className="container">
                <div className="all_box">

                    <div className="all_wrapper">
                        <h2 className="all_h2">{t("allTickets")}</h2>
                        <div className="mck">
                            <div className="wc">
                                <img src={Sort} alt="" />
                                <h6 className="sort_h6">{t("sort")}</h6>
                            </div>
                            <div className="wc">
                                <img src={Filter} alt="" />
                                <h6 className="sort_h6">{t("filter")}</h6>
                            </div>
                        </div>
                    </div>

                    <ul className="all_list">
                        <li>{t("ticketDetails")}</li>
                        <li>{t("customerName")}</li>
                        <li>{t("date")}</li>
                        <li>{t("priority")}</li>
                    </ul>

                    <div className="all_man">
                        <Ece />
                        <div className="d">
                            <h5 className="all_h5">Tom Cruise</h5>
                            <h6 className="all_data">{t("onDate")}</h6>
                        </div>
                        <div className="de">
                            <h5 className="all_h5">May 26, 2019</h5>
                            <h6 className="all_data">6:30 PM</h6>
                        </div>
                        <button className="btn_high">{t("high")}</button>
                    </div>

                    <div className="all_man2">
                        <div className="ece">
                            <img src={Wooman} alt="" />
                            <div className="d">
                                <h4 className="all_h4">{t("addImages")}</h4>
                                <p className="all_p">{t("updated")}</p>
                            </div>
                        </div>
                        <div className="d">
                            <h5 className="all_h5">Matt Damon</h5>
                            <h6 className="all_data">{t("onDate")}</h6>
                        </div>
                        <div className="d">
                            <h5 className="all_h5">May 26, 2019</h5>
                            <h6 className="all_data">8:00 AM</h6>
                        </div>
                        <button className="btn_low">{t("low")}</button>
                    </div>

                    <div className="all_man2">
                        <div className="ece">
                            <img src={Five} alt="" />
                            <div className="d">
                                <h4 className="all_h4">{t("emailNotLinked")}</h4>
                                <p className="all_p">{t("updated")}</p>
                            </div>
                        </div>
                        <div className="d">
                            <h5 className="all_h5">Tom Cruise</h5>
                            <h6 className="all_data">{t("onDate")}</h6>
                        </div>
                        <div className="d">
                            <h5 className="all_h5">May 26, 2019</h5>
                            <h6 className="all_data">6:30 PM</h6>
                        </div>
                        <button className="btn_high">{t("high")}</button>
                    </div>

                </div>
            </div>
        </section>
    )
}