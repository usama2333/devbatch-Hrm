import React, { Fragment,useLayoutEffect } from "react";
import Recents from "./Recents";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";

const Recent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);
  console.log(data,'tabbbbbbbbbbbbb')
  useLayoutEffect(()=>{
    // dispatch(tableActions.setData(data));
  },[])
  return (
    <Fragment>
      {data.map((data) => (
        <Recents name={data.name} depart={data.depart} date={data.date} />
      ))}
    </Fragment>
  );
};

export default Recent;
