import { CssBaseline, Grid, Hidden, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import theme from "./theme";

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={12} color='coral'>
                        <NavBar />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AboutMe />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={12} md={6}>
                            <Photo />
                        </Grid>
                    </Hidden>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default App;
