import React from "react"
import { Legend, Pie,PieChart,ResponsiveContainer } from "recharts"

export default function DealsMileStone(){
    
      const data02 = [
        {
          "name": "Won",
          "value": 0,
          "fill": "#a4de6c"
        },
        {
          "name": "New",
          "value": 14,
          "fill": "#82ca9d"
        },
        {
          "name": "Demo Scheduled",
          "value": 32,
          "fill": "#8dd1e1"
        },
        {
          "name": "Demo Completed",
          "value": 32,
          "fill": "#a4de6c"
        },
        {
          "name": "Demo No Show",
          "value": 0,
          "fill":"purple"
        },
        {
          "name": "Intersted",
          "value": 54,
          "fill":"red"
        },
        {
          "name": "Abandoned",
          "value": 0,
          "fill":"lightblue"
        }
      ];
          
      
                                  
        
    return(
        <div>
            <h1 className="div-heading">My Deals By MileStone</h1>
            
            <ResponsiveContainer height={300}  >
                <PieChart>
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#fff" label />
                    <Legend></Legend>
                    
                </PieChart>   
            </ResponsiveContainer>
        </div>
    )
}