import { GlobalStyle } from "../styles/globalStyle";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={mainTheme}>
			<GlobalStyle />
			<Component {...pageProps} />{" "}
		</ThemeProvider>
	);
}

export default MyApp;
