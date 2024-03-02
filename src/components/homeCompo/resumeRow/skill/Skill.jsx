import React from 'react'
import ProgressBar from '../../../commonComp/ProgressBar';

function Skill() {
  console.log("skill");
  return (
    <>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px",
        width: "100%",
      }}
    >
      <ProgressBar title="HTML5" progress={90} />
      <ProgressBar title="CSS3" progress={90} />
      <ProgressBar title="Javascript" progress={50} />
      <ProgressBar title="React.js" progress={70} />
      <ProgressBar title="PHP" progress={40} />
      <ProgressBar title="MySQL" progress={70} />
    </div>
    </>
  )
}

export default Skill