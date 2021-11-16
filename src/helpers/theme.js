import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
const breakpoints = createBreakpoints({
  sm: "300px",
  md: "700px",
  lg: "1000px",
  xl: "1440px"
})
const theme = extendTheme({
	breakpoints,
	colors: {
		red: "#E5383B",
		black: "#212121",
		lblack: "#5E5E5E",
		gray: "#D3D3D3",
		offWhite: "#F4F4F4",
		lpink: "#FFE7E7",
	},
	fonts: {
		pri: "Josefin Sans",
		sec: "Adamina",
	},
});
export default theme;
