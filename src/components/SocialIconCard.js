import React from "react";
import { useAdmin } from "../context/adminContext";
import InputField from "./commons/inputField";

export default function SocialIconCard() {
  const {
    state: { socials },
    dispatch,
  } = useAdmin();
  const {
    twitter,
    instagram,
    facebook,
    linkedin,
    github,
    hashnode,
    devto,
    medium,
    whatsapp,
    tiktok,
    youtube,
  } = socials;

  return (
    <div className="w-full p-5 flex flex-col items-center bg-white dark:bg-secondary space-y-4 rounded-xl border border-gray-300 dark:border-border-dark">
      <span className="text-gray-800 dark:text-white text-xl font-nunito">
        Social Icons
      </span>
      <InputField
        label="twitter handle"
        value={twitter}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, twitter: e.target.value },
          })
        }
      />
      <InputField
        label="Instagram handle"
        value={instagram}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, instagram: e.target.value },
          })
        }
      />
      <InputField
        label="Facebook url"
        value={facebook}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, facebook: e.target.value },
          })
        }
      />
      <InputField
        label="LinkedIn url"
        value={linkedin}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, linkedin: e.target.value },
          })
        }
      />
      <InputField
        label="github handle"
        value={github}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, github: e.target.value },
          })
        }
      />
      <InputField
        label="hashnode handle"
        value={hashnode}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, hashnode: e.target.value },
          })
        }
      />
      <InputField
        label="dev.to handle"
        value={devto}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, devto: e.target.value },
          })
        }
      />
      <InputField
        label="medium handle"
        value={medium}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, medium: e.target.value },
          })
        }
      />
      <InputField
        label="Whatsapp number"
        value={whatsapp}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, whatsapp: e.target.value },
          })
        }
      />
      <InputField
        label="tiktok handle"
        value={tiktok}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, tiktok: e.target.value },
          })
        }
      />
      <InputField
        label="youtube handle"
        value={youtube}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...socials, youtube: e.target.value },
          })
        }
      />
    </div>
  );
}
