// npm
import styled from "styled-components";

// export
export const AddNewView = styled.div`
	display: flex;
	position: absolute;
	width: 50px;
	height: 50px;
	right: 20px;
	border: 1px solid #eee;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	z-index: 3;
	transition: all 0.3s;

	span {
		padding-right: 20px;
		opacity: 0;
		visibility: hidden;
		display: none;
		transition: all 0.3s;
		white-space: nowrap;
	}

	.icon {
		width: 20px;
	}

	:hover {
		cursor: pointer;
		width: 200px;
		border-radius: 20px;
		background: #228b22;

		span {
			display: initial;
			opacity: 1;
			visibility: visible;
		}
	}
`;

export const Modal = styled.div`
	.rodal-dialog {
		overflow: auto;
		padding: 25px 30px;
		margin-bottom: 30px;
	}

	.text {
		color: #333;
		font-size: 16px;
		font-weight: 700;
		position: relative;
		bottom: 4px;
	}

	select {
		width: 150px;
		font-size: 16px;
		position: relative;
		left: 10px;
		bottom: 5px;
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
		bottom: 3px;
		right: 14px;
		z-index: 2;
		transition: ease-in-out 0.3s;
		pointer-events: none;
	}

	select,
	option {
		:hover + .icon {
			transform: rotateX(180deg);
			bottom: -5px;
		}
	}
`;

export const GraphicSection = styled.div`
	margin-top: 10px;

	.row {
		margin: 20px 0;
		display: flex;
		justify-content: space-between;
		padding: 15px 0;
	}
`;

export const GraphicBox = styled.div`
	width: 250px;
	height: 200px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	transition: transform 0.3s;
	text-align: center;

	img {
		max-width: 100%;
		height: 100%;
		display: block;
		margin: 0 auto;
		object-fit: cover;
	}

	span {
		font-size: 14px;
	}

	:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
`;

export const SelectBox = styled.div`
	height: 50px;
	align-items: center; 
	display: flex;
	justify-content: space-around;

	button {
		padding: 20px 40px;
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
`;

export const GraphicVisualization = styled.div`
	
`;