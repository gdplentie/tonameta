import Header from "../components/Header"
import Footer from "../components/Footer"
import "../style/NaoEncontrado.css"

function NaoEncontrado(){
    return(
        <div className="whole-wrapper">
            <Header />
            
            <main className="nao-encontrado">
                <p>Essa página não existe, sentimos muito...</p>
                <p>Não há nada a ser fazido...</p>
            </main>

            <Footer />
        </div>
    )
}

export default NaoEncontrado