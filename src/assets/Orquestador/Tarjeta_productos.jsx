import '../Style/Tarjeta_productos.css'
import Titulo from '../Componentes/Titulo'
import Imagen from '../Componentes/Imagen'
import Descripcion from '../Componentes/Descripcion'
export default function TP({Name,Price,img}){
    return(
        <div className='TPRC'>
                <Imagen
                    img={img}
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