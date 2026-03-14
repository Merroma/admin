import Dashboard from "../../components/Dashboard";
import Header from "../../components/Header";
import All from "../../components/All";

function Tickets() {
  return (

    <div className="over_wrapper">
      <Dashboard />
      <div className="info">
        <Header />
        <All />
      </div>
    </div>
  )
}

export default Tickets;