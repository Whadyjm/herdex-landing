import { legal } from '../legal.js'

// Privacy policy in English (translation of the Spanish text).

export const title = 'Privacy policy'
export const updatedLabel = 'Last updated'

export const sections = [
  { id: 'responsable', title: 'Data controller' },
  { id: 'datos', title: 'Information we collect' },
  { id: 'permisos', title: 'Device permissions' },
  { id: 'uso', title: 'How we use information' },
  { id: 'terceros', title: 'Who we share it with' },
  { id: 'seguridad', title: 'Storage and security' },
  { id: 'conservacion', title: 'Retention' },
  { id: 'eliminar-cuenta', title: 'Deleting your account and data' },
  { id: 'derechos', title: 'Your rights' },
  { id: 'menores', title: 'Children' },
  { id: 'cambios', title: 'Changes to this policy' },
  { id: 'contacto', title: 'Contact' },
]

function Mail() {
  return <a href={`mailto:${legal.email}`}>{legal.email}</a>
}

export function Body() {
  return (
    <>
      <p className="legal-intro">
        This policy explains what information the HerDex mobile application (“the app”) collects, what it uses it for,
        who it shares it with and how you can delete it. By using the app you accept the practices described here.
      </p>

      <section id="responsable">
        <h2>1. Data controller</h2>
        <p>
          HerDex is developed and published by <strong>{legal.developer}</strong> ({legal.country}), the controller of
          the data described in this policy. You can write to us at <Mail />.
        </p>
      </section>

      <section id="datos">
        <h2>2. Information we collect</h2>
        <h3>Account data</h3>
        <p>
          You can use the app without an account for one trial weighing. To keep using it and back up your data, we ask
          you to create an account with your <strong>email</strong> and a <strong>password</strong>. The password is
          managed by our authentication provider and stored encrypted; we cannot see it.
        </p>
        <h3>Weighing records</h3>
        <p>Each time you estimate an animal’s weight, the app creates a record with:</p>
        <ul>
          <li>The photo of the animal you took or picked from your gallery.</li>
          <li>The animal’s name or ID, lot and notes, if you choose to enter them.</li>
          <li>
            Analysis results: breed, body condition, estimated measurements (heart girth, body length, height at
            withers), estimated weight, calculation method and confidence level.
          </li>
          <li>Date and time of the record.</li>
        </ul>
        <p>
          If you pick an image from your gallery, the file may contain metadata added by your camera (for example, date
          or location). HerDex does not read or use that metadata, but the file is transmitted as is.
        </p>
        <h3>Data stored only on your device</h3>
        <p>
          The app keeps a copy of your records on your phone so it works offline, plus the number of trial weighings
          done without an account and your preferences.
        </p>
        <h3>What we don’t collect</h3>
        <p>
          HerDex does not access your location, contacts, microphone or advertising identifiers, and includes no
          third-party advertising or tracking tools.
        </p>
      </section>

      <section id="permisos">
        <h2>3. Device permissions</h2>
        <ul>
          <li>
            <strong>Camera:</strong> to photograph the animal. Used only while you are on the capture screen.
          </li>
          <li>
            <strong>Photos or gallery:</strong> so you can pick an existing image. Only the image you select is read.
          </li>
          <li>
            <strong>Motion sensor (accelerometer):</strong> to tell you whether the phone is steady when taking the
            photo. This data is processed on the spot and never stored or sent.
          </li>
          <li>
            <strong>Notifications:</strong> if you turn on reweigh reminders. They are scheduled on the phone itself.
          </li>
          <li>
            <strong>Internet:</strong> to analyze photos and sync your records.
          </li>
        </ul>
      </section>

      <section id="uso">
        <h2>4. How we use information</h2>
        <ul>
          <li>To analyze the photo and estimate the animal’s measurements and weight.</li>
          <li>To store your weighing history and sync it across your devices.</li>
          <li>To create and manage your account and sign you in.</li>
          <li>To answer your questions and requests.</li>
          <li>To detect and fix errors in the app.</li>
        </ul>
        <p>We do not sell your information or use it for advertising.</p>
      </section>

      <section id="terceros">
        <h2>5. Who we share it with</h2>
        <p>We only share information with the providers needed for the app to work:</p>
        <ul>
          <li>
            <strong>Google (Gemini API):</strong> receives the animal’s photo to analyze it and return the estimated
            measurements. We do not send your email or other account data. Google handles this data under the{' '}
            <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noreferrer">
              Gemini API terms
            </a>{' '}
            and its{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              privacy policy
            </a>
            .
          </li>
          <li>
            <strong>Supabase:</strong> hosts user accounts, weighing records and backed-up photos. See its{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer">
              privacy policy
            </a>
            .
          </li>
        </ul>
        <p>We may also disclose information if required by law or to protect the rights and safety of users.</p>
      </section>

      <section id="seguridad">
        <h2>6. Storage and security</h2>
        <p>
          All information is transmitted encrypted over HTTPS. Records are stored on your device and, if you have an
          account, on Supabase servers, where each user can only access their own data. We apply reasonable measures to
          protect your data, but no system is completely secure.
        </p>
      </section>

      <section id="conservacion">
        <h2>7. Retention</h2>
        <p>
          We keep your account and records while the account is active. If you delete a record in the app, it is also
          deleted from our servers at the next sync. If you delete your account, we delete your data as described in the
          next section. Data stored only on your phone is removed when you uninstall the app.
        </p>
      </section>

      <section id="eliminar-cuenta">
        <h2>8. Deleting your account and data</h2>
        <p>You can delete your HerDex account and all associated data at any time:</p>
        <ul>
          <li>
            <strong>From the app, instantly:</strong> Profile → Delete account. The steps are at{' '}
            <a href="/eliminar-cuenta.html">herdex.app/eliminar-cuenta</a>.
          </li>
          <li>
            <strong>Without the app:</strong> follow these steps.
          </li>
        </ul>
        <ol>
          <li>
            Email <Mail /> from the address you signed up with, with the subject “Delete my HerDex account”.
          </li>
          <li>We will verify that the request comes from the account holder.</li>
          <li>We will confirm the deletion within 30 days at most.</li>
        </ol>
        <p>
          The following are permanently deleted: your email and sign-in credentials, all your weighing records, backed-up
          photos, your lots and your preferences. We keep no copies, unless the law requires us to retain some data for a
          set period.
        </p>
        <p>If you only want to delete some records, you can do it from the app’s history without deleting your account.</p>
      </section>

      <section id="derechos">
        <h2>9. Your rights</h2>
        <p>
          Under applicable law, you can request access to, correction, deletion or a copy of your data, and object to its
          processing. Write to <Mail /> and we will reply within 30 days at most.
        </p>
      </section>

      <section id="menores">
        <h2>10. Children</h2>
        <p>
          HerDex is aimed at producers and livestock professionals and is not intended for children under 13. We do not
          knowingly collect data from children. If you believe a child has given us information, contact us so we can
          delete it.
        </p>
      </section>

      <section id="cambios">
        <h2>11. Changes to this policy</h2>
        <p>
          We may update this policy when the app or the law changes. We will publish the new version on this page with
          its update date and, if the changes are significant, let you know in the app.
        </p>
      </section>

      <section id="contacto">
        <h2>12. Contact</h2>
        <p>
          If you have questions about this policy or your data, write to <Mail />.
        </p>
      </section>
    </>
  )
}
