import { AppBar, Toolbar, Avatar, Hidden } from "@mui/material";
import logo from "../../assets/logo.png";
import MdUpNavBar from "./MdUpNavBar";
import { Link } from "react-router-dom";
import MdDownNavBar from "./MdDownNavBar";

const NavBar = () => {
    const buttons: { [key: string]: string } = {
        "Job Experience": "/job-experience",
        Github: "/github",
        Certificates: "/certificates",
        Contact: "/contact",
    };

    return (
        <AppBar position='static'>
            <Toolbar sx={{ margin: "10px 0" }}>
                <Link to='/'>
                    <Avatar
                        src={logo}
                        alt='Logo'
                        sx={{ width: 60, height: 60, marginRight: "30px" }}
                    />
                </Link>
                <Hidden mdUp>
                    <MdDownNavBar buttons={buttons} />
                </Hidden>
                <Hidden mdDown>
                    <MdUpNavBar buttons={buttons} />
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
