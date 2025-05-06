// firebase.ts
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"; // 👈 Necesario para usar realtime database

const app = firebase.initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
});

class Firebase {
  auth: firebase.auth.Auth;
  db: firebase.database.Database;
  serverValue: typeof firebase.database.ServerValue;
  emailAuthProvider: typeof firebase.auth.EmailAuthProvider;
  googleProvider: firebase.auth.GoogleAuthProvider;
  facebookProvider: firebase.auth.FacebookAuthProvider;
  twitterProvider: firebase.auth.TwitterAuthProvider;

  constructor() {
    this.auth = app.auth();
    this.db = app.database();

    this.serverValue = firebase.database.ServerValue;
    this.emailAuthProvider = firebase.auth.EmailAuthProvider;

    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    this.twitterProvider = new firebase.auth.TwitterAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);
  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser?.sendEmailVerification({
      url: import.meta.env.VITE_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = (password: string) =>
    this.auth.currentUser?.updatePassword(password);

  onAuthUserListener = (
    next: (user: firebase.User | null) => void,
    fallback: () => void
  ) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then(snapshot => {
            const dbUser = snapshot.val();

            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            const mergedUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(mergedUser);
          });
      } else {
        fallback();
      }
    });

  // *** User and Message API ***

  user = (uid: string) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");

  message = (uid: string) => this.db.ref(`messages/${uid}`);
  messages = () => this.db.ref("messages");
}

export const auth = app.auth();
export default Firebase;
