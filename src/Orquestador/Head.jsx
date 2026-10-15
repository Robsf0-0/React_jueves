import '../Style/Page.css'
import { Link } from 'react-router-dom';
import colom from '../assets/Colombianita.png'
export default function Head(){
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
                    
                </div>


    )
}