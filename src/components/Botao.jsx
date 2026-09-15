function Botao({texto, aoClicar=()=>{}, className = ""}){
    return(
        <button type="submit" onClick={aoClicar} className={className}>
            {texto}
        </button>
    )
}

export default Botao