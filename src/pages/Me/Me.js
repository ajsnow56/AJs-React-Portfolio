import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";
import { ProfileLink } from "./styles";

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div 
      style={{          
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  borderRadius: "4px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  width: "fit-content",
                  color: "black",
                  fontWeight: "bolder"
                }}
                >
        <SectionTitle 
        style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  width: "fit-content",
                  color: "aqua",
                  fontWeight: "bolder",
                  textAlign: "center",
                  alignItems: "center"
                }}
                >About Me</SectionTitle>
        <Paragraph 
        style={{
                  fontStyle: "oblique",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "20px",
                  width: "fit-content",
                  color: "black",
                  fontWeight: "bolder"
                }}
                >{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle style={{color: "aqua", fontWeight: "bolder", paddingLeft: "30px", textAlign: "center" }}>Skills</SectionTitle>
        <div>
          {user.skills.map((skill) => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle style={{fontFamily: "Blippo, fantasy", color: "aqua", textAlign: "center" }}>Connect with Me!</SectionTitle>
        <ul style={{ textAlign: "center"}}>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink style={{fontFamily: "Blippo, fantasy", color: "aqua", marginLeft: "auto", marginRight: "auto" }} key={profile.network}>
              {i !== 0 && " | "}
              <a style={{fontFamily: "Blippo, fantasy", color: "aqua", marginLeft: "auto", marginRight: "auto" }} href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;
