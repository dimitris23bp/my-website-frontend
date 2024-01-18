import { Box } from "@mui/material";
interface Props {
    children: React.ReactNode;
}
const BasicComponentsContainer = ({ children }: Props) => {
    return (
        <Box paddingX={3} paddingY={5}>
            {children}
        </Box>
    );
};

export default BasicComponentsContainer;
