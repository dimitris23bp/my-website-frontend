import { Grid } from "@mui/material";
import certificates from "../../data/certificates";
import Certificate from "./Certificate";

const Certificates = () => {
    return (
        <Grid container sx={{ padding: 3 }} spacing={4}>
            {certificates.map((certificate) => (
                <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={certificate.credentialId}
                >
                    <Certificate {...certificate} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Certificates;
