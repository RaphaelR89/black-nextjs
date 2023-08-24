import { NextPage } from "next";
import Head from "next/head";

const Products: NextPage = () => {
	return (
		<>
			<Head>
				<title>Nosso Produtos</title>
				<meta name="descirption" content="Conheça todos os nossos produtos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Nossos Produtos</h1>
		</>
	);
};

export default Products;
