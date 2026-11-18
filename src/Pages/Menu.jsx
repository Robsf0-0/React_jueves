import '../Style/Page.css'
import Head from '../Orquestador/Head'
import Tarjeta from '../Orquestador/Tarjeta'
import TarjetaP from '../Orquestador/Tarjeta_productos'
import Cafe from '../data.json'

export default function Menu(){
    return(
    
    <div className="CentrarP">


  <Head/>



    {Cafe.map((choco) => (
      <Tarjeta 
        key={choco.id}
        img={choco.img}
        width={choco.width}
        height={choco.height}
        descripcion={choco.descripcion}
        color={choco.color}
      >
        {/* Mapeamos los productos dentro de la tarjeta contenedora */}
        {choco.productos.map((producto) => (
          <TarjetaP 
            key={producto.id}
            Name={producto.Name}
            Price={producto.Price}
            img={producto.img}
          />
        ))}
      </Tarjeta>
    ))}
    <br />
    </div>
    

    )
}





   
        



  

