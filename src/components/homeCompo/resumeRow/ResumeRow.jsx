// ResumeRow.js
import React from "react";
import PageInfo from "../../commonComp/PageInfo";
import Cards from "../../commonComp/Cards";
import RowInfo from "./row/RowInfo";
import Skill from "./skill/Skill";
import { arrEducation, arrExpericence } from "../../../data/data";

function ResumeRow() {
  return (
    <>
      <PageInfo bgTitle="Resume" mainTitle="My Resume" />

      <div style={{width: "85%", margin: "auto"}}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "36% 36% 25%",
          height: "500px",
          gap: "18px",
          justifyContent: "center",
          alignContent: "space-evenly",
        }}
      >
        <Cards title={"My Education"} content={<RowInfo data={arrEducation} />} />
        <Cards title={"My Experience"} content={<RowInfo data={arrExpericence} />} />
        <Cards title={"My Skills"} content={<Skill />} />
      </div>
      </div>
    </>
  );
}

export default ResumeRow;
