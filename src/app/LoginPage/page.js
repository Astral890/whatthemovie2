"use client"
import { useRouter } from "next/navigation"; 
import { methods as auth } from "../utilis/firebase";
import { useState } from "react";
import { useStore } from "../utilis/store";
import Link from "next/link";
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
          setEmail(correo)
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
              <h2>¡Bienvenido!</h2>
              <h3>Inicia sesión</h3>
              <form onSubmit={handleSubmit}>
                <div className="user-inpbut">
                  <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
                </div>
                <div className="user-inpbut">
                  <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" className="px-6 py-2 text-sm font-semibold text-white 
                bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 
                text-center mb-5">Iniciar sesion</button>
              </form>
              <h4>¿No tienes cuenta?</h4>
              <Link href="/SignUpPage" className="px-6 py-2 text-sm font-semibold text-white 
                bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 
                text-center">Crea una cuenta</Link>
            </div>
          </div>
        </div>
      );
}