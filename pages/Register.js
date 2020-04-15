// npm
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";

import api from "../src/services/api";

// style
import * as S from "../src/style/login";

// default
export default function Login() {
	// state
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// functions
	function registerUser(e) {
		e.preventDefault();

		api.post("/register", { name, email, password }).then((req, res) => {
			if (req.body !== null) {
				const { status, msg } = req.data;

				if (status) {
					toast.success(msg);
					return Router.push("/");
				}

				setPassword("");
				return toast.error(msg);
			}

			setPassword("");
			return toast.error("Houve um erro ao estabelecer conexão. Tente novamente");
		});
	}

	return (
		<S.Box page='register'>
			<S.BoxHeader>
				<h2>Criar nova conta</h2>
			</S.BoxHeader>

			<S.BoxBody>
				<form onSubmit={(e) => registerUser(e)}>
					<S.InputGroup>
						<input type='name' name='name' id='name' placeholder='Nome' onChange={(e) => setName(e.target.value)} required />
					</S.InputGroup>

					<S.InputGroup>
						<input type='email' name='email' id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
					</S.InputGroup>

					<S.InputGroup>
						<input type='password' name='password' id='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} required />
					</S.InputGroup>

					<S.ButtonGroup>
						<input type='submit' value='Registrar' />
					</S.ButtonGroup>
				</form>
			</S.BoxBody>

			<S.BoxFooter>
				<Link href='/login'>
					<a>Voltar</a>
				</Link>
			</S.BoxFooter>
		</S.Box>
	);
}
