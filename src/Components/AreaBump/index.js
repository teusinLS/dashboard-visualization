// npm
import React from "react";
import { ResponsiveAreaBump } from "@nivo/bump";

// graphic
const AreaBump = (data) => {
	const d = data[0].data;
	console.log(data)

	return (
		<>
			<ResponsiveAreaBump
				data={data}
				margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
				spacing={8}
				colors={{ scheme: "nivo" }}
				blendMode='multiply'
				startLabel='ID_Cliente'
				axisTop={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "",
					legendPosition: "middle",
					legendOffset: -36,
				}}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "",
					legendPosition: "middle",
					legendOffset: 32,
				}}
			/>
		</>
	);
};

export default AreaBump;
