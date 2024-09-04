
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, setDoc} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDywHmezhTMGLwxi33NmgrgPxY68GPHfi8",
  authDomain: "chattier-4f759.firebaseapp.com",
  projectId: "chattier-4f759",
  storageBucket: "chattier-4f759.appspot.com",
  messagingSenderId: "899457058472",
  appId: "1:899457058472:web:35e43a9fd0ddd54374249d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const db =getFirestore(app)

const signup=async (username,email,password) => {
  try {
    const res=await createUserWithEmailAndPassword(auth,email,password)
   const user = res.user
   await setDoc(doc(db,"users",user.uid),{
    id:user.uid,
    username:username.toLowerCase(),
    email,
    name:"",
    avatar:"",
    bio:"Hey there! i'm using chattier",
    lastseen:Date.now()

   })
   await setDoc(doc(db,"chat",user.uid),{
    chatData:[],

   })
  } catch (error) {
    console.error(error)
    toast.error(error.code)
  }
}
export{signup}