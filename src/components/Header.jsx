import logo_img from "../assets/logo.png"
import user_icon_img from "../assets/user-icon.png"

function Header(){
  return(
    <header>
        <div className="box">
            <div>
                <img src={logo_img} alt="Logo da página" id="logo" />
                <h1 id="site-name">Tô Na Meta</h1>
            </div>

            <img src={user_icon_img} alt="Ícone do usuário" id="user-icon" />
        </div>
    </header>
  )
}

export default Header