import '../Style/Page.css'
import '../Style/Tarjeta.css'
import '../Style/Formulario.css'
import Intp from '../Componentes/Formulario/Intp'
import Boton from '../Componentes/Formulario/Boton'
import Cab from '../Orquestador/Head'

const Entradas=[
    {nombre:"Titulo",Tipo:"text",holder:"Nombre Completo"},
    {nombre:"Imagen",Tipo:"text",holder:"Direccion"},
    {nombre:"Descripcion",Tipo:"text",holder:"Producto"},
    {nombre:"Color",Tipo:"text",holder:"Tarjeta de credito"},
    {nombre:"Ca",Tipo:"text",holder:"Propina"}
]


export default function Dom(){
    return(
        <div>
        <div>
          <Cab/>
        </div>
        
        
            
            <form className="formulario">
                
                {Entradas.map((intp)=>(
                <Intp
                key={intp.nombre}
                etiqueta={intp.nombre}
                nombre={intp.nombre}
                tipo={intp.type}
                holder={intp.holder}
                />
                ))}
                <Boton tipo="submit" texto="Enviar" />
                <Boton tipo="reset" texto="Limpiar" />
            
            </form>
            <br />
</div>

    )
}






             
        