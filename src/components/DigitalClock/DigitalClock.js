import React, { useState, useEffect } from "react";
import "./DigitalClock.css"

const DigitalClock = () => {
const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <h3 className="clock">
      {dateState.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      })}
    </h3>
  );
};

export default DigitalClock;
