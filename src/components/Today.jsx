import "../assets/css/today.css"
import { useTranslation } from "react-i18next"

export default function Today() {
    const { t } = useTranslation()

    return (
        <div className="container">
            <section className='today'>
                <div className="today_wrapper">
                    <div className="today_frends">
                        <div className="today_text">
                            <h3 className="today_h3">{t("todayTrends")}</h3>
                            <h6 className="today_h6">{t("asOf")}</h6>
                        </div>
                        <div className="today_line">
                            <div className="today_line2">
                                <hr className="today_hr" />
                                <h5 className="today_h5">{t("today")}</h5>
                            </div>
                            <div className="today_line2">
                                <hr className="today_hr2" />
                                <h5 className="today_h5">{t("yesterday")}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="today_box">
                        <h4 className="today_h4">{t("resolved")}</h4>
                        <p className="today_p">449</p>
                        <hr className="today_box-hr" />

                        <h4 className="today_h4">{t("received")}</h4>
                        <p className="today_p">426</p>
                        <hr className="today_box-hr" />

                        <h4 className="today_h4">{t("avgFirstResponse")}</h4>
                        <p className="today_p">33m</p>
                        <hr className="today_box-hr" />

                        <h4 className="today_h4">{t("avgResponse")}</h4>
                        <p className="today_p">3h 8m</p>
                        <hr className="today_box-hr" />

                        <h4 className="today_h4">{t("sla")}</h4>
                        <p className="today_p">94%</p>
                    </div>
                </div>
            </section>
        </div>
    )
}