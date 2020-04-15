// npm
import styled from "styled-components";

// style
export const Container = styled.div`
	width: 83%;
	background: #ddd;
	height: 70px;
	margin-left: auto;
	display: flex;
	align-items: center;
	padding: 0 25px;
  justify-content: space-between;

	.icon {
    width: 20px;
    margin-right: 30px;
	}

	h2 {
		color: #333;
	}
`;

export const TitleDiv = styled.div`
  display: flex;
`;

export const UserDiv = styled.div`
  width: 150px;
  ;

  img {
    width: 50px;
    border-radius: 50%;
  }
`;
