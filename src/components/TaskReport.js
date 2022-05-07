
import React from "react"
import { BarChart,Legend,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from "recharts"

    
export default function TaskReport(){
    const data = [
        { name: "Bharath", x: 30, y: 50 },
        { name: "Ashray", x: 12, y: 8 },
        { name: "Abhishek", x: 15, y: 80 },
        { name: "Bijoy", x: 35, y: 60 },
        { name: "Jaithra", x: 54, y: 4 },
        { name: "Sujay", x: 17, y: 28 },
        { name: "Ashitha", x: 2, y: 68 },
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
                <Bar name="task1" dataKey="x" stackId="a" fill="aqua" />
                <Bar name="task2" dataKey="y" stackId="a" fill="green" />
            </BarChart>
        </ResponsiveContainer>
    </div>
      )
}
