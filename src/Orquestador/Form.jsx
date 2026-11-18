import '../Style/Tarjeta_productos.css'
import '../Style/Formulario.css'
import Intp from '../Componentes/Formulario/Intp'
import Boton from '../Componentes/Formulario/Boton'
import Tarjeta from './Tarjeta_productos'
const Entradas=[
    {nombre:"Titulo",Tipo:"text",holder:"Titulo de la tarjeta"},
    {nombre:"Imagen",Tipo:"text",holder:"Imagen"},
    {nombre:"Descripcion",Tipo:"text",holder:"Descripcion"},
    {nombre:"Color",Tipo:"text",holder:"Color"}
]




export default function Form({datos,onCambio,onEnviar,onReset,onVolver}){
    const Botones=[
    {tipo:"submit", nombre:"Enviar"},
    {tipo:"button", nombre:"Volver",onClick:onVolver},
    {tipo:"reset", nombre:"Reset"}
]
    
    

    return(
        <div>            
            <form onSubmit={onEnviar} onReset={onReset}>
                {Entradas.map((intp)=>(
                <Intp
                    key={intp.nombre}
                    label={intp.nombre}
                    name={intp.nombre}
                    type={intp.Tipo}
                    holder={intp.holder}
                    valor={datos[intp.nombre]}
                    onCambio={onCambio}
                />
                ))}
                {Botones.map((boton)=>(
                    <Boton 
                        key={boton.nombre}
                        tipo={boton.tipo}
                        nombre={boton.nombre} 
                        onClick={boton.onClick}
                    />
                ))}
                
            
            </form>
            <Tarjeta
                title={datos.Titulo}
                descripcion={datos.Descripcion}
                img={datos.Imagen}
                color={datos.Color}
            />
        </div> 
             
        
    )
    
}