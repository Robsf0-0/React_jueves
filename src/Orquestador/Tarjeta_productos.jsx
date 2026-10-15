import '../Style/Tarjeta_productos.css'
import Titulo from '../Componentes/Titulo'
import Imagen from '../Componentes/Imagen'
import Descripcion from '../Componentes/Descripcion'
export default function TP({id, Name,Price,img}){
    return(
        <div className='TPRC' id={id}>
                <Imagen
                    img={img} widgh="130" height="90"               
                    />
                <div className='Orde'>
                    <Titulo
                        title={Name}
                    />
                    <Descripcion
                        descripcion={Price}
                    />    
                </div>
        </div>
    )
}