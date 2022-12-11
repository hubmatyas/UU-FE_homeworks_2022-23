import React from "react";
import "./Counter.css";

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  title,
  limit,
  disabled,
}) => {
  return (
    <div className={value > limit ? "value-btn full" : "value-btn"}>
      <h4>{title}</h4>
      <div className="controls">
        {value > 0 && (
          <button
            onClick={() => {
              onDecrement();
            }}
          >
            -
          </button>
        )}
        <span className="value">{value}</span>
        {value <= limit && disabled === false && (
          <button
            onClick={() => {
              onIncrement();
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Counter;
