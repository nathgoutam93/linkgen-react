import React, { useEffect } from "react";
import { useAdmin } from "../context/adminContext";
import { BsPersonFill } from "react-icons/bs";
import InputFieldSimple from "./commons/inputFieldSimple";

export default function ProfileCard() {
  const { state, dispatch } = useAdmin();
  const { imgFile, imgSrc, profileName, about } = state;

  const handleFile = (event) => {
    event.preventDefault();

    dispatch({ type: "field", field: "imgFile", value: event.target.files[0] });
  };

  const handleRemove = async () => {
    dispatch({ type: "field", field: "imgSrc", value: null });
    dispatch({ type: "field", field: "imgFile", value: null });
  };

  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();

      reader.onload = function (e) {
        dispatch({ type: "field", field: "imgSrc", value: e.target.result });
      };

      reader.readAsDataURL(imgFile);
    }
  }, [imgFile]);

  return (
    <div className="w-full p-10 pt-2 flex flex-col items-center bg-white dark:bg-secondary space-y-4 rounded-xl border border-gray-300 dark:border-border-dark">
      <div className="mt-4 w-full flex flex-col lg:flex-row justify-around items-center lg:space-x-4 space-y-2 lg:space-y-0">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt=""
            className="w-32 h-32 rounded-full object-cover border border-gray-300 dark:border-border-dark"
          />
        ) : (
          <div className="p-6 h-32 w-32 rounded-full border border-gray-300 dark:border-border-dark">
            <BsPersonFill className="h-full w-full text-gray-400 dark:text-border-dark" />
          </div>
        )}
        <div className="w-full lg:w-auto lg:flex-1 flex justify-evenly items-center space-x-1">
          <button
            disabled={!imgSrc}
            onClick={handleRemove}
            className="w-full text-white bg-primary-accent font-medium rounded-xl text-sm px-5 py-2 text-center hover:bg-secondary-accent"
          >
            Remove
          </button>
          <label className="w-full whitespace-nowrap text-white bg-primary-accent font-medium rounded-xl text-sm px-5 py-2 text-center cursor-pointer hover:bg-secondary-accent">
            Pick an image
            <input
              className="hidden"
              aria-label="profile pic"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
            />
          </label>
        </div>
      </div>
      <InputFieldSimple
        label="Profile Title"
        value={profileName}
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "profileName",
            value: e.target.value,
          })
        }
        placeholder="@yourname"
      />
      <div className="w-full space-y-1">
        <label className="text-sm text-gray-800 dark:text-white font-nunito">
          Profile Description
        </label>
        <textarea
          value={about}
          onChange={(e) =>
            dispatch({
              type: "field",
              field: "about",
              value: e.target.value,
            })
          }
          className="w-full p-2 px-4 dark:bg-primary bg-gray-200 text-gray-800 dark:text-white outline-none rounded-md"
          placeholder="Bio"
        ></textarea>
      </div>
    </div>
  );
}
