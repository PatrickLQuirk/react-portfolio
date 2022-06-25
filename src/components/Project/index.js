import React from 'react';

const Project = ({ currentProject }) => {
    const { projectName, deployedLink, githubLink, imageFileName } = currentProject;

    return (
        <div className="project">
            <img src={require(`../../assets/projects/${imageFileName}`)} alt="Project" className="project-image" />
            <div className="project-info">
                <a href={deployedLink}>{projectName}</a>
                <a href={githubLink}>Github</a>
            </div>
        </div>     
    )
}

export default Project;