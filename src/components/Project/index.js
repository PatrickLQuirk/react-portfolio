import { Card, CardMedia, CardContent, Link, Typography } from '@mui/material';
import React from 'react';

const Project = ({ currentProject }) => {
    const { projectName, deployedLink, githubLink, imageFileName } = currentProject;

    return (
        <Card className='project' sx={{ marginLeft: "15px", marginRight: "15px", bgcolor: "#b2abbf", marginBottom:"25px"}}>
            <CardMedia 
                component="img"
                height="250"
                image={require(`../../assets/projects/${imageFileName}`)}
                alt="Project"
            />
            <CardContent>
                { deployedLink ? 
                (<>
                    <Link href={deployedLink}>{projectName}</Link> 
                    <br></br>
                </>)
                : <Typography>{projectName}</Typography>}
                <Link href={githubLink}>GitHub</Link>
            </CardContent>
        </Card>
    )
}

export default Project;