import { Box, IconButton, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                height: "100px",
                bottom: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <Link
                href='https://instagram.com/dimakaramanis'
                target='_blank'
                color='inherit'
            >
                <IconButton>
                    <InstagramIcon />
                </IconButton>
                @dimaKaramanis
            </Link>
            <Link
                href='https://linkedin.com/in/dimitris23bp'
                target='_blank'
                color='inherit'
            >
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
                /in/dimitris23bp
            </Link>
            <Link
                href='https://github.com/dimitris23bp'
                target='_blank'
                color='inherit'
            >
                <IconButton>
                    <GitHubIcon />
                </IconButton>
                /dimitris23bp
            </Link>
        </Box>
    );
};

export default Footer;
