import React, { Fragment } from "react";
import Recents from "./Recents";
import { userData } from "./style";

const Recent = () => {
  return (
    <Fragment>
      {userData.map((data) => (
        <Recents name={data.name} depart={data.depart} date={data.date} />
      ))}
    </Fragment>
  );
};

export default Recent;
