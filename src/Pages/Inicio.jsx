import '../Style/Page.css'
import { Link } from 'react-router-dom';
import colom from '../assets/Colombianita.png'
import Carr from '../Orquestador/Carrusel'
import Fcarr from '../Imagenes.json'
import TarjetaP from '../Orquestador/Tarjeta_productos'
export default function Inicio(){
    return(
        <div class="CentrarP">
          
     
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

            
                <Carr fotos={Fcarr}
                />

                <div className="centrarC">
         <TarjetaP
        id="tarjeta-inicio"
        Name="COLOMBIANITA"
        Price="Calle 72 # 10-34 (Localidad de Chapinero, Bogotá)"
        img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/47/b3/a1/colombia.jpg?w=500&h=-1&s=1"
             />
        </div>
        <hr className='Separador'/>
        <br />


            
            
        </div>
    )
}
