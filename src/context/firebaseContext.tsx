import React from "react";
import Firebase from "../firebase/firebase.ts";

const FirebaseContext = React.createContext<Firebase | null>(null);

export default FirebaseContext;