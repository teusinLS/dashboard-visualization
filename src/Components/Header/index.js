// npm
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// style
import * as S from "./style";

// default
export default function Header() {
	return (
		<S.Container>
			<S.TitleDiv>
				<FontAwesomeIcon className='icon' icon={faBars} />
				<h2>Título</h2>
			</S.TitleDiv>
			<S.UserDiv>
				<img src='https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg' />
			</S.UserDiv>
		</S.Container>
	);
}
