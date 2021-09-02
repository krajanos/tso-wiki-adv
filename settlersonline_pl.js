/*
 2020 (c) for Settlersonlinewiki.eu by krajanbdg@gmail.com
 ver. 0.79
*/
var initialData = {
    soldiers: ['Z', 'KZ', 'Re', 'Ry', 'R', 'AZ', 'A', 'KA', 'KU', 'OB', 'Och', 'K', 'WŁ', 'W', 'Ł', 'EŻ', 'Ż', 'PU'],
    hideAttacksOption: true,
	hideAttacksOptionLinkText: 'Ukrywaj ataki',
	showIconsOfSoldiers: true,
	showIconsOfSoldiersLinkText: 'Wersja obrazkowa',
	lossesOfSelectedAttacksText: 'Straty z zaznaczonych ataków: ',
	alternativeAttacksListHeader: ' + alternatywne ataki: <br/>',
	alternativeAttacksText: 'Straty z alternatywnych ataków:<br/>',
	noLossestext: 'Brak strat z zaznaczonych ataków.',
	hiddenAttacksText: 'Ukryte ataki',
	alternativeText: 'lub',
	soldiersImgPath: 'http://settlersonlinewiki.eu/unit/',
	soldiersImgStyles: 'width: 24px;',
	generalsImgPath: 'http://settlersonlinewiki.eu/unit/',
	generalsImgStyles: 'width: 28px;',
	columnWithGeneralsTitle: 'garnizon',
	soldiersImgConfig: [
	            /* MILITARY - HEAVY */
		{'pattern':  new RegExp('Konny Zbrojny', 'gi'), 'img': 'konnyzbrojny.png'},
		{'pattern':  new RegExp('Zbrojny', 'gi'), 'img': 'zbrojny.png', searchPattern: new RegExp('[\\d|,] Zbrojny', 'gi')},
		{'pattern':  new RegExp('Rycerz', 'gi'), 'img': 'rycerz.png'},
		{'pattern':  new RegExp('Konny Arkebuzer', 'gi'), 'img': 'konnyarkebuzer.png'},
		{'pattern':  new RegExp('Arkebuzer w Zbroi', 'gi'), 'img': 'arkebuzerwzbroi.png'},
		{'pattern':  new RegExp('Arkebuzer', 'gi'), 'img': 'arkebuzer.png', searchPattern: new RegExp('[\\d|,] Arkebuzer', 'gi')},
		{'pattern':  new RegExp('Oblężnik', 'gi'), 'img': 'obleznik.png'},
                /* SPECIAL ATTACKS */
		{'pattern':  new RegExp('Strzała Czarnodrzewia', 'gi'), 'img': 'czarnastrzala.png'},
		{'pattern':  new RegExp('Strzały Pokryte Czekoladą', 'gi'), 'img': 'czekoladowastrzala.png'},
		{'pattern':  new RegExp('Grad Strzał', 'gi'), 'img': 'grad.png'},
		{'pattern':  new RegExp('Grad Płonących Strzał', 'gi'), 'img': 'ognistastrzala.png'},
		{'pattern':  new RegExp('Skrytobójca', 'gi'), 'img': 'asason.png'},
		{'pattern':  new RegExp('Balista', 'gi'), 'img': 'balista.png'},
		{'pattern':  new RegExp('Mała Katapulta', 'gi'), 'img': 'malakatapulta.png'},
		{'pattern':  new RegExp('Duża Katapulta', 'gi'), 'img': 'duzakatapulta.png'},
		{'pattern':  new RegExp('Wsparcie Dystansowe', 'gi'), 'img': 'wsparcie.png'},
		{'pattern':  new RegExp('Mikstura Słabego Punktu', 'gi'), 'img': 'mikstura.png'},
                /* GENERALS */
		{'pattern':  new RegExp('\\(200\\)', 'gi'), 'img': 'ngeneral.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(GEN\\)', 'gi'), 'img': 'ngeneral.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(250\\)', 'gi'), 'img': 'nweteran.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(WET\\)', 'gi'), 'img': 'nweteran.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(270\\)', 'gi'), 'img': 'nmajor.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MAJ\\)', 'gi'), 'img': 'nmajor.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MSW\\)', 'gi'), 'img': 'nmistrz.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(NUS\\)', 'gi'), 'img': 'nnusala.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(VAR\\)', 'gi'), 'img': 'nvargus.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(ANS\\)', 'gi'), 'img': 'nanslem.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(BRS\\)', 'gi'), 'img': 'nborys.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(NIE\\)', 'gi'), 'img': 'nniezlomny.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MGG\\)', 'gi'), 'img': 'nmlodszy.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(GEM\\)', 'gi'), 'img': 'nstarszy.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(SGG\\)', 'gi'), 'img': 'nstarszy.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(NAUK\\)', 'gi'), 'img': 'nnaukowiec.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MED\\)', 'gi'), 'img': 'nmedyk.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MIK\\)', 'gi'), 'img': 'nswmikolaj.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(ZAK\\)', 'gi'), 'img': 'nzakapturzony.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(Drakul\\)', 'gi'), 'img': 'ndrakul.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(DG\\)', 'gi'), 'img': 'ndgeneral.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MO\\)', 'gi'), 'img': 'nmistrz2.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(SYL\\)', 'gi'), 'img': 'nsylwana.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(DB\\)', 'gi'), 'img': 'ndrzacobrody.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(DUCH\\)', 'gi'), 'img': 'nduch.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MRÓZ\\)', 'gi'), 'img': 'nmrozny.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(SAM\\)', 'gi'), 'img': 'nsamotnik.png', 'kind': 'general'},
                /* ENEMY - BASIC */
		{'pattern':  new RegExp('Drobny Kłusownik', 'gi'), 'img': 'lotrzyk.png'},
		{'pattern':  new RegExp('Łotrzyk', 'gi'), 'img': 'lotrzyk.png'},
		{'pattern':  new RegExp('Łotr', 'gi'), 'img': 'lotr.png', searchPattern: new RegExp('[\\d|,] Łotr', 'gi')},
		{'pattern':  new RegExp('Pies Strażniczy', 'gi'), 'img': 'pies.png'},
		{'pattern':  new RegExp('Ogar', 'gi'), 'img': 'pies.png'},
		{'pattern':  new RegExp('Oprych', 'gi'), 'img': 'oprych.png'},
		{'pattern':  new RegExp('Miotacz Kamieni', 'gi'), 'img': 'miotaczkamieni.png'},
		{'pattern':  new RegExp('Łowca Królików', 'gi'), 'img': 'lowca.png'},
		{'pattern':  new RegExp('Łowca', 'gi'), 'img': 'lowca.png', searchPattern: new RegExp('[\\d|,] Łowca', 'gi')},
		{'pattern':  new RegExp('Jednooki Bert', 'gi'), 'img': 'bert.png'},
		{'pattern':  new RegExp('Śmierdziel', 'gi'), 'img': 'smierdziel.png'},
		{'pattern':  new RegExp('Żelaznozębny', 'gi'), 'img': 'zelaznozebny.png'},
		{'pattern':  new RegExp('Krwawa Maryna', 'gi'), 'img': 'maryna.png'},
		{'pattern':  new RegExp('Szary Wilk', 'gi'), 'img': 'szarywilk.png'},
		{'pattern':  new RegExp('Wiking z Jomsborka', 'gi'), 'img': 'wikingzjomsborka.png'},
		{'pattern':  new RegExp('Huskarl', 'gi'), 'img': 'huskarl.png'},
		{'pattern':  new RegExp('Karl', 'gi'), 'img': 'karl.png', searchPattern: new RegExp('[\\d|,] Karl', 'gi')},
		{'pattern':  new RegExp('Thrall', 'gi'), 'img': 'tral.png'},
		{'pattern':  new RegExp('Walkiria', 'gi'), 'img': 'walkiria.png'},
		{'pattern':  new RegExp('Berserker', 'gi'), 'img': 'berserker.png'},
		{'pattern':  new RegExp('Kultysta', 'gi'), 'img': 'kultysta.png'},
		{'pattern':  new RegExp('Arcykapłan Mrocznego Kultu', 'gi'), 'img': 'arcykaplan.png'},
		{'pattern':  new RegExp('Kapłan Mrocznego Kultu', 'gi'), 'img': 'kaplan.png', searchPattern: new RegExp('^(kapłan mrocznego kultu)|[\\W](kapłan mrocznego kultu)', 'gi'), x: true},
		{'pattern':  new RegExp('Fanatyk', 'gi'), 'img': 'fanatyk.png'},
		{'pattern':  new RegExp('Jeździec Mroku', 'gi'), 'img': 'jezdziecmroku.png'},
		{'pattern':  new RegExp('Siewca Pożogi', 'gi'), 'img': 'siewcapozogi.png'},
		{'pattern':  new RegExp('Tańcząca Derwisz', 'gi'), 'img': 'derwisz.png'},
		{'pattern':  new RegExp('Arcykapłan', 'gi'), 'img': 'arcykaplan.png', searchPattern: new RegExp('[\\d|,] Arcykapłan', 'gi')},
		{'pattern':  new RegExp('Bagienna Wiedźma', 'gi'), 'img': 'wiedzma.png'},
		{'pattern':  new RegExp('Pomiot Piekielny', 'gi'), 'img': 'pomiotpiekielny.png'},
		{'pattern':  new RegExp('Majtek', 'gi'), 'img': 'majtek.png'},
		{'pattern':  new RegExp('Łupieżca', 'gi'), 'img': 'lupiezca.png'},
		{'pattern':  new RegExp('Ogniomistrz', 'gi'), 'img': 'ogniomistrz.png'},
		{'pattern':  new RegExp('Nożownik', 'gi'), 'img': 'nozownik.png'},
		{'pattern':  new RegExp('Piracki Oficer', 'gi'), 'img': 'pirackioficer.png'},
		{'pattern':  new RegExp('Zwariowany Kuchta', 'gi'), 'img': 'kuchta.png'},
		{'pattern':  new RegExp('Rekrut Dezerter', 'gi'), 'img': 'rekrut.png'},
		{'pattern':  new RegExp('Ochotnik Dezerter', 'gi'), 'img': 'ochotnik.png'},
		{'pattern':  new RegExp('Konny Dezerter', 'gi'), 'img': 'konny.png'},
		{'pattern':  new RegExp('Żołnierz Dezerter', 'gi'), 'img': 'zolnierz.png'},
		{'pattern':  new RegExp('Elitarny Dezerter', 'gi'), 'img': 'elitarny.png'},
		{'pattern':  new RegExp('Łucznik Dezerter', 'gi'), 'img': 'lucznik.png'},
		{'pattern':  new RegExp('Wyborny Łucznik Dezerter', 'gi'), 'img': 'wyborny.png'},
		{'pattern':  new RegExp('Kusznik Dezerter', 'gi'), 'img': 'kusznik.png'},
		{'pattern':  new RegExp('Puszkarz Dezerter', 'gi'), 'img': 'puszkarz.png'},
		{'pattern':  new RegExp('Sir Robin', 'gi'), 'img': 'sirrobin.png'},
		{'pattern':  new RegExp('Wielka Berta', 'gi'), 'img': 'wielkaberta.png'},
		{'pattern':  new RegExp('Włócznik Konny', 'gi'), 'img': 'wlocznikkonny.png'},
		{'pattern':  new RegExp('Konny Łucznik', 'gi'), 'img': 'lucznikkonny.png'},
		{'pattern':  new RegExp('Konna Amazonka', 'gi'), 'img': 'konnaamazonka.png'},
		{'pattern':  new RegExp('Konna Gwardia Amazońska', 'gi'), 'img': 'konnaamazonka.png'},
		{'pattern':  new RegExp('Nomada', 'gi'), 'img': 'nomada.png'},
		{'pattern':  new RegExp('Katafrakt', 'gi'), 'img': 'katafrakt.png'},
		{'pattern':  new RegExp('Strzelec', 'gi'), 'img': 'strzelec.png', searchPattern: new RegExp('[\\d|,] Strzelec', 'gi')},
		{'pattern':  new RegExp('Wściekły Byk', 'gi'), 'img': 'wscieklybyk.png'},
		{'pattern':  new RegExp('Ryczący Byk', 'gi'), 'img': 'wscieklybyk.png'},
		{'pattern':  new RegExp('Napastnik', 'gi'), 'img': 'napastnik.png'},
		{'pattern':  new RegExp('Obrońca', 'gi'), 'img': 'obronca.png', searchPattern: new RegExp('[\\d|,] Obrońca', 'gi')},
		{'pattern':  new RegExp('Pomocnik', 'gi'), 'img': 'pomocnik.png'},
		{'pattern':  new RegExp('Bramkarz', 'gi'), 'img': 'bramkarz.png'},
		{'pattern':  new RegExp('Zrzęda', 'gi'), 'img': 'zrzeda.png'},
		{'pattern':  new RegExp('Tubylec', 'gi'), 'img': 'tubylec.png'},
		{'pattern':  new RegExp('Tajemniczy Szaman', 'gi'), 'img': 'tajemniczyszaman.png'},
		{'pattern':  new RegExp('Szaman', 'gi'), 'img': 'szaman.png', searchPattern: new RegExp('[\\d|,] Szaman', 'gi')},
		{'pattern':  new RegExp('Jaguar', 'gi'), 'img': 'jaguar.png'},
		{'pattern':  new RegExp('Traper Garrun', 'gi'), 'img': 'traper.png'},
		{'pattern':  new RegExp('Miniaturowy Gliniany Golem', 'gi'), 'img': 'glowagolema01.png'},
		{'pattern':  new RegExp('Miniaturowy Skalny Golem', 'gi'), 'img': 'glowagolema02.png'},
		{'pattern':  new RegExp('Miniaturowy Lodowy Golem', 'gi'), 'img': 'glowagolema04.png'},
		{'pattern':  new RegExp('Miniaturowy Golem z Lawy', 'gi'), 'img': 'glowagolema03.png'},
		{'pattern':  new RegExp('Szalony Naukowiec', 'gi'), 'img': 'snaukowiec.png'},
		{'pattern':  new RegExp('Mroczny Władca', 'gi'), 'img': 'mrocznylord.png'},
		{'pattern':  new RegExp('Rozwścieczony Dzik', 'gi'), 'img': 'rozwscieczonydzik.png'},
		{'pattern':  new RegExp('Niedźwiedź', 'gi'), 'img': 'niedzwiedz.png', searchPattern: new RegExp('[\\d|,] Niedźwiedź', 'gi')},
		{'pattern':  new RegExp('Wilk', 'gi'), 'img': 'wilk.png', searchPattern: new RegExp('[\\d|,] Wilk', 'gi')},
		{'pattern':  new RegExp('Lis', 'gi'), 'img': 'lis.png', searchPattern: new RegExp('[\\d|,] Lis', 'gi')},
		{'pattern':  new RegExp('Przywódca Watahy', 'gi'), 'img': 'przywodcawatahy.png'},
		{'pattern':  new RegExp('Gigant', 'gi'), 'img': 'gigant.png'},
		{'pattern':  new RegExp('Królewski Rekrut', 'gi'), 'img': 'rekrut.png'},
		{'pattern':  new RegExp('Królewski Ochotnik', 'gi'), 'img': 'ochotnik.png'},
		{'pattern':  new RegExp('Królewski Konny', 'gi'), 'img': 'konny.png'},
		{'pattern':  new RegExp('Królewski Łucznik', 'gi'), 'img': 'lucznik.png'},
		{'pattern':  new RegExp('Królewski Wyborny Łucznik', 'gi'), 'img': 'wyborny.png'},
		{'pattern':  new RegExp('Królewski Kusznik', 'gi'), 'img': 'kusznik.png'},
		{'pattern':  new RegExp('Królewski Elitarny Żołnierz', 'gi'), 'img': 'elitarny.png'},
		{'pattern':  new RegExp('Królewski Puszkarz', 'gi'), 'img': 'puszkarz.png'},
		{'pattern':  new RegExp('Wielki Bogor', 'gi'), 'img': 'wielkibogor.png'},
		{'pattern':  new RegExp('Wielki Gogor', 'gi'), 'img': 'wielkigogor.png'},
		{'pattern':  new RegExp('Jednorożec', 'gi'), 'img': 'jednorozec.png'},
		{'pattern':  new RegExp('Zły Król', 'gi'), 'img': 'zlykrol.png'},
		{'pattern':  new RegExp('Wielki Niedźwiedź', 'gi'), 'img': 'wielkiniedzwiedz.png'},
		{'pattern':  new RegExp('Asasyn', 'gi'), 'img': 'skrytobojca.png'},
		{'pattern':  new RegExp('Chciwy Karczmarz', 'gi'), 'img': 'chciwykarczmarz.png'},
		{'pattern':  new RegExp('Żelaznoręki', 'gi'), 'img': 'zelaznoreki.png'},
		{'pattern':  new RegExp('Krawiec Konkurent', 'gi'), 'img': 'krawieckonkurent.png'},
		{'pattern':  new RegExp('Kłamliwa Koza', 'gi'), 'img': 'klamliwakoza.png'},
		{'pattern':  new RegExp('Święty Pałkołaj', 'gi'), 'img': 'swietypalkolaj.png'},
		{'pattern':  new RegExp('Czarny Byk', 'gi'), 'img': 'czarnybyk.png'},
		{'pattern':  new RegExp('Mroczny Mag', 'gi'), 'img': 'mrocznymag.png'},
		{'pattern':  new RegExp('Urwis', 'gi'), 'img': 'urwis.png'},
		{'pattern':  new RegExp('Zbój', 'gi'), 'img': 'zboj.png', searchPattern: new RegExp('[\\d|,] Zbój', 'gi')},
		{'pattern':  new RegExp('Dowcipniś', 'gi'), 'img': 'dowcipnis.png'},
		{'pattern':  new RegExp('Wandal', 'gi'), 'img': 'wandal.png'},
		{'pattern':  new RegExp('Łotry', 'gi'), 'img': 'lotr2.png'},
		{'pattern':  new RegExp('Łobuz', 'gi'), 'img': 'lobuz.png'},
		{'pattern':  new RegExp('Osiłek', 'gi'), 'img': 'osilek.png'},
		{'pattern':  new RegExp('Łajdak', 'gi'), 'img': 'lajdak.png'},
		{'pattern':  new RegExp('Maruda', 'gi'), 'img': 'maruda.png'},
		{'pattern':  new RegExp('Denis Łobuziak', 'gi'), 'img': 'denis.png'},
		{'pattern':  new RegExp('Aleks Zadymiarz', 'gi'), 'img': 'aleks.png'},
		{'pattern':  new RegExp('Bob Szubrawiec', 'gi'), 'img': 'bob.png'},
                /* ENEMY - ELITE */
		{'pattern':  new RegExp('Zwadźca', 'gi'), 'img': 'zwadzca.png'},
		{'pattern':  new RegExp('Szermierz', 'gi'), 'img': 'szermierz.png'},
		{'pattern':  new RegExp('Mistrz Miecza', 'gi'), 'img': 'mistrzmiecza.png'},
		{'pattern':  new RegExp('Wydmowy Strzelec', 'gi'), 'img': 'wydmowystrzelec.png'},
		{'pattern':  new RegExp('Pustynny Strzelec', 'gi'), 'img': 'pustynnystrzelec.png'},
		{'pattern':  new RegExp('Łucznik Konny', 'gi'), 'img': 'lucznikkonny2.png'},
		{'pattern':  new RegExp('Kamienne Działo', 'gi'), 'img': 'kamiennedzialo.png'},
		{'pattern':  new RegExp('Sprytny Rozbójnik', 'gi'), 'img': 'sprytnyrozbojnik.png'},
		{'pattern':  new RegExp('Mądry Rozbójnik', 'gi'), 'img': 'madryrozbojnik.png'},
		{'pattern':  new RegExp('Tajemniczy Rozbójnik', 'gi'), 'img': 'tajemniczyrozbojnik.png'},
		{'pattern':  new RegExp('Zdradziecki Rozbójnik', 'gi'), 'img': 'zdradzieckirozbojnik.png'},
		{'pattern':  new RegExp('Nadęty Rozbójnik', 'gi'), 'img': 'nadetyrozbojnik.png'},
		{'pattern':  new RegExp('Siwy Rozbójnik', 'gi'), 'img': 'siwyrozbojnik.png'},
		{'pattern':  new RegExp('Podstępny Rozbójnik', 'gi'), 'img': 'podstepnyrozbojnik.png'},
		{'pattern':  new RegExp('Pobliźniony Rozbójnik', 'gi'), 'img': 'pobliznionyrozbojnik.png'},
		{'pattern':  new RegExp('Chciwy Rozbójnik', 'gi'), 'img': 'chciwyrozbojnik.png'},
		{'pattern':  new RegExp('Głupi Rozbójnik', 'gi'), 'img': 'glupirozbojnik.png'},
		{'pattern':  new RegExp('Doświadczony Żeglarz', 'gi'), 'img': 'doswiadczonyzeglarz.png'},
		{'pattern':  new RegExp('Żeglarz Konny', 'gi'), 'img': 'zeglarzkonny.png'},
		{'pattern':  new RegExp('Żeglarz', 'gi'), 'img': 'zeglarz.png', searchPattern: new RegExp('[\\d|,] Żeglarz', 'gi')},
		{'pattern':  new RegExp('Bosman', 'gi'), 'img': 'bosman.png'},
		{'pattern':  new RegExp('Podoficer', 'gi'), 'img': 'podoficer.png'},
		{'pattern':  new RegExp('Kanonier', 'gi'), 'img': 'kanonier.png'},
		{'pattern':  new RegExp('Sternik', 'gi'), 'img': 'sternik.png'},
		{'pattern':  new RegExp('Buntownik', 'gi'), 'img': 'buntownik.png'},
		{'pattern':  new RegExp('Zrzędliwa Papuga', 'gi'), 'img': 'papuga.png'},
		{'pattern':  new RegExp('Strażnik Oazy', 'gi'), 'img': 'straznikoazy.png'},
		{'pattern':  new RegExp('Kamienny Robak', 'gi'), 'img': 'kamiennyrobak.png'},
		{'pattern':  new RegExp('Olbrzymi Nietoperz', 'gi'), 'img': 'olbrzyminietoperz.png'},
		{'pattern':  new RegExp('Wygłodniały Kwiat', 'gi'), 'img': 'wyglodnialykwiat.png'},
		{'pattern':  new RegExp('Dziki Kwiat', 'gi'), 'img': 'dzikikwiat.png'},
		{'pattern':  new RegExp('Bulwiasty Kwiat', 'gi'), 'img': 'bulwiastykwiat.png'},
		{'pattern':  new RegExp('Dzik', 'gi'), 'img': 'dzik.png', searchPattern: new RegExp('[\\d|,] Dzik', 'gi')},
		{'pattern':  new RegExp('Biblioteczny Golem', 'gi'), 'img': 'bibliotecznygolem.png'},
		{'pattern':  new RegExp('Duży Kamienny Posąg', 'gi'), 'img': 'kamiennyposag.png'},
		{'pattern':  new RegExp('Omszały Kamienny Posąg', 'gi'), 'img': 'omszalyposag.png'},
		{'pattern':  new RegExp('Małpa Rzucająca Kamieniami', 'gi'), 'img': 'malpazkamieniami.png'},
		{'pattern':  new RegExp('Małpa z Kijem', 'gi'), 'img': 'malpazkijem.png'},
		{'pattern':  new RegExp('Małpa Alfa', 'gi'), 'img': 'malpaalfa.png'},
		{'pattern':  new RegExp('Nerwowa Małpa', 'gi'), 'img': 'nerwowamalpa.png'},
		{'pattern':  new RegExp('Wielka Armata', 'gi'), 'img': 'wielkaarmata.png'},
		{'pattern':  new RegExp('Informator', 'gi'), 'img': 'informator.png'},
		{'pattern':  new RegExp('Olbrzymi Wąż Morski', 'gi'), 'img': 'wazmorski.png'},
		{'pattern':  new RegExp('Zrzędliwy Strażnik', 'gi'), 'img': 'zrzedliwystraznik.png'},
		{'pattern':  new RegExp('Szalony Strażnik', 'gi'), 'img': 'szalonystraznik.png'},
		{'pattern':  new RegExp('El Chupacabra', 'gi'), 'img': 'czupakabra.png'},
		{'pattern':  new RegExp('Flecista z Hamelin', 'gi'), 'img': 'flecista.png'},
		{'pattern':  new RegExp('Władyka', 'gi'), 'img': 'wladyka.png'},
		{'pattern':  new RegExp('Król Szczurów', 'gi'), 'img': 'krolszczurow.png'},
		{'pattern':  new RegExp('Ilsebille Zła Królowa', 'gi'), 'img': 'zlakrolowa.png'},
		{'pattern':  new RegExp('Przywódca Królewskich Myśliwych', 'gi'), 'img': 'mysliwy.png'},
		{'pattern':  new RegExp('Starożytny Smok', 'gi'), 'img': 'smok.png'},
		{'pattern':  new RegExp('Kaznodzieja Płomieni', 'gi'), 'img': 'kaznodzieja.png'},
		{'pattern':  new RegExp('Zła Macocha', 'gi'), 'img': 'zlamacocha.png'},
		{'pattern':  new RegExp('Królewski Kapitan', 'gi'), 'img': 'krolewskikapitan.png'},
		{'pattern':  new RegExp('Kapitan', 'gi'), 'img': 'kapitan.png', searchPattern: new RegExp('[\\d|,] Kapitan', 'gi')},
		{'pattern':  new RegExp('Władca Bandytów Bjorn', 'gi'), 'img': 'bjorn.png'},
		{'pattern':  new RegExp('Władca Bandytów', 'gi'), 'img': 'wladcabandytow.png', searchPattern: new RegExp('[\\d|,] Władca Bandytów', 'gi')},
		{'pattern':  new RegExp('Królewski Kolos', 'gi'), 'img': 'kolos.png'},
		{'pattern':  new RegExp('Skarb', 'gi'), 'img': 'skarb.png'},
		{'pattern':  new RegExp('Jeleń', 'gi'), 'img': 'jelon.png'},
		{'pattern':  new RegExp('Mroźny Lis', 'gi'), 'img': 'lis2.png'},
		{'pattern':  new RegExp('Mroźny Orzeł', 'gi'), 'img': 'orzel.png'},
		{'pattern':  new RegExp('Mroźny Wilk', 'gi'), 'img': 'wilk2.png'},
		{'pattern':  new RegExp('Mroźna Pantera', 'gi'), 'img': 'leopard.png'},
		{'pattern':  new RegExp('Mroźny Koziorożec', 'gi'), 'img': 'koziorozec.png'},
		{'pattern':  new RegExp('Mroźny Niedźwiedź', 'gi'), 'img': 'niedzwiedz2.png'},
		{'pattern':  new RegExp('Mroźny Olbrzym', 'gi'), 'img': 'gigant2.png'},
		{'pattern':  new RegExp('Upiorny Wilk', 'gi'), 'img': 'upiornywilk.png'},
		{'pattern':  new RegExp('Olbrzymi Ryś', 'gi'), 'img': 'rys.png'},
		{'pattern':  new RegExp('Stalowa Broda', 'gi'), 'img': 'stalowobrody.png'},
		{'pattern':  new RegExp('Zimowy Koszmar', 'gi'), 'img': 'postrach.png'},
		{'pattern':  new RegExp('Olbrzymi Koziorożec', 'gi'), 'img': 'ogromnykoziorozec.png'},
		{'pattern':  new RegExp('Niszczący Wół', 'gi'), 'img': 'niszczacywol.png'},
		{'pattern':  new RegExp('Matrona Mroźnego Niedźwiedzia', 'gi'), 'img': 'matriarchalny.png'},
		{'pattern':  new RegExp('Smilodon', 'gi'), 'img': 'szablozebny.png'},
		{'pattern':  new RegExp('Kolosalny Orzeł', 'gi'), 'img': 'ogromnyorzel.png'},
		{'pattern':  new RegExp('Wzorcowy Łoś', 'gi'), 'img': 'los.png'},
		{'pattern':  new RegExp('Mamut', 'gi'), 'img': 'mamut.png'},
		{'pattern':  new RegExp('Risi', 'gi'), 'img': 'risi.png'},
		{'pattern':  new RegExp('Chuck', 'gi'), 'img': 'chuck.png'},
		{'pattern':  new RegExp('Kolce', 'gi'), 'img': 'kolce.png'},
                /* MILITARY - BASIC */
		{'pattern':  new RegExp('Rekrut', 'gi'), 'img': 'rekrut.png', searchPattern: new RegExp('[\\d|,] Rekrut', 'gi')},
		{'pattern':  new RegExp('Ochotnik', 'gi'), 'img': 'ochotnik.png', searchPattern: new RegExp('[\\d|,] Ochotnik', 'gi')},
		{'pattern':  new RegExp('Elitarny Żołnierz', 'gi'), 'img': 'elitarny.png', searchPattern: new RegExp('[\\d|,] Elitarny Żołnierz', 'gi')},
		{'pattern':  new RegExp('Żołnierz', 'gi'), 'img': 'zolnierz.png', searchPattern: new RegExp('[\\d|,] Żołnierz', 'gi')},
		{'pattern':  new RegExp('Wyborny Łucznik', 'gi'), 'img': 'wyborny.png', searchPattern: new RegExp('[\\d|,] Wyborny Łucznik', 'gi')},
		{'pattern':  new RegExp('Łucznik', 'gi'), 'img': 'lucznik.png', searchPattern: new RegExp('[\\d|,] Łucznik', 'gi')},
		{'pattern':  new RegExp('Kusznik', 'gi'), 'img': 'kusznik.png', searchPattern: new RegExp('[\\d|,] Kusznik', 'gi')},
		{'pattern':  new RegExp('Konny', 'gi'), 'img': 'konny.png', searchPattern: new RegExp('[\\d|,] Konny', 'gi')},
		{'pattern':  new RegExp('Puszkarz', 'gi'), 'img': 'puszkarz.png', searchPattern: new RegExp('[\\d|,] Puszkarz', 'gi')},
                /* ENEMY - BONABERTI */
		{'pattern':  new RegExp('Blond Łucznik', 'gi'), 'img': 'blondlucznik.png'},
		{'pattern':  new RegExp('Górnik Obrońca', 'gi'), 'img': 'gornikobronny.png'},
		{'pattern':  new RegExp('Lekkomyślny Jeździec', 'gi'), 'img': 'lekkomyslnyjezdziec.png'},
		{'pattern':  new RegExp('Stanowczy Obrońca', 'gi'), 'img': 'stanowczyobronca.png'},
		{'pattern':  new RegExp('Złoty Strażnik', 'gi'), 'img': 'zlotystraznik.png'},
		{'pattern':  new RegExp('Zręczny Szef Bandytów', 'gi'), 'img': 'zrecznyszef.png'},
		{'pattern':  new RegExp('Jeździec', 'gi'), 'img': 'jezdziec.png', searchPattern: new RegExp('[\\d|,] Jeździec', 'gi')},
	]
};

