import Link from "next/link";
import { Mainlayout } from "../components/MainLayot";
import s from '../styles/error.module.css';

export default function ErrorPage() {
	return (
		<Mainlayout>
			<h1 className={s.error}>
				Error 404
			</h1>
			<p>Please <Link href={'/'}><a>go back</a></Link> ro safety </p>
		</Mainlayout>
	)
}