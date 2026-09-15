function Botao({texto, aoClicar}){
    return(
        <button type="submit" onClick={aoClicar}>
            {texto}
        </button>
    )
}

export default Botao