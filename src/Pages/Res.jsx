import '../Style/Page.css'
import { Link } from 'react-router-dom';
import colom from '../assets/Colombianita.png'
import '../Style/Tarjeta.css'
import '../Style/Formulario.css'
import Intp from '../Componentes/Formulario/Intp'
import Boton from '../Componentes/Formulario/Boton'

const Entradas=[
    {nombre:"Titulo",Tipo:"text",holder:"Nombre Completo"},
    {nombre:"Imagen",Tipo:"text",holder:"Numero Telefonico"},
    {nombre:"Descripcion",Tipo:"text",holder:"Fecha de la reservacion"},
    {nombre:"Color",Tipo:"text",holder:"Hora de la reservacion"}
]


export default function Res(){
    return(
        <div class="CentrarPP">
                  
             
                    <img src={colom} width="900" height="150"/>
                    <hr class="Separador"/>
                    <nav class="Inicioo">
                        <ul>
                        <li><Link to="/">Inicio</Link></li>                
                        <li><Link to="/Menu">Menu</Link></li>                
                        <li><Link to="/Contacto">Contacto</Link></li>
                        <li><Link to="/Reserva">Reservacion</Link></li>
                        <li> <Link to="/Domicilio">Domicilio</Link></li>
                        </ul>
                    </nav>
                    <hr  class="Separador"/>


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