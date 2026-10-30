import logo_img from "../assets/logo.png"
import user_icon_img from "../assets/user-icon.png"
import { NavLink } from 'react-router-dom';

function Header(){
  return(
    <header>
        <div className="box">
            <div className="welcome">
                <div id="logotipo">
                    <img src={logo_img} alt="Logo da página" id="logo" />
                    <h1 id="site-name">TôNaMeta</h1>
                </div>

                <img src={user_icon_img} alt="Ícone do usuário" id="user-icon" />
            </div>

            <nav>
                 <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Início</NavLink>
                 <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Sua Conta</NavLink>
                 <NavLink to="/workspace" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Área de Trabalho</NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header