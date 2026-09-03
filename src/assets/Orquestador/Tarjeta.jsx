import '../Style/Tarjeta.css'
import Titulo from '../Componentes/Titulo'
import Descripcion from '../Componentes/Descripcion'
export default function Tarjeta({title,descripcion,color,children}){
    return(
        <div className='centrarC'>
            <div className='Centrar' style={{background:color}}>
                <div className='Orde'>
                    <Titulo
                        title={title}
                    />
                    <Descripcion
                        descripcion={descripcion}
                    />    
                </div>
                <div className='contenedor-productos'>
                    {children}
                </div>         
            </div>
        </div>
    )
}