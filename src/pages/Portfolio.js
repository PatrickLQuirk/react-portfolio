import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Project from '../components/Project';

const Portfolio = () => {
    const [projects] = useState([
        {
            projectName: "Social Network API",
            deployedLink: "",
            githubLink: "https://github.com/PatrickLQuirk/social-network-api",
            imageFileName: "social-network-api.png"
        },
        {
            projectName: "eCommerce Back End",
            deployedLink: "",
            githubLink: "https://github.com/PatrickLQuirk/e-commerce_back_end",
            imageFileName: "eCommerce-back-end.png"
        },
        {
            projectName: "Tech Blog",
            deployedLink: "https://tranquil-meadow-55895.herokuapp.com/",
            githubLink: "https://github.com/PatrickLQuirk/tech-blog",
            imageFileName: "tech-blog.png"
        },
        {
            projectName: "Full-Stack Diet App",
            deployedLink: "https://afternoon-refuge-37114.herokuapp.com",
            githubLink: "https://github.com/kmelter/full-stack-diet-app",
            imageFileName: "full-stack-diet.png"
        },
    ]);

    return (
        <main>
            <h1>Portfolio</h1>
            <Grid container>
                {projects.map((project) => (
                    <Grid item xs={10} md={5} key={project.projectName}>
                        <Project currentProject={project}></Project>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Portfolio;