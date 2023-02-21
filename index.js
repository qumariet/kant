var quotes = [
    "Воспитание есть искусство, применение которого должно совершенствоваться многими поколениями.",
    "Дайте мне материю, и я покажу вам, как из неё должен образоваться мир.",
    "Дайте человеку все, чего он желает, и в ту же минуту он почувствует, что это все — не есть все.",
    "Дольше всего живут тогда, когда меньше всего заботятся о продлении жизни.",
    "Если наказывать ребенка за дурное и награждать за доброе, то он будет делать добро ради выгоды.",
    "Имей мужество пользоваться собственным умом.",
    "Когда справедливость исчезает, то не остается ничего, что могло бы придать ценность жизни людей.",
    "Кто боязливо заботится о том, как бы не потерять свою жизнь, никогда не будет радоваться этой жизни.",
    "Любовь к жизни — это значит любовь к правде.",
    "Мудрый может менять мнение; глупец — никогда.",
    "Не обращайся с другими как со средством для достижения твоих целей.",
    "Поэзия есть игра чувств, в которую рассудок вносит систему.",
    "Смерти меньше всего боятся те люди, чья жизнь имеет наибольшую ценность.",
    "Только посредством образования может человек стать человеком.",
    "Умение ставить разумные вопросы уже есть важный и необходимый признак ума и проницательности.",
    "Характер — это способность действовать согласно принципам.",
    "Хитрость — образ мыслей очень ограниченных людей и очень отличается от ума, на который внешне походит.",
    "Человек может стать человеком только путем воспитания. Он — то, что делает из него воспитание.",
    "Человек редко думает при свете о темноте, в счастье — о беде, в довольстве — о страданиях и, наоборот, всегда думает в темноте о свете, в беде — о счастье, в нищете — о достатке.",
    "Человек свободен, если он должен подчиняться не другому человеку, а закону.",
]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-section').innerHTML = quotes[randomNumber];
}