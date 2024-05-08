import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};

export default Result;
