
import React from "react"
import "../App.css"
import DealsMileStone from "./DealsMileStone"
import MyDeals from "./MyDeals"
import NumberCards from "./NumberCards"
import RevenueGraph from "./RevenueGraph"
import TaskReport from "./TaskReport"


// import FunnelChartContainer from "./FunnelChartContainer.js"

export default function MainArea(props){
    
      
      
                                  
          
    return (
      
          
          <div className="grid-container">
              <h1 className="dash-heading">
                Dashboard
              </h1>
              <div className="numbers-div">
                <NumberCards/>
              </div>
              <div>
                <MyDeals></MyDeals>
              </div>
              <div>
                <DealsMileStone></DealsMileStone>
              </div>
              <div className="rev-graph">
                <RevenueGraph > </RevenueGraph>
              </div>
              <div>
              <TaskReport></TaskReport>

              </div>
              
        </div> 
      
      
    )
}