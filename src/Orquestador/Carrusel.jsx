import '../Style/Carrusel.css'
import Imagen from '../Componentes/Imagen'

export default function Carr({ fotos }) {
    const lista = [...fotos, ...fotos] // duplicadas para el bucle infinito

    return (
        <div className="conte">
            <div className="vitrina">
                {lista.map((foto, i) => (
                    <div className="item" key={i}>
                        <Imagen img={foto.img} />
                    </div>
                ))}
            </div>
        </div>
    )
}