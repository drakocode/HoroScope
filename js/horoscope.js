// import {signsInfo} from './modules/signs'
// import {planetsList} from '../modules/plantes'
// import {elementsList} from '../modules/elements'

// const horoReq = require ('./modules/signs')
// var horo =JSON.parse(horoReq)

function selffunction() {
    "use strict";

    var textrowa,
        randomresult,
        result;


    // textrowa = "Here is your Horoscope: ";
    // document.getElementById("textrow1").innerHTML = textrowa;
    var hs = document.getElementById("horoscope");
    // var horo = signsInfo;
    // var planet = planetsList;
    // var element = elementsList;

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

    var planet = [
        // 
        // SOL
        //  
        "O Sol (Surya ou Ravi)\n rege a cor marrom ou parda avermelhada. O Sol rege os povos que t??m a pele parda puxada para o vermelho. O Sol ?? filho de Aditi. Aditi ?? casada com Kashyapa, e desta rela????o se gera os 12 Adityas, que s??o Devas v??dicos do Sol, que t??m uma correspond??ncia com cada um dos meses do ano. Os Adityas s??o os Devas V??dicas que v??o dar origem ao Hindu??smo moderno, a religi??o ??tnica da ??ndia. O Sol rege os povos indianos, pois os indianos t??m a pele parda puxada para o vermelho",

        // 
        // LUA
        // 
        "A Lua (Chandra ou Soma)\n rege a cor branca, tra??os finos, cabelos  e olhos claros. A Lua ?? o graha de superf??cie branca, por isto rege a cor branca. Os D??navas s??o os antigos povos brancos. Os D??navas s??o filhos da Devi das ??guas fluviais, Danu, com Maharishi Kashyapa. Os D??navas recebem tal nome em homenagem ?? sua m??e, Danu. Os D??navas v??o migrar para a Europa e dar origem aos eslavos, germ??nicos, n??rdicos e os celtas. Importantes rios da Europa s??o dados em homenagem aos D??navas, como o rio Dan??bio e o rio Douro, sendo este ??ltimo localizado na pen??nsula Ib??rica. O nome Dinamarca original significa `pa??s dos D??navas`. A Lua rege os europeus brancos e de cabelos e olhos claros. A Lua rege o leite e produtos derivados do leite, a etnia branca ?? a que tem mais enzinas para digerir o leite, mesmo ap??s a fase adulta",

        // 
        // MERCURIO
        // 
        "Merc??rio (Buddha)\n rege a ra??a amarela, ra??a esta encontrada no extremo leste da ??sia. Merc??rio ?? filho de Chandra e Tara e ?? dito de ter a pele amarela esverdeada. O avatar de Merc??rio ?? Vishnu como Sidarta Gautama, avatar este nascido no Nepal que dar?? origem ao Budismo. O Budismo ?? a religi??o mais popular entre os povos de cor amarela, povos estes encontrados em abund??ncia na China, na Mong??lia, na Coreia e no Jap??o. Merc??rio rege as ci??ncias e a tecnologia, por isto os povos amarelos s??o os mais talentosos em criar tecnologia e exportar m??quinas para o mundo. Merc??rio rege os povos sino-tibetanos e jap??nicos.",

        // 
        // VENUS
        // 
        "V??nus (Shukra)\n rege a cor parda ou marrom e todos os povos que se identificam como pardos. V??nus ?? filho de Maharishi Bhrigu, sendo V??nus o guru dos Daityas e dos Asuras. Os Daityas s??o os persas, ou de maneira mais abrangente, os povos iranianos. Os Daityas s??o o que deram origem ao Zoroastrismo (Mazdayasna). J?? os Asuras s??o os povos que deram origem ??s religi??es abra??micas, como o Juda??smo, Cristianismo e Isl??, religi??es estas que s??o inspiradas no Zoroastrismo. O Zoroastrismo nasceu no Ir??, o Juda??smo e o Cristianismo nasceram no Levante, e o Isl?? nasceu na Ar??bia Saudita. Todos estes pa??ses est??o localizados no Oriente M??dio. V??nus rege os povos persas e sem??ticos de maneira geral, como os persas, os curdos, os ??rabes e os hebreus, povos estes que t??m a cor parda",

        // 
        // MARTE
        // 
        "Marte (Mangala ou Kuja)\n rege a cor vermelha. Marte ?? conhecido como o planeta vermelho e rege os povos que t??m a pele vermelha. Os povos serpentes ou Nagas s??o os antepassados dos ??ndios ou abor??genes do continente americano. Os povos Nagas s??o filhos de Kadru e Kashyapa. Kadru ?? a m??e de todos os Nagas. Os Nagas s??o ditos de morar no mundo intraterreno de Patala Loka, que ?? o nome que os Vedas utilizam para se referir ao continente americano. Marte rege os povos ind??genas ou abor??genes da Am??rica. Marte rege a ca??a, que ?? o principal meio de sobreviv??ncia dos ??ndios",

        // 
        // JUPITER
        // 
        "J??piter (Brihaspati ou Guru)\n tal qual a Lua, tamb??m rege a cor branca, mas um outro tipo de branco. J??piter rege os brancos de cabelos e olhos escuros. Os brancos regidos por J??piter s??o aqueles europeus dos pa??ses banhados pelo mar Mediterr??neo, como a Gr??cia e a It??lia, povos estes que normalmente s??o brancos e que t??m cabelos e olhos escuros. Antes da imposi????o do Cristianismo pela igreja, os pa??ses do sul da Europa seguiam o Helenismo, uma religi??o polite??sta cujo o Deus supremo do Olimpo ?? J??piter, nome romano para Zeus",

        // 
        // SATURNO
        // 
        "Saturno (Shani)\n rege a cor negra e os cabelos crespos. Saturno rege todos os povos de pele negra. Saturno ?? filho de Surya com a sua sombra, Chaya, e Chaya rege a cor negra. Saturno como sendo o filho de Chaya ?? representado como sendo negro igualmente. Os povos da ??frica e os abor??genes da Oceania, da Polin??sia, Melan??sia e Micronesia t??m a cor negra",

        // 
        // URANO
        // 
        "Planetas geracionais como Urano, Netuno e Plut??o n??o fazem parte da tradi????o de astrologia hindu, por isto n??o podem reger ra??as; Rahu e Ketu s??o eclipses, n??o regem ra??as; tampouco pontos hipot??ticos como lotes ??rabes, Lilith; nem asteroides, como Qu??ron, podem reger ra??as, apenas os 7 grahas tradicionais.",

        // 
        // NETUNO
        // 
        "Planetas geracionais como Urano, Netuno e Plut??o n??o fazem parte da tradi????o de astrologia hindu, por isto n??o podem reger ra??as; Rahu e Ketu s??o eclipses, n??o regem ra??as; tampouco pontos hipot??ticos como lotes ??rabes, Lilith; nem asteroides, como Qu??ron, podem reger ra??as, apenas os 7 grahas tradicionais.",

        // 
        // PLUT??O
        //
        "Planetas geracionais como Urano, Netuno e Plut??o n??o fazem parte da tradi????o de astrologia hindu, por isto n??o podem reger ra??as; Rahu e Ketu s??o eclipses, n??o regem ra??as; tampouco pontos hipot??ticos como lotes ??rabes, Lilith; nem asteroides, como Qu??ron, podem reger ra??as, apenas os 7 grahas tradicionais.",

    ];
    var element = [
        // 
        // FOGO
        // 
        "FOGO: vontade, calor, instinto, carne\ncoragem, a????o, transforma????o, atitude, impulso, paix??o, vigor e vitalidade.\nO excesso de elemento fogo nos deixa agressivos, reativos, impulsivos acelerados e agitados.\nfalta desse elemento causa des??nimo, falta de iniciativa e de autoconfian??a, medo, depress??o e lentid??o.\nSe sentir vivo, empolgado, excitado, eletrizado, `cheio de g??s` ?? tudo obra do elemento Fogo. Ele ?? pura energia!\nFogo, no sul, ?? representado por grandes gatos: le??es, tigres, pumas e on??as. Gatos dom??sticos tamb??m podem ser usados para representar o fogo numa escala mais familiar, uma aconchegante lareira, por exemplo. Salamandras tamb??m s??o animais do fogo, uma vez que elas costumam ser atra??das a ambientes quentes de fogueiras. Criaturas m??sticas tamb??m s??o associadas ao fogo, incluindo drag??es e a f??nix, o p??ssaro que pega fogo e renasce das cinzas.",

        // 
        // AGUA
        // 
        "AGUA: sensa????o, nutri????o, sangue, fluidez e flexibilidade, emocional\n Amor, alegria, tristeza; todos regidos pela ??gua.\n l??quidos do nosso corpo, como sangue, saliva, suor e outros fluidos.\n excesso desse elemento em n??s pode gerar choros descontrolados, sentimentalismo exagerado, melancolia, distor????o dos fatos do dia-a-dia\n falta da ??gua nos deixa mais frios, insens??veis e bem menos emp??ticos.\n O elemento da ??gua, associado com o oeste, pode ser representado por qualquer animal que viva na ??gua, incluindo golfinhos, baleias, peixes, cavalos marinhos, lulas, estrelas do mar, caranguejos, lontras e focas. Na tradi????o pag??, o oeste representa cura, ent??o voc?? tamb??m pode incluir animais como cachorros (usados nos antigos templos de cura para purificar feridas). Cobras do mar, como o monstro do lago Ness, tamb??m podem representar o lado desconhecido do mundo aqu??tico.",

        // 
        // TERRA
        // 
        "TERRA: estrutura, terra, ossos\n firmeza, for??a, determina????o, objetividade, praticidade, estrutura, p?? no ch??o.\n elemento Terra todos os animais, as ??rvores, montanhas, cavernas, pedras, plantas, flores, ra??zes, frutos e a terra propriamente dita. J?? em n??s, a Terra ?? o nosso corpo f??sico, a nossa mat??ria.\n O excesso desse elemento nos torna r??gidos, teimosos, materialistas, estagnados (sem movimento) e pesados (soterramento).\n falta desse elemento nos deixa desestruturados, inst??veis, sem foco, sem determina????o, ap??ticos, na escassez.\n A terra, o elemento do norte, ?? representado por grandes moradores da floresta, como lobos, javalis e ursos e tamb??m por grandes animais de casco, como veados, b??falos, alces e cavalos. Qualquer animal que vive em tocas como coelhos, texugos e marmotas, tamb??m podem representar o aspecto protetor da terra.",

        // 
        // AR
        // 
        "AR: logica, energia, pensamento, som, audi????o\n assuntos intelectuais; pensamentos, conhecimento, mem??ria, intelig??ncia, aprendizado, estudos, cria????o, imagina????o.\n mente ?? capaz de produzir, se concentrar e criar ideias\n excesso de elemento Ar faz com que a pessoa saia da realidade, permanecendo apenas no mundo das ideias, sem concretizar nada. Ela fica sem o impulso da a????o.\n falta desse elemento pode deixar a pessoa muito cr??tica ou com a l??ngua afiada, sem criatividade, sem conseguir se concentrar ou focar no que ?? importante. Faz as coisas sem pensar ou sem medir conseq????ncias - apenas age. N??o se interessa por novos conhecimentos e n??o consegue enxergar ou valorizar as novas ideias.\n Ar, o qual corresponde com a dire????o leste, ?? representado por p??ssaros. Uma ??guia ?? uma poderosa criatura do ar, mas alguns podem preferir visualizar um pequeno beija-flor se estiver tentando acalmar fortes ventos. Pegasus, o cavalo voador da mitologia grega, tamb??m ?? considerado um animal do ar.",

    ];

    var srcHoro = ["../img/signs/Aries.png", "../img/signs/Taurus.png", "../img/signs/Gemini.png", "../img/signs/Cancer.png", "../img/signs/Leo.png", "../img/signs/Virgo.png", "../img/signs/Libra.png", "../img/signs/Scorpio.png", "../img/signs/Sagittarius.png", "../img/signs/Capricor.png", "../img/signs/Aquarius.png", "../img/signs/Pisces.png", "./img/hs.png"];
    var srcPlanet = ["../img/planets/Sun.png", "../img/planets/Moon.png", "../img/planets/Mercury.png", "../img/planets/Venus.png", "../img/planets/Mars.png", "../img/planets/Jupiter.png", "../img/planets/Saturn.png", "../img/planets/Uranus.png", "../img/planets/Neptune.png", "../img/planets/Pluto.png"]
    var srcElement = ["../img/elements/Fire.png", "../img/elements/Water.png", "../img/elements/Earth.png", "../img/elements/Air.png"]











    // var texto = document.getElementById(`textAbout`).innerHTML;
    // var selectPosition = document.getElementById(`horoscope`).value;

    // let title = horoReq.title;
    // let element = horoReq.element;
    // let quality = horoReq.quality;
    // let color = horoReq.color;

    switch (hs.value) {

        case 'Aries':
            
            var re = horo[0];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[0];
            document.getElementById('imgContainer').appendChild(img);
            // let name= horo[0].name;
            // let quality=horo[0].quality;
            // let color=horo[0].color;
            // let ruler=horo[0].ruler;

            // document.getElementById('contentContainer').innerHTML += `<h1>${name}</h1>`;
            // document.getElementById('contentContainer').innerHTML += `<p>${quality}</p>`;
            // document.getElementById('contentContainer').innerHTML += `<p>${color}</p>`;
            // document.getElementById('contentContainer').innerHTML += `<p>${ruler}</p>`;

            
            break;
        case 'Taurus':
            var re = horo[1];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[1];
            document.getElementById('imgContainer').appendChild(img);
            break;
        case 'Gemini':
            var re = horo[2];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[2];
            document.getElementById('imgContainer').appendChild(img);
            break;
        case 'Cancer':
            var re = horo[3];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[3];
            document.getElementById('imgContainer').appendChild(img);
            break;
        case 'Leo':
            var re = horo[4];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[4];
            document.getElementById('imgContainer').appendChild(img);
            break;
        case 'Virgo':
            var re = horo[5];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[5];
            document.getElementById('imgContainer').appendChild(img);
            break;
        case 'Libra':
            var re = horo[6];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[6];
            document.getElementById('imgContainer').appendChild(img);
            break;
        case 'Scorpio':
            var re = horo[7];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[7];
            document.getElementById('imgContainer').appendChild(img);
            break;
        case 'Sagittarius':
            var re = horo[8];
            result = re;
            if (document.querySelector('imgContainer') != img) {
                var img = document.createElement('img');
                img.setAttribute('id', 'imgHoro')
                img.src = srcHoro[8];
                document.getElementById('imgContainer').appendChild(img);
                break;
            } else {
                document.getElementById('imgHoro')
                img.src = srcHoro[8]
            }
            break;
        case 'Capricorn':
            var re = horo[9];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[9];
            document.getElementById('imgContainer').appendChild(img);
            break;
        case 'Aquarius':
            var re = horo[10];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[10];
            document.getElementById('imgContainer').appendChild(img);
            break;
        case 'Pisces':
            var re = horo[11];
            result = re;
            var img = document.createElement('img');
            img.src = srcHoro[11];
            document.getElementById('imgContainer').appendChild(img);
            break;
        default:
        // select.value=value.default;
    }


    // planets switch
    switch(hs.value){
        case"Sun":
            var re = planet[0];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[13];
            document.getElementById('imgContainer').appendChild(img);

        break;
        case"Moon":
            var re = planet[1];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[14];
            document.getElementById('imgContainer').appendChild(img);

        break;
        case"Mercury":
            var re = planet[2];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[15];
            document.getElementById('imgContainer').appendChild(img);

        break;
        case"Venus":
            var re = planet[3];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[16];
            document.getElementById('imgContainer').appendChild(img);

        break;
        case"Mars":
            var re = planet[4];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[17];
            document.getElementById('imgContainer').appendChild(img);

        break;
        case"Jupiter":
            var re = planet[5];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[18];
            document.getElementById('imgContainer').appendChild(img);

        break; 
        case"Saturn":
            var re = planet[6];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[19];
            document.getElementById('imgContainer').appendChild(img);

        break; 
        case"Uranus":
            var re = planet[7];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[20];
            document.getElementById('imgContainer').appendChild(img);

        break;
        case"Neptune":
            var re = planet[8];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[21];
            document.getElementById('imgContainer').appendChild(img);

        break;
        case"Pluto":
            var re = planet[9];
            result = re;
            var img = document.createElement('img');
            img.src = srcPlanet[22];
            document.getElementById('imgContainer').appendChild(img);

    }


    // elements switch
    switch(hs.value){
            case "Fire":
            var re = element[0];
            result = re;
            var img = document.createElement('img');
            img.src = src[23];
            document.getElementById('imgContainer').appendChild(img);

         case "Water":
            var re = element[1];
            result = re;
            var img = document.createElement('img');
            img.src = src[24];
            document.getElementById('imgContainer').appendChild(img);

         case "Earth":
            var re = element[2];
            result = re;
            var img = document.createElement('img');
            img.src = src[24];
            document.getElementById('imgContainer').appendChild(img);

         case "Air":
            var re = element[3];
            result = re;
            var img = document.createElement('img');
            img.src = src[25];
            document.getElementById('imgContainer').appendChild(img);
    }


    document.getElementById("textrow2").innerHTML = result;
    document.getElementById("restartbtn").style.visibility = "visible";
}