import Router from "next/router";
import { Mainlayout } from "../../components/MainLayot";

export default function About() {

	const handleLeftToStart = () => {
		return Router.push('/')
	}
	return (
		<Mainlayout title={"About Page"}>
			<h1>About Page</h1>
			<button onClick={handleLeftToStart}>Go to Start</button>
			<button onClick={() => Router.push('/posts')}>Go to Posts</button>

		</Mainlayout>
	);
};