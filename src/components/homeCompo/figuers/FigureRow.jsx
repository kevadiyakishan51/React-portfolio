import React from 'react'
import FigureList from './FigureList'
import { figures } from '../../../data/data'

function FigureRow() {
  return (
    <>
        <div
      style={{
        backgroundColor: "rgb(51 60 58) ",
        padding: "80px 0px",
        color: "white",
        marginTop : "150px"
      }}
    >
      <div style={{display: "flex", justifyContent: "space-evenly",}}>
        {figures.map((item, index) => (
          <FigureList
            key={index}
            icon={item.icon}
            title={item.title}
            figure={item.figure}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default FigureRow