export default function Box4({ open }) {
    return (
        <div className="box_box" onClick={open}>
            <p className="box_p">On hold</p>
            <h3 className="box_h3">64</h3>
        </div>
    )
}