import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import { Mainlayout } from "../components/MainLayot";

export default function Posts() {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function load() {
			const response = await fetch('http://localhost:4200/posts');
			const json = await response.json();
			setPosts(json);
		}
		load();
	}, [])

	return (
		<Mainlayout title={"Posts Page"}>
			<h1>Posts Page</h1>
			<pre>{JSON.stringify(posts)}</pre>
		</Mainlayout>
	);
};