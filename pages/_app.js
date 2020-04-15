// npm
import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

// css
import "react-contexify/dist/ReactContexify.min.css";
import "react-toastify/dist/ReactToastify.css";
import "rodal/lib/rodal.css";

// components
import Navbar from "../src/Components/Navbar";
import Header from "../src/Components/Header";

import HeadHtml from "../src/util/Head";
import config from "../src/util/ToastifyConfig";

// global
import Global from "../src/style/Global";

// style
export const Container = styled.div`
	width: 83%;
	margin-left: auto;
	padding: 20px;
`;

// config toastify
toast.configure(config);

// layout
function Layout({ Component, pageProps }) {
	return (
		<>
			<HeadHtml pageTitle={pageProps.title} />
			<Global />
			<ToastContainer className='alert' />

			{Component.name !== "Login" &&
			Component.name !== "Register" &&
			Component.name !== "Forgot" ? (
				<>
					<Navbar />
					<Header />

					<Container>
						<Component {...pageProps} />
					</Container>
				</>
			) : (
				<Component {...pageProps} />
			)}
		</>
	);
}

export default Layout;
