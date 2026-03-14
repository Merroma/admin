import Dashboard from "../../components/Dashboard";
import Header from "../../components/Header";
import "../../assets/css/overview.css"
import Box from "../../components/Box";
import Today from "../../components/Today";
import Tasks from "../../components/Tasks";

function Overview() {
  return (

    <div className="over_wrapper">
      <Dashboard />
      <div className="info">
        <Header />
        <Box />
        <Today />
        <Tasks />
      </div>
    </div>
  )
}

export default Overview;