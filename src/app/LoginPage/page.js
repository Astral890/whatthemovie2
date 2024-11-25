"use client"
import { useRouter } from "next/navigation"; 
import { methods as auth } from "../utilis/firebase";
import { useState } from "react";
import { useStore } from "../utilis/store";
import '../styles/UserPages.css';

export default function LoginPage(){
    const router = useRouter();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const setEmail = useStore((state) => state.setEmail);

    async function handleSubmit(e){
        e.preventDefault();
        const ver=await auth.checkUsr(correo, password)
        if(ver){
          setEmail(correo);
            router.push('/MainPage');
        }else{
            console.log("ta mal el usr")
        }
    };
    
    /*p*/
    return (
        <div className="user-page">
          <div className="user-grid">
            <div className="user-card">
              <h1>Inicia Sesion</h1>
              <form onSubmit={handleSubmit}>
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
                text-center">Iniciar sesion</button>
              </form>
            </div>
          </div>
        </div>
      );
}