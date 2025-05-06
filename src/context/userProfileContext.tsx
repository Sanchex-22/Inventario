// UserProfileContext.tsx
import React, { ReactNode, useState, useMemo, useEffect } from 'react';
import { decodeToken, decodeTokenPublic } from '../utils/decode';
import { auth } from '../firebase/firebase';

// Interfaz para los metadatos decodificados
export type DecodedMetaData = {
  id: string;
  username: string;
  identities?: string;
  roles?: string;
}

// Perfil de usuario que manejará el contexto
export type UserProfile =  {
  id: string;
  username: string;
  email: string;
  roles?: string;
}

// Valor que maneja el contexto
export type UserProfileContextValue = {
  profile: UserProfile | null;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

// Crear contexto con valor inicial undefined
const UserProfileContext = React.createContext<UserProfileContextValue | undefined>(undefined);

// Props del provider
export type UserProfileProviderProps = {
  children: ReactNode;
}

export function UserProfileProvider({ children }: UserProfileProviderProps) {
  // Obtener el JWT desde localStorage (o donde esté guardado)
  const [jwt,setJWT] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      const token = await user?.getIdToken();
      setJWT(token ? JSON.stringify(token) : null);
    });
    return () => unsubscribe();
  }, []);
  console.log("JWT:", jwt);

  // Decodificar el token y extraer metadata solo una vez
  const metaData = useMemo<DecodedMetaData | null>(() => {
    const decoded = decodeTokenPublic(jwt);
    return decoded?.firebase ?? null;
  }, [jwt]);
  console.log("MetaData:", metaData?.identities?.email?.[0]);

  // Estado del perfil de usuario
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (metaData) {
      setProfile({
        id: metaData?.id ?? 'user',
        username: metaData?.username ?? 'user',
        email: metaData?.identities?.email?.[0] ?? 'valor0',
        roles: metaData?.roles ?? 'user',
      });
    }
  }, [metaData]);
  

  console.log("Profile:", profile);


  return (
    <UserProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
}

export default UserProfileContext;
