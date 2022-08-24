import acid from "../assets/acid.jpg";
import cancer from "../assets/cancer.jpg";
import lab from "../assets/lab.jpg";
import man from "../assets/man.png";
import fish from "../assets/fish.jpg";
import auto from "../assets/auto.jpg";

import j_one from "../assets/j1.jpg";
import j_two from "../assets/j2.jpg";
import j_three from "../assets/j3.jpg";

export const listOfArticles = [
  {
    img: acid,
    date: "22 августа, 2022",
    title:
      "Ученые разработали новый безопасный источник азотистоводородной кислоты",
    text: "Российские ученые предложили способ синтеза нового, стабильного и невзрывоопасного источника",
    tag: "Химия и материалы",
  },
  {
    img: cancer,
    date: "22 августа, 2022",
    title: "Комар не подточит: средство от малярии эффективно лечит рак",
    text: "Исследователи Института цитологии (ИНЦ) РАН смогли на 20% повысить эффективность терапии клеток рака",
    tag: "Биология",
  },
  {
    img: lab,
    date: "22 августа, 2022",
    title:
      "В России разработали поверхности камер сгорания для гелеобразных топлив",
    text: "Ученые ТПУ разработали новые типы поверхностей нагрева для сжигания перспективных гелеобразных топлив.",
    tag: "Химия и материалы",
  },
  {
    img: man,
    date: "22 августа, 2022",
    title:
      "Михаил Беляев: об анализе изображений, взаимодействии с врачами и ограничениях в автоматизации медицинской диагностики",
    text: "Михаил Беляев — информатик, руководитель лаборатории по анализу медицинских изображений в Сколтехе",
    tag: "Интервью",
  },
  {
    img: fish,
    date: "22 августа, 2022",
    title: "Ученые проверили тихоокеанского лосося на токсиканты",
    text: "Ученые института Мирового океана Дальневосточного федерального университета (ИМО ДВФУ) в течение шести лет",
    tag: "Биология",
  },
  {
    img: auto,
    date: "22 августа, 2022",
    title:
      "«Внутривидовая конкуренция»: как травоядные рыбки превратились в хищников",
    text: "Российские ученые исследовали популяцию родственных виду Garra rufa тропических рыбок",
    tag: "Биология",
  },
];

export const listOfRel = [
  {
    text: "Рыбки-доктора расширили свою специализацию при вспышке видообразования, превратившись из поедателей водорослей в хищников",
  },
  {
    text: "Искусствоведы определили роль аристократического рода Мендосов в становлении архитектуры испанского Ренессанса",
  },
  {
    text: "Разработан новый сверхлегкий материал для защиты от нейтронного излучения",
  },
  {
    text: "Поясница жирафов и бегемотов потеряла гибкость из-за отказа от прыжкового бега и большого веса хозяина",
  },
  {
    text: "Комбинированная вакцина от коронавируса и гриппа будет работать и против новых штаммов",
  },
  {
    text: "Новые покрытия могут сделать костные имплантаты иммуномодулирующими, антибактериальными или противораковыми",
  },
];

export const listOfResults = [
  {
    text: "Объем финансирования проектов",
    id: 1,
    active: true,
    count: "24,3 млрд",
  },
  {
    text: "Профинансировано проектов и программ",
    id: 2,
    active: false,
    count: "5,3 тыс.",
  },
  {
    text: "Поддержано ученых",
    id: 3,
    active: false,
    count: "39,6 тыс.",
  },
  {
    text: "Поддержано ученых в возрасте до 39 лет",
    id: 4,
    active: false,
    count: "29,8 тыс.",
  },
  {
    text: "Поддержано организаций",
    id: 5,
    active: false,
    count: "582",
  },
  {
    text: "Научные публикации",
    id: 6,
    active: false,
    count: "24,9 тыс.",
  },
  {
    text: "Научные публикации в WOS CC",
    id: 7,
    active: false,
    count: "11,7 тыс.",
  },
  {
    text: "Упоминания в СМИ",
    id: 8,
    active: false,
    count: "22,7 тыс.",
  },
];

export const listOfJournos = [
  {
    title: "Дайджест #2 | 2022 (№18)",
    img: j_one,
  },
  {
    title: "Дайджест #1 | 2022 (№17)",
    img: j_two,
  },
  {
    title: "Дайджест #4 | 2022 (№16)",
    img: j_three,
  },
];
