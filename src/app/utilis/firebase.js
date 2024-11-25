import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, where, query, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPiTfYmPC7kAkOhdLHPtsbpS0hnik7h9I",
  authDomain: "test1-75969.firebaseapp.com",
  databaseURL: "https://test1-75969-default-rtdb.firebaseio.com",
  projectId: "test1-75969",
  storageBucket: "test1-75969.appspot.com",
  messagingSenderId: "763685484232",
  appId: "1:763685484232:web:2d5b5804c7ebac9a3417fd",
  measurementId: "G-M121974ZQN"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

async function addUsr(data){
  try{
    console.log(data);
    const doc=await addDoc(collection(db, "UsrMovies"), data);
    console.log("si se agrego");
  }catch(e){
    console.error("error: "+e);
  }
}

async function checkUsr(email,pass){
  try {
    console.log(email);
    console.log(pass);
    const q = query(collection(db, "UsrMovies"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("no existe");
      return false;
    }

    for (const doc of querySnapshot.docs) {
      const userData = doc.data();
      console.log(userData);
      if (userData.pass === pass) {
        console.log("ta bien negro");
        return true;
      }
    }

    alert("ta mal");
    return false;
  } catch (error) {
    console.error("Error al comprobar usuario:", error);
    return false;
  }
}

async function getPoints(email) {
  try {
    console.log(email);
    const q = query(collection(db, "UsrMovies"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    for (const doc of querySnapshot.docs) {
      const userData = doc.data();
        return userData.points;
    }

    alert("ta mal points");
    return 0;
  } catch (error) {
    console.error("Error al comprobar usuario:", error);
    return 0;
  }
}

async function addPoints(email) {
  try{
    const newPoints=await getPoints(email)+5;
    console.log(newPoints)
    const q = query(collection(db, "UsrMovies"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const userDoc = querySnapshot.docs[0];
    console.log(userDoc);
    await updateDoc(userDoc.ref, {
      points: newPoints
    });
  }catch(e){
    console.log(e);
  }
}

export const methods={
  checkUsr,
  addUsr,
  getPoints,
  addPoints
};