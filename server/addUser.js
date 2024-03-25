// Add a second document with a generated ID.
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./index";

export const addUserToDB = async (user) => {
	let alreadyLogedIn = false;
    let userinfo = user; 
	const querySnapshot = await getDocs(collection(db, "users"));
    const userData = querySnapshot.docs.map(doc=>doc.data());
	userData.forEach((doc) => {
		if (doc.email === user.email) {
			alreadyLogedIn = true;  
            userinfo = doc;
		}
	});

	if (!alreadyLogedIn) {
		try {
			const docRef = await addDoc(collection(db, "users"), user);
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
			return -1;
		}
	}
    return userinfo;
};
