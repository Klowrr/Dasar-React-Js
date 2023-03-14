import React from "react";

const Tombol = (props) => {
  return (
    <button onClick={()=>props.clicked()}>Click Me!</button>
  )
}

export default Tombol;