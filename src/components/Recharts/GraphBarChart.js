import React, {useEffect, useState} from 'react';
import { BarChart, Bar, YAxis, XAxis, Tooltip, CartesianGrid } from 'recharts';


const GraphBarChart = (props) => {

  const [data, setData] = useState();

  useEffect(() => {
    setData(props.data)
  }, [props.data])
  

  return (
        <BarChart
          width={500}
          height={300}
          data={data}
          
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        <XAxis dataKey="year" />
        <YAxis dataKey={props.focus}  />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
          <Bar dataKey={props.focus} fill="#8884d8" animationDuration={200} />
        </BarChart>
  )
}

export default GraphBarChart