function prepare_summary(total_losses, alternative_losses) {
	"use strict";
	var summ = [];
	for (var y = 0; y < initialData.soldiers.length; y++){
		if (total_losses[initialData.soldiers[y]] > 0){
			summ.push(total_losses[initialData.soldiers[y]] + initialData.soldiers[y]);
		}
	}
	if (alternative_losses.length > 0){
		var alternative_summ = [],
			alternative_text = [],
			temp = [],
			temp2 = [];
		for(var n = 0; n < alternative_losses.length; n++){
			for(var m = 0; m < alternative_losses[n].length; m++){
				for (var t = 0; t < initialData.soldiers.length; t++){
					if (alternative_losses[n][m][initialData.soldiers[t]] > 0){
						alternative_summ.push(alternative_losses[n][m][initialData.soldiers[t]] + initialData.soldiers[t]);
					}
				}
				if (m < alternative_losses[n].length - 1){
					temp.push(alternative_summ.join(', ') + ' ' + initialData.alternativeText + ' ');
				} else {
					temp.push(alternative_summ.join(', '));
				}
				alternative_summ = [];
			}
			temp2.push(temp.join(''));
			temp = [];
		}
		alternative_text += temp2.join(' <br/> ');
	}
	if (summ.length > 0){
		if (alternative_losses.length > 0){
			return initialData.lossesOfSelectedAttacksText + summ.join(', ') + initialData.alternativeAttacksListHeader + alternative_text;
		}
		return initialData.lossesOfSelectedAttacksText + summ.join(', ');
	} else if (alternative_losses.length > 0){
		return initialData.alternativeAttacksText + alternative_text;
	}
	return initialData.noLossestext;
}

