import Link from "next/link";
import Head from "next/head";
import { Mainlayout } from "../components/MainLayot";

export default function Index() {
	return (
		<Mainlayout title={"Home Page"}>
			<Head>
				<meta name="keywords" content="next,js,java,php" />
				<meta name="description" content="this is youtube" />
				<meta charSet="utf-8" />
			</Head>
			<h1>Index Page</h1>
			<p>
				Below You can use Any routers
			</p>
			<div>
				<Link href={'/about'}>
					About
				</Link>
			</div>
			<div>
				<Link href={'/posts'}>
					Posts
				</Link>
			</div>
			<Link href={'/post/177'}>
				Post with ID
			</Link>
		</Mainlayout>
	);
};