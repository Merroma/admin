export default function Box({ setModal }) {
    return (
        <section className="box" onClick={() => setModal(true)}>
            <div className="container">
                <div className="box_box">
                    <p className="box_p">Unresolved</p>
                    <h3 className="box_h3">60</h3>
                </div>
            </div>
        </section>
    )
}