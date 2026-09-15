function InputField({textoLabel="",type="text",placeholder=""}){
    return(
        <div className="input-field">
            <label>{textoLabel}</label>
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}

export default InputField