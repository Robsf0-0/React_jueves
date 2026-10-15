import Imagen from '../Componentes/Imagen'
import '../Style/Tarjeta.css'
import Descripcion from '../Componentes/Descripcion'
export default function Tarjeta({img, width, height, descripcion,color,children}){
    return(
        <div className='centrarC'>
            <div className='Centrar' style={{background:color}}>
                
                <div className='Orde'>
                    <Imagen
                        img={img}  width={width} height={height}
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