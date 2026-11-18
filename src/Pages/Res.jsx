import '../Style/Page.css'
import '../Style/Tarjeta.css'
import '../Style/Formulario.css'
import Intp from '../Componentes/Formulario/Intp'
import Boton from '../Componentes/Formulario/Boton'
import Tarjeta from '../Orquestador/Tarjeta_productos'
import Estrellas from '../Componentes/Formulario/Estrellas'

const Entradas=[
    {nombre:"Titulo",Tipo:"text",holder:"Titulo de la reseña"},
    {nombre:"Imagen",Tipo:"text",holder:"Foto de perfil (enlace)"},
    {nombre:"Descripcion",Tipo:"text",holder:"Descripcion de la reseña"},
    {nombre:"Estrellas",Tipo:"number",holder:"Numero de estrellas (1 a 5)"}
]

const Botones=[
    {tipo:"submit", nombre:"Enviar"},
    {tipo:"reset", nombre:"Reset"}
]

export default function Res({datos,onCambio,onEnviar,onReset,tarjetas=[]}){
    const hayDatos = Object.values(datos).some((v) => v !== '')

    return(
        <div className="CentrarPP">

            <form onSubmit={onEnviar} onReset={onReset} className="formulario">
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

            {/* Vista previa mientras se escribe */}
            {hayDatos && (
                <>
                    <h3>Vista previa</h3>
                    <div className="contenedor-productos">
                        <Tarjeta
                            Name={datos.Titulo}
                            Price={datos.Descripcion}
                            img={datos.Imagen || undefined}
                        >
                            <Estrellas cantidad={datos.Estrellas}/>
                        </Tarjeta>
                    </div>
                </>
            )}

            <hr className="Separador"/>

            {/* Reseñas ya enviadas */}
            <h3>Reseñas</h3>
            <div className="contenedor-productos">
                {tarjetas.length === 0 && (
                    <p>Aún no hay reseñas. Escribe la primera arriba.</p>
                )}
                {tarjetas.map((t)=>(
                    <Tarjeta
                        key={t.id}
                        Name={t.title}
                        Price={t.descripcion}
                        img={t.img || undefined}
                    >
                        <Estrellas cantidad={t.estrellas}/>
                    </Tarjeta>
                ))}
            </div>
            <br />
        </div>
    )
}