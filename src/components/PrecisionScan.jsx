import { useEffect, useRef, useState } from 'react'
import { RotateCcw } from 'lucide-react'
import cloud from '../assets/bull-points.json'
import { intlLocale, t, t as tr } from '../i18n.js'

// Escena en coordenadas de la foto original (1280×1040). Valores ilustrativos de la demostración.
const W = cloud.w
const H = cloud.h
const LIME = '#9fe870'
const FOREST = '#163300'
const DURATION = 6.2

const KEYPOINTS = [
  { x: 85, y: 345, at: 2.0 },
  { x: 330, y: 236, at: 2.12 },
  { x: 640, y: 192, at: 2.24 },
  { x: 690, y: 232, at: 2.36 },
  { x: 690, y: 648, at: 2.48 },
  { x: 905, y: 435, at: 2.6 },
]

const MEASURES = { length: 172, girth: 198, height: 141 }
const WEIGHT = Math.round((MEASURES.girth ** 2 * MEASURES.length) / 10000)
const CONFIDENCE = 91

const clamp = (v) => Math.min(1, Math.max(0, v))
const ease = (v) => 1 - Math.pow(1 - clamp(v), 3)
const phase = (t, start, len) => ease((t - start) / len)

// Valores numéricos del panel según el tiempo de la animación.
function readout(t) {
  const scan = clamp(t / 1.8)
  return {
    points: Math.round((cloud.dots.length / 3) * scan),
    keypoints: KEYPOINTS.filter((k) => t >= k.at).length,
    length: Math.round(MEASURES.length * phase(t, 2.9, 0.8)),
    girth: Math.round(MEASURES.girth * phase(t, 3.5, 0.9)),
    height: Math.round(MEASURES.height * phase(t, 4.1, 0.7)),
    weight: Math.round(WEIGHT * phase(t, 4.9, 0.9)),
    confidence: Math.round(CONFIDENCE * phase(t, 5.0, 1.1)),
    stage: t < 1.9 ? 0 : t < 2.8 ? 1 : t < 4.9 ? 2 : t < DURATION ? 3 : 4,
  }
}

function pill(ctx, x, y, text) {
  ctx.font = '700 26px Inter, sans-serif'
  const w = ctx.measureText(text).width + 36
  ctx.fillStyle = FOREST
  ctx.beginPath()
  ctx.roundRect(x - w / 2, y - 24, w, 48, 24)
  ctx.fill()
  ctx.strokeStyle = 'rgba(159,232,112,.45)'
  ctx.lineWidth = 2
  ctx.stroke()
  ctx.fillStyle = LIME
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, x, y + 1)
}

