import '../Style/Page.css'
import '../Style/Tarjeta.css'
import '../Style/Formulario.css'
import Intp from '../Componentes/Formulario/Intp'
import Boton from '../Componentes/Formulario/Boton'
import Head from '../Orquestador/Head'
const Entradas=[
    {nombre:"Titulo",Tipo:"text",holder:"Nombre Completo"},
    {nombre:"Imagen",Tipo:"text",holder:"Numero Telefonico"},
    {nombre:"Descripcion",Tipo:"text",holder:"Fecha de la reservacion"},
    {nombre:"Color",Tipo:"text",holder:"Hora de la reservacion"}
]
export default function Res(){
    return(
        <div className="CentrarP">
                <Head/>               
            <div >           
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
            </div> 
            <br />                  
        </div>
    )
}