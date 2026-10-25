import { legal } from '../legal.js'

// Página que exige Google Play: cómo pedir que se borre la cuenta y los datos,
// también para quien ya desinstaló la app.

const sections = [
  { id: 'desde-la-app', title: 'Desde la app' },
  { id: 'sin-la-app', title: 'Sin la app' },
  { id: 'que-se-elimina', title: 'Qué se elimina' },
]

function Mail() {
  return <a href={`mailto:${legal.email}?subject=Eliminar%20mi%20cuenta%20de%20HerDex`}>{legal.email}</a>
}

export default function AccountDeletion() {
  return (
    <article className="legal">
      <header className="legal-hero">
        <div className="container">
          <span className="tag">Cuenta</span>
          <h1 className="display-md">Eliminar tu cuenta de HerDex</h1>
          <p>
            HerDex, de {legal.developer}. Última actualización: {legal.updated}
          </p>
        </div>
      </header>

      <div className="container legal-body">
        <nav className="legal-toc" aria-label="Contenido">
          <span>Contenido</span>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legal-content">
          <p className="legal-intro">
            Puedes eliminar tu cuenta y todos tus datos cuando quieras. Desde la app es inmediato; si ya no la tienes
            instalada, escríbenos y lo hacemos por ti.
          </p>

          <section id="desde-la-app">
            <h2>1. Desde la app</h2>
            <ol>
              <li>Abre HerDex e inicia sesión con la cuenta que quieres eliminar.</li>
              <li>
                En la pantalla principal, toca tu inicial (arriba a la derecha) para abrir <strong>Perfil</strong>.
              </li>
              <li>
                Al final, toca <strong>Eliminar cuenta</strong>.
              </li>
              <li>
                Revisa lo que se va a borrar, escribe <strong>ELIMINAR</strong> y confirma.
              </li>
            </ol>
            <p>La cuenta y los datos se borran en ese momento, de nuestros servidores y de tu teléfono.</p>
          </section>

          <section id="sin-la-app">
            <h2>2. Sin la app</h2>
            <ol>
              <li>
                Escribe a <Mail /> desde el correo con el que creaste la cuenta, con el asunto «Eliminar mi cuenta de
                HerDex».
              </li>
              <li>Verificaremos que la solicitud viene del titular de la cuenta.</li>
              <li>Eliminaremos la cuenta y te lo confirmaremos en un plazo máximo de 30 días.</li>
            </ol>
          </section>

          <section id="que-se-elimina">
            <h2>3. Qué se elimina</h2>
            <p>Se borra de forma permanente, sin copias:</p>
            <ul>
              <li>Tu correo y tus credenciales de acceso.</li>
              <li>Todos tus registros de pesaje y sus fotografías.</li>
              <li>Tus lotes, el nombre de tu hato y tus preferencias.</li>
            </ul>
            <p>
              No se conserva ningún dato que te identifique, salvo que la ley nos obligue a guardar alguno por un periodo
              determinado. Los registros técnicos del servidor no contienen tu correo ni tus pesajes y se eliminan
              automáticamente con el tiempo.
            </p>
            <p>
              Si solo quieres borrar algunos pesajes, puedes hacerlo desde la app sin eliminar tu cuenta. Más detalles en
              nuestra <a href="/privacidad.html">política de privacidad</a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
