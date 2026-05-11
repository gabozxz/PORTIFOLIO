import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contato" className="section contact">
      <div className="section__label">
        <span className="label-num">04</span>
        <span>contato</span>
      </div>

      <div className="contact__grid">
        <div className="contact__left">
          <h2 className="contact__heading">
            Vamos construir<br />
            <em>algo juntos?</em>
          </h2>
          <p className="contact__text">
            Estou disponível para novos projetos, colaborações e conversas interessantes.
            Prefere o e-mail direto? Tudo bem também.
          </p>

          <div className="contact__links">
            <a href="mailto:joao@email.com" className="contact__link">
              <span className="contact__link-icon">✉</span>
              <span>joao@email.com</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-icon">⌥</span>
              <span>github.com/joaosilva</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-icon">in</span>
              <span>linkedin.com/in/joaosilva</span>
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={submit}>
          {sent && (
            <div className="contact__success">
              <span>✓</span> Mensagem enviada! Responderei em breve.
            </div>
          )}

          <div className="field">
            <label className="field__label" htmlFor="name">Nome</label>
            <input
              id="name" name="name" type="text"
              className="field__input"
              placeholder="Seu nome"
              value={form.name} onChange={handle}
              required
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="email">E-mail</label>
            <input
              id="email" name="email" type="email"
              className="field__input"
              placeholder="seu@email.com"
              value={form.email} onChange={handle}
              required
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="message">Mensagem</label>
            <textarea
              id="message" name="message"
              className="field__input field__textarea"
              placeholder="Conte-me sobre seu projeto..."
              rows={5}
              value={form.message} onChange={handle}
              required
            />
          </div>

          <button type="submit" className="btn btn--primary contact__submit">
            Enviar mensagem
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>

      <div className="contact__footer">
        <span>© {new Date().getFullYear()} João Silva</span>
        <span className="contact__footer-sep">·</span>
        <span>Feito com React + Vite</span>
        <span className="contact__footer-sep">·</span>
        <span>Brasil</span>
      </div>
    </section>
  )
}
