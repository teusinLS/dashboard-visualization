// npm
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlusCircle,
	faSortDown,
	faExclamation,
	faUpload,
	faArrowsAltH,
	faArrowsAltV,
	faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, Item, animation, MenuProvider, theme } from "react-contexify";
import xlsx from "xlsx";

import api from "../../src/services/api";

// style
import * as S from "../../src/style/dashboard";

// default
export default function NewSheet() {
	// states
	const [excelFile, setExcelFile] = useState({});
	const [workbook, setWorkbook] = useState({});
	const [selectedSheet, setSelectedSheet] = useState("");
	const [data, setData] = useState({});

	// functions
	useEffect(() => {
		// file not selected
		if (excelFile.name !== undefined) {
			loadExcel();
		}
	}, [excelFile]);

	useEffect(() => {
		if (workbook.Sheets !== undefined) {
			setData(
				xlsx.utils.sheet_to_json(workbook.Sheets[selectedSheet], {
					defval: "",
					blankrows: false,
					raw: false,
				}),
			);
		}
	}, [workbook, selectedSheet]);

	// load excel after uploading
	function loadExcel() {
		const reader = new FileReader();
		const blob = new Blob([excelFile], { type: "text/plain" });

		reader.readAsArrayBuffer(blob);
		reader.onload = (e) => {
			const data = new Uint8Array(reader.result);
			const wb = xlsx.read(data, { type: "array" });

			setSelectedSheet(wb.SheetNames[0]);
			setWorkbook(wb);
		};
	}

	function changeSheet(e) {
		setSelectedSheet(e.target.value);
	}

	async function addDataArchive(e) {
		e.preventDefault();

		const name = excelFile.name;
		const id_user = 1;
		const path = "zas";

		api
			.post("/dashboard/add", { name, id_user, path, data })
			.then((req, res) => {
				console.log(req.data);
				console.log(req.body);
			});
	}

	// context-menu
	const deleteRow = ({ event, props }) => {
		const row = event.target.dataset.row;
		const dataCopy = [...data];

		dataCopy.splice(row, 1);
		setData(dataCopy);
	};

	const deleteColumn = ({ event, props }) => {
		const column = event.target.dataset.column;
		const dataCopy = [...data];
		const nameColumnFirstRow = Object.keys(dataCopy[0])[column];
		const nameColumnSecondRow =
			dataCopy[1] !== undefined ? Object.keys(dataCopy[1])[column] : "";

		if (nameColumnFirstRow !== nameColumnSecondRow) {
			delete dataCopy[0][nameColumnFirstRow];
		}

		dataCopy.map((i) => {
			nameColumnSecondRow !== ""
				? delete i[nameColumnSecondRow]
				: delete i[nameColumnFirstRow];
		});

		setData(dataCopy);
	};

	const promoteHeaders = ({ event, props }) => {
		const row = event.target.dataset.row;
		const newHeaderItems = Object.values(data[row]);
		const newHeader = [];
		const dataCopy = [...data];

		dataCopy.splice(row, 1);

		dataCopy.map((i, key) => {
			let rowContent = Object.values(i);
			rowContent.map((j, k) => {
				newHeader[key] === undefined ? (newHeader[key] = {}) : "";
				newHeaderItems[k] === ""
					? (newHeader[key][k] = j)
					: (newHeader[key][newHeaderItems[k]] = j);
			});
		});

		setData(newHeader);
	};

	const CtxMenu = () => (
		<Menu
			id='menu_id'
			className='ctxMenu'
			theme={theme.dark}
			style={{ borderRadius: "3px" }}
			animation={animation.pop}>
			<Item onClick={deleteRow}>
				<div style={{ width: "20px", textAlign: "center" }}>
					<FontAwesomeIcon
						style={{ width: "20px" }}
						className='menu-icon'
						icon={faArrowsAltH}
					/>
				</div>
				&nbsp; Excluir linha
			</Item>
			<Item onClick={deleteColumn}>
				<div style={{ width: "20px", textAlign: "center" }}>
					<FontAwesomeIcon
						style={{ width: "10px" }}
						className='menu-icon'
						icon={faArrowsAltV}
					/>
				</div>
				&nbsp; Excluir coluna
			</Item>
			<Item onClick={promoteHeaders}>Promover para cabeçalho</Item>
		</Menu>
	);

	return (
		<>
			<S.Box>
				<form>
					<label htmlFor='file-upload'>
						<FontAwesomeIcon className='icon' icon={faPlusCircle} /> Adicionar
						Planilha
					</label>
					<input
						type='file'
						id='file-upload'
						onChange={(e) =>
							e.target.value !== "" ? setExcelFile(e.target.files[0]) : ""
						}
					/>
				</form>
			</S.Box>

			<S.TableBox>
				{excelFile.name !== undefined &&
				workbook.SheetNames !== undefined &&
				Object.keys(data).length >= 1 &&
				Object.keys(data[0]).length >= 1 ? (
					<>
						<S.InfoBox>
							<S.LeftBox>
								<S.Info>
									<h4>Nome do arquivo:</h4>
									<span>{excelFile.name}</span>
								</S.Info>

								<S.Info>
									<h4>Planilhas:</h4>
									<select
										value={selectedSheet}
										onChange={(e) => changeSheet(e)}>
										{workbook.SheetNames.map((i, key) => (
											<option key={key}>{i}</option>
										))}
									</select>
									<FontAwesomeIcon className='icon' icon={faSortDown} />
								</S.Info>

								<small>
									<FontAwesomeIcon className='icon' icon={faExclamation} />
									Segure a tecla Shift e role o scroll do mouse para arrastar a
									tabela
								</small>
							</S.LeftBox>

							<S.RightBox>
								<form onSubmit={(e) => addDataArchive(e)}>
									<button type='submit'>
										<FontAwesomeIcon className='icon' icon={faUpload} />{" "}
										Carregar
									</button>
								</form>
							</S.RightBox>
						</S.InfoBox>

						<S.Table>
							<table>
								<thead>
									<tr>
										{Object.keys(data[0]).map((i, key) => (
											<td key={key}>{i}</td>
										))}
									</tr>
								</thead>

								<MenuProvider id='menu_id' component='tbody'>
									{Object.values(data).map((i, keyRow) => (
										<tr key={keyRow}>
											{Object.values(i).map((j, key) => (
												<td data-row={keyRow} data-column={key} key={key}>
													{j}
												</td>
											))}
										</tr>
									))}
								</MenuProvider>
								<CtxMenu />
							</table>
						</S.Table>
					</>
				) : (
					""
				)}
			</S.TableBox>

			<S.MoveUp onClick={() => window.scrollTo(0, 0)}>
				<FontAwesomeIcon className='icon' icon={faArrowUp} />
			</S.MoveUp>
		</>
	);
}
