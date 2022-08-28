import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Project from '../components/Project';

const Portfolio = () => {
    const [projects] = useState([
        {
            projectName: "Park Planner",
            deployedLink: "",
            githubLink: "https://github.com/PatrickLQuirk/park-planner",
            imageFileName: "park-planner.png",
            description: "Site for viewing activities at National Parks and saving them for a trip",
            technologies: "MongoDB, React, Node.js, Express.js"
        },
        {
            projectName: "Social Network API",
            deployedLink: "",
            githubLink: "https://github.com/PatrickLQuirk/social-network-api",
            imageFileName: "social-network-api.png",
            description: "API for a social network web app where users post their thoughts",
            technologies: "MongoDB, Node.js, Express.js"
        },
        {
            projectName: "eCommerce Back End",
            deployedLink: "",
            githubLink: "https://github.com/PatrickLQuirk/e-commerce_back_end",
            imageFileName: "eCommerce-back-end.png",
            description: "Back-end for an e-commerce website",
            technologies: "SQL, Node.js, Express.js"
        },
        {
            projectName: "Tech Blog",
            deployedLink: "https://tranquil-meadow-55895.herokuapp.com/",
            githubLink: "https://github.com/PatrickLQuirk/tech-blog",
            imageFileName: "tech-blog.png",
            description: "CMS-style blog site where developers can publish blog posts",
            technologies: "SQL, Node.js, Express.js, Handlebars.js"
        },
        {
            projectName: "Full-Stack Diet App",
            deployedLink: "https://afternoon-refuge-37114.herokuapp.com",
            githubLink: "https://github.com/kmelter/full-stack-diet-app",
            imageFileName: "full-stack-diet.png",
            description: "Diet application for viewing foods that can be eaten with certain diets.",
            technologies: "SQL, Node.js, Express.js, Handlebars.js"
        },
        {
            projectName: "Kanban Board",
            deployedLink: "",
            githubLink: "",
            imageFileName: "tsb-kanban.png",
            description: "Visual workflow application for students' schoolwork success",
            technologies: "MongoDB, Node.js, Express.js, HTML, CSS"
        }
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