import '../Style/Page.css'
import Head from '../Orquestador/Head'

export default function Tar() {
    return (
        <div className="CentrarP">
            <Head />
            <br />

            <section className="contacto-container">
                <h2>Contáctenos</h2>
                <p>Comunícate con nosotros para reservas, domicilios o información de nuestras sedes.</p>

                <div className="contacto-grid">
                    <div className="contacto-card">
                        <h3>Teléfono y WhatsApp</h3>
                        <p>Fijo: (601) 555 0192</p>
                        <p>Celular: +57 310 555 0192</p>
                    </div>

                    <div className="contacto-card">
                        <h3>Correo Electrónico</h3>
                        <p>JoseRivera@colombianita.com</p>
                        <p>RobertForigua@colombianita.com</p>
                    </div>

                    <div className="contacto-card">
                        <h3>Sucursales</h3>
                        <p><strong>Sede Chapinero:</strong> Calle 72 # 10-34, Bogotá</p>
                        <p><strong>Sede Norte:</strong> Calle 116 # 15-20, Bogotá</p>
                    </div>
                </div>

                
            </section>
        </div>
    )
}