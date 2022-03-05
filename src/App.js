import { useState } from "react";
import Header from "./components/header";
import Editor from "./components/Editor";
import Appearance from "./components/appearance";
import Preview from "./components/Preview";
import { useCode } from "./hooks/code";
import { HiOutlineLink, HiOutlinePencil } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { BsBrush } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

export default function App() {
  const { getCode } = useCode();
  const [preview, setPreview] = useState(false);
  const [showDesign, setShowDesign] = useState(false);

  function download(filename, text) {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text),
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const handleDownload = () => {
    const generatedCode = getCode();
    download("index.html", generatedCode);
  };

  return (
    <>
      {!preview && <Header />}

      <div
        className={`w-full grid ${
          preview ? "" : "lg:grid-cols-2"
        } bg-gray-100 dark:bg-primary font-nunito`}
      >
        <div className={`w-full p-4  pb-96 ${preview && "hidden"}`}>
          {showDesign ? <Appearance /> : <Editor />}
        </div>

        <div
          className={`${
            preview ? "flex" : "hidden"
          } justify-center items-center lg:flex`}
        >
          <Preview preview={preview} />

          <div
            className={`relative ${
              preview ? "flex" : "hidden"
            } justify-center items-center lg:flex`}
          >
            {preview ? (
              <div
                onClick={() => setPreview(false)}
                className="fixed left-4 top-4 p-4 hidden lg:flex justify-center items-center space-x-1 bg-white dark:bg-secondary border border-gray-300 dark:border-border-dark rounded-3xl  cursor-pointer hover:bg-gray-300 dark:hover:bg-secondary-accent"
              >
                <HiOutlinePencil
                  size={23}
                  className="text-gray-700 dark:text-gray-400"
                />
                <span className="text-2xl text-gray-800 dark:text-white font-nunito">
                  Editor
                </span>
              </div>
            ) : (
              <div className="fixed top-24 p-4 hidden lg:flex items-center space-x-1 bg-white dark:bg-secondary rounded-3xl border border-gray-300 dark:border-border-dark cursor-pointe">
                {showDesign ? (
                  <div
                    onClick={() => setShowDesign(false)}
                    className="flex p-2 items-center space-x-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-border-dark rounded-xl"
                  >
                    <HiOutlineLink
                      size={25}
                      className="text-gray-700 dark:text-gray-400"
                    />
                    <span className="text-lg text-gray-800 dark:text-white font-nunito">
                      Links
                    </span>
                  </div>
                ) : (
                  <div
                    onClick={() => setShowDesign(true)}
                    className="flex p-2 items-center space-x-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-border-dark rounded-xl"
                  >
                    <BsBrush
                      size={25}
                      className="text-gray-700 dark:text-gray-400"
                    />
                    <span className="text-lg text-gray-800 dark:text-white font-nunito">
                      Design
                    </span>
                  </div>
                )}
                <div
                  onClick={() => setPreview(true)}
                  className="flex p-2 items-center space-x-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-border-dark rounded-xl"
                >
                  <AiOutlineEye
                    size={25}
                    className="text-gray-700 dark:text-gray-400"
                  />
                  <span className="text-lg text-gray-800 dark:text-white font-nunito">
                    Preview
                  </span>
                </div>
                <div
                  onClick={handleDownload}
                  className="flex p-2 items-center space-x-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-border-dark rounded-xl"
                >
                  <FaFileDownload
                    size={25}
                    className="text-gray-700 dark:text-gray-400"
                  />
                  <span className="text-lg text-gray-800 dark:text-white font-nunito">
                    Code
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed z-50 bottom-0 w-full p-4 bg-white dark:bg-secondary flex justify-around items-center border border-gray-300 dark:border-border-dark rounded-t-3xl lg:hidden">
        {preview ? (
          <div
            onClick={() => setPreview(false)}
            className="flex justify-center items-center space-x-1  cursor-pointer"
          >
            <HiOutlinePencil
              size={45}
              className="text-gray-700 dark:text-gray-400"
            />
            <span className="text-2xl text-gray-800 dark:text-white font-nunito">
              Editor
            </span>
          </div>
        ) : (
          <>
            {showDesign ? (
              <div
                onClick={() => setShowDesign(false)}
                className="flex flex-col justify-center items-center cursor-pointer"
              >
                <HiOutlineLink
                  size={45}
                  className="text-gray-700 dark:text-gray-400"
                />
                <span className="text-lg text-gray-800 dark:text-gray-50 font-nunito">
                  Links
                </span>
              </div>
            ) : (
              <div
                onClick={() => setShowDesign(true)}
                className="flex flex-col justify-center items-center cursor-pointer"
              >
                <BsBrush
                  size={45}
                  className="text-gray-700 dark:text-gray-400"
                />
                <span className="text-lg text-gray-800 dark:text-gray-50 font-nunito">
                  Design
                </span>
              </div>
            )}
            <div
              onClick={() => setPreview(true)}
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              <AiOutlineEye
                size={45}
                className="text-gray-700 dark:text-gray-400"
              />
              <span className="text-lg text-gray-800 dark:text-gray-50 font-nunito">
                Preview
              </span>
            </div>
            <div
              onClick={handleDownload}
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              <FaFileDownload
                size={45}
                className="text-gray-700 dark:text-gray-400"
              />
              <span className="text-lg text-gray-800 dark:text-gray-50 font-nunito">
                Code
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
}