function recognise_possible_attacks(losses_list, alternative_losses){
	"use strict";
	var alternatives = new Array(losses_list.length),
		count;
	for (var x = 0; x < losses_list.length; x++){
		alternatives[x] = jQuery.extend({}, initialData.templateEmptyLossesDict);
		for (var y = 0; y < initialData.soldiers.length; y++){
			count = losses_list[x].match("([\\d]+\\s*"+initialData.soldiers[y]+")");
			while(count != null){
				alternatives[x][initialData.soldiers[y]] += parseInt(count[0].replace(initialData.soldiers[y]));
				losses_list[x] = losses_list[x].replace(count[0]);
				count = losses_list[x].match("([\\d]+\\s*"+initialData.soldiers[y]+")");
			}
		}
	}
	alternative_losses.push(alternatives);
}

function recalculate_summary(jTable){
	"use strict";
	jTable.next('div.summarydiv').text('');
	var alternative_losses = [],
		total_losses = jQuery.extend({}, initialData.templateEmptyLossesDict),
		count, losses, jThisText;
	jTable.find('tr:not(:first,.afterattack,.top_row)').find('td:last').each(function (){
		jThisText = jQuery(this).text();
		if (jThisText.indexOf(initialData.alternativeText) !== -1){
			if (jThisText.split('[').length > 2){
				var possible_versions = jThisText.split(initialData.alternativeText);
				recognise_possible_attacks([possible_versions[0].split('[')[1].replace(']',''), possible_versions[1].split('[')[1].replace(']','')], alternative_losses);
				// [] lub []
			}else{
				// [x lub y, z]
				losses = jThisText.split('[')[1].replace(']','').split(initialData.alternativeText);
				recognise_possible_attacks([losses[0], losses[1]], alternative_losses);
			}
		} else {
			if (jThisText.indexOf('[') !== -1){
				losses = jThisText.split('[')[1].replace(']','');
				for (var y = 0; y < initialData.soldiers.length; y++){
					count = losses.match("([\\d]+\\s*"+initialData.soldiers[y]+")");
					while(count != null){
						total_losses[initialData.soldiers[y]] += parseInt(count[0].replace(initialData.soldiers[y]));
						losses = losses.replace(count[0]);
						count = losses.match("([\\d]+\\s*"+initialData.soldiers[y]+")");
					}
				}
			}
		}
	});
	jTable.next('div.summarydiv').html(prepare_summary(total_losses, alternative_losses));
}

