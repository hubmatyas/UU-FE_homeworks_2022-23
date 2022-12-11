import React, { useState, useEffect } from "react";
import GraphBarChart from "../components/Recharts/GraphBarChart";
import Counter from "../components/Counter/Counter";

import data from "../data/demographics.json";

const Dashboard = () => {
  const [yearsBack, setYearsBack] = useState(5);
  const [slicedData, setSlicedData] = useState(data);
  useEffect(() => {
    setSlicedData(data.slice(yearsBack * -1));
  }, [yearsBack]);

  return (
    <div className="homework-wrapper">
      <div className="split">
        <h1>Dashboard</h1>
        <Counter
          title={"Kolik let zpátky?"}
          value={yearsBack}
          limit={data.length}
          disabled={false}
          onIncrement={() => {
            let howManyYearsBack;
            howManyYearsBack = yearsBack + 1;
            setYearsBack(howManyYearsBack);
          }}
          onDecrement={() => {
            let howManyYearsBack;
            howManyYearsBack = yearsBack - 1;
            setYearsBack(howManyYearsBack);
          }}
        />
      </div>
      <div className="split">
        <div className="graph-wrapper">
          <h2>Růst populace</h2>
          <GraphBarChart data={slicedData} focus={"averagePopulation"} />
        </div>
        <div className="graph-wrapper">
          <h2>Nově narození</h2>
          <GraphBarChart data={slicedData} focus={"liveBirths"} />
        </div>
      </div>
      <div className="split">
        <div className="graph-wrapper">
          <h2>Zemřelí</h2>
          <GraphBarChart data={slicedData} focus={"deaths"} />
        </div>
        <div className="graph-wrapper">
          <h2>Přirozená změna</h2>
          <GraphBarChart data={slicedData} focus={"naturalChange"} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
