import React from "react";
import { useAdmin } from "../context/adminContext";
// import Page from "./page";
import PropTypes from "prop-types";
import Page from "./page";

export default function Preview({ preview }) {
  const { state } = useAdmin();
  const { imgSrc, profileName, about, links, appearance, socials } = state;

  return (
    <div
      className={`${
        preview
          ? "w-full h-full min-h-screen"
          : "fixed top-0 w-[390px] h-[844px] px-3 p-4 scale-50"
      } flex justify-center items-center bg-gray-400 dark:bg-gray-800 rounded-3xl`}
    >
      <Page
        styleClasses={`w-full h-full pt-10 p-4 flex flex-col items-center space-y-2 overflow-y-auto s_hide ${
          preview ? "" : "rounded-3xl"
        } `}
        imgSrc={imgSrc}
        profileName={profileName}
        about={about}
        links={links}
        appearance={appearance}
        socials={socials}
      />
    </div>
  );
}

Preview.propTypes = {
  preview: PropTypes.bool.isRequired,
};
