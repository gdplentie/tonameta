import Header from "../components/Header"
import Footer from "../components/Footer"
import "../style/Workspace.css"

function NaoEncontrado(){
    return(
        <div className="whole-wrapper workspace">
            <Header />
            
            <main>
                <div className="box">
                <button>+Novo caderno</button>
                <p>Você até agora não tem um caderno</p>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default NaoEncontrado