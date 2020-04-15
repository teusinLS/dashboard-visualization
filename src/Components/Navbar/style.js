// npm
import styled from "styled-components";

// styles
export const Container = styled.div`
	height: 100vh;
	width: 17%;
	position: fixed;
`;

export const Nav = styled.nav`
	width: 100%;
	height: 100%;
	background: #284054;
	border-radius: 3px;
`;

export const LogoBox = styled.div`
	height: 70px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #284054;
	margin-bottom: 20px;

	img {
		max-height: 100%;
	}
`;

export const Lista = styled.ul`
	list-style: none;
`;

export const Item = styled.li`
	padding: 15px 20px;
	border-bottom: 2px solid #ddd;
	color: #fff;
	font-weight: bold;
	font-size: 16px;
	transition: ease-in-out .3s;

	.icon {
		width: 16px;
		margin-right: 7px;
		position: relative;
		top: 2px;
	}

	:hover {
		background: #1e2f3d;
		cursor: pointer;
	}
`;
