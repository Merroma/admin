import "../assets/css/header.css"
import Man from "../assets/images/photo.svg"

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <h1 className="header_h1">Overview</h1>
          <div className="header_wrapper2">
            <h5 className="header_h5">Jones Ferdinand</h5>
            <img src={Man} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header