import React, { useState } from "react";
import { useAdmin } from "../context/adminContext";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import LinkCardEditable from "./LinkCardEditable";
import ProfileCard from "./ProfileCard";
import { HiOutlineLink } from "react-icons/hi";
import EmbedEditable from "./EmbedEditable";
import EmbedModal from "./embedModal";
import SocialIconCard from "./SocialIconCard";

export default function Editor() {
  const {
    state: { links },
    dispatch,
  } = useAdmin();

  const [showModal, setShowModal] = useState(false);

  const handleNewLink = () => {
    dispatch({
      type: "field",
      field: "links",
      value: [
        ...links,
        { title: "", link: "https://", description: "", active: true },
      ],
    });
  };

  return (
    <>
      <ProfileCard />

      <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          const newLinks = [...links];
          const draggeditem = newLinks.splice(srcI, 1);
          newLinks.splice(desI, 0, ...draggeditem);
          dispatch({ type: "field", field: "links", value: newLinks });
        }}
      >
        <Droppable droppableId="dropable-1">
          {(provided, _) => (
            <div
              key="dropable-1"
              className="w-full flex flex-col space-y-2 my-2"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {links?.map((link, index) => {
                if (link.embed)
                  return (
                    <EmbedEditable
                      key={link.title || index}
                      id={index}
                      Link={link}
                    />
                  );
                return (
                  <LinkCardEditable
                    key={link.title || index}
                    id={index}
                    Link={link}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="flex justify-around items-center space-x-2 my-4">
        <button
          onClick={handleNewLink}
          className="flex-1 px-5 py-2 flex justify-center items-center text-white bg-primary-accent rounded-xl space-x-4 hover:bg-secondary-accent"
        >
          <HiOutlineLink size={25} />
          <span className="text-lg whitespace-nowrap font-nunito">
            Add Link
          </span>
        </button>
        <button
          onClick={() => setShowModal(!showModal)}
          className="px-5 py-2 flex justify-center items-center text-white bg-black rounded-xl space-x-4 hover:bg-gray-800"
        >
          <span className="text-lg font-nunito">Explore Links</span>
        </button>
      </div>
      {showModal && (
        <div
          onClick={() => setShowModal(!showModal)}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/60"
        >
          <EmbedModal />
        </div>
      )}
      <SocialIconCard />
    </>
  );
}
