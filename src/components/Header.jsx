import "../assets/css/header.css"
import Man from "../assets/images/photo.svg"
import { useTranslation } from "react-i18next"

function Header() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          
          <h1 className="header_h1">{t("overview")}</h1>

          <div className="header_wrapper2">
            <h5 className="header_h5">Jones Ferdinand</h5>
            <img src={Man} alt="" />
          </div>

          <select onChange={changeLanguage}>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>

        </div>
      </div>
    </header>
  )
}

export default Header