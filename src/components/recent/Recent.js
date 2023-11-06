import React, { Fragment } from "react";
import Recents from "./Recents";
import { useSelector } from "react-redux";

const Recent = () => {
  const data = useSelector((state) => state.table.data);
  console.log(data,'tabbbbbbbbbbbbb')
 
  return (
    <Fragment>
      {data.map((data) => (
        <Recents name={data.name} depart={data.depart} date={data.date} />
      ))}
    </Fragment>
  );
};

export default Recent;
