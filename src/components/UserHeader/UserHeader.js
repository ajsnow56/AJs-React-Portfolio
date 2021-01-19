import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";

import { HeaderContainer, Header, Image, ViewResumeLink } from "./styles";

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={user.basics.picture} />
        <div style={{
                  
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderRadius: "4px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  width: "fit-content",
                }}>
          <h2 style={{fontFamily: "Blippo, fantasy", color: "white" }}>{user.basics.name}</h2>
          <h4>
            <a style={{fontFamily: "Blippo, fantasy", color: "rgba(50, 50, 180, 1)" }}
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p style={{fontFamily: "Blippo, fantasy", color: "white" }}>Coding in {user.basics.region}</p>
          <p style={{fontFamily: "Blippo, fantasy", color: "white" }}>
            {user.basics.yearsOfExperience} I have 1 year of experience as a developer and learning everyday!
          </p>
          <p style={{fontFamily: "Blippo, fantasy", color: "white" }}>{user.basics.headline}</p>
          {/* <p style={{fontFamily: "Blippo, fantasy", color: "black" }}>
            Blog:{" "}
            <a
              href={user.basics.blog}
              target="_blank"
              rel="noreferrer noopener"
            >
              {user.basics.blog}
            </a>
          </p> */}
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
          style={{backgroundColor: "aqua",
        color: "black"}}
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;

