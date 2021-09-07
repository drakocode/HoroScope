


var main = document.createElement(`main`)
main.setAttribute('class', 'main');
main.setAttribute('id', 'main');
document.body.appendChild(main);


var titulo = document.createElement("h1");
var tituloText = document.createTextNode("Horoscope");

titulo.appendChild(tituloText);
main.appendChild(titulo);


var select = document.createElement(`select`)
select.setAttribute(`class`, `horoscope`)
select.setAttribute(`id`, `horoscope`)
select.setAttribute(`name`, `zodiac`)
select.setAttribute(`onchange`, "selectSign()")



// 
//            options
// 

var option = document.createElement(`option`)
var optionText = document.createTextNode(`default`)
option.setAttribute(`value`, `default`)
option.setAttribute(`id`, `option`)
option.appendChild(optionText)

var option0 = document.createElement(`option`)
var option0Text = document.createTextNode(`Aries`)
option0.setAttribute(`value`, `Aries`)
option0.setAttribute(`id`, `option0`)
option0.appendChild(option0Text)

var option1 = document.createElement(`option`)
var option1Text = document.createTextNode(`Taurus`)
option1.setAttribute(`value`, `Taurus`)
option1.setAttribute(`id`, `option1`)
option1.appendChild(option1Text)

var option2 = document.createElement(`option`)
var option2Text = document.createTextNode(`Gemini`)
option2.setAttribute(`value`, `Gemini`)
option2.setAttribute(`id`, `option2`)
option2.appendChild(option2Text)

var option3 = document.createElement(`option`)
var option3Text = document.createTextNode(`Cancer`)
option3.setAttribute(`value`, `Cancer`)
option3.setAttribute(`id`, `option3`)
option3.appendChild(option3Text)

var option4 = document.createElement(`option`)
var option4Text = document.createTextNode(`Leo`)
option4.setAttribute(`value`, `Leo`)
option4.setAttribute(`id`, `option4`)
option4.appendChild(option4Text)

var option5 = document.createElement(`option`)
var option5Text = document.createTextNode(`Virgo`)
option5.setAttribute(`value`, `Virgo`)
option5.setAttribute(`id`, `option5`)
option5.appendChild(option5Text)

var option6 = document.createElement(`option`)
var option6Text = document.createTextNode(`Libra`)
option6.setAttribute(`value`, `Libra`)
option6.setAttribute(`id`, `option6`)
option6.appendChild(option6Text)

var option7 = document.createElement(`option`)
var option7Text = document.createTextNode(`Scorpio`)
option7.setAttribute(`value`, `Scorpio`)
option7.setAttribute(`id`, `option7`)
option7.appendChild(option7Text)

var option8 = document.createElement(`option`)
var option8Text = document.createTextNode(`Sagittarius`)
option8.setAttribute(`value`, `Sagittarius`)
option8.setAttribute(`id`, `option8`)
option8.appendChild(option8Text)

var option9 = document.createElement(`option`)
var option9Text = document.createTextNode(`Capricorn`)
option9.setAttribute(`value`, `Capricorn`)
option9.setAttribute(`id`, `option9`)
option9.appendChild(option9Text)

var option10 = document.createElement(`option`)
var option10Text = document.createTextNode(`Aquarius`)
option10.setAttribute(`value`, `Aquarius`)
option10.setAttribute(`id`, `option10`)
option10.appendChild(option10Text)

var option11 = document.createElement(`option`)
var option11Text = document.createTextNode(`Pisces`)
option11.setAttribute(`value`, `Pisces`)
option11.setAttribute(`id`, `option11`)
option11.appendChild(option11Text)


main.appendChild(select)

select.appendChild(option)
select.appendChild(option0)
select.appendChild(option1)
select.appendChild(option2)
select.appendChild(option3)
select.appendChild(option4)
select.appendChild(option5)
select.appendChild(option6)
select.appendChild(option7)
select.appendChild(option8)
select.appendChild(option9)
select.appendChild(option10)
select.appendChild(option11)


