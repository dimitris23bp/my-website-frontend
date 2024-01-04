import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface Props {
    buttons: { [key: string]: string };
}

const MdDownNavBar = ({ buttons }: Props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpenHamburger = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseHamburger = () => {
        setAnchorEl(null);
    };
    return (
        <>
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
                {Object.entries(buttons).map(([name, url]) => (
                    <MenuItem
                        key={name}
                        href={url}
                        component='a'
                        onClick={handleCloseHamburger}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default MdDownNavBar;
