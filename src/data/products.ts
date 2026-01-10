export interface Product {
  id: number;
  name: string;
  fullName: string;
  volume: string;
  price: number;
  description: string;
  category: string;
  line: string;
  image: string;
  isNew?: boolean;
}

export const productLines = [
  "REEDLE SHOT",
  "PDRN",
  "CICA",
  "COLLAGEN PACT",
  "SUPER HYALON",
  "PRO CICA"
];

export const categories = [
  "Уход за лицом",
  "Макияж"
];

export const products: Product[] = [
  {
    id: 1,
    name: "Бустер-сыворотка с микроиглами",
    fullName: "VT Cosmetics VT Reedle Shot 100",
    volume: "50 мл",
    price: 3290,
    description: "Сыворотка с микроиглами спикулы. Бустер-сыворотка способствует восстановлению и оздоровлению кожи, склонной к образованию акне и повышенной чувствительности. Продукт разглаживает микрорельеф, уменьшая размер и глубину пор, деликатно осветляет пигментацию и постакне.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53490-408x613.jpg"
  },
  {
    id: 2,
    name: "Бустер-сыворотка с микроиглами и ретинолом",
    fullName: "VT Cosmetics Reti-A Reedle Shot 100",
    volume: "50 ml",
    price: 3490,
    description: "Бустер-сыворотка с микроиглами и ретинолом стимулирует обновление клеток, разглаживает рельеф: сокращает видимость морщин и пор, уменьшает пигментацию, борется со следами постакне. Делает кожу ровной, упругой и сияющей.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54092-408x613.jpg",
    isNew: true
  },
  {
    id: 3,
    name: "Бустер-сыворотка увлажняющая с микроиглами",
    fullName: "VT Cosmetics Hydrop Reedle Shot 100",
    volume: "50ml",
    price: 2390,
    description: "Увлажняющая бустер-сыворотка с микроиглами разглаживает текстуру кожи, уменьшает видимость возрастных изменений и пигментации, придаёт здоровое сияние. Восполняет недостаток влаги, успокаивает и смягчает.",
    category: "Уход за лицом",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54094-408x613.jpg",
    isNew: true
  },
  {
    id: 4,
    name: "Бустер-сыворотка с микроиглами и центеллой",
    fullName: "VT Cosmetics Pro Cica Reedle Shot 100",
    volume: "50ml",
    price: 3490,
    description: "Бустер-сыворотка с микроиглами для чувствительной кожи направлена на восстановление защитного барьера и липидной мантии. Укрепляет локальный иммунитет, снижает реактивность, уменьшает раздражение и покраснение.",
    category: "Уход за лицом",
    line: "PRO CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54093-408x613.jpg",
    isNew: true
  },
  {
    id: 5,
    name: "Бустер-сыворотка с микроиглами 300",
    fullName: "VT Cosmetics VT Reedle Shot 300",
    volume: "50 мл",
    price: 4490,
    description: "Интенсивная бустер-сыворотка с микроиглами запускает механизмы оздоровления и обновления кожи за счёт деликатного отшелушивания и восстановления. Улучшает цвет лица, борется с тусклостью и пигментацией.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53492-408x613.jpg"
  },
  {
    id: 6,
    name: "Бустер-сыворотка с микроиглами и витамином С",
    fullName: "VT Cosmetics Vita-Light Reedle Shot 100",
    volume: "50 ml",
    price: 3490,
    description: "Бустер-сыворотка с микроиглами и витамином C борется с пигментацией, постакне, тусклостью тона. Выравнивает рельеф, поддерживает упругость, способствует сужению пор. Содержит 5% ниацинамида и витамин C.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54097-408x613.jpg",
    isNew: true
  },
  {
    id: 7,
    name: "Бустер-сыворотка с микроиглами и коллагеном",
    fullName: "VT Cosmetics Collagen Reedle Shot 100",
    volume: "50 ml",
    price: 3490,
    description: "Бустер-сыворотка с микроиглами и коллагеном повышает эластичность и упругость, сокращает выраженность морщин и сужает расширенные поры. Замедляет первые возрастные изменения, увлажняет, придаёт здоровое сияние.",
    category: "Уход за лицом",
    line: "COLLAGEN PACT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54096-408x613.jpg",
    isNew: true
  },
  {
    id: 8,
    name: "Бустер-сыворотка с микроиглами и чёрным трюфелем",
    fullName: "VT Cosmetics Black Truffle Reedle Shot 100",
    volume: "50 ml",
    price: 3490,
    description: "Бустер-сыворотка с микроиглами и трюфелем сокращает глубину морщин, разглаживает и подтягивает кожу, повышает упругость и эластичность. Содержит экстракт чёрного трюфеля, золото, коллаген и ниацинамид.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54098-408x613.jpg",
    isNew: true
  },
  {
    id: 9,
    name: "Бустер-сыворотка антиоксидантная с микроиглами",
    fullName: "VT Cosmetics Red Booster Reedle Shot 100",
    volume: "50 ml",
    price: 3490,
    description: "Антиоксидантная бустер-сыворотка с микроиглами помогает в борьбе с первыми признаками старения, повышает эластичность и способствует разглаживанию морщин. Устраняет тусклый цвет лица, выравнивает тон и возвращает коже здоровое сияние.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54099-408x613.jpg",
    isNew: true
  },
  {
    id: 10,
    name: "Бустер-сыворотка с PDRN",
    fullName: "VT Cosmetics PDRN Reedle Shot 100",
    volume: "50ml",
    price: 4490,
    description: "Регенерирующая бустер-сыворотка с PDRN запускает процессы восстановления кожи изнутри: разглаживает морщины и борется с первыми возрастными изменениями. Усиливает синтез коллагена и эластина, повышает упругость и эластичность.",
    category: "Уход за лицом",
    line: "PDRN",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54091-408x613.jpg",
    isNew: true
  },
  {
    id: 11,
    name: "Тонер очищающий",
    fullName: "VT Cosmetics Reedle Shot Synergy Cleansing Toner",
    volume: "150ml",
    price: 2690,
    description: "Тоник для лица освежает и увлажняет кожу. Формула содержит комплекс CICA, состоящий из центеллы азиатской и полученных из этого растения компонентов, которые обладают противовоспалительными, увлажняющими и успокаивающими свойствами.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53497-408x613.jpg"
  },
  {
    id: 12,
    name: "Газированный тонер с микроиглами",
    fullName: "VT Cosmetics Reedle Shot Synergy Sparkling Toner Pad",
    volume: "60 шт",
    price: 2490,
    description: "Газированный тонер с микроиглами мягко отшелушивает, выравнивает тон и микрорельеф кожи, тонизирует и увлажняет. Содержит микроиглы Cica Reedle™, газированную воду, комплекс CICA Hyalon™ и AHA/BHA/PHA кислоты.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53498-408x613.jpg"
  },
  {
    id: 13,
    name: "Ночная маска с микроиглами и гиалуроновой кислотой",
    fullName: "VT Cosmetics Reedle Shot Mask Pack",
    volume: "170ml",
    price: 2390,
    description: "Ночная маска с микроиглами и гиалуроновой кислотой разглаживает микрорельеф кожи, повышает её эластичность и обеспечивает глубокое увлажнение. Способствует регенерации, выравнивает тон кожи и осветляет пигментацию.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53496-408x613.jpg"
  },
  {
    id: 14,
    name: "Тканевая маска с центеллой и гиалуроновой кислотой",
    fullName: "VT Cosmetics Cica Vital Mask",
    volume: "28 г",
    price: 190,
    description: "Тканевая маска с центеллой азиатской и гиалуроновой кислотой интенсивно увлажняет, успокаивает раздражения и укрепляет защитный барьер кожи. Выравнивает тон и рельеф, придаёт коже сияние.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53501-408x613.jpg"
  },
  {
    id: 15,
    name: "Патчи от воспалений",
    fullName: "VT Cosmetics Spot Patch",
    volume: "48 шт",
    price: 490,
    description: "Гидроколлоидные патчи защищают от внешней среды, впитывают излишки себума и помогают восстановиться от несовершенств. Экстракт центеллы азиатской успокаивает. Тонкий и полупрозрачный материал дарит естественное покрытие.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53500-408x613.jpg"
  },
  {
    id: 16,
    name: "Очищающая пенка",
    fullName: "VT Cosmetics Cica Mild Foam Cleanser",
    volume: "300 ml",
    price: 1290,
    description: "Очищающая пенка с центеллой азиатской мягко удаляет загрязнения и макияж, не пересушивая кожу. Успокаивает раздражения, выравнивает тон и подготавливает кожу к дальнейшему уходу.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53502-408x613.jpg"
  },
  {
    id: 17,
    name: "Крем с центеллой для чувствительной кожи",
    fullName: "VT Cosmetics Cica Cream",
    volume: "50 ml",
    price: 1690,
    description: "Успокаивающий крем с центеллой азиатской восстанавливает защитный барьер кожи, увлажняет и снимает раздражение. Подходит для чувствительной и проблемной кожи.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53503-408x613.jpg"
  },
  {
    id: 18,
    name: "Солнцезащитный крем SPF50+",
    fullName: "VT Cosmetics Cica Sun Essence SPF50+ PA++++",
    volume: "50 ml",
    price: 1590,
    description: "Солнцезащитный крем с центеллой азиатской защищает кожу от UVA и UVB лучей, предотвращает фотостарение и появление пигментации. Легкая текстура не оставляет белых следов.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53504-408x613.jpg"
  },
  {
    id: 19,
    name: "Коллагеновый пакт",
    fullName: "VT Cosmetics Collagen Pact",
    volume: "11 г",
    price: 1790,
    description: "Компактная пудра с коллагеном выравнивает тон кожи, матирует и придаёт естественное сияние. Увлажняет и заполняет мелкие морщинки, создавая эффект гладкой и ухоженной кожи.",
    category: "Макияж",
    line: "COLLAGEN PACT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53505-408x613.jpg"
  },
  {
    id: 20,
    name: "Кушон с гиалуроновой кислотой",
    fullName: "VT Cosmetics Super Hyalon Cushion",
    volume: "13 г",
    price: 2290,
    description: "Кушон с гиалуроновой кислотой обеспечивает плотное покрытие и интенсивное увлажнение. Выравнивает тон, скрывает несовершенства и придаёт коже здоровое сияние.",
    category: "Макияж",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53506-408x613.jpg"
  }
];
