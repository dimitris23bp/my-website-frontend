import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: "#696969",
        },
        secondary: {
            main: "#f50057",
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;
