import Header from "../components/Header"
import Footer from "../components/Footer"
import Botao from "../components/Botao"
import InputField from "../components/InputField"
import "../style/Login.css"
import { useState } from "react";


function alertar(){
    alert("Não.")
}

function Login() {
    function logar(e){
        e.preventDefault()

        if(senha.length<8){
            setErro("senha tem que ter pelo menos 8 caractéres")
            return
        }

        const regexSenha= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/

        if(!regexSenha.test(senha)){
            setErro("senha tem que ter pelo menos uma letra maiúscula, uma letra minúscula e um número")
            return
        }

        const regexEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!regexEmail.test(email)){
            setErro("O seu email tem que ser do formato: [NOME]@[SITE].[DOMÍNIO]")
            return
        }

        e.target.submit()
    }

    const [erro,setErro]=useState('')

    const [nome,setNome]=useState('');
    const [email,setEmail]=useState('');
    const [senha,setSenha]=useState('');

    return (
        <div className="whole-wrapper login">
            <Header />

            <main>
                <div className="box">
                    <div className="form-wrapper">
                        <div className="bvdv">
                            <h2>Bem Vindo de Volta!</h2>
                            <div className="papel">
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. In animi nemo nostrum ea totam assumenda perferendis ipsum corporis voluptate vitae accusamus distinctio ullam reprehenderit, amet obcaecati, dolorem corrupti maiores ex!</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. In animi nemo nostrum ea totam assumenda perferendis ipsum corporis voluptate vitae accusamus distinctio ullam reprehenderit, amet obcaecati, dolorem corrupti maiores ex!</p>
                            </div>
                        </div>
                        
                        <form onSubmit={logar}>
                            <div className="input-field">
                                <label>Nomde de Usuário</label>
                                <input type="text" required value={nome} onChange={(e)=>setNome(e.target.value)}/>
                            </div>

                            <div className="input-field">
                                <label>E-Mail de Usuário</label>
                                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>

                            <div className="input-field">
                                <label>Senha</label>
                                <input type="text" required value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                            </div>
                            
                            <small id="erro">{erro}</small>
                            <Botao texto="Entrar" className="botao-entrar"/>
                            <small>Não tem uma conta?</small>
                            <Botao aoClicar={alertar} texto="Registrar-se" className="botao-registrar"/>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Login