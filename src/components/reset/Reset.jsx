import React from "react";
import { useDispatch } from "react-redux";
import { res } from "../../context/counterSlice";

const Reset = () => {
  let dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(res())}>Reset</button>
    </div>
  );
};

export default Reset;
