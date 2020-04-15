// npm
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { toast } from "react-toastify";

import api from "../src/services/api";
import * as S from "../src/style/login";

// default
export default function Login() {
	// state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// functions
	function enterAccount(e) {
		e.preventDefault();

		api
			.post("/login", { email, password })
			.then((req, res) => {
				const { message, token } = req.data;

				toast.success(message);
				return Router.push("/");
			})
			.catch((error) => {
				const msg = error.response.data.error;

				setPassword("");
				return toast.error(msg);
			});
	}

	return (
		<S.Box>
			<S.BoxHeader>
				<h2>Login</h2>
			</S.BoxHeader>

			<S.BoxBody>
				<form onSubmit={(e) => enterAccount(e)}>
					<S.InputGroup>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</S.InputGroup>

					<S.InputGroup>
						<input
							type='password'
							name='password'
							id='password'
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Senha'
							required
						/>
					</S.InputGroup>

					<S.ButtonGroup>
						<input type='submit' value='Entrar' />
					</S.ButtonGroup>
				</form>
			</S.BoxBody>

			<S.BoxFooter>
				<Link href='/forgot'>
					<a>Esqueceu a senha</a>
				</Link>

				<Link href='/register'>
					<a>Criar nova conta</a>
				</Link>
			</S.BoxFooter>
		</S.Box>
	);
}
