import { legal } from '../legal.js'

const sections = [
  { id: 'responsable', title: 'Responsable' },
  { id: 'datos', title: 'Información que recopilamos' },
  { id: 'permisos', title: 'Permisos del dispositivo' },
  { id: 'uso', title: 'Cómo usamos la información' },
  { id: 'terceros', title: 'Con quién la compartimos' },
  { id: 'seguridad', title: 'Almacenamiento y seguridad' },
  { id: 'conservacion', title: 'Conservación' },
  { id: 'eliminar-cuenta', title: 'Eliminar tu cuenta y tus datos' },
  { id: 'derechos', title: 'Tus derechos' },
  { id: 'menores', title: 'Menores de edad' },
  { id: 'cambios', title: 'Cambios en esta política' },
  { id: 'contacto', title: 'Contacto' },
]

function Mail() {
  return <a href={`mailto:${legal.email}`}>{legal.email}</a>
}

export default function PrivacyPolicy() {
  return (
    <article className="legal">
      <header className="legal-hero">
        <div className="container">
          <span className="tag">Legal</span>
          <h1 className="display-md">Política de privacidad</h1>
          <p>Última actualización: {legal.updated}</p>
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
            Esta política explica qué información recopila la aplicación móvil HerDex («la app»), para qué la usa, con
            quién la comparte y cómo puedes eliminarla. Al usar la app aceptas las prácticas descritas aquí.
          </p>

          <section id="responsable">
            <h2>1. Responsable</h2>
            <p>
              HerDex es desarrollada y publicada por <strong>{legal.developer}</strong> ({legal.country}), responsable del
              tratamiento de los datos descritos en esta política. Puedes escribirnos a <Mail />.
            </p>
          </section>

          <section id="datos">
            <h2>2. Información que recopilamos</h2>
            <h3>Datos de cuenta</h3>
            <p>
              Puedes usar la app sin cuenta para un pesaje de prueba. Para seguir usándola y respaldar tus datos, te
              pedimos crear una cuenta con tu <strong>correo electrónico</strong> y una <strong>contraseña</strong>. La
              contraseña la gestiona nuestro proveedor de autenticación y se almacena cifrada; nosotros no podemos verla.
            </p>
            <h3>Registros de pesaje</h3>
            <p>Cada vez que estimas el peso de un animal, la app genera un registro con:</p>
            <ul>
              <li>La fotografía del animal que tomaste o elegiste de tu galería.</li>
              <li>Nombre o identificador del animal y notas, si decides escribirlos.</li>
              <li>
                Resultados del análisis: raza, condición corporal, medidas estimadas (perímetro torácico, largo corporal,
                altura a la cruz), peso estimado, método de cálculo y nivel de confianza.
              </li>
              <li>Fecha y hora del registro.</li>
            </ul>
            <p>
              Si eliges una imagen de tu galería, el archivo puede contener metadatos agregados por tu cámara (por
              ejemplo, fecha o ubicación). HerDex no lee ni usa esos metadatos, pero el archivo se transmite tal como está.
            </p>
            <h3>Datos guardados solo en tu dispositivo</h3>
            <p>
              La app guarda en tu teléfono una copia de tus registros para funcionar sin conexión, el número de pesajes de
              prueba realizados sin cuenta y tus preferencias de uso.
            </p>
            <h3>Lo que no recopilamos</h3>
            <p>
              HerDex no accede a tu ubicación, contactos, micrófono ni identificadores publicitarios, y no incluye
              herramientas de publicidad ni de rastreo de terceros.
            </p>
          </section>

          <section id="permisos">
            <h2>3. Permisos del dispositivo</h2>
            <ul>
              <li>
                <strong>Cámara:</strong> para fotografiar al animal. Solo se usa mientras estás en la pantalla de captura.
              </li>
              <li>
                <strong>Fotos o galería:</strong> para que elijas una imagen existente. Solo se lee la imagen que
                seleccionas.
              </li>
              <li>
                <strong>Sensor de movimiento (acelerómetro):</strong> para indicarte si el teléfono está estable al tomar
                la foto. Estos datos se procesan en el momento y no se guardan ni se envían.
              </li>
              <li>
                <strong>Internet:</strong> para analizar fotos y sincronizar tus registros.
              </li>
            </ul>
          </section>

          <section id="uso">
            <h2>4. Cómo usamos la información</h2>
            <ul>
              <li>Analizar la fotografía y estimar las medidas y el peso del animal.</li>
              <li>Guardar tu historial de pesajes y sincronizarlo entre tus dispositivos.</li>
              <li>Crear y gestionar tu cuenta e iniciar sesión.</li>
              <li>Responder a tus consultas y solicitudes.</li>
              <li>Detectar y corregir errores de la app.</li>
            </ul>
            <p>No vendemos tu información ni la usamos para publicidad.</p>
          </section>

          <section id="terceros">
            <h2>5. Con quién la compartimos</h2>
            <p>Solo compartimos información con los proveedores necesarios para que la app funcione:</p>
            <ul>
              <li>
                <strong>Google (API de Gemini):</strong> recibe la fotografía del animal para analizarla y devolver las
                medidas estimadas. No enviamos tu correo ni otros datos de cuenta. Google trata estos datos según sus{' '}
                <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noreferrer">
                  términos de la API de Gemini
                </a>{' '}
                y su{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                  política de privacidad
                </a>
                .
              </li>
              <li>
                <strong>Supabase:</strong> aloja las cuentas de usuario, los registros de pesaje y las fotografías
                respaldadas. Consulta su{' '}
                <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer">
                  política de privacidad
                </a>
                .
              </li>
            </ul>
            <p>
              Además, podemos divulgar información si la ley lo exige o para proteger los derechos y la seguridad de los
              usuarios.
            </p>
          </section>

          <section id="seguridad">
            <h2>6. Almacenamiento y seguridad</h2>
            <p>
              Toda la información se transmite cifrada mediante HTTPS. Los registros se guardan en tu dispositivo y, si
              tienes una cuenta, en los servidores de Supabase. Aplicamos medidas razonables para proteger tus datos, pero
              ningún sistema es completamente seguro.
            </p>
          </section>

          <section id="conservacion">
            <h2>7. Conservación</h2>
            <p>
              Conservamos tu cuenta y tus registros mientras la cuenta esté activa. Si eliminas un registro en la app, se
              borra también de nuestros servidores en la siguiente sincronización. Si eliminas tu cuenta, borramos tus
              datos según se indica en la sección siguiente. Los datos guardados solo en tu teléfono se eliminan al
              desinstalar la app.
            </p>
          </section>

          <section id="eliminar-cuenta">
            <h2>8. Eliminar tu cuenta y tus datos</h2>
            <p>Puedes eliminar tu cuenta de HerDex y todos los datos asociados en cualquier momento:</p>
            <ul>
              <li>
                <strong>Desde la app, al instante:</strong> Perfil → Eliminar cuenta. Los pasos están en{' '}
                <a href="/eliminar-cuenta.html">herdex.app/eliminar-cuenta</a>.
              </li>
              <li>
                <strong>Sin la app:</strong> sigue estos pasos.
              </li>
            </ul>
            <ol>
              <li>
                Escribe a <Mail /> desde el correo con el que creaste la cuenta, con el asunto «Eliminar mi cuenta de
                HerDex».
              </li>
              <li>Verificaremos que la solicitud proviene del titular de la cuenta.</li>
              <li>Te confirmaremos la eliminación en un plazo máximo de 30 días.</li>
            </ol>
            <p>
              Se eliminan de forma permanente: tu correo y credenciales de acceso, todos tus registros de pesaje, las
              fotografías respaldadas, tus lotes y tus preferencias. No conservamos copias, salvo que la ley nos obligue a guardar algún dato por un
              periodo determinado.
            </p>
            <p>
              Si solo quieres borrar algunos registros, puedes hacerlo desde el historial de la app sin eliminar tu
              cuenta.
            </p>
          </section>

          <section id="derechos">
            <h2>9. Tus derechos</h2>
            <p>
              Según la legislación aplicable, puedes solicitar acceso, corrección, eliminación o una copia de tus datos, y
              oponerte a su tratamiento. Escríbenos a <Mail /> y responderemos en un plazo máximo de 30 días.
            </p>
          </section>

          <section id="menores">
            <h2>10. Menores de edad</h2>
            <p>
              HerDex está dirigida a productores y profesionales del sector ganadero y no está destinada a menores de 13
              años. No recopilamos a sabiendas datos de menores. Si crees que un menor nos ha proporcionado información,
              contáctanos para eliminarla.
            </p>
          </section>

          <section id="cambios">
            <h2>11. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política cuando cambie la app o la ley. Publicaremos la nueva versión en esta página
              con su fecha de actualización y, si los cambios son importantes, te avisaremos dentro de la app.
            </p>
          </section>

          <section id="contacto">
            <h2>12. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política o sobre tus datos, escribe a <Mail />.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
