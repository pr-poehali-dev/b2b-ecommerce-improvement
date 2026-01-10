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
  isHit?: boolean;
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
    description: "Сыворотка с микроиглами спикулы. Запускает процессы оздоровления и обновления кожи, разглаживает микрорельеф, уменьшает размер пор.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53490-408x613.jpg",
    isHit: true
  },
  {
    id: 2,
    name: "Бустер-сыворотка с микроиглами 300",
    fullName: "VT Cosmetics VT Reedle Shot 300",
    volume: "50 мл",
    price: 4490,
    description: "Интенсивная сыворотка с микроиглами спикулы для глубокого обновления кожи.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53491-408x613.png"
  },
  {
    id: 3,
    name: "Бустер-сыворотка с микроиглами и ретинолом",
    fullName: "VT Cosmetics Reti-A Reedle Shot 100",
    volume: "50 ml",
    price: 3490,
    description: "Бустер-сыворотка с микроиглами и ретинолом для антивозрастного ухода.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53493-408x613.jpg"
  },
  {
    id: 4,
    name: "Бустер-сыворотка для чувствительной кожи",
    fullName: "VT Cosmetics Pro Cica Reedle Shot 100",
    volume: "50 ml",
    price: 3290,
    description: "Бустер-сыворотка для чувствительной кожи с микроиглами и центеллой.",
    category: "Уход за лицом",
    line: "PRO CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53492-408x613.jpg"
  },
  {
    id: 5,
    name: "Бустер-сыворотка увлажняющая",
    fullName: "VT Cosmetics Hydrop Reedle Shot 100",
    volume: "50ml",
    price: 2390,
    description: "Увлажняющая бустер-сыворотка с микроиглами для интенсивного увлажнения.",
    category: "Уход за лицом",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53495-408x613.jpg"
  },
  {
    id: 6,
    name: "Бустер-сыворотка с витамином С",
    fullName: "VT Cosmetics Vita-Light Reedle Shot 100",
    volume: "50 ml",
    price: 3490,
    description: "Бустер-сыворотка с микроиглами и витамином С для осветления кожи.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/656789-408x613.jpg"
  },
  {
    id: 7,
    name: "Бустер-сыворотка с коллагеном",
    fullName: "VT Cosmetics Collagen Reedle Shot 100",
    volume: "50ml",
    price: 3490,
    description: "Бустер-сыворотка с микроиглами и коллагеном для упругости кожи.",
    category: "Уход за лицом",
    line: "COLLAGEN PACT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/623456-408x613.jpg"
  },
  {
    id: 8,
    name: "Антиоксидантная бустер-сыворотка",
    fullName: "VT Cosmetics Red Booster Reedle Shot 100",
    volume: "50ml",
    price: 3490,
    description: "Бустер-сыворотка антиоксидантная с микроиглами для борьбы с признаками старения.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/612345-408x613.jpg"
  },
  {
    id: 9,
    name: "Бустер-сыворотка с чёрным трюфелем",
    fullName: "VT Cosmetics Black Truffle Reedle Shot 100",
    volume: "50 ml",
    price: 3690,
    description: "Бустер-сыворотка с микроиглами и экстрактом черного трюфеля.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/654321-408x613.jpg"
  },
  {
    id: 10,
    name: "Бустер-сыворотка с PDRN",
    fullName: "VT Cosmetics PDRN Reedle Shot 100",
    volume: "50ml",
    price: 4490,
    description: "Регенерирующая бустер-сыворотка с PDRN и микроиглами.",
    category: "Уход за лицом",
    line: "PDRN",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53494-408x613.jpg"
  },
  {
    id: 11,
    name: "Тонер освежающий",
    fullName: "VT Cosmetics Reedle Shot Synergy Cleansing Toner",
    volume: "150ml",
    price: 2690,
    description: "Тонер освежающий и увлажняющий с микроиглами.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53527-408x613.jpg"
  },
  {
    id: 12,
    name: "Газированный тонер-пады",
    fullName: "VT Cosmetics Reedle Shot Synergy Sparkling Toner Pad",
    volume: "60 шт",
    price: 2490,
    description: "Газированные тонер-пады для мягкого отшелушивания.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53495-408x613.jpg"
  },
  {
    id: 13,
    name: "Ночная маска",
    fullName: "VT Cosmetics Reedle Shot Mask Pack",
    volume: "170ml",
    price: 2390,
    description: "Ночная маска с микроиглами для интенсивного увлажнения.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53526-408x613.jpg"
  },
  {
    id: 14,
    name: "Лифтинг крем",
    fullName: "VT Cosmetics Reedle Shot Lifting Cream",
    volume: "50ml",
    price: 3990,
    description: "Лифтинг крем с микроиглами для упругости кожи.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53533-408x613.jpg"
  },
  {
    id: 15,
    name: "Патчи от воспалений",
    fullName: "VT Cosmetics Spot Patch",
    volume: "48 шт",
    price: 490,
    description: "Гидроколлоидные патчи от воспалений.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53786-408x613.jpg"
  },
  {
    id: 16,
    name: "Бустер-эссенция с PDRN",
    fullName: "VT Cosmetics PDRN Essence 100",
    volume: "30ml",
    price: 3590,
    description: "Бустер-эссенция укрепляющая с ПДРН.",
    category: "Уход за лицом",
    line: "PDRN",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/66788-408x613.jpg"
  },
  {
    id: 17,
    name: "Крем с PDRN",
    fullName: "VT Cosmetics PDRN Cream 100",
    volume: "50ml",
    price: 3690,
    description: "Крем увлажняющий с ПДРН.",
    category: "Уход за лицом",
    line: "PDRN",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/676677-408x613.jpg"
  },
  {
    id: 18,
    name: "Крем для глаз с PDRN",
    fullName: "VT Cosmetics PDRN Reedle Shot Eye Lifter",
    volume: "15ml",
    price: 2490,
    description: "Крем для кожи вокруг глаз с ПДРН.",
    category: "Уход за лицом",
    line: "PDRN",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54052-408x613.jpg"
  },
  {
    id: 19,
    name: "Тонер с PDRN",
    fullName: "VT Cosmetics PDRN Toner",
    volume: "150ml",
    price: 2690,
    description: "Увлажняющий тонер для лица с ПДРН.",
    category: "Уход за лицом",
    line: "PDRN",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/678866-408x613.jpg"
  },
  {
    id: 20,
    name: "Эссенция с PDRN",
    fullName: "VT Cosmetics PDRN Double Shot Essence",
    volume: "100ml",
    price: 3990,
    description: "Эссенция с удвоенной концентрацией ПДРН.",
    category: "Уход за лицом",
    line: "PDRN",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/677889-408x613.jpg"
  },
  {
    id: 21,
    name: "Гидрогелевая маска с PDRN",
    fullName: "VT Cosmetics PDRN Hydrogel Mask",
    volume: "1 шт",
    price: 490,
    description: "Гидрогелевая маска для упругости кожи с ПДРН.",
    category: "Уход за лицом",
    line: "PDRN",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/675655-408x613.jpg"
  },
  {
    id: 22,
    name: "Набор тканевых масок с PDRN",
    fullName: "VT Cosmetics PDRN Daily Mask",
    volume: "350g/30ea",
    price: 2290,
    description: "Набор тканевых масок для сияния кожи.",
    category: "Уход за лицом",
    line: "PDRN",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/675675-408x613.jpg"
  },
  {
    id: 23,
    name: "Крем с ретинолом",
    fullName: "VT Cosmetics Cica Reti-A Cream 0.05",
    volume: "30ml",
    price: 1690,
    description: "Крем точечный с ретинолом и центеллой.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/50441-408x613.jpg"
  },
  {
    id: 24,
    name: "Набор масок с ретинолом",
    fullName: "VT Cosmetics Cica Reti-A mask",
    volume: "350g/30ea",
    price: 2190,
    description: "Набор тканевых масок с ретинолом.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54047-408x613.jpg"
  },
  {
    id: 25,
    name: "Маска-перчатки для рук",
    fullName: "VT Cosmetics Reedle Shot Nourishing Hand Mask",
    volume: "16ml",
    price: 390,
    description: "Питательная маска-перчатки для рук.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54050-408x613.jpg"
  },
  {
    id: 26,
    name: "Маска двухфазная",
    fullName: "VT Cosmetics Reedle Shot 100 2Step Mask",
    volume: "1 шт",
    price: 350,
    description: "Маска двухфазная с микроиглами.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53528-408x613.jpg"
  },
  {
    id: 27,
    name: "Гидрогелевая маска Pro Cica",
    fullName: "VT Cosmetics Pro Cica Reedle Shot 100 2Step Hydrogel Mask",
    volume: "1 шт",
    price: 450,
    description: "Маска успокаивающая гидрогелевая с микроиглами.",
    category: "Уход за лицом",
    line: "PRO CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53601-408x613.jpg"
  },
  {
    id: 28,
    name: "Гидрогелевая маска Hydrop",
    fullName: "VT Cosmetics Hydrop HL Reedle Shot100 2Step Hydrogel Mask",
    volume: "1 шт",
    price: 450,
    description: "Маска увлажняющая гидрогелевая с микроиглами.",
    category: "Уход за лицом",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53586-408x613.jpg"
  },
  {
    id: 29,
    name: "Гидрогелевая маска с ретинолом",
    fullName: "VT Cosmetics Reti-A Reedle Shot100 2Step Hydrogel Mask",
    volume: "1 шт",
    price: 450,
    description: "Маска гидрогелевая с микроиглами и ретинолом.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53559-408x613.jpg"
  },
  {
    id: 30,
    name: "Гидрогелевая маска Vita-Light",
    fullName: "VT Cosmetics Vita-Light Reedle Shot100 2Step Mask",
    volume: "1 шт",
    price: 450,
    description: "Маска осветляющая гидрогелевая с микроиглами.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53587-408x613.jpg"
  },
  {
    id: 31,
    name: "Альгинатная маска с гиалуроновой кислотой",
    fullName: "VT Cosmetics Reedle Shot EX Hyaruronic Modeling Pack",
    volume: "25g",
    price: 390,
    description: "Альгинатная маска со спикулами и гиалуроновой кислотой для увлажнения.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53531-408x613.jpg"
  },
  {
    id: 32,
    name: "Альгинатная маска с витамином С",
    fullName: "VT Cosmetics Reedle Shot EX Vitamin Modeling Pack",
    volume: "25g",
    price: 390,
    description: "Альгинатная маска со спикулами и витамином С для сияния кожи.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53532-408x613.jpg"
  },
  {
    id: 33,
    name: "Гель-маска с гиалуроновой кислотой",
    fullName: "VT Cosmetics Super Hyalon Ampoule Moisture Gel Mask",
    volume: "28g",
    price: 450,
    description: "Гель-маска с гиалуроновой кислотой для интенсивного увлажнения.",
    category: "Уход за лицом",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53723-408x613.jpg"
  },
  {
    id: 34,
    name: "Коллагеновая маска",
    fullName: "VT Cosmetics Collagen Reedle Shot 100",
    volume: "1 шт",
    price: 450,
    description: "Маска гидрогелевая с микроиглами и коллагеном.",
    category: "Уход за лицом",
    line: "COLLAGEN PACT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53709-408x613.jpg"
  },
  {
    id: 35,
    name: "Коллагеновый пакт 11г",
    fullName: "VT Cosmetics Collagen Pact 11g",
    volume: "11г",
    price: 1790,
    description: "Компактная пудра с коллагеном.",
    category: "Макияж",
    line: "COLLAGEN PACT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53719-408x613.jpg"
  },
  {
    id: 36,
    name: "Коллагеновый пакт 23г",
    fullName: "VT Cosmetics Collagen Pact 23g",
    volume: "23г",
    price: 2390,
    description: "Компактная пудра с коллагеном увеличенного объема.",
    category: "Макияж",
    line: "COLLAGEN PACT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53720-408x613.jpg"
  },
  {
    id: 37,
    name: "Кушон с гиалуроновой кислотой",
    fullName: "VT Cosmetics Super Hyalon Cushion",
    volume: "13г",
    price: 2290,
    description: "Кушон с гиалуроновой кислотой для увлажнения и покрытия.",
    category: "Макияж",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53714-408x613.jpg"
  },
  {
    id: 38,
    name: "Солнцезащитный кушон SPF50+",
    fullName: "VT Cosmetics Super Hyalon Sun Cushion SPF50+ PA++++",
    volume: "12г",
    price: 2390,
    description: "Солнцезащитный кушон с высокой степенью защиты.",
    category: "Макияж",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53715-408x613.jpg"
  },
  {
    id: 39,
    name: "Сыворотка 100 мини",
    fullName: "VT Cosmetics 100 Reedle shot",
    volume: "2ml",
    price: 150,
    description: "Сыворотка с микроиглами спикулы в мини-формате.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53489-408x613.jpg"
  },
  {
    id: 40,
    name: "Сыворотка Hydrop мини",
    fullName: "VT Cosmetics Hydrop Reedle Shot 100",
    volume: "2ml",
    price: 150,
    description: "Бустер-сыворотка увлажняющая с микроиглами в мини-формате.",
    category: "Уход за лицом",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54095-408x613.jpg"
  },
  {
    id: 41,
    name: "Сыворотка с ретинолом мини",
    fullName: "VT Cosmetics Reti-A Reedle Shot 100 Stick",
    volume: "2 ml",
    price: 150,
    description: "Сыворотка с микроиглами и ретинолом в стик-формате.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53554-408x613.jpg"
  },
  {
    id: 42,
    name: "Сыворотка Pro Cica мини",
    fullName: "VT Cosmetics Pro Cica Reedle Shot 100 Stick",
    volume: "2 ml",
    price: 150,
    description: "Сыворотка с микроиглами для чувствительной кожи в стик-формате.",
    category: "Уход за лицом",
    line: "PRO CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53553-408x613.jpg"
  },
  {
    id: 43,
    name: "Сыворотка Vita-Light мини",
    fullName: "VT Cosmetics Vita-Light Reedle Shot100",
    volume: "2ml",
    price: 150,
    description: "Бустер-сыворотка с микроиглами в мини-формате.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/New/53782-408x613.jpg"
  },
  {
    id: 44,
    name: "Сыворотка с коллагеном мини",
    fullName: "VT Cosmetics Collagen Reedle Shot 100 Stick",
    volume: "2 ml",
    price: 150,
    description: "Сыворотка с микроиглами и коллагеном в стик-формате.",
    category: "Уход за лицом",
    line: "COLLAGEN PACT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53552-408x613.jpg"
  },
  {
    id: 45,
    name: "Сыворотка 300 мини",
    fullName: "VT Cosmetics Reedle Shot 300 Stick",
    volume: "2 ml",
    price: 190,
    description: "Бустер-сыворотка с микроиглами спикулы в стик-формате.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/New/53602-408x613.jpg"
  },
  {
    id: 46,
    name: "Набор 2Step Hydrop 100",
    fullName: "VT Cosmetics Hydrop Reedle Shot 100hL 2 Step Mask",
    volume: "1 шт",
    price: 350,
    description: "Маска двухступенчатая для увлажнения (бустер100 + тканевая маска).",
    category: "Уход за лицом",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53600-408x613.jpg"
  },
  {
    id: 47,
    name: "Набор 2Step Hydrop 300",
    fullName: "VT Cosmetics Hydrop Reedle Shot 300hL 2 Step Mask",
    volume: "1 шт",
    price: 350,
    description: "Набор двухступенчатый для увлажнения (бустер + тканевая маска).",
    category: "Уход за лицом",
    line: "SUPER HYALON",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53488-408x613.jpg"
  },
  {
    id: 48,
    name: "Крем для рук Reedle Shot",
    fullName: "VT Cosmetics Reedle Shot Nourishing Hand Cream",
    volume: "50ml",
    price: 890,
    description: "Питательный крем для рук с микроиглами.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/54051-408x613.jpg"
  },
  {
    id: 49,
    name: "Патчи для век Reedle Shot",
    fullName: "VT Cosmetics Reedle Shot Eye Patch",
    volume: "60 шт",
    price: 1990,
    description: "Гидрогелевые патчи для кожи вокруг глаз с микроиглами.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53544-408x613.jpg"
  },
  {
    id: 50,
    name: "Пенка для умывания",
    fullName: "VT Cosmetics Reedle Shot Cleansing Foam",
    volume: "300ml",
    price: 1690,
    description: "Очищающая пенка с микроиглами для глубокого очищения.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53522-408x613.jpg"
  },
  {
    id: 51,
    name: "Солнцезащитный крем SPF50+",
    fullName: "VT Cosmetics Reedle Shot Sun Stick SPF50+ PA++++",
    volume: "19г",
    price: 1790,
    description: "Солнцезащитный крем-стик с микроиглами.",
    category: "Уход за лицом",
    line: "REEDLE SHOT",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53541-408x613.jpg"
  },
  {
    id: 52,
    name: "Тонер-мист с центеллой",
    fullName: "VT Cosmetics Cica Vital Toner Mist",
    volume: "120ml",
    price: 1490,
    description: "Увлажняющий тонер-мист с центеллой азиатской.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53787-408x613.jpg"
  },
  {
    id: 53,
    name: "Пенка для умывания с центеллой",
    fullName: "VT Cosmetics Cica Mild Foam Cleanser",
    volume: "300ml",
    price: 1290,
    description: "Мягкая очищающая пенка с центеллой азиатской.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53788-408x613.jpg"
  },
  {
    id: 54,
    name: "Крем с центеллой",
    fullName: "VT Cosmetics Cica Cream",
    volume: "50ml",
    price: 1690,
    description: "Успокаивающий крем с центеллой азиатской.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53789-408x613.jpg"
  },
  {
    id: 55,
    name: "Солнцезащитный крем с центеллой",
    fullName: "VT Cosmetics Cica Sun Gel SPF50+ PA++++",
    volume: "50ml",
    price: 1590,
    description: "Солнцезащитный гель с центеллой азиатской и SPF50+.",
    category: "Уход за лицом",
    line: "CICA",
    image: "https://koreanbutik.ru/image/cache/catalog/items5/53790-408x613.jpg"
  }
];
