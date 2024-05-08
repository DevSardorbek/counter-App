import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec } from "../../context/counterSlice";

const Decrement = () => {
  const [decvalue, setDecvalue] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handeDec = () => {
    let decreaseAmount = parseInt(decvalue);
    if (decvalue === "") {
      decreaseAmount = 1;
    }
    if (count - decreaseAmount < 0) {
      dispatch(dec(count));
    } else {
      dispatch(dec(decreaseAmount));
    }
  };

  return (
    <div className="decrement">
      <input
        value={decvalue}
        onChange={(e) => setDecvalue(e.target.value)}
        type="number"
      />
      <button disabled={count <= 0} onClick={handeDec}>
        Decrement
      </button>
    </div>
  );
};

export default Decrement;
