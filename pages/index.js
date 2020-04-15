// npm
import React, { useState, useEffect } from "react";
import Rodal from "rodal";
import Router from "next/router";
import { ResponsiveBar } from "@nivo/bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";

import api from "../src/services/api";

// style
import * as S from "../src/style/home";

// default
export default function Home() {
	// states
	const [data, setData] = useState([]);
	const [visible, setVisible] = useState(false);
	const [selectedData, setSelectedData] = useState([]);
	const [graphicOptions, setGraphicOptions] = useState(false);
	const [graphicData, setGraphicData] = useState([]);

	// functions
	useEffect(() => {
		async function loadData() {
			await api.get("/dashboard", {}).then((req, res) => {
				setData(req.data);
			});
			// .catch((error) => {
			// 	return Router.push("/login");
			// });
		}

		loadData();
	}, []);

	const MyResponsiveBar = (data) => (
		<ResponsiveBar
			data={data}
			keys={["Quantidade"]}
			indexBy='ID_Cliente'
			margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
			padding={0.3}
		/>
	);

	function createGraphic(id) {
		setGraphicOptions(true);
	}

	function previewGraphic() {}

	return (
		<>
			<S.AddNewView
				onClick={() => {
					setSelectedData(data[0].data);
					setVisible(true);
				}}>
				<span>Novo gráfico</span>
				<FontAwesomeIcon className='icon' icon={faPlus} />
			</S.AddNewView>

			<S.Modal>
				{Object.keys(data).length !== 0 ? (
					<Rodal
						className='modal'
						visible={visible}
						showCloseButton={true}
						onClose={() => setVisible(false)}
						width={1200}
						height={700}>
						{graphicOptions ? (
							<>
								<S.SelectBox>
									<div>
										<span className='text'>Eixo X: </span>
										<select>
											{Object.keys(selectedData[0]).map((i, key) => (
												<option key={key}>{i}</option>
											))}
										</select>
									</div>

									{/* ID */}
									<div>
										<span className='text'>Eixo Y: </span>
										<select>
											{Object.keys(selectedData[0]).map((i, key) => (
												<option key={key}>{i}</option>
											))}
										</select>
									</div>

									<div>
										<span className='text'>Valores: </span>
										<select>
											{Object.keys(selectedData[0]).map((i, key) => (
												<option key={key}>{i}</option>
											))}
										</select>
									</div>

									<button onClick={() => previewGraphic()}>
										Visualizar gráfico
									</button>
								</S.SelectBox>

								<S.GraphicVisualization></S.GraphicVisualization>
							</>
						) : (
							<>
								<span className='text'>Escolha os dados: </span>
								<select
									onChange={(e) => setSelectedData(data[e.target.value].data)}>
									{data.map((i, key) => (
										<option value={key} key={key}>
											{i.name}
										</option>
									))}
								</select>
								<FontAwesomeIcon className='icon' icon={faSortDown} />

								<br />
								<br />
								<span>Selecione o gráfico: </span>
								<S.GraphicSection>
									<div class='row'>
										<S.GraphicBox onClick={() => createGraphic(1)}>
											<img src='/img/areabump.jpg' />
											<span>Area Bump</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/bar.jpg' />
											<span>Bars</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/bubble.jpg' />
											<span>Bubble</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/bullet.jpg' />
											<span>Bullet</span>
										</S.GraphicBox>
									</div>

									<div class='row'>
										<S.GraphicBox>
											<img src='/img/calendar.jpg' />
											<span>Calendar</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/chord.jpg' />
											<span>Chord</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/choropleth.jpg' />
											<span>Choropleth</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/geomap.jpg' />
											<span>Geomap</span>
										</S.GraphicBox>
									</div>

									<div class='row'>
										<S.GraphicBox>
											<img src='/img/heatmap.jpg' />
											<span>Heatmap</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/line.jpg' />
											<span>Line</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/network.jpg' />
											<span>Network</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/Parallel.jpg' />
											<span>Parallel</span>
										</S.GraphicBox>
									</div>

									<div class='row'>
										<S.GraphicBox>
											<img src='/img/pie.jpg' />
											<span>Pie</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/radar.jpg' />
											<span>Radar</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/Sankey.jpg' />
											<span>Sankey</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/scatter.jpg' />
											<span>Scatter</span>
										</S.GraphicBox>
									</div>

									<div class='row'>
										<S.GraphicBox>
											<img src='/img/Stream.jpg' />
											<span>Stream</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/sunburst.jpg' />
											<span>Sunburst</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/swarm.jpg' />
											<span>Swarm</span>
										</S.GraphicBox>
										<S.GraphicBox>
											<img src='/img/treemap.jpg' />
											<span>Treemap</span>
										</S.GraphicBox>
									</div>

									<div class='row'>
										<S.GraphicBox>
											<img src='/img/voronoi.jpg' />
											<span>Voronoi</span>
										</S.GraphicBox>
									</div>
								</S.GraphicSection>
							</>
						)}
					</Rodal>
				) : (
					""
				)}
			</S.Modal>
		</>
	);
}
