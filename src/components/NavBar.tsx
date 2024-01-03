import { AppBar, Toolbar, Button, Avatar } from "@mui/material";
import logo from "../assets/logo.png"; // adjust the path as needed

const NavBar = () => {
    const buttonNames = ["Job Experience", "Github", "Certificates", "Contact"];
    return (
        <AppBar position='static'>
            <Toolbar sx={{ margin: "10px 0" }}>
                <Avatar
                    src={logo}
                    alt='Logo'
                    sx={{ width: 60, height: 60, marginRight: "30px" }}
                />
                {buttonNames.map((name) => (
                    <Button
                        key={name}
                        color='inherit'
                        disableRipple
                        sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textTransform: "none",
                        }}
                    >
                        {name}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
