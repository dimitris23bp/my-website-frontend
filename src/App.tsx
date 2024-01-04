import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer";
import theme from "./theme";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Github from "./components/Github";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Router>
                            <NavBar />
                            <Routes>
                                <Route path='/' Component={Home} />
                                <Route
                                    path='/job-experience'
                                    Component={Experience}
                                />
                                <Route path='/github' Component={Github} />
                                <Route
                                    path='/certificates'
                                    Component={Certificates}
                                />
                                <Route path='/contact' Component={Contacts} />
                            </Routes>
                        </Router>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default App;
