import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const TwoLevelPieChart = (props) => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      <Pie 
        data={data}
        dataKey="numberOfCustomers"
        cx="50%"
        cy="50%"
        outerRadius={60}
        fill="#8884d8"
      />
    </PieChart>
    </ResponsiveContainer>
  );
};

export default TwoLevelPieChart;
