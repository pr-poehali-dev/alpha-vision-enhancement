import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const CENTURIES = ["XVIII в.", "XIX в.", "XX в.", "XXI в."]
const FIELDS = ["Все", "Наука", "Литература", "Искусство"]

const FIGURES = [
  {
    id: 1,
    name: "Михаил Ломоносов",
    years: "1711–1765",
    century: "XVIII в.",
    field: "Наука",
    desc: "Основоположник российской науки. Заложил основы химии, физики, астрономии и языкознания в России. Основал Московский университет.",
    quote: "«Могущество России прирастать будет Сибирью» — из документов Академии наук, 1763",
    icon: "🔬",
  },
  {
    id: 2,
    name: "Александр Пушкин",
    years: "1799–1837",
    century: "XIX в.",
    field: "Литература",
    desc: "Создатель современного русского литературного языка. Автор «Евгения Онегина», «Капитанской дочки», лирических шедевров.",
    quote: "«Я памятник себе воздвиг нерукотворный…» — из лирики поэта, 1836",
    icon: "📜",
  },
  {
    id: 3,
    name: "Пётр Чайковский",
    years: "1840–1893",
    century: "XIX в.",
    field: "Искусство",
    desc: "Величайший русский композитор. Автор балетов «Лебединое озеро», «Щелкунчик», опер и симфоний, покоривших весь мир.",
    quote: "«Музыка — это откровение высшее, чем мудрость и философия» — из дневников, 1888",
    icon: "🎼",
  },
  {
    id: 4,
    name: "Дмитрий Менделеев",
    years: "1834–1907",
    century: "XIX в.",
    field: "Наука",
    desc: "Создатель Периодической таблицы химических элементов. Его открытие стало фундаментом современной химии и физики.",
    quote: "«Нет без явно усиленного труда ни таланта, ни гения» — из научных трудов",
    icon: "⚗️",
  },
  {
    id: 5,
    name: "Лев Толстой",
    years: "1828–1910",
    century: "XIX в.",
    field: "Литература",
    desc: "Автор «Войны и мира» и «Анны Карениной». Мыслитель, философ, реформатор — оказал огромное влияние на мировую культуру.",
    quote: "«Все счастливые семьи похожи друг на друга» — «Анна Каренина», 1878",
    icon: "📚",
  },
  {
    id: 6,
    name: "Юрий Гагарин",
    years: "1934–1968",
    century: "XX в.",
    field: "Наука",
    desc: "Первый человек в космосе. 12 апреля 1961 года открыл космическую эру человечества, совершив исторический полёт на «Востоке».",
    quote: "«Поехали!» — слова при старте, 12 апреля 1961 года",
    icon: "🚀",
  },
]

export function TimelineSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [activeCentury, setActiveCentury] = useState<string | null>(null)
  const [activeField, setActiveField] = useState("Все")
  const [selectedFigure, setSelectedFigure] = useState<(typeof FIGURES)[0] | null>(null)

  const filtered = FIGURES.filter((f) => {
    const centuryMatch = !activeCentury || f.century === activeCentury
    const fieldMatch = activeField === "Все" || f.field === activeField
    return centuryMatch && fieldMatch
  })

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col justify-center overflow-y-auto px-6 pt-20 pb-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Деятели культуры
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Великие имена России</p>
        </div>

        {/* Filters */}
        <div
          className={`mb-6 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-xs text-foreground/40 self-center">Век:</span>
            {CENTURIES.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCentury(activeCentury === c ? null : c)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200 ${
                  activeCentury === c
                    ? "border-foreground/60 bg-foreground/20 text-foreground"
                    : "border-foreground/20 text-foreground/60 hover:border-foreground/40 hover:text-foreground/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 ml-2">
            <span className="font-mono text-xs text-foreground/40 self-center">Область:</span>
            {FIELDS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveField(f)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200 ${
                  activeField === f
                    ? "border-foreground/60 bg-foreground/20 text-foreground"
                    : "border-foreground/20 text-foreground/60 hover:border-foreground/40 hover:text-foreground/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <div className="absolute left-0 top-4 h-px w-full bg-foreground/10" />
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {filtered.map((figure, i) => (
              <button
                key={figure.id}
                onClick={() => setSelectedFigure(selectedFigure?.id === figure.id ? null : figure)}
                className={`group relative shrink-0 rounded-xl border p-4 text-left transition-all duration-300 w-44 md:w-52 ${
                  selectedFigure?.id === figure.id
                    ? "border-foreground/50 bg-foreground/20"
                    : "border-foreground/15 bg-foreground/8 hover:border-foreground/35 hover:bg-foreground/15"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-3 text-2xl">{figure.icon}</div>
                <div className="mb-1 font-mono text-xs text-foreground/50">{figure.years}</div>
                <h3 className="mb-1 font-sans text-sm font-medium leading-tight text-foreground">{figure.name}</h3>
                <span className="inline-block rounded-full border border-foreground/20 px-2 py-0.5 font-mono text-xs text-foreground/50">
                  {figure.field}
                </span>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="py-8 font-mono text-sm text-foreground/50">Нет деятелей по выбранным фильтрам</p>
            )}
          </div>

          {/* Detail card */}
          {selectedFigure && (
            <div className="mt-4 rounded-2xl border border-foreground/20 bg-foreground/10 p-5 backdrop-blur-md md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="text-3xl">{selectedFigure.icon}</span>
                    <div>
                      <h3 className="font-sans text-xl font-light text-foreground md:text-2xl">{selectedFigure.name}</h3>
                      <p className="font-mono text-xs text-foreground/50">{selectedFigure.years} · {selectedFigure.field}</p>
                    </div>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80 md:text-base">
                    {selectedFigure.desc}
                  </p>
                  <blockquote className="mt-4 border-l-2 border-foreground/30 pl-4 font-mono text-xs italic text-foreground/60">
                    {selectedFigure.quote}
                  </blockquote>
                </div>
                <button
                  onClick={() => setSelectedFigure(null)}
                  className="shrink-0 text-foreground/40 hover:text-foreground/80"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
