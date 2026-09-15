import Header from "../components/Header"
import Footer from "../components/Footer"
import CartaoIntro from "../components/CartaoIntro"
import "../style/Home.css"
import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()

    const cartoes = [
        { titulo: "Crie Cadernos", texto: "Crie cadernos, organizações de papéis que funcionam como anotações, simulando um caderno real" },
        { titulo: "Anote Em Papéis", texto: "Registre suas ideias em blocos visuais simples, com uma experiência direta e sem excesso de complexidade." },
        { titulo: "Marcação", texto: "Adicione etiquetas para organizar suas notas e encontrar cada assunto com mais facilidade." },
        { titulo: "Estilização Simples", texto: "Estilize o seu texto de forma simples, mantendo o foco na organização e no conteúdo." }
    ]

    return (
        <div className='whole-wrapper home'>
            <Header />
            <main>
                <div className="box">
                    <section className="hero">
                        <h2>Um ambiente confortável que faz a sua organização fluir</h2>
                        <p>Uma área simples para reunir cadernos, anotações e marcações em um só lugar.</p>
                    </section>

                    <section className="cartoes" aria-label="Recursos do TôNaMeta">
                        {cartoes.map((cartao, i) => (
                            <CartaoIntro key={i} titulo={cartao.titulo} texto={cartao.texto} />
                        ))}
                    </section>

                    <button className="intro-botao" onClick={() => navigate("/login")}>Faça Login!</button>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home
