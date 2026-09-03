import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './assets/Orquestador/Tarjeta'
import TarjetaP from './assets/Orquestador/Tarjeta_productos'
import Cafe from './assets/data.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {Cafe.map((choco) => (
      <Tarjeta 
        key={choco.id}
        title={choco.title}
        descripcion={choco.descripcion}
        color={choco.color}
      >
        {/* Mapeamos los productos dentro de la tarjeta contenedora */}
        {choco.productos && choco.productos.map((producto) => (
          <TarjetaP 
            key={producto.id}
            Name={producto.Name}
            Price={producto.Price}
            img={producto.img}
          />
        ))}
      </Tarjeta>
    ))}
  </StrictMode>,
)


