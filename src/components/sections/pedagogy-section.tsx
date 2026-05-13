import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"
import { MagneticButton } from "@/components/magnetic-button"

const AGE_GROUPS = ["Все возрасты", "6–10 лет", "11–14 лет", "15–18 лет", "Взрослые"]
const THEMES = ["Все темы", "История", "Традиции", "Искусство", "Природа", "Гражданственность"]

const SCENARIOS = [
  {
    id: 1,
    title: "Путешествие во времени: Россия XVIII века",
    ageGroup: "11–14 лет",
    theme: "История",
    duration: "45 мин",
    desc: "Интерактивный урок-путешествие: ученики «попадают» во времена Петра I, знакомятся с реформами, культурой и бытом эпохи через ролевые игры.",
    materials: ["Карточки с ролями", "Карта России XVIII века", "Задания для групп"],
    icon: "⚓",
  },
  {
    id: 2,
    title: "Народы России: праздники и традиции",
    ageGroup: "6–10 лет",
    theme: "Традиции",
    duration: "30 мин",
    desc: "Яркий урок о народных праздниках разных регионов. Дети узнают о Сабантуе, Масленице, Ысыахе и других торжествах через игры и творчество.",
    materials: ["Иллюстрации праздников", "Шаблоны для поделок", "Аудиозаписи народной музыки"],
    icon: "🎉",
  },
  {
    id: 3,
    title: "Великие учёные России",
    ageGroup: "15–18 лет",
    theme: "История",
    duration: "60 мин",
    desc: "Семинар о вкладе Ломоносова, Менделеева, Вернадского и других учёных. Обсуждение их открытий и влияния на мировую науку и культуру.",
    materials: ["Биографические карточки", "Задания для дискуссии", "Временная лента"],
    icon: "🔬",
  },
  {
    id: 4,
    title: "Народные промыслы своими руками",
    ageGroup: "6–10 лет",
    theme: "Искусство",
    duration: "45 мин",
    desc: "Творческий мастер-класс: дети знакомятся с Гжелью, Хохломой и Городецкой росписью, создают собственный орнамент в народном стиле.",
    materials: ["Шаблоны узоров", "Краски и кисти", "Примеры народных изделий"],
    icon: "🎨",
  },
  {
    id: 5,
    title: "Гражданин и культура: мой вклад",
    ageGroup: "15–18 лет",
    theme: "Гражданственность",
    duration: "90 мин",
    desc: "Проектный урок: старшеклассники разрабатывают собственную культурную инициативу для своего города или района. Реальные кейсы как вдохновение.",
    materials: ["Шаблон проекта", "Примеры успешных инициатив", "Чек-лист реализации"],
    icon: "🤝",
  },
  {
    id: 6,
    title: "Природа и культура: заповедные места",
    ageGroup: "11–14 лет",
    theme: "Природа",
    duration: "45 мин",
    desc: "Урок о связи природных заповедников и культурных традиций народов, живущих рядом с ними. Байкал, Алтай, Русский Север через призму культуры.",
    materials: ["Карта заповедников", "Фото- и видеоматериалы", "Вопросы для обсуждения"],
    icon: "🌲",
  },
]

export function PedagogySection() {
  const { ref, isVisible } = useReveal(0.2)
  const [activeAge, setActiveAge] = useState("Все возрасты")
  const [activeTheme, setActiveTheme] = useState("Все темы")
  const [selectedScenario, setSelectedScenario] = useState<(typeof SCENARIOS)[0] | null>(null)

  const filtered = SCENARIOS.filter((s) => {
    const ageMatch = activeAge === "Все возрасты" || s.ageGroup === activeAge
    const themeMatch = activeTheme === "Все темы" || s.theme === activeTheme
    return ageMatch && themeMatch
  })

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col justify-center overflow-y-auto px-6 pt-20 pb-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Семье и педагогам
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Библиотека сценариев уроков</p>
        </div>

        {/* Filters */}
        <div
          className={`mb-5 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-xs text-foreground/40 self-center">Возраст:</span>
            {AGE_GROUPS.map((age) => (
              <button
                key={age}
                onClick={() => setActiveAge(age)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200 ${
                  activeAge === age
                    ? "border-foreground/60 bg-foreground/20 text-foreground"
                    : "border-foreground/20 text-foreground/60 hover:border-foreground/40"
                }`}
              >
                {age}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-xs text-foreground/40 self-center">Тема:</span>
            {THEMES.map((theme) => (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200 ${
                  activeTheme === theme
                    ? "border-foreground/60 bg-foreground/20 text-foreground"
                    : "border-foreground/20 text-foreground/60 hover:border-foreground/40"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        >
          {selectedScenario ? (
            <div className="rounded-2xl border border-foreground/20 bg-foreground/10 p-5 backdrop-blur-md md:p-8">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/20 bg-foreground/10 text-2xl">
                    {selectedScenario.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-light text-foreground">{selectedScenario.title}</h3>
                    <p className="font-mono text-xs text-foreground/50">
                      {selectedScenario.ageGroup} · {selectedScenario.theme} · {selectedScenario.duration}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedScenario(null)}
                  className="shrink-0 text-foreground/40 hover:text-foreground/80"
                >
                  <Icon name="X" size={18} />
                </button>
              </div>
              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-foreground/80">{selectedScenario.desc}</p>
              <div className="mb-6 rounded-xl border border-foreground/15 bg-foreground/8 p-4">
                <h4 className="mb-2 font-mono text-xs text-foreground/50">Материалы:</h4>
                <ul className="space-y-1">
                  {selectedScenario.materials.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-xs text-foreground/70">
                      <Icon name="CheckCircle" size={12} className="text-foreground/40" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <MagneticButton variant="primary" size="lg">
                <Icon name="Download" size={16} />
                Скачать сценарий PDF
              </MagneticButton>
            </div>
          ) : (
            <div
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              style={{ maxHeight: "340px", overflowY: "auto", scrollbarWidth: "none" }}
            >
              {filtered.map((scenario, i) => (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenario(scenario)}
                  className="group rounded-xl border border-foreground/15 bg-foreground/8 p-4 text-left transition-all duration-300 hover:border-foreground/35 hover:bg-foreground/15"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xl">{scenario.icon}</span>
                    <div className="flex items-center gap-1 text-foreground/30">
                      <Icon name="Clock" size={10} />
                      <span className="font-mono text-xs">{scenario.duration}</span>
                    </div>
                  </div>
                  <h3 className="mb-1 font-sans text-sm font-medium leading-snug text-foreground">{scenario.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    <span className="rounded-full border border-foreground/15 px-2 py-0.5 font-mono text-xs text-foreground/40">
                      {scenario.ageGroup}
                    </span>
                    <span className="rounded-full border border-foreground/15 px-2 py-0.5 font-mono text-xs text-foreground/40">
                      {scenario.theme}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-foreground/30 transition-all group-hover:text-foreground/60">
                    <Icon name="Download" size={10} />
                    <span className="font-mono text-xs">Скачать PDF</span>
                  </div>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="col-span-3 py-8 text-center font-mono text-sm text-foreground/40">
                  Нет сценариев по выбранным фильтрам
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
