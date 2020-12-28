import { createprohibitedWordsArray } from '../createProhibitedWordsArray';
import { splitText } from '../splitText';
import { prohibitedEnglishPronouns, prohibitedRomanNumbers } from '../English/EnglishProhibitedWords';
const ItalianVerbs = require('italian-verbs');
const ItalianVerbsList = require('italian-verbs-dict');
const ItalianWords = require('italian-words');
const ItalianWordsList = require('italian-words-dict');
const ItalianAdjectives = require('italian-adjectives');
const ItalianAdjectivesList = require('italian-adjectives-dict');

function addConjugatedVerbs (verbsArray: string[]): string[] {
    const conjugatedAndNotConiugedVerbsArray = [];
    for (let verb of verbsArray) {
        conjugatedAndNotConiugedVerbsArray.push(verb);

        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 1, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 2, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 3, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 1, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 2, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 3, 'P'));

        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'IMPERFETTO', 1, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'IMPERFETTO', 2, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'IMPERFETTO', 3, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'IMPERFETTO', 1, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'IMPERFETTO', 2, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'IMPERFETTO', 3, 'P'));

        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_REMOTO', 1, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_REMOTO', 2, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_REMOTO', 3, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_REMOTO', 1, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_REMOTO', 2, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_REMOTO', 3, 'P'));

        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'FUTURO_SEMPLICE', 1, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'FUTURO_SEMPLICE', 2, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'FUTURO_SEMPLICE', 3, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'FUTURO_SEMPLICE', 1, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'FUTURO_SEMPLICE', 2, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'FUTURO_SEMPLICE', 3, 'P'));

        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'CONG_PRESENTE', 1, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'CONG_PRESENTE', 1, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'CONG_PRESENTE', 2, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'CONG_PRESENTE', 3, 'P'));

        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'CONG_IMPERFETTO', 1, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'CONG_IMPERFETTO', 3, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'CONG_IMPERFETTO', 1, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'CONG_IMPERFETTO', 2, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'CONG_IMPERFETTO', 3, 'P'));

        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'COND_PRESENTE', 1, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'COND_PRESENTE', 2, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'COND_PRESENTE', 3, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'COND_PRESENTE', 1, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'COND_PRESENTE', 2, 'P'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'COND_PRESENTE', 3, 'P'));

        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'IMPERATIVO', 2, 'S'));
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'IMPERATIVO', 2, 'P'));

        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_PROSSIMO', 1, 'S', 'ESSERE', 'M', 'S').split(' ')[1]);
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_PROSSIMO', 1, 'S', 'ESSERE', 'F', 'S').split(' ')[1]);
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_PROSSIMO', 1, 'S', 'ESSERE', 'M', 'P').split(' ')[1]);
        conjugatedAndNotConiugedVerbsArray.push(ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PASSATO_PROSSIMO', 1, 'S', 'ESSERE', 'F', 'P').split(' ')[1]);
    }
    return conjugatedAndNotConiugedVerbsArray
}

function addPlurals(nounsArray: string[]): string[] {
    const singularAndPluralNounsArray = [];
    for (let noun of nounsArray) {
        singularAndPluralNounsArray.push(noun);
        if (ItalianWordsList.hasOwnProperty(noun)) {
           singularAndPluralNounsArray.push(ItalianWords.getNumberItalianWord(null, ItalianWordsList, noun, 'P'))  
        }
    } return singularAndPluralNounsArray;
}

function addPluralAdjectives(adjectivesArray: string[]): string[] {
    const singularAndPluralAdjectivesArray = [];
    for (let adjective of adjectivesArray) {
        singularAndPluralAdjectivesArray.push(adjective);
        if (ItalianAdjectivesList.hasOwnProperty(adjective)) 
        try {
            singularAndPluralAdjectivesArray.push(ItalianAdjectives.agreeItalianAdjective(null, ItalianAdjectivesList, adjective, 'M', 'S')); 
           singularAndPluralAdjectivesArray.push(ItalianAdjectives.agreeItalianAdjective(null, ItalianAdjectivesList, adjective, 'M', 'P')); 
           singularAndPluralAdjectivesArray.push(ItalianAdjectives.agreeItalianAdjective(null, ItalianAdjectivesList, adjective, 'F', 'S')); 
           singularAndPluralAdjectivesArray.push(ItalianAdjectives.agreeItalianAdjective(null, ItalianAdjectivesList, adjective, 'F', 'P')); 
        }
        catch(err) {
            console.log(err)
        }
    } return singularAndPluralAdjectivesArray;
}

