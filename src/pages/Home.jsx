import Header from "../components/Header"
import Footer from "../components/Footer"
import CartaoIntro from "../components/CartaoIntro"
import "../style/Home.css"
import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()

    const cartoes = [
        { titulo: "Crie Cadernos", texto: "Crie cadernos, organizações de papéis que funcionam como anotações, simulando um caderno real" },
        { titulo: "Anote Em Papéis", texto: "Estilize o seu texto de forma simples sem muita complexidade" },
        { titulo: "Marcação", texto: "Adicione etiquetas, que lhe permitiram organizar as suas notas de forma dinâmica" },
        { titulo: "Estilização Simples", texto: "Estilize o seu texto de forma simples sem muita complexidade" }
    ]

    return (
        <div className='whole-wrapper'>
            <Header />
            <main>
                <div className="box">
                    <h2>Um ambiente confortável que faz a sua organização fluir</h2>

                    <div className="cartoes">
                        {cartoes.map((cartao, i) => (
                            <CartaoIntro key={i} titulo={cartao.titulo} texto={cartao.texto} />
                        ))}
                    </div>

                    <button className="intro-botao" onClick={() => navigate("/login")}>Faça Login!</button>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home