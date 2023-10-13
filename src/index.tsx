import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyALpc5Fm0ivmJGOt-NeiKOQADIpLuN1Gyw",
  authDomain: "edison-ecommerce.firebaseapp.com",
  projectId: "edison-ecommerce",
  storageBucket: "edison-ecommerce.appspot.com",
  messagingSenderId: "241848782780",
  appId: "1:241848782780:web:73eb055efa9e6cee5b25b9",
};
export const provider = new GoogleAuthProvider();

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