var container = document.createElement(`div`)
container.setAttribute('class', 'container');
container.setAttribute('id', 'container');
document.body.appendChild(container);

var containerTitulo = document.createElement("h3");
var containerTituloText = document.createTextNode("what your horoscope says about you");

containerTitulo.appendChild(containerTituloText);
main.appendChild(containerTitulo);


var textAbout = document.createElement(`div`)
textAbout.setAttribute('class', 'textAbout');
textAbout.setAttribute('id', 'textAbout');
document.body.appendChild(textAbout);

var textAboutTitulo = document.createElement("h3");
var textAboutTituloText = document.createTextNode("default");

textAboutTitulo.appendChild(textAboutTituloText);
main.appendChild(textAboutTitulo);



// variaveis de conteudo importado
// 
var horoReq = require ('./modules/signs.js');

var horoSignsInfo = horoReq.signsInfo
// var horoSignsInfo = JSON.parse(horoSignsInfoJson)
// testes de importação



var horo = [


    // 
    // ARIES
    // 
    "Element: Fire \nQuality: Cardinal \nColor: Red \nDay: Tuesday \nRuler: Mars\nGreatest Overall Compatibility: Libra, Leo \nLucky Numbers: 1, 8, 17 \nDate range: March 21 - April 19 \n\n\nStrengths: Courageous, determined, confident, enthusiastic, optimistic, honest, passionate\nWeaknesses: Impatient, moody, short-tempered, impulsive, aggressive\nAries likes: Comfortable clothes, taking on leadership roles, physical challenges, individual sports\nAries dislikes: Inactivity, delays, work that does not use one's talents.",

    // 
    // TAURUS
    // 
    "Element: Earth\nQuality: Fixed\nColor: Green, Pink\nDay: Friday, Monday\nRuler: Venus\nGreatest Overall Compatibility: Scorpio, Cancer\nLucky Numbers: 2, 6, 9, 12, 24\nDate range: April 20 - May 20\n\n\nStrengths: Reliable, patient, practical, devoted, responsible, stable\nWeaknesses: Stubborn, possessive, uncompromising\nTaurus likes: Gardening, cooking, music, romance, high quality clothes, working with hands\nTaurus dislikes: Sudden changes, complications, insecurity of any kind, synthetic fabrics.",

    // 
    // GEMINI
    // 
    "Element: Air\nQuality: Mutable\nColor: Light-Green, Yellow\nDay: Wednesday\nRuler: Mercury\nGreatest Overall Compatibility: Sagittarius, Aquarius\nLucky Numbers: 5, 7, 14, 23\nDate range: May 21 - June 20\n\n\nStrengths: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas\nWeaknesses: Nervous, inconsistent, indecisive\nGemini likes: Music, books, magazines, chats with nearly anyone, short trips around the town\nGemini dislikes: Being alone, being confined, repetition and routine.",

    // 
    // CANCER
    // 
    "Element: Water\nQuality: Cardinal\nColor: White\nDay: Monday, Thursday\nRuler: Moon\nGreatest Overall Compatibility: Capricorn, Taurus\nLucky Numbers: 2, 3, 15, 20\nDate range: June 21 - July 22\n\n\nStrengths: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive\nWeaknesses: Moody, pessimistic, suspicious, manipulative, insecure\nCancer likes: Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends\nCancer dislikes: Strangers, any criticism of Mom, revealing of personal life.",

    //
    // LEO
    //
    "Element: Fire\nQuality: Fixed\nColor: Gold, Yellow, Orange\nDay: Sunday\nRuler: Sun\nGreatest Overall Compatibility: Aquarius, Gemini\nLucky Numbers: 1, 3, 10, 19\nDate range: July 23 - August 22\n\n\nStrengths: Creative, passionate, generous, warm-hearted, cheerful, humorous\nWeaknesses: Arrogant, stubborn, self-centered, lazy, inflexible\nLeo likes: Theater, taking holidays, being admired, expensive things, bright colors, fun with friends\nLeo dislikes: Being ignored, facing difficult reality, not being treated like a king or queen.",

    //
    // VIRGO
    //
    "Element: Earth\nQuality: Mutable\nColor: Grey, Beige, Pale-Yellow\nDay: Wednesday\nRuler: Mercury\nGreatest Overall Compatibility: Pisces, Cancer\nLucky Numbers: 5, 14, 15, 23, 32\nDate range: August 23 - September 22\n\n\nStrengths: Loyal, analytical, kind, hardworking, practical\nWeaknesses: Shyness, worry, overly critical of self and others, all work and no play\nVirgo likes: Animals, healthy food, books, nature, cleanliness\nVirgo dislikes: Rudeness, asking for help, taking center stage.",

    //
    // LIBRA
    //
    "Element: Air\nQuality: Cardinal\nColor: Pink, Green\nDay: Friday\nRuler: Venus\nGreatest Overall Compatibility: Aries, Sagittarius\nLucky Numbers: 4, 6, 13, 15, 24\nDate range: September 23 - October 22\n\n\nStrengths: Cooperative,diplomatic, gracious, fair-minded, social\nWeaknesses: Indecisive, avoids confrontations, will carry a grudge, self-pity\nLibra likes: Harmony, gentleness, sharing with others, the outdoors\nLibra dislikes: Violence, injustice, loudmouths, conformity.",

    // 
    // SCORPIO
    // 
    "Element: Water\nQuality: Fixed\nColor: Scarlet, Red, Rust\nDay: Tuesday\nRuler: Pluto, Mars\nGreatest Overall Compatibility: Taurus, Cancer\nLucky Numbers: 8, 11, 18, 22\nDate range: October 23 - November 21\n\n\nStrengths: Resourceful, brave, passionate, stubborn, a true friend\nWeaknesses: Distrusting, jealous, secretive, violent\nScorpio likes: Truth, facts, being right, longtime friends, teasing, a grand passion\nScorpio dislikes: Dishonesty, revealing secrets, passive people.",

    // 
    // SAGITARIUS
    // 
    "Element: Fire\nQuality: Mutable\nColor: Blue\nDay: Thursday\nRuler: Jupiter\nGreatest Overall Compatibility: Gemini, Aries\nLucky Numbers: 3, 7, 9, 12, 21\nDate range: November 22 - December 21\n\n\nStrengths: Generous, idealistic, great sense of humor\nWeaknesses: Promises more than can deliver, very impatient, will say anything no matter how undiplomatic\nSagittarius likes: Freedom, travel, philosophy, being outdoors\nSagittarius dislikes: Clingy people, being constrained, off-the-wall theories, details.",

    // 
    // CAPRICORN
    // 
    "Element: Earth\nQuality: Cardinal\nColor: Brown, Black\nDay: Saturday\nRuler: Saturn\nGreatest Overall Compatibility: Taurus, Cancer\nLucky Numbers: 4, 8, 13, 22\nDate range: December 22 - January 19\n\n\nStrengths: Responsible, disciplined, self-control, good managers\nWeaknesses: Know-it-all, unforgiving, condescending, expecting the worst\nCapricorn likes: Family, tradition, music, understated status, quality craftsmanship\nCapricorn dislikes: Almost everything at some point.",

    // 
    // AQUARIUS
    // 
    "Element: Air\nQuality: Fixed\nColor: Light-Blue, Silver\nDay: Saturday\nRuler: Uranus, Saturn\nGreatest Overall Compatibility: Leo, Sagittarius\nLucky Numbers: 4, 7, 11, 22, 29\nDate range: January 20 - February 18\n\n\nStrengths: Progressive, original, independent, humanitarian\nWeaknesses: Runs from emotional expression, temperamental, uncompromising, aloof\nAquarius likes: Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener\nAquarius dislikes: Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them.",

    // 
    // PISCES
    // 
    "Element: Water\nQuality: Mutable\nColor: Mauve, Lilac, Purple, Violet, Sea green\nDay: Thursday\nRuler: Neptune, Jupiter\nGreatest Overall Compatibility: Virgo, Taurus\nLucky Numbers: 3, 9, 12, 15, 18, 24\nDate range: February 19 - March 20\n\n\nStrengths: Compassionate, artistic, intuitive, gentle, wise, musical\nWeaknesses: Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr\nPisces likes: Being alone, sleeping, music, romance, visual media, swimming, spiritual themes\nPisces dislikes: Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind."



];