function createAdverbsArray(adjectivesArray: string[]) {
    const adverbsArray = [];
    for (let adjective of adjectivesArray) {
        if (adjective[adjective.length - 1] === 'e') {
            adverbsArray.push(adjective + 'mente') 
        } else if (adjective[adjective.length - 1] === 'o') {
            adverbsArray.push(adjective.substr(0, adjective.length - 1) + 'amente')
        } else if (adjective[adjective.length - 1] === 'a') {
            adverbsArray.push(adjective = "mente")
        }
    } const irregularAdverbs = splitText('bene, male, forse, pure, sempre; ieri, oggi, poi, tardi, mai, magari, volentieri, molto, tanto, poco, meno, spesso, meglio, peggio, presto, subito, almeno ora, adesso, subito, tosto, testé, allora, prima, dapprima, poi, dopo, poscia, oggi, ieri, domani, posdomani, dopodomani, avantieri, spesso, sovente, sempre, mai, presto, tardi, poi, già, ancora, talora, finora, meglio, ottimamente, peggio, pessimamente, maggiore maggiormente, massimo massimamente, pochi poche poca molti molte molta tante tanti tanta in fretta, in fretta e furia, a poco a poco, per appunto, man mano, pian piano, di tanto in tanto, bel bello, niente affatto, in mezzo, poco fa, fino ad ora, in poi, terra terra, di corsa, nulla, niente, poco, alquanto, parecchio, abbastanza, molto, assai, troppo, tanto, quanto, appena, più, meno, affatto anche, almeno, altresì, pure, sopra sotto inoltre, ancora, neanche, neppure, perfino, circa, quasi qualche sì, appunto, sicuro, sicuramente, certo, certamente, già, proprio, proprio così, giusto, precisamente, naturalmente, senza dubbio no, non, neanche, neppure, nemmeno, nemmanco, né forse, ma, probabilmente, quasi così, dietro, avanti, dopo qui, qua, lì, là ci, vi', /[\s,]+/);
    return adverbsArray.concat(irregularAdverbs);
}

export const prohibitedItalianVerbs = addConjugatedVerbs(splitText('essere vedere avere volere dire andare fare trovare sapere prendere parlare garantire lavorare ottenere vivere creare utilizzare usare dare capire migliorare aiutare venire evitare fornire portare sentire pensare mantenere lasciare uccidere raggiungere cercare tenere mettere cambiare tornare ridurre giocare continuare promuovere controllare scegliere credere mangiare guardare affrontare morire chiedere provare iniziare dovere adottare rendere scoprire stare diventare potere sostenere aumentare perdere salvare proteggere sviluppare aggiungere passare leggere offrire assicurare seguire pagare uscire entrare chiamare rispondere rimanere dormire presentare costruire combattere aprire risolvere arrivare modificare conoscere restare applicare visitare imparare ricordare scrivere valutare comprare rafforzare soddisfare accettare gestire aspettare vincere contribuire ricevere finire realizzare partire condividere consentire decidere vendere acquistare verificare permettere comprendere dimostrare partecipare selezionare stabilire scaricare guidare organizzare produrre determinare ascoltare superare discutere eliminare rispettare accedere dimenticare riconoscere definire spiegare crescere ringraziare inserire incontrare preparare fermare mostrare funzionare prevenire esprimere svolgere impedire servire godere cominciare includere smettere chiudere raccogliere immaginare indicare agire rimuovere studiare avviare coprire eseguire effettuare considerare distruggere inviare sembrare incoraggiare recuperare assumere correre comunicare esaminare richiedere introdurre individuare limitare causare favorire installare cadere sopravvivere attuare saltare identificare sparare sostituire amare notare ballare finanziare piacere confermare completare difendere nascondere indossare suonare rubare concludere tagliare proporre girare visualizzare elaborare sottolineare contenere ammettere volare proseguire pregare trattare votare camminare viaggiare cantare toccare trasformare mandare condurre compiere piangere scappare conservare contare esplorare chiarire riflettere accogliere facilitare istituire trasmettere firmare investire contattare lottare respirare pulire spostare osservare riparare fissare trascorrere informare analizzare esercitare conseguire concedere insegnare assistere procedere imporre registrare monitorare ammirare premere trasferire', /[\s,]+/));

