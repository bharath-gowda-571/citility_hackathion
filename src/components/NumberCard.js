import React from "react";
import "../App.css"
export default function NumberCard({title,value}){
    return <div className="num-card">
        <h1>{value}</h1>
        <h3>{title}</h3>
    </div>
}