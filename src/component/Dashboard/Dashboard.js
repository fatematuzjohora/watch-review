import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      id: 2,
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      id: 3,
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      id: 4,
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      id: 5,
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      id: 6,
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="grid md:grid-cols-2">
      <div className="">
        <h1 className="text-center text-sky-400 font-bold text-2xl">
          Sell in month
        </h1>
        <ResponsiveContainer width={683} height="90%">
          <AreaChart
            width={630}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="">
        <h1 className="text-center text-sky-400 font-bold text-2xl">
          Investment vs Revenue
        </h1>
        <ResponsiveContainer width={683} height="90%">
          <BarChart width={630} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
            <Bar dataKey="investment" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;