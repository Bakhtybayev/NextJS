
import { useRouter } from "next/router";
import { Mainlayout } from "../../components/MainLayot";

export default function Post() {
	const router = useRouter();

	return (
		<Mainlayout title={"Post Page"}>
			<h1>
				Post from {router.query.id}
			</h1>
		</Mainlayout>
	)
}