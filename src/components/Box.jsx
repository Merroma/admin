export default function Box({ open }) {
    return (
        <section className="box" onClick={open}>
            <div className="container">
                <div className="box_box">
                    <p className="box_p">Unresolved</p>
                    <h3 className="box_h3">60</h3>
                </div>
            </div>
        </section>
    )
}