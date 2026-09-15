import Header from "../components/Header"
import Footer from "../components/Footer"
import Botao from "../components/Botao"
import "../style/Login.css"

function salvar(){
    alert("Dados Salvos")
}

function Login() {
    return (
        <div className="whole-wrapper login">
            <Header />

            <main>
                <div className="box">
                    <div className="form-card">
                        <h2>Faça Login!</h2>
                        <form onSubmit={(event) => { event.preventDefault() }}>
                            <div className="input-field">
                                <label htmlFor="usuario">Nome de usuário</label>
                                <input id="usuario" name="usuario" type="text" />
                            </div>

                            <div className="input-field">
                                <label htmlFor="senha">Senha</label>
                                <input id="senha" name="senha" type="password" />
                            </div>

                            <Botao texto="Faça Login!" aoClicar={salvar}/>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Login
