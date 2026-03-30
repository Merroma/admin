import "../assets/css/tasks.css"
import { useTranslation } from "react-i18next"

export default function Tasks() {
    const { t } = useTranslation()

    return (
        <section className="tasks">
            <div className="container">
                <div className="tasks_wrapper">

                    <div className="tasks_box">
                        <div className="unservaled_wrapper">
                            <div className="mwc">
                                <h2 className="unservaled_h2">{t("unresolved")}</h2>
                                <h6 className="unservaled_grey">
                                    {t("group")}: <span>{t("support")}</span>
                                </h6>
                            </div>
                            <h6 className="unservaled_h6">{t("viewDetails")}</h6>
                        </div>

                        <div className="uniservaled_uni">
                            <h3 className="uniservaled_h3">{t("featureRequest")}</h3>
                            <h5 className="uniservaled_h5">4238</h5>
                        </div>

                        <div className="uniservaled_uni2">
                            <h3 className="uniservaled_h3">{t("awaitCustomer")}</h3>
                            <h5 className="uniservaled_h5">1005</h5>
                        </div>

                        <div className="uniservaled_uni2">
                            <h3 className="uniservaled_h3">{t("awaitDev")}</h3>
                            <h5 className="uniservaled_h5">924</h5>
                        </div>

                        <div className="uniservaled_uni3">
                            <h3 className="uniservaled_h3">{t("pending")}</h3>
                            <h5 className="uniservaled_h5">281</h5>
                        </div>
                    </div>

                    <div className="tasks_box">
                        <div className="unservaled_wrapper">
                            <div className="mwc">
                                <h2 className="unservaled_h2">{t("unresolved")}</h2>
                                <h6 className="unservaled_grey">
                                    {t("group")}: <span>{t("support")}</span>
                                </h6>
                            </div>
                            <h6 className="unservaled_h6">{t("viewDetails")}</h6>
                        </div>

                        <div className="uniservaled_uni">
                            <h3 className="uniservaled_h32">{t("createTask")}</h3>
                            <button className="btn1">+</button>
                        </div>

                        <div className="uniservaled_uni2">
                            <input type="checkbox" className="inp" />
                            <h3 className="uniservaled_h3">{t("finishUpdate")}</h3>
                            <button className="btn2">{t("urgent")}</button>
                        </div>

                        <div className="uniservaled_uni2">
                            <input type="checkbox" className="inp" />
                            <h3 className="uniservaled_h3">{t("newTicket")}</h3>
                            <button className="btn3">{t("new")}</button>
                        </div>

                        <div className="uniservaled_uni3">
                            <input type="checkbox" className="inp"/>
                            <h3 className="uniservaled_h3">{t("updateReport")}</h3>
                            <button className="btn4">{t("default")}</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}