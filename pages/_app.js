import React from "react"

export default function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Component {...pageProps} />
		</React.Fragment>
	)
}