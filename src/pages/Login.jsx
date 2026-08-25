import Header from "../components/Header"
import Footer from "../components/Footer"
import "../style/Login.css"

function Login() {
    return (
        <div className="whole-wrapper">
            <Header />

            <main className="login">
                <div className="box">
                    <div className="form-card login">
                        <h1>Faça Login!</h1>
                        <form onSubmit={(event) => { event.preventDefault() }}>
                            <div className="input-field">
                                <label>Nomde de usuário</label>
                                <input type="text" />
                            </div>

                            <div className="input-field">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <button>Login!</button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Login