

"use client"; // ✅ Add this at the top

import { useSelector } from "react-redux";
import Counter from "@/component/counter";

const DisplayCounter = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <Counter />   
  );
};

export default DisplayCounter;
