import React ,{useState}from 'react'
import '../App.css';


function TabsC() {
    const[toggleState,setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div>
       <div className="bloc-tabs">
        <a href="#name"><button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}> Reliance Industries </button></a>
        <a href="#chart"><button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}> Chart </button></a>
        <a href="#analysis"><button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}> Analysis </button></a>
        <a href="#peers"><button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}> Peers </button></a>
        <a href="#quaters"><button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}> Quaters </button></a>
        <a href="#pandl"><button className={toggleState === 6 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(6)}> Profit & Loss </button></a>
        <a href="#balance"><button className={toggleState === 7 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(7)}> Balance Sheet </button></a>
        <a href="#cashflow"><button className={toggleState === 8 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(8)}> Cash FLow </button></a>
        <a href="#ratios"><button className={toggleState === 9 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(9)}> Ratios </button></a>
        <a href="#investors"><button className={toggleState === 10 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(10)}> Investors </button></a>
        <a href="#documents"><button className={toggleState === 11 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(11)}> Documents </button></a>

      </div>
    </div>
  )
}

export default TabsC
