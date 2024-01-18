import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

const Certificate = (certificate: Certificate) => {
    const formattedDate = new Date(certificate.issueDate).toLocaleDateString(
        "default",
        { month: "2-digit", year: "numeric" }
    );

    return (
        <Box
            sx={{ width: "100%", paddingBottom: "100%", position: "relative" }}
        >
            <Card
                sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: 8,
                    border: "1px solid grey",
                }}
            >
                {certificate.organizationImage && (
                    <CardMedia
                        component='img'
                        height='140'
                        image={certificate.organizationImage}
                        alt={certificate.name}
                        sx={{ objectFit: "contain", padding: 2 }}
                    />
                )}
                <CardContent>
                    <Typography gutterBottom variant='h6'>
                        {certificate.name}
                    </Typography>
                    <Grid container justifyContent='space-between'>
                        <Typography variant='body2' color='text.secondary'>
                            {certificate.organization}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {formattedDate}
                        </Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Certificate;
