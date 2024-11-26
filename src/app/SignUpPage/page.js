"use client"
import { useState } from "react";
import { methods as auth } from "../utilis/firebase";
import { useRouter } from 'next/navigation';
import Link from "next/link";
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
              <h2>Crea tu cuenta</h2>
              <h3>Llena los siguientes datos</h3>
              <form onSubmit={handleSubmit} className="">
                <div className="user-inpbut">
                  <input type="text" placeholder="Usuario" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="user-inpbut">
                  <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
                </div>
                <div className="user-inpbut">
                  <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" className="px-6 py-2 text-sm font-semibold text-white 
                bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 
                text-center mb-5">Crear cuenta</button>
              </form>
              <h4>¿Ya tienes cuenta?</h4>
              <Link href="/LoginPage" className="px-6 py-2 text-sm w-40 self-center font-semibold text-white 
                bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 
                text-center mb-2">Inicia sesión</Link>
            </div>
          </div>
        </div>
      );
}