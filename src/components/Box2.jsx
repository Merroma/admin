import "../assets/css/box.css"

export default function Box2({ open }) {
    return (
        <div className="box_box" onClick={open}>
            <p className="box_p">Overdue</p>
            <h3 className="box_h3">16</h3>
        </div>
    )
}