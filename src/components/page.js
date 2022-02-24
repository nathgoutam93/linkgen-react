import React from "react";
import LinkCard from "../components/LinkCard";
import PropTypes from "prop-types";
import { BsPersonFill } from "react-icons/bs";
import Embed from "./Embed";

export default function Page({
  imgSrc,
  profileName,
  about,
  links,
  appearance,
  styleClasses,
}) {
  const {
    background,
    backgroundColor,
    font,
    fontColor,
    linkStyle,
    linkColor,
    linkFontColor,
  } = appearance;
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: backgroundColor,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: font,
        color: fontColor,
      }}
      className={styleClasses}
    >
      {imgSrc ? (
        <div className="w-24 h-24 flex justify-center">
          <img
            src={imgSrc}
            className="w-24 h-24 rounded-full object-cover"
            alt=""
          />
        </div>
      ) : (
        <BsPersonFill className="p-2 w-24 h-24 text-gray-500 rounded-full" />
      )}
      {profileName ? (
        <h1 className="text-lg font-bold">{profileName}</h1>
      ) : (
        <h1 className="text-lg font-bold">@yourname</h1>
      )}
      <p className="text-center text-base font-semibold">{about}</p>
      <div
        className={`p-4 w-full flex flex-col justify-center items-center space-y-4`}
      >
        {links
          ?.filter((link) => link.active !== false && link.title && link.link)
          .map((link) => {
            if (link.embed)
              return (
                <Embed
                  key={link.title}
                  link={link}
                  linkColor={linkColor}
                  linkFontColor={linkFontColor}
                  linkStyle={linkStyle}
                />
              );
            return (
              <LinkCard
                key={link.title}
                link={link}
                linkStyle={linkStyle}
                linkColor={linkColor}
                linkFontColor={linkFontColor}
              />
            );
          })}
      </div>
    </div>
  );
}

Page.propTypes = {
  username: PropTypes.string,
  imgSrc: PropTypes.string,
  profileName: PropTypes.string,
  about: PropTypes.string,
  links: PropTypes.array,
  appearance: PropTypes.object,
  styleClasses: PropTypes.string,
};
