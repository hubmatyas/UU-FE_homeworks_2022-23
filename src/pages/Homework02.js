import React, { useState, useEffect } from "react";
import "./Homeworks.css";

import DigitalClock from "../components/DigitalClock/DigitalClock";
import Counter from "../components/Counter/Counter";

import data from "../data/shopping-center.json";

const Homework02 = () => {
  const [counters, setCounters] = useState(data);
  const [currentHour, getCurrentHour] = useState(new Date().getHours());

  const sum = counters.reduce((acc, item) => acc + item.numberOfCustomers, 0);

  useEffect(() => {
    setInterval(() => getCurrentHour(), 60000);
  }, []);

  return (
    <div className="homework-wrapper">
      <h1>Homework02</h1>
      <DigitalClock />

      <h3>Počet nakupujících v obchodě: {sum}</h3>
      <div className="buttons-wrapper">
        {counters.map((value, index) => (
          <Counter
            key={index}
            title={value.storeName}
            value={value.numberOfCustomers}
            limit={value.customerLimit}
            disabled={currentHour >= 22 || currentHour <= 6 ? true : false}
            onIncrement={() => {
              const countersCopy = [...counters];
              countersCopy[index].numberOfCustomers += 1;
              setCounters(countersCopy);
            }}
            onDecrement={() => {
              const countersCopy = [...counters];
              countersCopy[index].numberOfCustomers -= 1;
              setCounters(countersCopy);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Homework02;
