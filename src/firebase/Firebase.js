/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcU7nawrvOs183HM2wBQaWs4mW8oZOAmA",
  authDomain: "revel-fitness-0516.firebaseapp.com",
  databaseURL: "https://revel-fitness-0516-default-rtdb.firebaseio.com",
  projectId: "revel-fitness-0516",
  storageBucket: "revel-fitness-0516.appspot.com",
  messagingSenderId: "699469280148",
  appId: "1:699469280148:web:39339376840b6470a85581"
  };

const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app);