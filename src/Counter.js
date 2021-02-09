import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(10);
  const [countBefore, setCountBefore] = useState(9);
  const [countAfter, setCountAfter] = useState(11);
  const [isBefore, setIsBefore] = useState(false);
  const [isAfter, setIsAfter] = useState(false);

  const subtract = () => {
    setIsBefore(true);
    setTimeout(() => {
      setCount(count - 1);
      setCountBefore(countBefore - 1);
      setCountAfter(countAfter - 1);
      setIsBefore(false);
    }, 200);
  };
  const add = () => {
    setIsAfter(true);
    setTimeout(() => {
      setCount(count + 1);
      setCountBefore(countBefore + 1);
      setCountAfter(countAfter + 1);
      setIsAfter(false);
    }, 200);
  };

  return (
    <div id="counter">
      <button onClick={subtract} disabled={isBefore || isAfter}>
        <i className="fas fa-minus"></i>
      </button>
      <span
        data-before={countBefore}
        data-after={countAfter}
        className={`${isBefore ? "before" : ""}${isAfter ? "after" : ""}`}
      >
        {count}
      </span>
      <button onClick={add} disabled={isBefore || isAfter}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default Counter;
