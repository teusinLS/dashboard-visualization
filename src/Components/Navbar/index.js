// npm
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

// style
import * as S from "./style";

// default
export default function Navbar() {
	return (
		<S.Container>
			<S.Nav>
				<S.LogoBox>
					<p>Logo</p>
					{/* <img src='/img/logo.png' alt='Logo' /> */}
				</S.LogoBox>

				<S.Lista>
					<Link href='/'>
						<S.Item>
							<FontAwesomeIcon className='icon' icon={faTachometerAlt} />
							Home
						</S.Item>
					</Link>
					<Link href='/dashboard/new'>
						<S.Item>
							<FontAwesomeIcon className='icon' icon={faPlusCircle} />
							Adicionar Planilha
						</S.Item>
					</Link>
				</S.Lista>
			</S.Nav>
		</S.Container>
	);
}
