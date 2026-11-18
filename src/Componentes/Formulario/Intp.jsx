export default function Intp({label, name, type, holder, valor, onCambio}){
    return(
        <div className="Intp">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={holder}
                value={valor}
                onChange={onCambio}
            />
        </div>
    )
}