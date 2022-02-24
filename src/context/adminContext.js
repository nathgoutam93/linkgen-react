import React, { createContext, useContext, useEffect, useReducer } from "react";
import PropTytpes from "prop-types";
import { initialState, adminReducer } from "../reducers/adminReducer";

const AdminContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export function AdminProvider({ children }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "field",
      field: "imgSrc",
      value: JSON.parse(localStorage.getItem("imgSrc")) || state.imgSrc,
    });
    dispatch({
      type: "field",
      field: "profileName",
      value:
        JSON.parse(localStorage.getItem("profileName")) || state.profileName,
    });
    dispatch({
      type: "field",
      field: "about",
      value: JSON.parse(localStorage.getItem("about")) || state.about,
    });
    dispatch({
      type: "field",
      field: "links",
      value: JSON.parse(localStorage.getItem("links")) || state.links,
    });
    dispatch({
      type: "field",
      field: "appearance",
      value: JSON.parse(localStorage.getItem("appearance")) || state.appearance,
    });
    dispatch({
      type: "field",
      field: "socials",
      value: JSON.parse(localStorage.getItem("socials")) || state.socials,
    });
  }, []);

  const value = { state, dispatch };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

AdminProvider.propTypes = {
  children: PropTytpes.element,
};
