import React, { useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { useAdmin } from "../context/adminContext";
import { MdAddPhotoAlternate } from "react-icons/md";

export default function Appearance() {
  const {
    state: { bgImgFile, appearance },
    dispatch,
  } = useAdmin();
  const { background, backgroundColor, linkColor, linkFontColor, linkStyle } =
    appearance;

  const backgroundPresetColors = [
    "#000000",
    "#212529",
    "#ff5b5b",
    "#fca311",
    "#e5e5e5",
  ];
  const linkPresetColors = [
    "#000000",
    "#212529",
    "#ff5b5b",
    "#fca311",
    "#e5e5e5",
  ];

  const fontColors = ["#fff", "#e5e5e5", "#212529", "#000"];
  const linkfontColors = ["#fff", "#e5e5e5", "#212529", "#000"];

  const handleFile = (event) => {
    event.preventDefault();

    dispatch({
      type: "field",
      field: "bgImgFile",
      value: event.target.files[0],
    });
  };

  const handleRemove = () => {
    dispatch({
      type: "field",
      field: "appearance",
      value: {
        ...appearance,
        background: null,
      },
    });
    dispatch({ type: "field", field: "bgImgFile", value: null });
  };

  useEffect(() => {
    if (bgImgFile) {
      const reader = new FileReader();

      reader.onload = function (e) {
        dispatch({
          type: "field",
          field: "appearance",
          value: { ...appearance, background: e.target.result },
        });
      };

      reader.readAsDataURL(bgImgFile);
    }
  }, [bgImgFile]);

  return (
    <div className="space-y-4">
      <div className="p-4 bg-white dark:bg-secondary rounded-xl space-y border-gray-300-dark:2 border border-gray-300 dark:border-border-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="picker text-center rounded-3xl">
            <HexColorPicker
              style={{ width: "100%" }}
              color={backgroundColor}
              onChange={(color) => {
                dispatch({
                  type: "field",
                  field: "appearance",
                  value: { ...appearance, backgroundColor: color },
                });
              }}
            />
            <div className="p-2 flex justify-around items-center">
              {backgroundPresetColors.map((presetColor) => (
                <button
                  key={presetColor}
                  className="w-6 h-6 m-1 border-2 rounded cursor-pointer"
                  style={{ background: presetColor }}
                  onClick={() => {
                    dispatch({
                      type: "field",
                      field: "appearance",
                      value: {
                        ...appearance,
                        backgroundColor: presetColor,
                      },
                    });
                  }}
                />
              ))}
            </div>
            <label className="text-gray-800 dark:text-white">
              Background Color
            </label>
          </div>
          <div className="w-full text-center rounded-xl space-y-2">
            <div className="p-2 pt-0 space-y-2">
              {background ? (
                <img
                  src={background}
                  alt=""
                  className="w-full h-fit rounded-3xl object-cover"
                />
              ) : (
                <div className="w-full p-6 text-gray-700 inline-flex justify-center rounded-full">
                  <MdAddPhotoAlternate size={128} />
                </div>
              )}
              <div className="w-full flex justify-evenly items-center space-x-1">
                <button
                  disabled={!background}
                  onClick={handleRemove}
                  className="w-full text-white bg-primary-accent font-medium rounded-xl text-sm px-5 py-2 text-center hover:bg-primary-accent"
                >
                  Remove
                </button>

                <label className="w-full whitespace-nowrap text-white bg-primary-accent font-medium rounded-xl text-sm px-5 py-2 text-center cursor-pointer hover:bg-primary-accent">
                  Pick an Image
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
            <label className="text-gray-800 dark:text-white">
              Background Image
            </label>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-secondary rounded-xl border border-gray-300 dark:border-border-dark">
        <label className="text-gray-800 dark:text-white">Font Color</label>
        <div className="p-2 flex space-x-4">
          {fontColors.map((presetColor) => (
            <button
              key={presetColor}
              className="w-6 h-6 m-1 border-2 rounded cursor-pointer"
              style={{ background: presetColor }}
              onClick={() => {
                dispatch({
                  type: "field",
                  field: "appearance",
                  value: {
                    ...appearance,
                    fontColor: presetColor,
                  },
                });
              }}
            />
          ))}
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-secondary rounded-xl space-y-2 border border-gray-300 dark:border-border-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="picker text-center rounded-xl">
            <HexColorPicker
              style={{ width: "100%" }}
              color={linkColor}
              onChange={(color) => {
                dispatch({
                  type: "field",
                  field: "appearance",
                  value: { ...appearance, linkColor: color },
                });
              }}
            />
            <div className="p-2 flex justify-around items-center">
              {linkPresetColors.map((presetColor) => (
                <button
                  key={presetColor}
                  className="w-6 h-6 m-1 border-2 rounded cursor-pointer"
                  style={{ background: presetColor }}
                  onClick={() => {
                    dispatch({
                      type: "field",
                      field: "appearance",
                      value: {
                        ...appearance,
                        linkColor: presetColor,
                      },
                    });
                  }}
                />
              ))}
            </div>
            <label className="text-gray-800 dark:text-white">
              Button Color
            </label>
          </div>
          <div className="p-4 text-center flex flex-col justify-between items-center space-y-2">
            <div className="w-full grid grid-cols-2 gap-1 rounded-xl">
              <button
                style={{ backgroundColor: linkColor, color: linkFontColor }}
                onClick={() => {
                  dispatch({
                    type: "field",
                    field: "appearance",
                    value: {
                      ...appearance,
                      linkStyle: { ...linkStyle, rounded: false },
                    },
                  });
                }}
                className="p-2 rounded-lg"
              >
                Rectangular
              </button>
              <button
                style={{ backgroundColor: linkColor, color: linkFontColor }}
                onClick={() => {
                  dispatch({
                    type: "field",
                    field: "appearance",
                    value: {
                      ...appearance,
                      linkStyle: { ...linkStyle, rounded: true },
                    },
                  });
                }}
                className="p-2 rounded-3xl"
              >
                Rounded
              </button>
              <button
                style={{ backgroundColor: linkColor, color: linkFontColor }}
                onClick={() => {
                  dispatch({
                    type: "field",
                    field: "appearance",
                    value: {
                      ...appearance,
                      linkStyle: { ...linkStyle, filled: true },
                    },
                  });
                }}
                className={`p-2 ${
                  linkStyle.rounded ? "rounded-3xl" : "rounded-md"
                }`}
              >
                Filled
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "field",
                    field: "appearance",
                    value: {
                      ...appearance,
                      linkStyle: { ...linkStyle, filled: false },
                    },
                  });
                }}
                className={`p-2 ${
                  linkStyle.rounded ? "rounded-3xl" : "rounded-md"
                } border-2 text-gray-400`}
              >
                Outline
              </button>
            </div>
            <label className="text-gray-800 dark:text-white">
              Button Style
            </label>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-secondary rounded-xl border border-gray-300 dark:border-border-dark">
        <label className="text-gray-800 dark:text-white">
          Button Font Color
        </label>
        <div className="p-2 flex space-x-4">
          {linkfontColors.map((presetColor) => (
            <button
              key={presetColor}
              className="w-6 h-6 m-1 border-2 rounded cursor-pointer"
              style={{ background: presetColor }}
              onClick={() => {
                dispatch({
                  type: "field",
                  field: "appearance",
                  value: {
                    ...appearance,
                    linkFontColor: presetColor,
                  },
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
