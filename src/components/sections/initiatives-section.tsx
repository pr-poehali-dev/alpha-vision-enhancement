import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"
import { MagneticButton } from "@/components/magnetic-button"

const INITIATIVES = [
  {
    id: 1,
    title: "Живая история",
    region: "Москва",
    category: "Образование",
    desc: "Волонтёры приходят в школы с интерактивными уроками о культурном наследии: костюмы, артефакты, живые рассказы очевидцев.",
    impact: "240 школ, 18 000 учеников",
    how: "Подготовьте 3 тематических урока, привлеките историков и музейных сотрудников, согласуйте с отделом образования города.",
    icon: "🏫",
  },
  {
    id: 2,
    title: "Бабушкин рецепт",
    region: "Новосибирск",
    category: "Кухня и традиции",
    desc: "Сборник аутентичных рецептов народов Сибири, собранных у старшего поколения. Книга издана при поддержке местного правительства.",
    impact: "3 000 рецептов, 47 народов",
    how: "Организуйте экспедиции в сёла, запишите рецепты на видео, создайте партнёрство с местным издательством или библиотекой.",
    icon: "📖",
  },
  {
    id: 3,
    title: "Музей в кармане",
    region: "Санкт-Петербург",
    category: "Цифровая культура",
    desc: "Мобильные аудиогиды по историческим кварталам города. 200+ локаций, рассказы экспертов, архивные фотографии.",
    impact: "50 000 пользователей, 12 городов",
    how: "Запишите аудио с историками, сфотографируйте локации, используйте бесплатные платформы аудиогидов для публикации.",
    icon: "🎧",
  },
  {
    id: 4,
    title: "Мастер передаёт",
    region: "Дагестан",
    category: "Ремёсла",
    desc: "Программа сохранения редких ремёсел: мастера учат молодёжь кубачинскому серебру, балхарской керамике, унцукульской инкрустации.",
    impact: "120 мастеров, 800 учеников",
    how: "Найдите мастеров через культурные центры, договоритесь о мастер-классах, подайте заявку на грант фонда «Культура».",
    icon: "🪔",
  },
  {
    id: 5,
    title: "Голоса предков",
    region: "Якутия",
    category: "Языки",
    desc: "Цифровой архив записей носителей редких языков народов Севера. Создаётся до того, как уйдут последние хранители живой речи.",
    impact: "18 языков, 400+ часов записей",
    how: "Получите диктофон, свяжитесь с краеведческим музеем, запишите беседы с пожилыми носителями языка — каждая запись бесценна.",
    icon: "🎙️",
  },
  {
    id: 6,
    title: "Двор без границ",
    region: "Казань",
    category: "Межнациональный диалог",
    desc: "Серия дворовых фестивалей, где соседи разных национальностей делятся едой, музыкой и играми. Объединяет жителей многонациональных кварталов.",
    impact: "32 фестиваля, 15 000 участников",
    how: "Арендуйте двор или сквер, пригласите семьи разных народов, создайте простую программу с едой и музыкой — и люди придут сами.",
    icon: "🌍",
  },
]

export function InitiativesSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.2)
  const [selectedInitiative, setSelectedInitiative] = useState<(typeof INITIATIVES)[0] | null>(null)

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
            Гражданские
            <br />
            <span className="text-foreground/40">инициативы</span>
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Проекты, которые меняют жизнь</p>
        </div>

        {selectedInitiative ? (
          /* Detail view */
          <div
            className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="rounded-2xl border border-foreground/20 bg-foreground/10 p-5 backdrop-blur-md md:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-foreground/20 bg-foreground/10 text-3xl">
                    {selectedInitiative.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-2xl font-light text-foreground">{selectedInitiative.title}</h3>
                    <p className="font-mono text-xs text-foreground/50">
                      {selectedInitiative.region} · {selectedInitiative.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="shrink-0 text-foreground/40 hover:text-foreground/80"
                >
                  <Icon name="X" size={18} />
                </button>
              </div>

              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-foreground/80 md:text-base">
                {selectedInitiative.desc}
              </p>

              <div className="mb-6 flex items-center gap-2 rounded-xl border border-foreground/15 bg-foreground/8 px-4 py-3">
                <Icon name="TrendingUp" size={14} className="text-foreground/50" />
                <span className="font-mono text-xs text-foreground/60">Результат:</span>
                <span className="font-mono text-sm text-foreground">{selectedInitiative.impact}</span>
              </div>

              <div className="rounded-xl border border-foreground/15 bg-foreground/8 p-4">
                <h4 className="mb-2 flex items-center gap-2 font-sans text-sm font-medium text-foreground">
                  <Icon name="Lightbulb" size={14} />
                  Как повторить
                </h4>
                <p className="text-xs leading-relaxed text-foreground/70">{selectedInitiative.how}</p>
              </div>

              <div className="mt-6">
                <MagneticButton variant="secondary" onClick={() => scrollToSection?.(5)}>
                  Связаться с автором
                </MagneticButton>
              </div>
            </div>
          </div>
        ) : (
          /* Grid view */
          <div
            className={`grid gap-3 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {INITIATIVES.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setSelectedInitiative(item)}
                className="group rounded-xl border border-foreground/15 bg-foreground/8 p-4 text-left transition-all duration-300 hover:border-foreground/35 hover:bg-foreground/15 hover:scale-[1.02]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="rounded-full border border-foreground/15 px-2 py-0.5 font-mono text-xs text-foreground/40">
                    {item.category}
                  </span>
                </div>
                <h3 className="mb-1 font-sans text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mb-3 font-mono text-xs text-foreground/50">{item.region}</p>
                <p className="text-xs leading-relaxed text-foreground/65 line-clamp-2">{item.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-foreground/40 transition-all duration-200 group-hover:text-foreground/70">
                  <span className="font-mono text-xs">Подробнее</span>
                  <Icon name="ArrowRight" size={10} />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
