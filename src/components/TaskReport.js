
import React from "react"
import { BarChart,Legend,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from "recharts"

    
export default function TaskReport(){
    const data = [
        { name: "A", x: 30, y: 70 },
        { name: "B", x: 12, y: 88 },
        { name: "C", x: 15, y: 85 },
        { name: "D", x: 35, y: 65 },
        { name: "E", x: 54, y: 46 },
        { name: "F", x: 72, y: 28 },
        { name: "G", x: 32, y: 68 }
    ];
  
    
      
                                  
      return (
        <div>
        <h1 className="div-heading">Revenue Graph</h1>
        
        <ResponsiveContainer height={300}>
              
            <BarChart  data={data} >
                <CartesianGrid />
                <XAxis dataKey="name" />
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
