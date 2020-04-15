// npm
import styled from "styled-components";

// style
export const Box = styled.div`
	width: 350px;
	height: ${props => props.page === "register" ? "530px" : "450px"};
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
	margin: 0 auto;
	margin-top: 100px;
	border-radius: 5px;
`;

export const BoxHeader = styled.div`
	display: flex;
	width: 100%;
	height: 100px;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #ddd;
	margin-bottom: 50px;
`;

export const BoxBody = styled.div`
	padding: 0 20px;

	form {
		width: 100%;
	}
`;

export const BoxFooter = styled.div`
	text-align: right;
	padding: 20px 20px;

	a {
		display: block;
		font-size: 14px;
		padding: 3px 0;
		color: #0077ff;
		text-decoration: none;
	}
`;

export const InputGroup = styled.div`
	position: relative;
	margin-bottom: 40px;
	width: 100%;

	input {
		width: 100%;
		border: none;
		border-bottom: 2px solid #333;
		background: transparent;
		color: #222;
		transition: all 0.3s;
		padding: 10px 0;
		font-size: 16px;

		:focus {
			border-color: #0077ff;
		}
	}
`;

export const ButtonGroup = styled.div`
	text-align: center;

	input {
		padding: 20px 50px;
		border: none;
		border-radius: 5px;
		background: #0077ff;
		transition: ease-in-out 0.3s;
		color: #fff;
		font-weight: bold;
		font-size: 16px;

		:hover {
			background: #005fcc;
			cursor: pointer;
		}
	}
`;
