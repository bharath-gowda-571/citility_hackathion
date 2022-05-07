import React from "react"
import { Tooltip,FunnelChart,Funnel,LabelList,ResponsiveContainer, Legend } from "recharts"

export default function MyDeals(){
    const data = [
      {
        "value": 0,
        "name": "Demo Scheduled",
        "fill": "#83a6ed"
      },
        {
          "value": 500,
          "name": "New",
          "fill": "#8884d8"
        },
        
        {
          "value": 1200,
          "name": "Demo Completed",
          "fill": "#8dd1e1"
        },
        {
          "value": 1200,
          "name": "Interested",
          "fill": "#82ca9d"
        }
      ]
      
                                  
      
    return(
        <div>
            <h1 className="div-heading">My Deals Funnel</h1>
            <ResponsiveContainer height={300}>
            <FunnelChart >
                <Tooltip />
                <Funnel
                dataKey="value"
                data={data}
                isAnimationActive
                >
                <LabelList  fill="#000" position="right" stroke="none" dataKey="value" formatter={(data)=>{
                  return("$"+data)
                }} />
                </Funnel>
            </FunnelChart>
            </ResponsiveContainer>
               
        </div>
    )
}