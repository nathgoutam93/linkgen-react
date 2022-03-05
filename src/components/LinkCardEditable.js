import React, { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useAdmin } from "../context/adminContext";
import { GoTrashcan } from "react-icons/go";
import { MdDragIndicator } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import PropTypes from "prop-types";
import InputField from "./commons/inputField";

export default function LinkCardEditable({ id, Link }) {
  const {
    state: { links },
    dispatch,
  } = useAdmin();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [active, setActive] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (value) => {
    const updatedLinks = links;

    updatedLinks[id] = value;

    dispatch({ type: "field", field: "links", value: updatedLinks });
  };

  const handleRemoveLink = () => {
    const updatedLinks = links.filter((_, index) => id !== index);

    dispatch({ type: "field", field: "links", value: updatedLinks });
  };

  const handleSave = () => {
    handleEdit({
      title: title,
      link: link,
      description: description,
      active: active,
    });
    setEditMode(false);
  };

  const handleCancel = () => {
    setTitle(Link.title);
    setLink(Link.link);
    setDescription(Link.description);
    setActive(Link.active);
    setEditMode(false);
  };

  const handleChecked = (e) => {
    setActive(e.target.checked);
    handleEdit({
      title: title,
      link: link,
      description: description,
      active: e.target.checked,
    });
  };

  useEffect(() => {
    if (Link) {
      setTitle(Link.title);
      setLink(Link.link);
      setDescription(Link.description);
      setActive(Link.active);
    }
  }, [Link]);

  return (
    <Draggable
      key={Link.title || id}
      draggableId={Link.title || `${id}`}
      index={id}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{ ...provided.draggableProps.style }}
          className="w-full py-2 flex justify-between items-center first-of-type:mt-2 last-of-type:mb-2 cursor-pointer"
        >
          <div
            className={`flex flex-1 bg-white dark:bg-secondary rounded-xl border border-gray-300 dark:border-border-dark ${
              snapshot.isDragging ? "shadow-2xl" : ""
            }`}
          >
            {!editMode ? (
              <div className="p-2 flex-1 flex">
                <div
                  onClick={() => setEditMode(true)}
                  className={`px-4 flex justify-center items-center flex-1`}
                >
                  <HiOutlinePencil
                    size={25}
                    className="text-gray-400 dark:text-border-dark"
                  />
                  <div className="p-2 flex-1 flex flex-col justify-center items-center space-y-1">
                    <p className="text-lg text-gray-800 dark:text-white font-bold">
                      {Link.title}
                    </p>
                    <p className="text-sm text-gray-800 dark:text-white text-center font-semibold">
                      {Link.description}
                    </p>
                  </div>
                </div>
                <div className="p-2 flex flex-col justify-around items-center space-y-2">
                  <label
                    htmlFor={id}
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={id}
                        className="sr-only"
                        checked={active}
                        onChange={handleChecked}
                      />
                      <div className="block bg-border-dark w-10 h-6 rounded-full"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                    </div>
                  </label>
                  <GoTrashcan
                    size={25}
                    onClick={handleRemoveLink}
                    className="text-gray-400 dark:text-border-dark cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div className="p-4 flex flex-1 flex-col space-y-4 bg-white dark:bg-secondary rounded-xl">
                <InputField
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <InputField
                  label="url"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <InputField
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex justify-around items-center space-x-2">
                  <button
                    onClick={handleCancel}
                    className="flex-1 px-10 py-2 text-white font-inter font-bold rounded-md bg-primary-accent hover:bg-secondary-accent"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex-1 px-10 py-2 text-white font-inter font-bold rounded-md bg-primary-accent hover:bg-secondary-accent"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
            <div
              {...provided.dragHandleProps}
              className=" py-2 flex justify-center items-center border-l border-gray-300 dark:border-border-dark"
            >
              <MdDragIndicator
                size={40}
                className="text-gray-400 dark:text-border-dark"
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

LinkCardEditable.propTypes = {
  id: PropTypes.number,
  Link: PropTypes.object.isRequired,
};
