import React, { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

interface UserContextValue {
  jwt: string | null;
  setJWT: React.Dispatch<React.SetStateAction<string | null>>;
}

const Context = React.createContext<UserContextValue | undefined>(undefined);

interface UserContextProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProps) {
  const [jwt, setJWT] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      const token = await user?.getIdToken();
      setJWT(token ? JSON.stringify(token) : null);
    });
    return () => unsubscribe();
  }, []);
  console.log("JWT:", jwt);
  return (
    <Context.Provider value={{ jwt, setJWT }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
