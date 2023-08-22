import React from 'react';
import {
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';

function AreaComponent() {
  const data = [
    {
      name: 'Jan',
      uv: 0,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 1000,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 900,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2580,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 2200,
      amt: 2181,
    },
    {
      name: 'Dec',
      uv: 2890,
      amt: 2500,
    },
  ];

  return (
    <div>
      <AreaChart
        width={700}
        height={250}
        data={data}
        margin={{ top: 5, right: 50, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='7%' stopColor='#82ca9d' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' />
        <YAxis />
        <CartesianGrid strokeDasharray='' />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='uv'
          stroke='#8884d8'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
        <Area
          type='monotone'
          dataKey='pv'
          stroke='#82ca9d'
          fillOpacity={1}
          fill='url(#colorPv)'
        />
      </AreaChart>
    </div>
  );
}

export default AreaComponent;
