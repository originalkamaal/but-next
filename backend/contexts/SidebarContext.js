import React, { createContext, useState } from "react";


const AdminContext = createContext();


export const AdminContextProvider = ({ children }) => {
  const [openMenu, setDropdown] = useState([])

  return (
    <AdminContext.Provider value={{ setDropdown, openMenu }}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContext;