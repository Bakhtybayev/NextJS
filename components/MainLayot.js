import React from "react"
import Link from "next/link";
import Head from "next/head";

export function Mainlayout({ children, title = 'Next App' }) {
	return (
		<React.Fragment>
			<Head>
				<title>{title} | Next JS</title>
			</Head>

			<nav>
				<h1>NAVIGATION</h1>
				<Link href={'/'}><a>Home</a></Link>
				<Link href={'/about'}><a>About</a></Link>
				<Link href={'/posts'}><a>Posts</a></Link>
				<Link href={'/post/177'}><a> Post id</a></Link>
			</nav>
			<main>
				{children}
			</main>
			<style jsx>{`
				nav {
					color: white;
					position: fixed;
					height: 60px;
					left: 0;
					top: 0;
					right: 0;
					background: darkblue;
					display: flex;
					justify-content: space-around;
					align-items: center;
				}

				 nav a {
					color: white;
					text-decoration: none;
				}

				main {
					margin-top: 50px;
					padding: 1rem;
				}
			`}</style>
		</React.Fragment>
	)
}