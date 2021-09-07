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
        "O Sol (Surya ou Ravi)\n rege a cor marrom ou parda avermelhada. O Sol rege os povos que têm a pele parda puxada para o vermelho. O Sol é filho de Aditi. Aditi é casada com Kashyapa, e desta relação se gera os 12 Adityas, que são Devas védicos do Sol, que têm uma correspondência com cada um dos meses do ano. Os Adityas são os Devas Védicas que vão dar origem ao Hinduísmo moderno, a religião étnica da Índia. O Sol rege os povos indianos, pois os indianos têm a pele parda puxada para o vermelho",

        // 
        // LUA
        // 
        "A Lua (Chandra ou Soma)\n rege a cor branca, traços finos, cabelos  e olhos claros. A Lua é o graha de superfície branca, por isto rege a cor branca. Os Dânavas são os antigos povos brancos. Os Dânavas são filhos da Devi das águas fluviais, Danu, com Maharishi Kashyapa. Os Dânavas recebem tal nome em homenagem à sua mãe, Danu. Os Dânavas vão migrar para a Europa e dar origem aos eslavos, germânicos, nórdicos e os celtas. Importantes rios da Europa são dados em homenagem aos Dânavas, como o rio Danúbio e o rio Douro, sendo este último localizado na península Ibérica. O nome Dinamarca original significa `país dos Dânavas`. A Lua rege os europeus brancos e de cabelos e olhos claros. A Lua rege o leite e produtos derivados do leite, a etnia branca é a que tem mais enzinas para digerir o leite, mesmo após a fase adulta",

        // 
        // MERCURIO
        // 
        "Mercúrio (Buddha)\n rege a raça amarela, raça esta encontrada no extremo leste da Ásia. Mercúrio é filho de Chandra e Tara e é dito de ter a pele amarela esverdeada. O avatar de Mercúrio é Vishnu como Sidarta Gautama, avatar este nascido no Nepal que dará origem ao Budismo. O Budismo é a religião mais popular entre os povos de cor amarela, povos estes encontrados em abundância na China, na Mongólia, na Coreia e no Japão. Mercúrio rege as ciências e a tecnologia, por isto os povos amarelos são os mais talentosos em criar tecnologia e exportar máquinas para o mundo. Mercúrio rege os povos sino-tibetanos e japônicos.",

        // 
        // VENUS
        // 
        "Vênus (Shukra)\n rege a cor parda ou marrom e todos os povos que se identificam como pardos. Vênus é filho de Maharishi Bhrigu, sendo Vênus o guru dos Daityas e dos Asuras. Os Daityas são os persas, ou de maneira mais abrangente, os povos iranianos. Os Daityas são o que deram origem ao Zoroastrismo (Mazdayasna). Já os Asuras são os povos que deram origem às religiões abraâmicas, como o Judaísmo, Cristianismo e Islã, religiões estas que são inspiradas no Zoroastrismo. O Zoroastrismo nasceu no Irã, o Judaísmo e o Cristianismo nasceram no Levante, e o Islã nasceu na Arábia Saudita. Todos estes países estão localizados no Oriente Médio. Vênus rege os povos persas e semíticos de maneira geral, como os persas, os curdos, os árabes e os hebreus, povos estes que têm a cor parda",

        // 
        // MARTE
        // 
        "Marte (Mangala ou Kuja)\n rege a cor vermelha. Marte é conhecido como o planeta vermelho e rege os povos que têm a pele vermelha. Os povos serpentes ou Nagas são os antepassados dos índios ou aborígenes do continente americano. Os povos Nagas são filhos de Kadru e Kashyapa. Kadru é a mãe de todos os Nagas. Os Nagas são ditos de morar no mundo intraterreno de Patala Loka, que é o nome que os Vedas utilizam para se referir ao continente americano. Marte rege os povos indígenas ou aborígenes da América. Marte rege a caça, que é o principal meio de sobrevivência dos índios",

        // 
        // JUPITER
        // 
        "Júpiter (Brihaspati ou Guru)\n tal qual a Lua, também rege a cor branca, mas um outro tipo de branco. Júpiter rege os brancos de cabelos e olhos escuros. Os brancos regidos por Júpiter são aqueles europeus dos países banhados pelo mar Mediterrâneo, como a Grécia e a Itália, povos estes que normalmente são brancos e que têm cabelos e olhos escuros. Antes da imposição do Cristianismo pela igreja, os países do sul da Europa seguiam o Helenismo, uma religião politeísta cujo o Deus supremo do Olimpo é Júpiter, nome romano para Zeus",

        // 
        // SATURNO
        // 
        "Saturno (Shani)\n rege a cor negra e os cabelos crespos. Saturno rege todos os povos de pele negra. Saturno é filho de Surya com a sua sombra, Chaya, e Chaya rege a cor negra. Saturno como sendo o filho de Chaya é representado como sendo negro igualmente. Os povos da África e os aborígenes da Oceania, da Polinésia, Melanésia e Micronesia têm a cor negra",

        // 
        // URANO
        // 
        "Planetas geracionais como Urano, Netuno e Plutão não fazem parte da tradição de astrologia hindu, por isto não podem reger raças; Rahu e Ketu são eclipses, não regem raças; tampouco pontos hipotéticos como lotes árabes, Lilith; nem asteroides, como Quíron, podem reger raças, apenas os 7 grahas tradicionais.",

        // 
        // NETUNO
        // 
        "Planetas geracionais como Urano, Netuno e Plutão não fazem parte da tradição de astrologia hindu, por isto não podem reger raças; Rahu e Ketu são eclipses, não regem raças; tampouco pontos hipotéticos como lotes árabes, Lilith; nem asteroides, como Quíron, podem reger raças, apenas os 7 grahas tradicionais.",

        // 
        // PLUTÃO
        //
        "Planetas geracionais como Urano, Netuno e Plutão não fazem parte da tradição de astrologia hindu, por isto não podem reger raças; Rahu e Ketu são eclipses, não regem raças; tampouco pontos hipotéticos como lotes árabes, Lilith; nem asteroides, como Quíron, podem reger raças, apenas os 7 grahas tradicionais.",

    ];
    var element = [
        // 
        // FOGO
        // 
        "FOGO: vontade, calor, instinto, carne\ncoragem, ação, transformação, atitude, impulso, paixão, vigor e vitalidade.\nO excesso de elemento fogo nos deixa agressivos, reativos, impulsivos acelerados e agitados.\nfalta desse elemento causa desânimo, falta de iniciativa e de autoconfiança, medo, depressão e lentidão.\nSe sentir vivo, empolgado, excitado, eletrizado, `cheio de gás` é tudo obra do elemento Fogo. Ele é pura energia!\nFogo, no sul, é representado por grandes gatos: leões, tigres, pumas e onças. Gatos domésticos também podem ser usados para representar o fogo numa escala mais familiar, uma aconchegante lareira, por exemplo. Salamandras também são animais do fogo, uma vez que elas costumam ser atraídas a ambientes quentes de fogueiras. Criaturas místicas também são associadas ao fogo, incluindo dragões e a fênix, o pássaro que pega fogo e renasce das cinzas.",

        // 
        // AGUA
        // 
        "AGUA: sensação, nutrição, sangue, fluidez e flexibilidade, emocional\n Amor, alegria, tristeza; todos regidos pela água.\n líquidos do nosso corpo, como sangue, saliva, suor e outros fluidos.\n excesso desse elemento em nós pode gerar choros descontrolados, sentimentalismo exagerado, melancolia, distorção dos fatos do dia-a-dia\n falta da água nos deixa mais frios, insensíveis e bem menos empáticos.\n O elemento da água, associado com o oeste, pode ser representado por qualquer animal que viva na água, incluindo golfinhos, baleias, peixes, cavalos marinhos, lulas, estrelas do mar, caranguejos, lontras e focas. Na tradição pagã, o oeste representa cura, então você também pode incluir animais como cachorros (usados nos antigos templos de cura para purificar feridas). Cobras do mar, como o monstro do lago Ness, também podem representar o lado desconhecido do mundo aquático.",

        // 
        // TERRA
        // 
        "TERRA: estrutura, terra, ossos\n firmeza, força, determinação, objetividade, praticidade, estrutura, pé no chão.\n elemento Terra todos os animais, as árvores, montanhas, cavernas, pedras, plantas, flores, raízes, frutos e a terra propriamente dita. Já em nós, a Terra é o nosso corpo físico, a nossa matéria.\n O excesso desse elemento nos torna rígidos, teimosos, materialistas, estagnados (sem movimento) e pesados (soterramento).\n falta desse elemento nos deixa desestruturados, instáveis, sem foco, sem determinação, apáticos, na escassez.\n A terra, o elemento do norte, é representado por grandes moradores da floresta, como lobos, javalis e ursos e também por grandes animais de casco, como veados, búfalos, alces e cavalos. Qualquer animal que vive em tocas como coelhos, texugos e marmotas, também podem representar o aspecto protetor da terra.",

        // 
        // AR
        // 
        "AR: logica, energia, pensamento, som, audição\n assuntos intelectuais; pensamentos, conhecimento, memória, inteligência, aprendizado, estudos, criação, imaginação.\n mente é capaz de produzir, se concentrar e criar ideias\n excesso de elemento Ar faz com que a pessoa saia da realidade, permanecendo apenas no mundo das ideias, sem concretizar nada. Ela fica sem o impulso da ação.\n falta desse elemento pode deixar a pessoa muito crítica ou com a língua afiada, sem criatividade, sem conseguir se concentrar ou focar no que é importante. Faz as coisas sem pensar ou sem medir conseqüências - apenas age. Não se interessa por novos conhecimentos e não consegue enxergar ou valorizar as novas ideias.\n Ar, o qual corresponde com a direção leste, é representado por pássaros. Uma águia é uma poderosa criatura do ar, mas alguns podem preferir visualizar um pequeno beija-flor se estiver tentando acalmar fortes ventos. Pegasus, o cavalo voador da mitologia grega, também é considerado um animal do ar.",

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