function show_selected_attack(event, attackNumber) {
	"use strict";
	var table = jQuery(event).parents('table');
	table.find('tr.afterattack').each(function (){
		if (jQuery(this).find('td:eq(1)').text() == attackNumber){
			jQuery(this).addClass('donthideme').show();
		}
	});
	create_top_row(table.find('tr:first'));
}

function show_general_attacks(event, general){
	"use strict";
	var table = jQuery(event).parents('table');
	table.find('tr.afterattack').each(function (){
		if (jQuery(this).find('td:first').text() == general){
			jQuery(this).addClass('donthideme').show();
		}
	});
	create_top_row(table.find('tr:first'));
}

function toggle_attacks(event){
	"use strict";
	var table = jQuery(event).parents('table');
	initialData.hideAttacksOption = !initialData.hideAttacksOption;
	if (initialData.hideAttacksOption){
		//ukrywanie
		table.find('tr.afterattack').hide('fast');
	} else{
		table.find('tr.afterattack').removeClass('donthideme').show('fast');
	}
	create_top_row(table.find('tr:first'));
}

function toggle_icons(event, table) {
	"use strict";
	var jTable = table || jQuery(event).parents('table'),
		tdElems = jTable.find('tr:not(:first):not(.top_row) > td:nth-child(3), tr:not(:first):not(.top_row) > td:nth-child(4)'),
		jTd, tdHtml, soldierImgTpl, generalImgTpl, reExec, imgGeneratorFn, soldierImg, reExecResult;
	if (event) {
		initialData.showIconsOfSoldiers = !initialData.showIconsOfSoldiers;
		jTable.find('input[name="icons_toggler"]').prop('checked', initialData.showIconsOfSoldiers);
	}
	if (initialData.showIconsOfSoldiers) {
		soldierImgTpl = '<img class="img_icon" style="' + initialData.soldiersImgStyles + '" src="' + initialData.soldiersImgPath;
		generalImgTpl = '<img class="img_icon" style="' + initialData.generalsImgStyles + '" src="' + initialData.generalsImgPath;
		imgGeneratorFn = function(imgConfig) {
            return (imgConfig.kind === 'general' ? generalImgTpl : soldierImgTpl) + imgConfig.img + '" alt="' + (imgConfig.pattern.toString().replace(/\/gi|\/|\\/g, '')) + '"/>';
		}
		tdElems.each(function(_, td) {
			jTd = jQuery(td);
			tdHtml = jTd.html();
			initialData.soldiersImgConfig.forEach(function(imgConfig) {
        if (imgConfig.searchPattern) {
					reExec = tdHtml.match(imgConfig.searchPattern);
					if (!reExec) {
						return;
					}
					soldierImg = imgGeneratorFn(imgConfig);

                    reExec.forEach(function(reExecResult) {
						tdHtml = tdHtml.replace(
							reExecResult,
							reExecResult.replace(imgConfig.pattern, '') + soldierImg
						);
					})
					return;
				} else if (imgConfig.pattern.test(tdHtml)) {
					tdHtml = tdHtml.replace(
						imgConfig.pattern,
						imgGeneratorFn(imgConfig)
					);
				}
			});
			jTd.html(tdHtml);
		});
	} else {
		tdElems.each(function(_, td) {
			jQuery(td).find('img.img_icon').replaceWith(function(){
				return this.alt;
			});
		});
	}
}


