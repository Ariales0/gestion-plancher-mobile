//import React, { Children } from "react";

import React, { createContext, useState } from "react";

// création du contexte
export const AuthContext = createContext();

// création du provider/fournisseur
export const AuthProvider = ({children}) => {

  // État initial ou valeur que vous souhaitez partager
  const [authState, setAuthState] = useState(null);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
    {children}
    </AuthContext.Provider>
  );
};