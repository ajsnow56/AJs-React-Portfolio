import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import { ProjectItem, ProjectTitle, SkillContainer } from "./styles";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle style={{fontFamily: "Blippo, fantasy", color: "black" }}>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle style={{fontSize: "25px", fontFamily: "Impact, fantasy", color: "black" }}>{project.name}</ProjectTitle>
              {/* {console.log(project.images[0].resolutions.thumbnail.url)} */}
              <img
                src={project.images[0].resolutions.thumbnail.url}
                alt="Project Demo"
                style={{borderRadius: "5px"}}
              />
              <p style={{fontStyle: "oblique", color: "grey" , fontWeight:"1000"}}>{project.summary}</p>
              <SkillContainer >
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill style={{backgroundColor: "aqua", color: "black"}}  key={j}>{item}</Pill>
                ))}
              </SkillContainer>
              <div>
                <a style={{fontFamily: "Blippo, fantasy", color: "black" }}href={project.githubUrl} rel="noreferrer" target="_blank">
                  Github Repository
                </a>
              </div>
              <div>
                <a style={{fontFamily: "Blippo, fantasy", color: "black" }}href={project.website} rel="noreferrer" target="_blank">
                  Deployed App
                </a>
              </div>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