const prohibitedItalianNouns = addPlurals(splitText('acqua aereo aeroporto agosto aiuto albergo albero amica amico amore andata animale anno appartamento aprile arrivo arte artista attenzione auto autobus autunno bacio bagno bambina bambino banca bar barista bicchiere bicicletta biglietto binario birra bistecca bocca borsa bottiglia bruschetta caffè caffelatte calendario camera cameriera cameriere camicia campagna cane cantante canzone capello capitale caso capodanno cappuccino carabiniere carattere carne carnevale carta di credito casa casalinga casino cassa cena centro chiave chiesa chilo chilometro cielo cinema cioccolata cioccolato città cognome colazione colore coltello compleanno cornetto costo cucina cugina cugino principio cultura destra dicembre direttore direttrice discoteca doccia domanda sabato domenica donna dottore dottoressa droga entrata erba errore esempio est elemento estate euro fame famiglia fantasia febbraio femmina fermata festa fidanzata fidanzato figlia fine ambito spazio obiettivo figlio film finestra fiore firma fiume formaggio fortuna foto fotografie fratello frutta fumo fuoco futuro gatto gelato genitore gennaio gente giacca giardino gioco giornale giornalista giorno giovedì giugno gruppo idea immigrato immigrazione indirizzo informazione insalata insegnante inverno isola istituto lago latte lavoratore lavoratrice lavoro legno letto libertà libro lingua luglio luna lunedì macchina madre mafia mafioso maggio malato male mamma mano mare marito martedì marzo mattina medicina medico mercoledì mese metallo metro metropolitana mezzanotte mezzogiorno minestra minestrone minuto moda moglie momento mondo montagna monumento muro museo musica naso Natale nave nazionalità nazione negozio neve nipote noia nome nonna nonno nord notte novembre numero occhio olio ora orecchio oro orologio ospedale ottobre ovest padre paese palazzo pallone pane pantalone papà parco parente parola Pasqua passeggiata pasta patata paura pazzo penna pepe persona pesce piatto piazza piede pioggia pizza pizzeria politica polizia poliziotto pollo pomeriggio pomodoro ponte porta porto possibilità posta pranzo presidente prezzo primavera problema professore professoressa ragazza ragazzo re regista religione repubblica ristorante ritorno rosa salame sale salotto scarpa scuola secolo secondo sedia sera sesso sete settembre settimana sigaretta signora signore somma sinistra sole sonno sorella spaghetto spicciolo sport stadio stagione stanza stazione storia strada straniero studente/studentessa sud suocera/suocero tavolo taxi tazza teatro telefonino telefono televisione tempo testa tiramisù torta tortellino traffico tram treno turista università uomo vacanza venerdì vestito vetro via viaggio villa vino vita volta zia zio zucchero ',  /[\s,]+/));

const prohibitedItalianAdjectives = splitText('suo, questo, tutto, quello, altro, primo, mio, grande, nuovo, stesso, ogni, nostro, qualche, ultimo, alcuno, piccolo, molto, vero, bello, bel bella bei begli proprio, italiano, buono, buon, poco, diverso, certo, tanto, politico, secondo, lungo, solo, pubblico, scorso, ex, possibile, alto, vecchio, unico, maggiore, importante, tuo, giovane, difficile, prossimo, forte, mezzo, americano, pieno, nessuno, economico, migliore, tale, nero, pronto, bianco, che, sociale, europeo, facile, giusto, chiaro, necessario, terzo, semplice, libero, vario, generale, internazionale, nazionale, antico, intero, francese, grave, sicuro, aperto, umano, rosso, comune, duro, quale, simile, vostro, elettorale, presente, famoso, noto, breve, storico, lontano, naturale, ricco, particolare, grosso, attuale, basso, qualsiasi, romano, speciale, privato, felice, povero, strano, straordinario, capace, vicino, principale, caro, profondo, inglese, tedesco, personale, numeroso, reale, locale, mondiale, bravo, interno, culturale, chiuso, massimo, tecnico, caldo, televisivo, centrale, moderno, superiore, convinto, quanto, civile, femminile, impossibile, preciso, normale, sinistro, destro perfetto, troppo, medio, verde, ufficiale, positivo, utile, militare, solito, sportivo, popolare, precedente, milanese, comunale, vivo, serio, pesante, tranquillo, finanziario, ottimo, recente, scientifico, successivo, assoluto, stretto, inutile, brutto, sessuale, pericoloso, classico, doppio, futuro, ritardo, segreto, fisico, interessante, prezioso, tradizionale, ampio, diretto, freddo, terribile, dolce, fondamentale, leggero, cattivo, estremo, enorme, socialista, musicale, eventuale, minore, negativo, quarto, continuo, relativo, attento, regionale, straniero, commerciale, delicato, puro, industriale, fermo, finale, minimo, esterno, violento, morale, impegnato, professionale, drammatico, ottimo, artistico, disponibile, totale, azzurro, celebre, largo, familiare, russo, cosiddetto, adatto, disposto, fresco, pari, privo, religioso, completo, blu, intenso, misterioso, urbano, evidente, complesso, incredibile, quotidiano, secco, singolo, cattolico, fiscale, qualunque, contrario, falso, raro, inferiore, legato, autentico, elegante, niente, splendido, seduto, definitivo, sufficiente, nudo, originale, rapido, concreto, ideale, indispensabile, potente, immediato, attivo, democratico, giudiziario, istituzionale, ulteriore, veloce, contento',  /[\s,]+/);

