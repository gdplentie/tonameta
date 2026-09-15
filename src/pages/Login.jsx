import Header from "../components/Header"
import Footer from "../components/Footer"
import Botao from "../components/Botao"
import InputField from "../components/InputField"
import "../style/Login.css"


function alertar(){
    alert("Não.")
}

function Login() {
    function logar(e){
        e.preventDefault()
        alert("Logado? SLA")
    }

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
                            <InputField textoLabel="Nomde de Usuário"/>

                            <InputField textoLabel="Senha" type="password"/>

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