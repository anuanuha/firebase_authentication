import {useState} from "react";
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut} from "firebase/auth";
import {auth} from "./firebase-config";

function App() {
  const [registerEmail,setRegisterEmail]=useState("");
  const [registerPassword,setRegisterPassword]=useState("");
  const [loginEmail,setLoginEmail]=useState("");
  const [loginPassword,setLoginPassword]=useState("");
  const [user,setUser] = useState({});
  onAuthStateChanged(auth,(currentUser) =>{
    setUser(currentUser);
  })
  const register = async ()=>{
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail,registerPassword);
      console.log(user);
  }
  catch(error){
   console.log(error.message);
  }
}
  const login = async ()=>{
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail,loginPassword);
      console.log(user);
  }
  catch(error){
   console.log(error.message);
  }
  }
  const logout = async ()=>{
    await signOut(auth);

  }
  return (
   
    <div>
    <div>
     <h1 className="text-xl m-4">Register App</h1>
     <input type="email" placeholder="pls enter email" className="bg-violet-500 border-2 border-solid border-indigo-600 m-2 outline-none" 
     onChange={(event)=>setRegisterEmail(event.target.value)}></input>
     <input type="password" placeholder="password" className="bg-violet-500 border-2 border-solid border-indigo-600 m-2 outline-none"
     onChange={(event)=>setRegisterPassword(event.target.value)}></input>
     <button className="bg-violet-500 border-2 border-solid border-indigo-600 ml-4" onClick={register}>create user</button>
     </div>
     <div>
     <h1 className="text-xl m-4">Login</h1>
     <input type="email" placeholder="pls enter email" className="bg-violet-500 border-2 border-solid border-indigo-600 m-2 outline-none" 
     onChange={(event)=>setLoginEmail(event.target.value)}></input>
     <input type="password" placeholder="password" className="bg-violet-500 border-2 border-solid border-indigo-600 m-2 outline-none"
     onChange={(event)=>setLoginPassword(event.target.value)}></input>
     <button className="bg-violet-500 border-2 border-solid border-indigo-600 ml-4" onClick={login}>login</button>
     </div>
     <div>
     <h1 className="text-xl m-4">user logged in</h1>
     {user?.email}
     <button className="bg-violet-500 border-2 border-solid border-indigo-600 ml-4" onClick={logout}>signout</button>
     </div>
     </div>
      
   
  );
}

export default App;
