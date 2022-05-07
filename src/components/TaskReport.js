
import React from "react"
import { BarChart,Legend,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from "recharts"

    
export default function TaskReport(){
    const data = [
        { name: "Mar", x: 30, y: 70 },
        { name: "Apr", x: 12, y: 88 },
        { name: "May", x: 15, y: 85 },
        { name: "Jun", x: 35, y: 65 },
        { name: "Jul", x: 54, y: 46 },
        { name: "Aug", x: 72, y: 28 },
        { name: "Sep", x: 32, y: 68 },
    ];
  
    
      
                                  
      return (
        <div>
        <h1 className="div-heading">Task Report</h1>
        
        <ResponsiveContainer height={300}>
              
            <BarChart  data={data} >
                <CartesianGrid />
                <XAxis dataKey="name"  />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="x" stackId="a" fill="aqua" />
                <Bar dataKey="y" stackId="a" fill="green" />
            </BarChart>
        </ResponsiveContainer>
    </div>
      )
}
