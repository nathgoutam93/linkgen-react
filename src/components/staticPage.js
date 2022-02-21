import React from "react";
import PropTypes from "prop-types";
import { BsPersonFill } from "react-icons/bs";

function LinkCard({ link }) {
  return (
    <a
      href={link.link}
      target="_blank"
      rel="noreferrer"
      className="link-container"
    >
      <div className="link-card">
        <p className="link-title">{link.title}</p>
        <p className="link-description">{link.description}</p>
      </div>
    </a>
  );
}

export default function StaticPage({ imgSrc, profileName, about, links }) {
  return (
    <div className="page">
      {imgSrc ? (
        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      ) : (
        <BsPersonFill
          style={{
            padding: "0.5rem",
            color: "rgb(107 114 128)",
          }}
          size={96}
        />
      )}
      {profileName ? (
        <h1 className="name">{profileName}</h1>
      ) : (
        <h1 className="name">@yourname</h1>
      )}
      <p className="about">{about}</p>
      <div className="link-wrapper">
        {links
          ?.filter((link) => link.active !== false && link.title && link.link)
          .map((link) => {
            return <LinkCard key={link.title} link={link} />;
          })}
      </div>
    </div>
  );
}

LinkCard.propTypes = {
  link: PropTypes.object.isRequired,
};

StaticPage.propTypes = {
  imgSrc: PropTypes.string,
  profileName: PropTypes.string,
  about: PropTypes.string,
  links: PropTypes.array,
};
