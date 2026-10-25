import { legal } from '../legal.js'
import { lang, t } from '../i18n.js'

// Página que exige Google Play: cómo pedir que se borre la cuenta y los datos,
// también para quien ya desinstaló la app. La palabra de confirmación es la
// misma que pide la app en cada idioma.

const content = {
  es: {
    title: 'Eliminar tu cuenta de HerDex',
    byline: (dev, date) => `HerDex, de ${dev}. Última actualización: ${date}`,
    subject: 'Eliminar mi cuenta de HerDex',
    sections: ['Desde la app', 'Sin la app', 'Qué se elimina'],
    intro:
      'Puedes eliminar tu cuenta y todos tus datos cuando quieras. Desde la app es inmediato; si ya no la tienes instalada, escríbenos y lo hacemos por ti.',
    appSteps: (b) => [
      'Abre HerDex e inicia sesión con la cuenta que quieres eliminar.',
      <>En la pantalla principal, toca tu inicial (arriba a la derecha) para abrir {b('Perfil')}.</>,
      <>Al final, toca {b('Eliminar cuenta')}.</>,
      <>Revisa lo que se va a borrar, escribe {b('ELIMINAR')} y confirma.</>,
    ],
    appDone: 'La cuenta y los datos se borran en ese momento, de nuestros servidores y de tu teléfono.',
    mailSteps: (mail, subject) => [
      <>
        Escribe a {mail} desde el correo con el que creaste la cuenta, con el asunto «{subject}».
      </>,
      'Verificaremos que la solicitud viene del titular de la cuenta.',
      'Eliminaremos la cuenta y te lo confirmaremos en un plazo máximo de 30 días.',
    ],
    deletedIntro: 'Se borra de forma permanente, sin copias:',
    deleted: [
      'Tu correo y tus credenciales de acceso.',
      'Todos tus registros de pesaje y sus fotografías.',
      'Tus lotes, el nombre de tu hato y tus preferencias.',
    ],
    retention:
      'No se conserva ningún dato que te identifique, salvo que la ley nos obligue a guardar alguno por un periodo determinado. Los registros técnicos del servidor no contienen tu correo ni tus pesajes y se eliminan automáticamente con el tiempo.',
    partial: (link) => <>Si solo quieres borrar algunos pesajes, puedes hacerlo desde la app sin eliminar tu cuenta. Más detalles en nuestra {link('política de privacidad')}.</>,
  },
  pt: {
    title: 'Excluir sua conta do HerDex',
    byline: (dev, date) => `HerDex, da ${dev}. Última atualização: ${date}`,
    subject: 'Excluir minha conta do HerDex',
    sections: ['Pelo app', 'Sem o app', 'O que é excluído'],
    intro:
      'Você pode excluir sua conta e todos os seus dados quando quiser. Pelo app é imediato; se não tiver mais o app instalado, escreva para nós e fazemos isso por você.',
    appSteps: (b) => [
      'Abra o HerDex e entre com a conta que deseja excluir.',
      <>Na tela principal, toque na sua inicial (no canto superior direito) para abrir o {b('Perfil')}.</>,
      <>No final, toque em {b('Excluir conta')}.</>,
      <>Revise o que será apagado, digite {b('EXCLUIR')} e confirme.</>,
    ],
    appDone: 'A conta e os dados são apagados na hora, dos nossos servidores e do seu celular.',
    mailSteps: (mail, subject) => [
      <>
        Escreva para {mail} a partir do e-mail com que criou a conta, com o assunto «{subject}».
      </>,
      'Verificaremos que a solicitação vem do titular da conta.',
      'Excluiremos a conta e confirmaremos em até 30 dias.',
    ],
    deletedIntro: 'É apagado de forma permanente, sem cópias:',
    deleted: [
      'Seu e-mail e suas credenciais de acesso.',
      'Todos os seus registros de pesagem e suas fotografias.',
      'Seus lotes, o nome do seu rebanho e suas preferências.',
    ],
    retention:
      'Nenhum dado que identifique você é mantido, salvo se a lei nos obrigar a guardar algum por um período determinado. Os registros técnicos do servidor não contêm seu e-mail nem suas pesagens e são apagados automaticamente com o tempo.',
    partial: (link) => <>Se quiser apagar só algumas pesagens, pode fazer isso pelo app sem excluir sua conta. Mais detalhes na nossa {link('política de privacidade')}.</>,
  },
  en: {
    title: 'Delete your HerDex account',
    byline: (dev, date) => `HerDex, by ${dev}. Last updated: ${date}`,
    subject: 'Delete my HerDex account',
    sections: ['From the app', 'Without the app', 'What gets deleted'],
    intro:
      "You can delete your account and all your data whenever you want. From the app it's instant; if you no longer have it installed, email us and we'll do it for you.",
    appSteps: (b) => [
      'Open HerDex and sign in with the account you want to delete.',
      <>On the main screen, tap your initial (top right) to open {b('Profile')}.</>,
      <>At the bottom, tap {b('Delete account')}.</>,
      <>Review what will be deleted, type {b('DELETE')} and confirm.</>,
    ],
    appDone: 'Your account and data are deleted right away, from our servers and from your phone.',
    mailSteps: (mail, subject) => [
      <>
        Email {mail} from the address you signed up with, with the subject “{subject}”.
      </>,
      'We will verify that the request comes from the account holder.',
      'We will delete the account and confirm within 30 days at most.',
    ],
    deletedIntro: 'Permanently deleted, with no copies kept:',
    deleted: [
      'Your email and sign-in credentials.',
      'All your weighing records and their photos.',
      'Your lots, herd name and preferences.',
    ],
    retention:
      "No data that identifies you is kept, unless the law requires us to retain some for a set period. Server logs don't contain your email or weighings and are deleted automatically over time.",
    partial: (link) => <>If you only want to delete some weighings, you can do it from the app without deleting your account. More details in our {link('privacy policy')}.</>,
  },
}[lang]

const ids = ['desde-la-app', 'sin-la-app', 'que-se-elimina']

export default function AccountDeletion() {
  const c = content
  const mail = <a href={`mailto:${legal.email}?subject=${encodeURIComponent(c.subject)}`}>{legal.email}</a>
  const b = (text) => <strong>{text}</strong>
  const link = (text) => <a href="/privacidad.html">{text}</a>

  return (
    <article className="legal">
      <header className="legal-hero">
        <div className="container">
          <span className="tag">{t.legal.tagAccount}</span>
          <h1 className="display-md">{c.title}</h1>
          <p>{c.byline(legal.developer, legal.updated)}</p>
        </div>
      </header>

      <div className="container legal-body">
        <nav className="legal-toc" aria-label={t.legal.contents}>
          <span>{t.legal.contents}</span>
          <ol>
            {ids.map((id, i) => (
              <li key={id}>
                <a href={`#${id}`}>{c.sections[i]}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legal-content">
          <p className="legal-intro">{c.intro}</p>

          <section id={ids[0]}>
            <h2>1. {c.sections[0]}</h2>
            <ol>
              {c.appSteps(b).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <p>{c.appDone}</p>
          </section>

          <section id={ids[1]}>
            <h2>2. {c.sections[1]}</h2>
            <ol>
              {c.mailSteps(mail, c.subject).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          <section id={ids[2]}>
            <h2>3. {c.sections[2]}</h2>
            <p>{c.deletedIntro}</p>
            <ul>
              {c.deleted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{c.retention}</p>
            <p>{c.partial(link)}</p>
          </section>
        </div>
      </div>
    </article>
  )
}
