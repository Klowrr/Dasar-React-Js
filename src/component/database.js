import React from "react";

const database = [
  {
    id:1,
    name:"Apriana"
  },
  {
    id:2,
    name:"Cahya"
  },
  {
    id:3,
    name:"Bowo"
  },
  {
    id:4,
    name:"Setiadi"
  }
]

const MenampilkanData = () => {
  const [data] = React.useState(database)
  return (
    <ul>
      {data.map(item=><li key={item.id}>{item.name}</li>)}
    </ul>
  )
}

export default MenampilkanData;