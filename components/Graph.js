import React from "react";

import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const randomPoints = [
	[76, 20, 89, 90, 21, 76, 89, 12, 82, 0, 51],
	[76, 89, 12, 82, 0, 32, 20, 89, 90, 21, 76],
	[16, 90, 39, 10, 19, 41, 82, 76, 51, 97, 61],
	[76, 89, 12, 82, 0, 32, 20, 89, 90, 21, 76],
	[16, 90, 39, 10, 19, 41, 82, 76, 51, 97, 61],
];

const getRandomPoints = () => {
	const randomInt = Math.floor(Math.random() * 4) + 1;
	return randomPoints[randomInt];
};

const data = {
	Labels: [
		"9:15 PM",
		"11:15 PM",
		"1:15 PM",
		"3:15 PM",
		"5:15 AM",
		"7:15 PM",
		"9:15 PM",
	],
	datasets: [
		{
			fill: false,
			lineTension: 0.1,
			backgroundColor: "red",
			borderColor: "#3773f5",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "#3773f5",
			pointBackgroundColor: "#3773f5",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "#3773f5",
			pointHoverBorderColor: "#3773f5",
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: getRandomPoints(),
		},
	],
};
const options = {
	plugins: {
		legend: {
			display: false,
		},
	},
};

const Graph = () => {
	return <Line data={data} options={options} width={400} height={150} />;
};

export default Graph;
