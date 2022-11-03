import React from "react";
import response from "./data";
import Card from "./Card"


export default function Main() {
  let cards= response.map((items) => { return(
    <Card
      key={items.name}
      {...items}
    />)
  })
  //  console.log(response.map((item)=>{return <Card/>}))

return (
        <>
    
    <p className="flex justify-around">
      {cards}
    </p>
    
        </>
    )
}