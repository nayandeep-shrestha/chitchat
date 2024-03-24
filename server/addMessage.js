// Add a second document with a generated ID.
import { addDoc, collection } from "firebase/firestore";
import { db } from "./index";

export const addMessageToDB = async (message) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), message);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
