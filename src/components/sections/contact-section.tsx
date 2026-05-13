import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

const OFFICIAL_LINKS = [
  { name: "Минкультуры России", url: "https://culture.gov.ru" },
  { name: "Фонд «Культура»", url: "https://cultrf.ru" },
  { name: "ЮНЕСКО — Россия", url: "https://unesco.org" },
  { name: "Год культурного наследия народов России", url: "https://mkrf.ru" },
]

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col justify-between overflow-y-auto px-4 pt-20 pb-6 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl">
                Напишите
                <br />
                нам
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-sm">/ Связь с редакцией проекта</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <a
                href="mailto:info@kultnasledie.ru"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Mail" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Email</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-xl">
                  info@kultnasledie.ru
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="MapPin" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Адрес</span>
                </div>
                <p className="text-base text-foreground md:text-xl">Москва, Россия</p>
              </div>

              <div
                className={`flex gap-3 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {["Telegram", "VK", "Rutube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {[
                { label: "Имя", field: "name" as const, placeholder: "Ваше имя", type: "text" },
                { label: "Email", field: "email" as const, placeholder: "your@email.com", type: "email" },
              ].map((item, i) => (
                <div
                  key={item.field}
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">{item.label}</label>
                  <input
                    type={item.type}
                    value={formData[item.field]}
                    onChange={(e) => setFormData({ ...formData, [item.field]: e.target.value })}
                    required
                    className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2"
                    placeholder={item.placeholder}
                  />
                </div>
              ))}

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Сообщение</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2"
                  placeholder="Вопрос, предложение или инициатива…"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton variant="primary" size="lg" className="w-full disabled:opacity-50">
                  {isSubmitting ? "Отправка…" : "Отправить"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-3 text-center font-mono text-sm text-foreground/80">Сообщение отправлено!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`mx-auto w-full max-w-7xl border-t border-foreground/10 pt-5 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "700ms" }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-sans text-sm font-semibold text-foreground">Культурное наследие</p>
            <p className="font-mono text-xs text-foreground/40">Образовательный проект, 2024</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {OFFICIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/50 transition-colors hover:text-foreground/80"
              >
                {link.name}
              </a>
            ))}
          </div>
          <p className="font-mono text-xs text-foreground/30">
            В соответствии с Основами государственной<br className="hidden md:block" /> культурной политики РФ
          </p>
        </div>
      </footer>
    </section>
  )
}
