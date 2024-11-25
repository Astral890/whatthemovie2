"use client"
import { useState } from "react";
import { methods as auth } from "../utilis/firebase";
import { useRouter } from 'next/navigation';
import '../styles/UserPages.css';

export default function SignUpPage(){
    const router = useRouter();
    const [name, setName] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        await auth.addUsr({usuario:name, email:correo, pass:password, points :0})
        router.push('/LoginPage');
    };
    
    return (
        <div className="user-page">
          <div className="user-grid">
            <div className="user-card">
              <h1>Registrarse</h1>
              <form onSubmit={handleSubmit} className="">
                <div className="user-inpbut">
                  <label>Name:</label>
                  <br/>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="user-inpbut">
                  <label>Email:</label>
                  <br/>
                  <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
                </div>
                <div className="user-inpbut">
                  <label>Password:</label>
                  <br/>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" className="px-6 py-2 text-lg font-semibold text-black 
                bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 
                text-center">Registarse</button>
              </form>
            </div>
          </div>
        </div>
      );
}