function create_top_row(clicked_row){
	"use strict";
	var table = jQuery(clicked_row).parents('table'),
		old_attacks = table.find('tr.afterattack:not(.donthideme)'),
		hideLinkTpl = '<div style="float: right;"><div onClick="toggle_icons(this, undefined)" style="cursor: pointer; float: left; margin-right: 30px;"><input name="icons_toggler" type="checkbox"'+ (initialData.showIconsOfSoldiers ? ' checked="checked"' : "") + '"> ' + initialData.showIconsOfSoldiersLinkText + '</div><div onClick="toggle_attacks(this)" style="cursor: pointer; float: right;"><input type="checkbox"'+ (initialData.hideAttacksOption ? ' checked="checked"' : "") +'"> ' + initialData.hideAttacksOptionLinkText + '</div></div>';
	if (table.find('tr.top_row').length === 0) {//pierwsze klikniecie
		table.find('tr:first').after('<tr class="top_row"><td colspan="4" style="background-color: gainsboro;"></td></tr>');
	}
	var is_selected = initialData.hideAttacksOption ? ' checked="checked"' : "";
	if (old_attacks.length > 0 && initialData.hideAttacksOption) {
		var last_attacker = null,
			output_html = '<span style="float: left;">',
			tdElems, general, camp;
		old_attacks.each(function(){
			tdElems = jQuery(this).find('td');
			general = jQuery(tdElems[0]).text();
			camp = jQuery(tdElems[1]).text();
			if (last_attacker == null) {
				last_attacker = general;
				output_html += '<b onClick="show_general_attacks(this, \'' + general + '\')" style="cursor: pointer;">' + general + '</b>' + ' (';
			}
			if (last_attacker == general) {
				output_html += '<span onClick="show_selected_attack(this, \'' + camp + '\')" style="cursor: pointer;">' + camp + '</span> ';
			} else {
				output_html = output_html.trim();
				output_html += ') <b onClick="show_general_attacks(this, \'' + general + '\')" style="cursor: pointer;">' + general + '</b> (<span onClick="show_selected_attack(this, \'' + camp + '\')" style="cursor: pointer;">' + camp + '<span> ';
				last_attacker = general;
			}
		});
		if (last_attacker != null) {
			output_html = output_html.trim();
			output_html += ')';
		}
		output_html += '</span>';
		table.find('tr.top_row').show('slow').find('td').html('<div style="float: left;"><span>' + initialData.hiddenAttacksText + ':</span><br/>' + output_html + '</div>' + hideLinkTpl);
	} else { //brak atakow
		table.find('tr.top_row td').html(hideLinkTpl);
	}
}

