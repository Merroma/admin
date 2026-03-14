import "../assets/css/tasks.css"

export default function Tasks() {
    return (
        <section className="tasks">
            <div className="container">
                <div className="tasks_wrapper">
                    <div className="tasks_box">
                        <div className="unservaled_wrapper">
                            <div className="mwc">
                                <h2 className="unservaled_h2">Unresolved tickets</h2>
                                <h6 className="unservaled_grey">Group: <span>Support</span></h6>
                            </div>
                            <h6 className="unservaled_h6">View details</h6>
                        </div>
                        <div className="uniservaled_uni">
                            <h3 className="uniservaled_h3">Waiting on Feature Request</h3>
                            <h5 className="uniservaled_h5">4238</h5>
                        </div>
                        <div className="uniservaled_uni2">
                            <h3 className="uniservaled_h3">Awaiting Customer Response</h3>
                            <h5 className="uniservaled_h5">1005</h5>
                        </div>
                        <div className="uniservaled_uni2">
                            <h3 className="uniservaled_h3">Awaiting Developer Fix</h3>
                            <h5 className="uniservaled_h5">924</h5>
                        </div>
                        <div className="uniservaled_uni3">
                            <h3 className="uniservaled_h3">Pending</h3>
                            <h5 className="uniservaled_h5">281</h5>
                        </div>
                    </div>
                    <div className="tasks_box">
                        <div className="unservaled_wrapper">
                            <div className="mwc">
                                <h2 className="unservaled_h2">Unresolved tickets</h2>
                                <h6 className="unservaled_grey">Group: <span>Support</span></h6>
                            </div>
                            <h6 className="unservaled_h6">View details</h6>
                        </div>
                        <div className="uniservaled_uni">
                            <h3 className="uniservaled_h32">Create new task</h3>
                            <button className="btn1">+</button>
                        </div>
                        <div className="uniservaled_uni2">
                            <input type="checkbox" className="inp" />
                            <h3 className="uniservaled_h3">Finish ticket update</h3>
                            <button className="btn2">Urgent</button>
                        </div>
                        <div className="uniservaled_uni2">
                            <input type="checkbox" className="inp" />
                            <h3 className="uniservaled_h3">Create new ticket example</h3>
                            <button className="btn3">New</button>
                        </div>
                        <div className="uniservaled_uni3">
                            <input type="checkbox" className="inp"/>
                            <h3 className="uniservaled_h3">Update ticket report</h3>
                            <button className="btn4">Default</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
