import React from "react";
import Card from "../card";
 
const database = [
  {
    id:1,
    name:"Apriana",
    pekerjaan:"Web Dev"
  },
  {
    id:2,
    name:"Cahya",
    pekerjaan:"Android Dev"
  },
  {
    id:3,
    name:"Bowo",
    pekerjaan:"UI/UX Design"
  },
  {
    id:4,
    name:"Setiadi",
    pekerjaan:"Data Science"

  }
]


const Cards = () => {
  const [data] = React.useState(database);
  return(
    <div className="cards">
      {data.map(item=><Card key={item.id} name={item.name} job={item.pekerjaan}/>)}
    </div>
  )
  
}
export default Cards;