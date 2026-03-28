export default function Box3({ setModal }) {
    return (
        <div className="box_box" onClick={() => setModal(true)}>
            <p className="box_p">Open</p>
            <h3 className="box_h3">43</h3>
        </div>
    )
}