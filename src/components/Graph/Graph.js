import React from 'react'
import './Graph.css'

const Graph = (props) => {
  return (
    <div className="graph">
        <img src={props.imgSrc} alt={props.alt} />
    </div>
  )
}

export default Graph