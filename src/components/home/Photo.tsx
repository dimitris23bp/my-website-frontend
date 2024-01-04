import { Box } from "@mui/material";
import me from "../../assets/me.jpeg";

const Photo = () => {
    return (
        <Box
            component='img'
            src={me}
            alt='Me'
            sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "55px",
                padding: "20px",
            }}
        />
    );
};

export default Photo;