function createDiv() {
    let h1 = select.value;

    if (document.getElementById("container") == null) {
        //      container base
        // 
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        container.setAttribute("id", "container");
        container.setAttribute("action", "");
        document.main.appendChild(container);
        //     container pra imagem
        // 
        var containerContent = document.createElement("div");
        containerContent.setAttribute("class", "containerContent")
        containerContent.setAttribute("id", "containerContent")
        containerContent.setAttribute("action", "");

        container.appendChild(containerContent)

        //     container pro conteudo em texto
        // 
        var containerText = document.createElement("div")
        containerText.setAttribute("class", "containerText")
        containerText.setAttribute("id", "containerText")
        containerText.setAttribute("action", "");

        container.appendChild(containerText)

        //    tipos de textos no container
        // 
        var containerTitulo = document.createElement("h1");
        var containerDescricao = document.createElement("p");


        //    textos nos tipos de textos
        // 
        var containerTituloText = document.createTextNode(h1);
        var containerDescricaoText = document.createTextNode(horoSignsInfo[0]);

        containerTitulo.setAttribute('id', 'containerH1')
        containerDescricao.setAttribute('id', 'containerP')


        //    link dos textos aos tipos
        // 
        containerTitulo.appendChild(containerTituloText);
        containerDescricao.appendChild(containerDescricaoText);


        //     link dos tipos ao container
        // 
        containerText.appendChild(containerTitulo);
        containerText.appendChild(containerDescricao);

        // conteudo nos containers
        // 


    } else {
        //     textos nos tipos de textos
        // 
        document.querySelector('#containerH1').innerHTML = h1;
        document.querySelector('#containerP').innerHTML = horo[h1];
    }
}




