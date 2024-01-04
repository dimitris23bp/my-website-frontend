import { Button } from "@mui/material";

interface Props {
    buttons: { [key: string]: string };
}

const MdUpNavBar = ({ buttons }: Props) => {
    return (
        <>
            {Object.entries(buttons).map(([name, url]) => (
                <Button
                    key={name}
                    href={url}
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
        </>
    );
};

export default MdUpNavBar;
