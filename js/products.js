const products = [
    {
        id: "SQ-TST-001",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 860,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Титан софттач",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "titan_softtouch.png"
    },
    {
        id: "SQ-SRU-002",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 640,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "сірий ум",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "siryi_um.png"
    },
    {
        id: "SQ-DAN-003",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 700,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Дуб антік",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "dub_antik.png"
    },
    {
        id: "SQ-DVT-004",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 700,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Дуб Вотан",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "dub_votan.png"
    },
    {
        id: "SQ-KSH-005",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 700,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Кашемір",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "kashemir.png"
    },
    {
        id: "SQ-DKM-006",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 700,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Дуб кам'яний",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "dub_kamyanyy.png"
    },
    {
        id: "SQ-FPL-007",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 700,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Фанера палена",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "fanera_palena.png"
    },
    {
        id: "SQ-BUM-008",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 640,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Білий ультрамат",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "bilyy_ultramat.png"
    },
    {
        id: "SQ-DBL-009",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 700,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Дуб болтон",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "dub_bolton.png"
    },
    {
        id: "SQ-RBL-010",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 670,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Рустік блан",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "rustik_blan.png"
    },
    {
        id: "SQ-RZT-011",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 730,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Рустік золотий",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "rustik_zolotyy.png"
    },
    {
        id: "SQ-RAV-012",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 670,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Рустік авіньон",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "rustik_avignon.png"
    },
    {
        id: "SQ-YKP-013",
        name: "Акустична стінова панель \"Квадрат\"",
        price: 700,
        description: "Акустична стінова панель \"Квадрат\"",
        color: "Ялина карпатська",
        size: "602 х 602 х 17",
        coating: "ПВХ",
        category: "Квадрат",
        image: "yalyna_karpatska.png"
    },
    {
        id: "ST-TST-001",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1580,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Титан софттач",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "titan_softtouch.png"
    },
    {
        id: "ST-SRU-002",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1140,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "сірий ум",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "siryi_um.png"
    },
    {
        id: "ST-DAN-003",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1230,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Дуб антік",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "dub_antik.png"
    },
    {
        id: "ST-DVT-004",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1230,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Дуб Вотан",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "dub_votan.png"
    },
    {
        id: "ST-KSH-005",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1230,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Кашемір",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "kashemir.png"
    },
    {
        id: "ST-DKM-006",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1230,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Дуб кам'яний",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "dub_kamyanyy.png"
    },
    {
        id: "ST-FPL-007",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1230,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Фанера палена",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "fanera_palena.png"
    },
    {
        id: "ST-BUM-008",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1140,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Білий ультрамат",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "bilyy_ultramat.png"
    },
    {
        id: "ST-DBL-009",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1230,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Дуб болтон",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "dub_bolton.png"
    },
    {
        id: "ST-RBL-010",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1190,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Рустік блан",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "rustik_blan.png"
    },
    {
        id: "ST-RZT-011",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1330,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Рустік золотий",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "rustik_zolotyy.png"
    },
    {
        id: "ST-RAV-012",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1190,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Рустік авіньон",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "rustik_avignon.png"
    },
    {
        id: "ST-YKP-013",
        name: "Акустична стінова панель \"Смуги\"",
        price: 1230,
        description: "Акустична стінова панель \"Смуги\" / *ціни вказані без пакування",
        color: "Ялина карпатська",
        size: "301 х 2780 х 17",
        coating: "ПВХ",
        category: "Смуги",
        image: "yalyna_karpatska.png"
    },
    {
        id: "MDF-TST-001",
        name: "СТІНОВА МДФ ПАНЕЛЬ - комплект",
        price: 1111,
        description: "<p>Готове рішення для стильних стін (старт + панель + фініш)</p><p><strong>Комплект:</strong></p><ul><li>Панель — 555 грн</li><li>Старт — 278 грн</li><li>Фініш — 278 грн</li></ul><p><strong>Конструктив:</strong> МДФ, вкритий плівкою ПВХ або ППЛ.</p><p><strong>Упаковка:</strong> Стандартна упаковка: стінова панель 5 шт. по 2780 мм довжиною, стартова планка 10 шт. по 2780 мм довжиною, фінішна планка 10 шт. по 27800 мм довжиною. Окутані в стрейч-плівку, торці захищені картоном, зафіксовані скотчем. Мінімальний комплект 1 шт.</p><p>Колір плівки - вказаний в прайсі.</p>",
        color: "Дуб Болтон, Сканді, Елегансія Меджик, дуб Вотан, дуб Антік, Білий Ультрамат (УМ), Сірий УМ, Чорний УМ",
        size: "117 х 2780 х 12 мм",
        coating: "ПВХ",
        category: "Стінові панелі",
        image: ""
    },
    {
        id: "HEX-TST-001",
        name: "СТІНОВА АКУСТИЧНА ПАНЕЛЬ СОТИ",
        price: 728,
        description: "ПАНЕЛЬ",
        color: "ДУБ СОНОМА",
        size: "537 х 620 х 18 мм",
        coating: "ПВХ",
        category: "Соти",
        image: "dub_sonoma.png"
    },
    {
        id: "HEX-SRU-002",
        name: "СТІНОВА АКУСТИЧНА ПАНЕЛЬ СОТИ",
        price: 728,
        description: "ПАНЕЛЬ",
        color: "КЛЕН",
        size: "537 х 620 х 18 мм",
        coating: "ПВХ",
        category: "Соти",
        image: "klen.png"
    },
    {
        id: "HEX-DAN-003",
        name: "СТІНОВА АКУСТИЧНА ПАНЕЛЬ СОТИ",
        price: 728,
        description: "ПАНЕЛЬ",
        color: "ДУБ КРАФТ ЗОЛОТИЙ",
        size: "537 х 620 х 18 мм",
        coating: "ПВХ",
        category: "Соти",
        image: "dub_kraft_zolotyy.jpg"
    },
    {
        id: "HEX-DVT-004",
        name: "СТІНОВА АКУСТИЧНА ПАНЕЛЬ СОТИ",
        price: 728,
        description: "ПАНЕЛЬ",
        color: "БЕЖ",
        size: "537 х 620 х 18 мм",
        coating: "ПВХ",
        category: "Соти",
        image: "bezh.png"
    },
    {
        id: "HEX-KSH-005",
        name: "КОМПЛЕКТ СТАРТ-ФІНІШ",
        price: 155,
        description: "КОМПЛЕКТ СТАРТ-ФІНІШ",
        color: "ВСІ КОЛЬОРИ З АСОРТИМЕНТУ",
        size: "",
        coating: "ПВХ",
        category: "Комплектуючі",
        image: ""
    }
];

function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function getAllCategories() {
    return [...new Set(products.map(p => p.category))];
}
