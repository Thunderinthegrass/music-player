let fs = require("fs");
// console.log("привет");
// fs.readFile("app/music/sovietwawe.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

let songsList = {"sugar revevant": "the future was durs",
"марксэн": ["электроудар","юность робота","коридор"],
"артель волга": "полёт над утренним городом",
"pluto124340": "жаркое лето 89",
"удары синтезаторов": ["предчувствие космоса","радиотелескоп","звёздный путешественник","весна"],
"soviet space program": "radiowaves",
"импульс - 80": "сердца чернобыля",
"луч": ["олимпиада-80","сквозь горизонт"],
"сила кориолиса": ["завод роботехники","падающие звезды","рассвет"],
"время акаций": ["загадка","так далеко"],
"протон-4": "путь на амальтею",
"звездный пегас": "сквозь звезды",
"гербарий": "шепот планет",
"стажеры": "билет домой",
"хрономираж": "хочу верить",
"наследие большевиков": "новые инструменты",
"denis kobzev": "орбита 3",
"gummy boy": "don`t leave",
"ппвк": ["небо над финским заливом","ППВК Летние Сны Outtakes & Other T - 02 Белые Ночи","волшебство уходит","белые ночи"],
"электроника302": "задачи определены",
"хронометраж": "хочу верить",
"буран": "истории космонавтов",
"наукоград": "время",
"импульс-80": ["полет к звездам","свет маяка","расстояние"],
"proton-4": "Звездное небо",
"любительская частота": "экранопланы",
"pen friend": "parachute",
"функция запаздывания": "сквозь звёзды",
"electrosignal": "friendly robot",
"bulb": "lonely gravity(original mix)",
"великие фальши": ["акватория","пахло жженым пухом"],
"забавные игры": "далеко от людей",
"внутрия": "первая ночь",
"ИА бежевая луна": "на коньках в субботу"
};

fs.writeFile('songs-lists', JSON.stringify(songsList), (err) => {
  if (err) console.log('Ошибочка какая-то')
})