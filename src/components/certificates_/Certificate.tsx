import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

interface CertificateProps {
    certificate: Certificate;
}

const Certificate: React.FC<CertificateProps> = ({ certificate }) => {
    const formattedDate = new Date(certificate.issueDate).toLocaleDateString(
        "default",
        { month: "2-digit", year: "numeric" }
    );

    return (
        <Card
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: 8,
                border: "1px solid grey",
                display: "flex",
                flexDirection: "column",
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
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
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
    );
};

export default Certificate;
