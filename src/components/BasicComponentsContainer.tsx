import { Box } from "@mui/material";
interface Props {
    children: React.ReactNode;
}
const BasicComponentsContainer = ({ children }: Props) => {
    return (
        <Box paddingX={7} paddingY={5}>
            {children}
        </Box>
    );
};

export default BasicComponentsContainer;
