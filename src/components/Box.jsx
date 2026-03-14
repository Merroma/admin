import "../assets/css/box.css"

export default function Box() {
    return (
        <section className="box">
            <div className="container">
                <div className="box_wrapper">
                    <div className="box_box">
                        <p className="box_p">Unresolved</p>
                        <h3 className="box_h3">60</h3>
                    </div>
                    <div className="box_box">
                        <p className="box_p">Overdue</p>
                        <h3 className="box_h3">16</h3>
                    </div>
                    <div className="box_box">
                        <p className="box_p">Open</p>
                        <h3 className="box_h3">43</h3>
                    </div>
                    <div className="box_box">
                        <p className="box_p">On hold</p>
                        <h3 className="box_h3">64</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
