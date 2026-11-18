import '../Style/Page.css'
import Head from '../Orquestador/Head'
import Carr from '../Orquestador/Carrusel'
import Fcarr from '../Imagenes.json'
import TarjetaP from '../Orquestador/Tarjeta_productos'

export default function Inicio(){
    return(
        <div className="CentrarP">

            <Head />

            <Carr fotos={Fcarr}/>

            <div className="centrarC">
                <TarjetaP
                    id="tarjeta-inicio"
                    Name="COLOMBIANITA"
                    Price="Calle 72 # 10-34 (Localidad de Chapinero, Bogotá)"
                    img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/47/b3/a1/colombia.jpg?w=500&h=-1&s=1"
                />
            </div>

            <hr className="Separador"/>
            <br />

        </div>
    )
}