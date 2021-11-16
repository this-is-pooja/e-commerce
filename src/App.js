import React from "react";
import routes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./helpers/theme";
import Layout from "./layout/Layout";

const App = () => {
	return (
		<Router>
			<ChakraProvider theme={theme}>
				<Layout>{routes}</Layout>
			</ChakraProvider>
		</Router>
	);
};
export default App;
