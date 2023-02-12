// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestone";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AI zaSyAa3zKU1NULuPJkULveC6pZRxsKg_Z2R9M",
    authDomain: "rclone-523cd.firebaseapp.com",
    projectID: "rclone-523cs",
    storageBucket: "rclone-523cs.appspot.com",
    messagingSenderId: "333783632007:web:29893ee0b5e79066325022",
    appId: "1:333783632007:web:29893ee0b5e79066325022",
};

// Initialize Firebase
const app = intializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

async function addComment(comment) {
    await addDoc(collection(db, "comments"), comment);
}

async function addPost(post) {
    await addDoc(collection(db, "posts"), post);
}

async function readData(collectionName) {
    const docs = await getDocs(collection(db, collectionName));
    const data = [];
    docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
    });
    return data;
}

export { db, storage, addPost, addComment, reaData };

