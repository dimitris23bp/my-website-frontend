import { Grid, Hidden } from "@mui/material";
import BasicComponentsContainer from "./BasicComponentsContainer";
import Photo from "./Photo";
import AboutMe from "./AboutMe";

const Home = () => {
    return (
        <Grid container spacing={3}>
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
        </Grid>
    );
};

export default Home;
