import React from "react";
import { useAdmin } from "../context/adminContext";

export default function SocialIconCard() {
  const { state, dispatch } = useAdmin();
  const { twitter, instagram, facebook, linkedin, github, hashnode, devto, medium, whatsapp } =
    state.socials;

  return (
    <div className="w-full p-5 flex flex-col items-center bg-secondary space-y-4 rounded-xl border border-border-dark">
      <span className="text-white text-xl font-nunito">Social Icons</span>
      <input
        value={twitter}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...state.socials, twitter: e.target.value },
          })
        }
        placeholder="@twitter-handle"
        className="w-full p-2 text-white bg-primary font-bold rounded-md outline-none"
      ></input>
      <input
        value={instagram}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...state.socials, instagram: e.target.value },
          })
        }
        placeholder="@instgram-handle"
        className="w-full p-2 text-white bg-primary font-bold rounded-md outline-none"
      ></input>
      <input
        value={facebook}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...state.socials, facebook: e.target.value },
          })
        }
        placeholder="facebook url"
        className="w-full p-2 text-white bg-primary font-bold rounded-md outline-none"
      ></input>
      <input
        value={linkedin}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...state.socials, linkedin: e.target.value },
          })
        }
        placeholder="LinkedIn url"
        className="w-full p-2 text-white bg-primary font-bold rounded-md outline-none"
      ></input>
      <input
        value={github}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...state.socials, github: e.target.value },
          })
        }
        placeholder="@github-handle"
        className="w-full p-2 text-white bg-primary font-bold rounded-md outline-none"
      ></input>
      <input
        value={hashnode}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...state.socials, hashnode: e.target.value },
          })
        }
        placeholder="@hashnode-handle"
        className="w-full p-2 text-white bg-primary font-bold rounded-md outline-none"
      ></input>
      <input
        value={devto}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...state.socials, devto: e.target.value },
          })
        }
        placeholder="@dev.to-handle"
        className="w-full p-2 text-white bg-primary font-bold rounded-md outline-none"
      ></input>
      <input
        value={medium}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...state.socials, medium: e.target.value },
          })
        }
        placeholder="@medium-handle"
        className="w-full p-2 text-white bg-primary font-bold rounded-md outline-none"
      ></input>
      <input
        value={whatsapp}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "socials",
            value: { ...state.socials, whatsapp: e.target.value },
          })
        }
        placeholder="whatsapp number"
        className="w-full p-2 text-white bg-primary font-bold rounded-md outline-none"
      ></input>
    </div>
  );
}