function draw(ctx, t) {
  const d = cloud.dots
  ctx.clearRect(0, 0, W, H)

  // Nube de puntos: tenue antes del escaneo, encendida después.
  const scanX = clamp(t / 1.8) * (W + 160) - 80
  ctx.fillStyle = LIME
  ctx.globalAlpha = 0.16
  ctx.beginPath()
  for (let i = 0; i < d.length; i += 3) {
    if (d[i] < scanX) continue
    const r = d[i + 2] * 0.18
    ctx.moveTo(d[i] + r, d[i + 1])
    ctx.arc(d[i], d[i + 1], r, 0, Math.PI * 2)
  }
  ctx.fill()
  ctx.globalAlpha = 0.92
  ctx.beginPath()
  for (let i = 0; i < d.length; i += 3) {
    if (d[i] >= scanX) continue
    const r = (d[i + 2] / 2) * (0.35 + 0.65 * clamp((scanX - d[i]) / 140))
    ctx.moveTo(d[i] + r, d[i + 1])
    ctx.arc(d[i], d[i + 1], r, 0, Math.PI * 2)
  }
  ctx.fill()
  ctx.globalAlpha = 1

  // Línea de escaneo.
  if (t < 1.95) {
    ctx.fillStyle = 'rgba(159,232,112,.10)'
    ctx.fillRect(scanX - 70, 0, 70, H)
    ctx.fillStyle = LIME
    ctx.fillRect(scanX - 2, 0, 4, H)
  }

  ctx.lineCap = 'round'

  // Largo corporal.
  const pl = phase(t, 2.9, 0.8)
  if (pl > 0) {
    const [x1, y1, x2, y2] = [85, 345, 905, 435]
    ctx.strokeStyle = LIME
    ctx.lineWidth = 5
    ctx.setLineDash([])
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x1 + (x2 - x1) * pl, y1 + (y2 - y1) * pl)
    ctx.stroke()
    if (pl > 0.98) pill(ctx, 470, 300, `${t.how.lengthAbbr} ${MEASURES.length} cm`)
  }

  // Perímetro torácico.
  const pg = phase(t, 3.5, 0.9)
  if (pg > 0) {
    ctx.strokeStyle = LIME
    ctx.lineWidth = 5
    ctx.setLineDash([14, 12])
    ctx.beginPath()
    ctx.ellipse(690, 440, 52, 208, 0, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * pg)
    ctx.stroke()
    ctx.setLineDash([])
    if (pg > 0.98) pill(ctx, 690, 715, `${t.how.girthAbbr} ${MEASURES.girth} cm`)
  }

  // Altura a la cruz.
  const ph = phase(t, 4.1, 0.7)
  if (ph > 0) {
    ctx.strokeStyle = 'rgba(159,232,112,.7)'
    ctx.lineWidth = 3
    ctx.setLineDash([6, 10])
    ctx.beginPath()
    ctx.moveTo(1010, 192)
    ctx.lineTo(1010, 192 + (868 - 192) * ph)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.beginPath()
    ctx.moveTo(640, 192)
    ctx.lineTo(1010, 192)
    ctx.moveTo(990, 868)
    ctx.lineTo(1030, 868)
    ctx.stroke()
    if (ph > 0.98) pill(ctx, 1120, 560, `${MEASURES.height} cm`)
  }

  // Puntos anatómicos con pulso continuo.
  for (const k of KEYPOINTS) {
    const p = phase(t, k.at, 0.35)
    if (p <= 0) continue
    const pulse = (t * 0.9 + k.at) % 1
    ctx.strokeStyle = `rgba(159,232,112,${0.6 * (1 - pulse)})`
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(k.x, k.y, 12 + pulse * 26, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fillStyle = FOREST
    ctx.strokeStyle = LIME
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.arc(k.x, k.y, 11 * p, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  }
}

const STAGES = t.scan.stages

export default function PrecisionScan() {
  const canvasRef = useRef(null)
  const startRef = useRef(null)
  const [t, setT] = useState(0)
  const [run, setRun] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let visible = false
    let lastReadout = -1

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(w * (H / W) * dpr)
      ctx.setTransform((w * dpr) / W, 0, 0, (w * dpr) / W, 0, 0)
    }

    const frame = (now) => {
      if (startRef.current === null) startRef.current = now
      // En desarrollo, ?scanT=segundos congela la animación en ese instante (útil para capturas).
      const frozen = import.meta.env.DEV ? new URLSearchParams(location.search).get('scanT') : null
      const time = frozen !== null ? Number(frozen) : reduced ? DURATION + 1 : (now - startRef.current) / 1000
      draw(ctx, time)
      // El panel solo necesita refrescarse durante la animación.
      if (time <= DURATION + 0.2 || lastReadout < DURATION) {
        lastReadout = time
        setT(time)
      }
      if (visible && !reduced) raf = requestAnimationFrame(frame)
    }

    const ro = new ResizeObserver(() => {
      resize()
      draw(ctx, startRef.current === null ? 0 : lastReadout)
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        cancelAnimationFrame(raf)
        if (visible) raf = requestAnimationFrame(frame)
      },
      { threshold: 0.35 },
    )
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [run])

  const replay = () => {
    startRef.current = null
    setT(0)
    setRun((r) => r + 1)
  }

  const r = readout(t)
  const done = r.stage === 4

  return (
    <div className="scan-card">
      <div className="scan-head">
        <div>
          <span className="eyebrow">{tr.scan.eyebrow}</span>
          <h3>{tr.scan.heading}</h3>
        </div>
        <span className="scan-chip">{tr.scan.chip}</span>
      </div>

      <div className="scan-grid">
        <div className="scan-stage">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={tr.scan.aria}
          />
          <div className="scan-status" aria-hidden="true">
            <span className={`scan-dot ${done ? 'is-done' : ''}`} />
            {STAGES[r.stage]}
          </div>
        </div>

        <aside className="scan-panel" aria-live="off">
          <dl className="scan-metrics">
            <div>
              <dt>{tr.scan.silhouettePoints}</dt>
              <dd>{r.points.toLocaleString(intlLocale)}</dd>
            </div>
            <div>
              <dt>{tr.scan.keypoints}</dt>
              <dd>
                {r.keypoints}
                <small>/{KEYPOINTS.length}</small>
              </dd>
            </div>
            <div>
              <dt>{tr.scan.length}</dt>
              <dd>
                {r.length}
                <small> cm</small>
              </dd>
            </div>
            <div>
              <dt>{tr.scan.girth}</dt>
              <dd>
                {r.girth}
                <small> cm</small>
              </dd>
            </div>
            <div>
              <dt>{tr.scan.height}</dt>
              <dd>
                {r.height}
                <small> cm</small>
              </dd>
            </div>
          </dl>

          <div className="scan-result">
            <div
              className="scan-ring"
              style={{ '--p': r.confidence }}
              role="img"
              aria-label={tr.scan.confidence(r.confidence)}
            >
              <span>{r.confidence}%</span>
            </div>
            <div>
              <span className="scan-result-label">{tr.scan.estimated}</span>
              <strong>
                {r.weight}
                <small> kg</small>
              </strong>
              <span className="scan-result-meta">{tr.scan.analysisConfidence}</span>
            </div>
          </div>

          <button className="scan-replay" onClick={replay} disabled={!done}>
            <RotateCcw size={16} strokeWidth={2.25} /> {tr.scan.replay}
          </button>
        </aside>
      </div>
    </div>
  )
}
