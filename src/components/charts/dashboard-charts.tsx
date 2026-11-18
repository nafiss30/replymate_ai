"use client";

import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { intentSummary, messageVolume, orderSummary } from "@/data/mock-data";

const tooltipStyle = { borderRadius: 12, border: "1px solid #FED7AA", boxShadow: "0 10px 25px rgba(120,53,15,.08)", fontSize: 12 };

export function MessageVolumeChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={messageVolume} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid stroke="#FFEDD5" vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#78716C", fontSize: 12 }} dy={8} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#A8A29E", fontSize: 11 }} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "#FED7AA" }} />
        <Line type="monotone" dataKey="messages" stroke="#171717" strokeWidth={3} dot={{ fill: "#171717", r: 3 }} activeDot={{ r: 5 }} />
        <Line type="monotone" dataKey="aiReplies" stroke="#F97316" strokeWidth={3} dot={{ fill: "#F97316", r: 3 }} activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function OrderStatusChart() {
  const colors = ["#F97316", "#171717", "#C2410C", "#FDBA74", "#FED7AA"];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={orderSummary} dataKey="value" nameKey="name" innerRadius={55} outerRadius={82} paddingAngle={3} strokeWidth={0}>
          {orderSummary.map((entry, index) => <Cell key={entry.name} fill={colors[index]} />)}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function IntentChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={intentSummary} layout="vertical" margin={{ top: 5, right: 10, left: 8, bottom: 0 }}>
        <CartesianGrid stroke="#FFEDD5" horizontal={false} />
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="intent" width={82} axisLine={false} tickLine={false} tick={{ fill: "#57534E", fontSize: 11 }} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#FFF7ED" }} />
        <Bar dataKey="count" fill="#F97316" radius={[0, 8, 8, 0]} barSize={16} />
      </BarChart>
    </ResponsiveContainer>
  );
}
