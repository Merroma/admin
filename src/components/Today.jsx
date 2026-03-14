import "../assets/css/today.css"

export default function Today() {
    return (
        <div className="container">
            <section className='today'>
                <div className="today_wrapper">
                    <div className="today_frends">
                        <div className="today_text">
                            <h3 className="today_h3">Today’s trends</h3>
                            <h6 className="today_h6">as of 25 May 2019, 09:41 PM</h6>
                        </div>
                        <div className="today_line">
                            <div className="today_line2">
                                <hr className="today_hr" />
                                <h5 className="today_h5">Today</h5>
                            </div>
                            <div className="today_line2">
                                <hr className="today_hr2" />
                                <h5 className="today_h5">Yesterday</h5>
                            </div>
                        </div>
                    </div>
                    <div className="today_box">
                        <h4 className="today_h4">Resolved</h4>
                        <p className="today_p">449</p>
                        <hr className="today_box-hr" />
                        <h4 className="today_h4">Received</h4>
                        <p className="today_p">426</p>
                        <hr className="today_box-hr" />
                        <h4 className="today_h4">Average first response time</h4>
                        <p className="today_p">33m</p>
                        <hr className="today_box-hr" />
                        <h4 className="today_h4">Average response time</h4>
                        <p className="today_p">3h 8m</p>
                        <hr className="today_box-hr" />
                        <h4 className="today_h4">Resolution within SLA</h4>
                        <p className="today_p">94%</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
