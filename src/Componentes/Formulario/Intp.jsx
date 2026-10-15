export default function Intp({label,name,type,holder}){
    return(
        <div className="Intp">
            <label htmlFor={name}>{label}</label>
            <input
            type={type}
            id={name}
            name={name}
            placeholder={holder}
            />
        </div> 
    )
}