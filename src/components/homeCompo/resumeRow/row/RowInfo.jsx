import React, { Fragment } from "react";
import TwoRow from "./TwoRow";
import {  } from "@fortawesome/free-solid-svg-icons";

function RowInfo(props) {
  return (
    <>
      <div>
        {props.data.map((item, index) => (
          <Fragment key={index}>
            <TwoRow
              icon={item.icon}
              title={item.title}
              about={item.about}
              year={item.year}
              description={item.description}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default RowInfo;
