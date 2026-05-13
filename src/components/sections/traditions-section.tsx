import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const REGIONS = [
  {
    id: 1,
    name: "Татарстан",
    people: "Татары",
    x: "61%",
    y: "38%",
    traditions: [
      { name: "Сабантуй", category: "Праздники", desc: "Праздник плуга — главное народное торжество, знаменующее окончание посевных работ. Включает скачки, борьбу курэш и народные гуляния." },
      { name: "Казан телесе", category: "Ремёсла", desc: "Искусство традиционной татарской кожаной мозаики — уникальная техника орнаментального шитья по коже, передаваемая из поколения в поколение." },
    ],
  },
  {
    id: 2,
    name: "Якутия",
    people: "Якуты (Саха)",
    x: "78%",
    y: "18%",
    traditions: [
      { name: "Ысыах", category: "Праздники", desc: "Якутский Новый год — летний праздник, посвящённый встрече солнца. Включает кумысопитие, хороводы осуохай, спортивные игры." },
      { name: "Хомус", category: "Музыка", desc: "Игра на варгане — духовном инструменте якутского народа. Звук хомуса имитирует природу и считается языком духов." },
    ],
  },
  {
    id: 3,
    name: "Бурятия",
    people: "Буряты",
    x: "74%",
    y: "33%",
    traditions: [
      { name: "Сурхарбан", category: "Праздники", desc: "Традиционные летние игры: стрельба из лука, борьба и конные скачки — отражают воинскую доблесть и единство бурятского народа." },
      { name: "Буузы", category: "Кухня", desc: "Национальное блюдо — паровые пельмени, приготовление которых — целый ритуал, объединяющий семью. Символ гостеприимства Бурятии." },
    ],
  },
  {
    id: 4,
    name: "Дагестан",
    people: "Народы Дагестана",
    x: "52%",
    y: "52%",
    traditions: [
      { name: "Кубачинское серебро", category: "Ремёсла", desc: "Уникальное ювелирное искусство аула Кубачи. Мастера создают украшения с орнаментами, которым более тысячи лет." },
      { name: "Лезгинка", category: "Танцы", desc: "Зажигательный кавказский танец, выражающий смелость, ловкость и горский дух. Исполняется на всех торжественных событиях." },
    ],
  },
  {
    id: 5,
    name: "Карелия",
    people: "Карелы",
    x: "43%",
    y: "18%",
    traditions: [
      { name: "Калевала", category: "Эпос", desc: "Карело-финский эпос, записанный Элиасом Лённротом. Основа культурной идентичности карельского народа, источник вдохновения для художников и музыкантов." },
      { name: "Кантеле", category: "Музыка", desc: "Древний струнный инструмент карел — символ народа. Игра на кантеле передавалась от рунопевцев, хранителей традиций." },
    ],
  },
  {
    id: 6,
    name: "Центральная Россия",
    people: "Русские",
    x: "50%",
    y: "35%",
    traditions: [
      { name: "Масленица", category: "Праздники", desc: "Проводы зимы и встреча весны. Семь дней блинов, народных гуляний, сжигания чучела Масленицы — один из древнейших народных праздников." },
      { name: "Хохломская роспись", category: "Ремёсла", desc: "Знаменитая народная роспись деревянных изделий с золотым, красным и чёрным орнаментом. Хохлома известна во всём мире как символ русского народного искусства." },
    ],
  },
]

export function TraditionsSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [selectedRegion, setSelectedRegion] = useState<(typeof REGIONS)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRegions = REGIONS.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.people.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.traditions.some(
        (t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  )

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
            Традиции народов
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Многоликая Россия</p>
        </div>

        <div
          className={`grid gap-6 transition-all duration-700 md:grid-cols-[1fr_1.4fr] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Map placeholder */}
          <div className="relative overflow-hidden rounded-2xl border border-foreground/15 bg-foreground/8 min-h-[280px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative w-full h-full"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 55% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={48} className="mx-auto mb-2 text-foreground/20" />
                    <p className="font-mono text-xs text-foreground/30">Карта регионов</p>
                  </div>
                </div>
                {REGIONS.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
                    className={`absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                      selectedRegion?.id === region.id
                        ? "border-foreground bg-foreground scale-125"
                        : "border-foreground/40 bg-foreground/20 hover:border-foreground/70 hover:scale-110"
                    }`}
                    style={{ left: region.x, top: region.y }}
                    title={region.name}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/80" />
                  </button>
                ))}
              </div>
            </div>
            <div className="absolute bottom-3 left-3 font-mono text-xs text-foreground/30">
              Нажмите на метку региона
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative">
              <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по народам, традициям…"
                className="w-full rounded-xl border border-foreground/20 bg-foreground/8 py-2.5 pl-9 pr-4 font-mono text-xs text-foreground placeholder:text-foreground/40 focus:border-foreground/40 focus:outline-none backdrop-blur-md"
              />
            </div>

            {/* Region list / detail */}
            {selectedRegion ? (
              <div className="rounded-xl border border-foreground/20 bg-foreground/10 p-4 backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-sans text-lg font-light text-foreground">{selectedRegion.name}</h3>
                    <p className="font-mono text-xs text-foreground/50">{selectedRegion.people}</p>
                  </div>
                  <button onClick={() => setSelectedRegion(null)} className="text-foreground/40 hover:text-foreground/80">
                    <Icon name="X" size={16} />
                  </button>
                </div>
                <div className="space-y-3">
                  {selectedRegion.traditions.map((t) => (
                    <div key={t.name} className="rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                      <div className="mb-1 flex items-center gap-2">
                        <h4 className="font-sans text-sm font-medium text-foreground">{t.name}</h4>
                        <span className="rounded-full border border-foreground/20 px-2 py-0.5 font-mono text-xs text-foreground/50">
                          {t.category}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-foreground/70">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-2 overflow-y-auto" style={{ maxHeight: "260px", scrollbarWidth: "none" }}>
                {filteredRegions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className="group flex w-full items-center justify-between rounded-xl border border-foreground/15 bg-foreground/8 px-4 py-3 text-left transition-all duration-200 hover:border-foreground/35 hover:bg-foreground/15"
                  >
                    <div>
                      <p className="font-sans text-sm font-medium text-foreground">{region.people}</p>
                      <p className="font-mono text-xs text-foreground/50">{region.name} · {region.traditions.length} традиции</p>
                    </div>
                    <Icon name="ChevronRight" size={14} className="text-foreground/30 transition-all group-hover:translate-x-1 group-hover:text-foreground/60" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
