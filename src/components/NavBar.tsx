import {
    AppBar,
    Toolbar,
    Button,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    Hidden,
    Box,
} from "@mui/material";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavBar = () => {
    const buttonNames = ["Job Experience", "Github", "Certificates", "Contact"];
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpenHamburger = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseHamburger = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='static'>
            <Toolbar sx={{ margin: "10px 0" }}>
                <Avatar
                    src={logo}
                    alt='Logo'
                    sx={{ width: 60, height: 60, marginRight: "30px" }}
                />
                <Hidden mdUp>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={handleOpenHamburger}
                        sx={{
                            marginRight: 2,
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                            textTransform: "none",
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id='menu-appbar'
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseHamburger}
                    >
                        {buttonNames.map((name) => (
                            <MenuItem onClick={handleCloseHamburger} key={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Menu>
                </Hidden>
                <Hidden mdDown>
                    {buttonNames.map((name) => (
                        <Button
                            key={name}
                            color='inherit'
                            disableRipple
                            sx={{
                                paddingX: "20px",
                                "&:hover": { backgroundColor: "transparent" },
                                textTransform: "none",
                                fontSize: "1.2rem",
                            }}
                        >
                            {name}
                        </Button>
                    ))}
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
