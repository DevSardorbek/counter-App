import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inc } from "../../context/counterSlice";

const Increment = () => {
  const [value, setValue] = useState(""); // Qiymat uchun holat yaratamiz
  let dispatch = useDispatch();

  const handleIncrement = () => {
    if (value === "") {
      // Agar qiymat kiritilmagan bo'lsa, 1 qo'shamiz
      dispatch(inc(1));
    } else {
      dispatch(inc(parseInt(value))); // Aks holda, kiritilgan qiymatni qo'shamiz
    }
  };

  return (
    <div className="incement">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
      />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Increment;
