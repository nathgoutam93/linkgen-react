import React, { createContext, useContext, useReducer } from "react";
import PropTytpes from "prop-types";
import { initialState, adminReducer } from "../reducers/adminReducer";

const AdminContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export function AdminProvider({ children }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  const value = { state, dispatch };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

AdminProvider.propTypes = {
  children: PropTytpes.element,
};
