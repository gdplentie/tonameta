import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NaoEncontrado from "./pages/NaoEncontrado"


function App() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NaoEncontrado/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App