const prohitibedItalianAdjectivesWithPlural = addPluralAdjectives(prohibitedItalianAdjectives);

const prohibitedItalianAdverbs = createAdverbsArray(prohibitedItalianAdjectives);

export const prohititedItalianConjunctions = splitText('e, né, o, inoltre, ma, però, dunque, anzi, che, allorché, perché, giacché, purché, affinché, eppure, oppure, dopoché tal con tutto ciò, di modo che, in quanto che e, anche, neanche, neppure o, ovvero, ossia, oppure ma, però, tuttavia, anzi, infatti, cioè, ossia dunque, riguardo presso nonché quindi, perciò sia non presente Dichiarative: che, come quando, mentre, finché affinché, perché perché, poiché, siccome così che, tanto che come più che, tanto che sebbene, quantunque se, purché, qualora perché, come, se fuorché, tranne', /[\s,]+/);

export const prohibitedItalianArticles = splitText('il la gli le un uno una', /[\s,]+/);

export const prohibitedItalianNumbers = splitText('due tre quattro cinque sei sette otto nove dieci cento mille mila undici dodici tredici quattordici quindici sedici diciassette diciotto diciannove venti trenta quaranta cinquanta sessanta settanta ottanta novanta', /[\s,]+/);

export const prohibitedItalianPronouns = splitText('io tu lui lei noi voi loro mio mia miei mie tuo tua tuoi tue suo sua suoi sue nostro nostra nostri nostre vostro vostra vostri vostre me te se ce ve egli ella esso essa essi esse mi ti lo la gli le ne ci vi li sé si meco teco gliene glielo gliela gliel glie questo, codesto, quello, stesso, medesimo, tale, quale, ad es cotale, siffatto questa queste questi codesta codesti codeste quella quelli quelle quel quell medesima stessa stesse stessi tali cui quale quali', /[\s,]+/);

export const prohibitedItalianPrepositions = splitText("da dal dalla dall dall' dallo dai dalle dagli di del dell dell' dello delle della dei degli a ai al all all' alla alle allo ai agli in nel nell nell' nella nello nei negli con coi su sul sull sull' sullo sulla sui sugli per tra fra davanti dietro contro dentro secondo lungo vicino lontano durante mediante eccetto escluso intorno fuori luogo somiglianza", /[\s,]+/);

export const measurementUnitsAndCurrencies = splitText('PLN USD EUR GBP euro ft² oz cup cal inch foot miglia ounce libbra libbre ounces miles litro litri foots inches km dm cm mm min ml dm³ cm³ mm³ m³ kg dag ha', /[\s,]+/ );

export const otherProhibitedItalianWords = splitText('sotto caso casi ogni prima dopo aver esser seguente seguenti confronti precedente precedenti relativo relativi relativa relative', /[\s,]+/ );

export const prohibitedItalianWords = createprohibitedWordsArray([prohibitedItalianVerbs, prohibitedItalianNouns, prohitibedItalianAdjectivesWithPlural, prohibitedItalianAdverbs, prohibitedItalianNumbers, prohibitedItalianPrepositions, prohibitedItalianArticles, prohititedItalianConjunctions, prohibitedItalianPronouns, prohibitedRomanNumbers, otherProhibitedItalianWords, measurementUnitsAndCurrencies])