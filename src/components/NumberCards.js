import React  from "react";
import NumberCard from "./NumberCard";
import "../App.css"

export default function NumberCards(){
    return (<div className="number-card-div">
        <NumberCard title="New contacts" value="120" />
        <NumberCard title="Won from 9 deals" value="$545"/>
        <NumberCard title="Campaign email sent" value="1008"/>
        <NumberCard title="New deals worth $5318" value="30"/>
    </div>)
}