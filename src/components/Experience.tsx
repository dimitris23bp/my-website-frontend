import { Box } from "@mui/material";
import { Chrono } from "react-chrono";
import experiences from "../data/experiences";

const Experience = () => {
    return (
        <Box>
            <Chrono
                hideControls
                scrollable
                mediaSettings={{ align: "right", fit: "contain" }}
                items={experiences}
                mode='VERTICAL_ALTERNATING'
                theme={{
                    primary: "#607d8b",
                    secondary: "#3c4eb1",
                    cardBgColor: "#eeeeee",
                    titleColor: "#3c4eb1",
                    titleColorActive: "white",
                }}
                fontSizes={{
                    cardSubtitle: "1rem",
                    cardText: "1rem",
                    cardTitle: "1.3rem",
                    title: "2rem",
                }}
            />
        </Box>
    );
};

export default Experience;
