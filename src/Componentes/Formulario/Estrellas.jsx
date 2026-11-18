import '../../Style/Estrellas.css'
import estrella from '../../assets/Estrella.svg'

export default function Estrellas({cantidad}){
    const total = Math.min(5, Math.max(0, parseInt(cantidad, 10) || 0))

    if (total === 0) return null

    return(
        <div className="estrellas" role="img" aria-label={`${total} de 5 estrellas`}>
            {Array.from({length: total}, (_, i) => (
                <img key={i} src={estrella} alt="" />
            ))}
        </div>
    )
}