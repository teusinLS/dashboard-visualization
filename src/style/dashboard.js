// npm
import styled from "styled-components";

// style
export const Box = styled.div`
	margin: 50px auto 80px auto;
	max-width: 400px;
	text-align: center;

	label {
		padding: 30px;
		background: rgb(40, 64, 84);
		border-radius: 5px;
		font-size: 16px;
		color: #fff;

		:hover {
			cursor: pointer;
		}

		:active {
			position: relative;
			top: 1px;
		}
	}

	input[type="file"] {
		display: none;
	}

	.icon {
		width: 30px;
		opacity: 0.75;
		position: relative;
		top: 9px;
		margin-right: 10px;
	}
`;

export const TableBox = styled.div`
	small {
		opacity: 70%;

		.icon {
			width: 5px;
			margin-right: 5px;
		}
	}
`;

export const InfoBox = styled.div`
	display: flex;
`;

export const LeftBox = styled.div`
	margin-right: auto;
`;

export const RightBox = styled.div`
	margin-left: auto;
	align-self: center;
	margin-right: 50px;

	button {
		padding: 20px 55px;
		transition: ease-in-out 0.3s;
		border: none;
		font-weight: bold;
		font-size: 16px;
		background-color: #3c6f82;
		border-radius: 5px;
		display: inline-block;
		color: #ffffff;
		text-decoration: none;
		text-shadow: 0px 1px 0px #3d768a;

		:hover {
			background-color: #4285f4;
			cursor: pointer;
		}

		:active {
			position: relative;
			top: 1px;
		}
	}

	.icon {
		width: 16px;
		position: relative;
		right: 5px;
	}
`;

export const Info = styled.div`
	padding: 15px 0;
	display: flex;

	h4 {
		color: #6c757d;
		font-size: 16px;
	}

	span {
		color: #333;
		font-size: 20px;
		font-weight: 700;
		position: relative;
		bottom: 4px;
		left: 7px;
	}

	select {
		width: 150px;
		font-size: 18px;
		position: relative;
		left: 10px;
		bottom: 11px;
		padding: 3px;
		border: 1px solid #ccc;
		border-radius: 3px;
		appearance: none;
		font-weight: 700;
		color: #333;
	}

	.icon {
		color: #222;
		position: relative;
		width: 15px;
		bottom: 17px;
		right: 14px;
		z-index: 2;
		transition: all 0.3s;
		pointer-events: none;
	}

	select,
	option {
		:hover + .icon {
			transform: rotateX(180deg);
			bottom: 8px;
		}
	}
	
	small {
		opacity: 70%;
	}
`;

export const Table = styled.div`
	overflow: auto;
	margin-top: 5px;

	table {
		border-collapse: collapse;
		width: 100%;

		td {
			border: 1px solid #dcdcdc;
		}

		thead {
			tr {
				background: #1b1f24;
				border-bottom: 5px solid #dddddd;
				color: #fff;
				text-align: center;
				height: 50px;

				td {
					min-width: 100px;
				}
			}
		}

		tbody {
			tr {
				transition: ease-in-out 0.1s;
				background: #fff;

				:nth-child(even) {
					background: #f8f8ff;
				}

				:hover {
					background: #eee;
				}

				td {
					padding: 10px 20px;
					height: 60px;
				}
			}
		}
	}
`;

export const MoveUp = styled.div`
	display: flex;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: transparent;
	border: 2px solid #ddd;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 20px;
	right: 20px;

	.icon {
		width: 25px;
		color: #aaa;
		transition: ease-in-out 0.3s;
	}

	:hover {
		cursor: pointer;

		.icon {
			color: #3c6f82;
		}
	}
`;
