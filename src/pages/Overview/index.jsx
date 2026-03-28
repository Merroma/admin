import { useState } from "react"
import Dashboard from "../../components/Dashboard";
import Header from "../../components/Header";
import "../../assets/css/overview.css"
import Box from "../../components/Box";
import Today from "../../components/Today";
import Tasks from "../../components/Tasks";
import Moduls from "../../components/Moduls";
import Box2 from "../../components/Box2";
import Box3 from "../../components/Box3";
import Box4 from "../../components/Box4";

function Overview() {
  const [modalOne, setModalOne] = useState(false)
  const [modalTwo, setModalTwo] = useState(false)
  const [modalThree, setModalThree] = useState(false)
  const [modalFour, setModalFour] = useState(false)

  return (
    <div className="over_wrapper">
      <Dashboard />
      <div className="info">
        <Header />
        <div className="box_wrapper">
          <Box setModal={setModalOne} />
          <Box2 setModal={setModalTwo} />
          <Box3 setModal={setModalThree} />
          <Box4 setModal={setModalFour} />
        </div>
        <Moduls modal={modalOne} setModal={setModalOne} title="Unresolved" value="60" />
        <Moduls modal={modalTwo} setModal={setModalTwo} title="Overdue" value="16" />
        <Moduls modal={modalThree} setModal={setModalThree} title="Open" value="43" />
        <Moduls modal={modalFour} setModal={setModalFour} title="On hold" value="64" />
        <Today />
        <Tasks />
      </div>
    </div>
  )
}

export default Overview;