jQuery(document).ready(function() {
	"use strict";
    var losses_dict = {},
		row_color, row_text_decoration, jTable, jRow;
    initialData.soldiers.forEach(function (soldier){
        losses_dict[soldier] = 0;
    });
    initialData.templateEmptyLossesDict = losses_dict;

	jQuery('table').each(function (_, table){
		jTable = jQuery(table);
		if(jTable.find('tr:first td:first').text().toLowerCase() === initialData.columnWithGeneralsTitle){
			jTable.after('<div class="summarydiv"></div>');
			recalculate_summary(jTable);
			jRow = jTable.find('tr:not(:first):eq(1) td');
			row_color = jRow.css('background-color');
			row_text_decoration = jRow.css('text-decoration');
			jTable.find('tr:not(:first)').css('cursor', 'pointer').click(function(){
				var jThis = jQuery(this);
				if (!jThis.hasClass('afterattack')){
					jThis.addClass('afterattack');
					jThis.find('td').css({
						'text-decoration': 'line-through',
						'background-color': 'silver'
					});
					if (initialData.hideAttacksOption){
						jThis.hide('fast');
					}
				} else {
					jThis.removeClass('afterattack').removeClass('donthideme');
					jThis.find('td').css({
						'text-decoration': row_text_decoration,
						'background-color': row_color
					});
				}
				recalculate_summary(jQuery(jThis.parents('table')));
				if (initialData.hideAttacksOption){
					create_top_row(this);
				}
			});
			create_top_row(jTable.find('tr:last')); /* dodanie pierwszego wiersza */
			toggle_icons(undefined, jTable);
		}
	});
});
