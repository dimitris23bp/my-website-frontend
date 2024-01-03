import { CssBaseline, Grid, Hidden, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import theme from "./theme";
import BasicComponentsContainer from "./components/BasicComponentsContainer";

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <NavBar />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <BasicComponentsContainer>
                            <AboutMe />
                        </BasicComponentsContainer>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item md={6}>
                            <BasicComponentsContainer>
                                <Photo />
                            </BasicComponentsContainer>
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
