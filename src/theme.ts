import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: "#607d8b",
        },
        secondary: {
            main: "#3c4eb1",
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;