// function inertexto() {
//     let h1 = select.value;
//     if (document.querySelector('div#textAbout').innerHTML == "") {
//         window.location.reload();
//     } else {
//         document.querySelector('div#textAbout').innerHTML = `<h1>${h1}</h1>`;
//         document.querySelector('div#textAbout').innerHTML = `<p>${horo[h1]}</p>`;
//     }
// }




// select.addEventListener('change', function (event) {
//     event.preventDefault()
// });

// select.addEventListener('change', inertexto());


function selectSign() {

    var texto = document.getElementById(`textAbout`).innerHTML;
    var selectPosition = document.getElementById(`horoscope`).value;

    // let title = horoReq.title;
    // let element = horoReq.element;
    // let quality = horoReq.quality;
    // let color = horoReq.color;

    switch (select.value) {
        case 'Aries':
            // createDiv();
            // document.querySelector('div#textAbout').innerHTML += `<h1>${horoReq[0].title}</h1>`;
            // document.querySelector('div#textAbout').innerHTML += `<p>"${horoReq[0].element}"</p>`;
            // document.querySelector('div#textAbout').innerHTML += `<p>${horoReq[0].quality}</p>`;
            // document.querySelector('div#textAbout').innerHTML += `<p>${horoReq[0].color}</p>`;
            break;
            case 'Taurus':
            document.querySelector('div#textAbout').innerHTML += `<h1>${signsInfo[1].name}</h1>`;
            document.querySelector('div#textAbout').innerHTML += `<p>${signsInfo[1].quality}</p>`;
            document.querySelector('div#textAbout').innerHTML += `<p>${signsInfo[1].color}</p>`;
            document.querySelector('div#textAbout').innerHTML += `<p>${signsInfo[1].ruler}</p>`;
            
            // document.querySelector('div#textAbout').innerHTML += `<h1>${horoSignsInfo[1].name}</h1>`;
            // document.querySelector('div#textAbout').innerHTML += `<p>${horoSignsInfo[1].quality}</p>`;
            // document.querySelector('div#textAbout').innerHTML += `<p>${horoSignsInfo[1].color}</p>`;
            // document.querySelector('div#textAbout').innerHTML += `<p>${horoSignsInfo[1].ruler}</p>`;

            // document.querySelector('div#textAbout').innerHTML += `<h1>${horoReq[1].title}</h1>`;
            // document.querySelector('div#textAbout').innerHTML += `<p>"${horoReq[1].element}"</p>`;
            // document.querySelector('div#textAbout').innerHTML += `<p>${horoReq[1].quality}</p>`;
            // document.querySelector('div#textAbout').innerHTML += `<p>${horoReq[1].color}</p>`;
            break;
        case 'Gemini':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                document.querySelector('div#textAbout').innerHTML = `<h1>Gemini</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>${horoSignsInfo[2]}</p>`;
            } else {
                window.location.reload();
                document.querySelector('div#textAbout').innerHTML += `<h1>Gemini</h1>`;
                document.querySelector('div#textAbout').innerHTML += `<p>${horo[2]}</p>`;
            }
            console.log(`foi`)
            break;
        case 'Cancer':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                document.querySelector('div#textAbout').innerHTML += `<h1>Cancer</h1>`;
                // document.querySelector('div#textAbout').innerHTML = `<p>${horo[3]}</p>`;
                document.querySelector('div#textAbout').innerHTML += `<p>cancercaccereca</p>`;
            } else {
                window.location.reload();
                document.querySelector('div#textAbout').innerHTML = `<h1>Cancer</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>${horo[3]}</p>`;
                texto.innerHTML = `<p>cancerncancere</p>`;
            }
            console.log(`foi`)
            break;
        case 'Leo':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                document.querySelector('div#textAbout').innerHTML += `<h1>Leo</h1>`;
                document.querySelector('div#textAbout').innerHTML += `<p>testeleo</p>`;
            } else {
                window.location.reload();
                document.querySelector('div#textAbout').innerHTML = `<h1>Leo</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>testeleo</p>`;
            }
            console.log(`foi`)
            break;
        case 'Virgo':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                window.location.reload();
            } else {
                document.querySelector('div#textAbout').innerHTML = `<h1>aries</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>${horo[3]}</p>`;
            }
            console.log(`foi`)
            break;
        case 'Libra':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                window.location.reload();
            } else {
                document.querySelector('div#textAbout').innerHTML = `<h1>aries</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>${horo[4]}</p>`;
            }
            console.log(`foi`)
            break;
        case 'Scorpio':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                window.location.reload();
            } else {
                document.querySelector('div#textAbout').innerHTML = `<h1>aries</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>${horo[5]}</p>`;
            }
            console.log(`foi`)
            break;
        case 'Sagittarius':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                window.location.reload();
            } else {
                document.querySelector('div#textAbout').innerHTML = `<h1>aries</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>${horo[6]}</p>`;
            }
            console.log(`foi`)
            break;
        case 'Capricorn':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                window.location.reload();
            } else {
                document.querySelector('div#textAbout').innerHTML = `<h1>aries</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>${horo[7]}</p>`;
            }
            console.log(`foi`)
            break;
        case 'Aquarius':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                window.location.reload();
            } else {
                document.querySelector('div#textAbout').innerHTML = `<h1>aries</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>${horo[8]}</p>`;
            }
            console.log(`foi`)
            break;
        case 'Pisces':
            if (document.querySelector('div#textAbout').innerHTML == "") {
                window.location.reload();
            } else {
                document.querySelector('div#textAbout').innerHTML = `<h1>aries</h1>`;
                document.querySelector('div#textAbout').innerHTML = `<p>${horo[9]}</p>`;
            }
            console.log(`foi`)
            break;
        default:
        // select.value=value.default;
    }
}
