import { Typography } from "@mui/material";

const AboutMe = () => {
    return (
        <>
            <Typography variant='h2' component='div' paddingBottom={5}>
                About Me
            </Typography>
            <Typography
                variant='body1'
                component='p'
                lineHeight={2}
                fontSize={20}
            >
                Hello World! This is my personal website. I am a Full-Stack (but
                mostly Back-End) developer. This is about me Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Deserunt corporis in
                dolorem laboriosam veniam ducimus hic fugiat tempore, cupiditate
                quibusdam quasi distinctio beatae illum dolore quae mollitia
                rerum odio laborum! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. At, obcaecati corrupti? Sit reiciendis, beatae
                corrupti aliquam iure enim nulla incidunt doloribus qui possimus
                dolore, pariatur aut dolorum ducimus modi sed!
            </Typography>
        </>
    );
};

export default AboutMe;
