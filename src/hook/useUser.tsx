import React, { useCallback, useContext, useState } from "react";
import Context from "../context/userContext";
import { auth } from "../firebase/firebase"; // 👈 Importa auth desde compat

interface UserContextValue {
  jwt: string | null;
  setJWT: React.Dispatch<React.SetStateAction<string | null>>;
}

interface UseUserReturn {
  isLogged: boolean;
  isLoginLoading: boolean;
  hasLoginError: boolean;
  login: ({ email, password }: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export default function useUser(): UseUserReturn {
  const { jwt, setJWT } = useContext(Context) as UserContextValue;
  const [state, setState] = useState<{ loading: boolean; error: boolean }>({ loading: false, error: false });

  const login = useCallback(async ({ email, password }: { email: string; password: string }) => {
    setState({ loading: true, error: false });

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('authUser', JSON.stringify(userCredential));
      console.log("UserCredential:", userCredential);
      const token = await userCredential.user?.getIdToken();
      localStorage.setItem('jwt', JSON.stringify(userCredential));
      console.log("Token:", token);
      setJWT(JSON.stringify(token));
      setState({ loading: false, error: false });
    } catch (err) {
      window.sessionStorage.removeItem("jwt");
      setState({ loading: false, error: true });
      console.error(err);
      throw err;
    }
  }, [setJWT]);

  const logout = useCallback((): void => {
    auth.signOut();
    setJWT(null);
  }, [setJWT]);
  console.log(Boolean(jwt))

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  };
}
