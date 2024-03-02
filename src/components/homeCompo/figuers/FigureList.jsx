import React from 'react'

function FigureList({ icon, figure, title }) {
  return (
    <>
        <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      <div>{icon}</div>
      <hr style={{ height: "95px" }} />
      <div>
        <h2 style={{ color: "#0bceaf", fontSize: "2.5rem" }}>{figure}</h2>
        <p style={{ marginTop: "8px" }}>{title}</p>
      </div>
    </div>
    </>
  )
}

export default FigureList