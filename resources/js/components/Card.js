import React from "react";

export default function Card(props) {
    let color;
    color = props.Qualified? "green" : "red"

    return (
        <>
            <div >
                <img src="" alt="image" />
                <div>{props.name}</div>
                <div>{props.age}</div>
                <div className={color}></div>
            </div> 
        </>
    )
}