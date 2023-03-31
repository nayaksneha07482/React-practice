import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Increment/Decrement counter</h1>
      <h4>using React & Redux</h4>
      <div>
        <a className="quantity_minus" title="Decrement" ><span> - </span></a>
        <input  className="quantity_input" type="text" value="0" />
        <a className="quantity_plus" title="Increment" ><span> + </span></a>
      </div>
    </div>
  )
}
