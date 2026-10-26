import { legal } from '../legal.js'
import { lang } from '../i18n.js'

// Destino del enlace de confirmación de Supabase. Supabase ya confirmó el
// correo antes de redirigir aquí; si algo falló, lo indica en la URL
// (?error=… o #error=…). La sesión que viaja en la URL no se usa: el usuario
// inicia sesión en la app, así que se borra de la barra de direcciones.

const PACKAGE = 'com.dabliu.herdex'
const PLAY_URL = `https://play.google.com/store/apps/details?id=${PACKAGE}`
// En Android abre la app instalada; si no está, lleva a Google Play.
const OPEN_APP = `intent://open#Intent;package=${PACKAGE};action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;S.browser_fallback_url=${encodeURIComponent(PLAY_URL)};end`

const content = {
  es: {
    okTitle: '¡Correo confirmado!',
    okText: 'Tu cuenta de HerDex ya está activa. Vuelve a la app e inicia sesión con tu correo y contraseña.',
    open: 'Abrir HerDex',
    errTitle: 'Este enlace ya no es válido',
    errText:
      'Puede que haya expirado o que ya lo hayas usado. Si ya confirmaste tu correo, inicia sesión en la app. Si no, vuelve a registrarte con el mismo correo y te enviaremos un enlace nuevo.',
    help: 'Si tienes problemas, escríbenos a',
  },
  pt: {
    okTitle: 'E-mail confirmado!',
    okText: 'Sua conta do HerDex já está ativa. Volte ao app e entre com seu e-mail e senha.',
    open: 'Abrir o HerDex',
    errTitle: 'Este link não é mais válido',
    errText:
      'Ele pode ter expirado ou já ter sido usado. Se você já confirmou seu e-mail, entre no app. Se não, cadastre-se de novo com o mesmo e-mail e enviaremos um link novo.',
    help: 'Se tiver problemas, escreva para',
  },
  en: {
    okTitle: 'Email confirmed!',
    okText: 'Your HerDex account is now active. Go back to the app and sign in with your email and password.',
    open: 'Open HerDex',
    errTitle: 'This link is no longer valid',
    errText:
      "It may have expired or already been used. If you've already confirmed your email, sign in to the app. If not, sign up again with the same email and we'll send you a new link.",
    help: 'If you have trouble, email us at',
  },
}[lang]

function readResult() {
  const params = new URLSearchParams(location.search)
  const hash = new URLSearchParams(location.hash.slice(1))
  const failed = params.has('error') || hash.has('error') || params.has('error_code') || hash.has('error_code')
  if (location.search || location.hash) {
    // Quita tokens y códigos de la URL (historial, capturas, compartir).
    const keep = new URLSearchParams()
    if (params.get('lang')) keep.set('lang', params.get('lang'))
    const qs = keep.toString()
    history.replaceState(null, '', location.pathname + (qs ? `?${qs}` : ''))
  }
  return !failed
}

const ok = readResult()
const isAndroid = /android/i.test(navigator.userAgent)

export default function EmailConfirmed() {
  const c = content
  return (
    <section className="confirm">
      <div className="container">
        <div className={`confirm-card ${ok ? 'is-ok' : 'is-error'}`}>
          <div className="confirm-icon" aria-hidden="true">
            {ok ? (
              <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
            ) : (
              <svg viewBox="0 0 24 24"><path d="M12 7v6" /><path d="M12 17h.01" /></svg>
            )}
          </div>
          <h1 className="display-md">{ok ? c.okTitle : c.errTitle}</h1>
          <p>{ok ? c.okText : c.errText}</p>
          {isAndroid && (
            <a className="btn btn-lime confirm-btn" href={OPEN_APP}>
              {c.open}
            </a>
          )}
          <p className="confirm-help">
            {c.help} <a href={`mailto:${legal.email}`}>{legal.email}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
