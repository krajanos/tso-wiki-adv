/*
 2020 (c) for Settlersonlinewiki.eu by krajanbdg@gmail.com
 ver. 0.79
*/
var initialData = {
    soldiers: ['ES', 'SE', 'S', 'MS', 'K', 'MM', 'AM', 'M', 'BS', 'Ca', 'Cr', 'C', 'Re', 'R', 'LB', 'Bow', 'B'],
    hideAttacksOption: true,
	hideAttacksOptionLinkText: 'Hide attacks',
	showIconsOfSoldiers: true,
	showIconsOfSoldiersLinkText: 'Image version',
	lossesOfSelectedAttacksText: 'Losses from selected attacks: ',
	alternativeAttacksListHeader: ' + alternative attacks: <br/>',
	alternativeAttacksText: 'Losses from alternative attacks:<br/>',
	noLossestext: 'No losses from selected attacks.',
	hiddenAttacksText: 'Hidden attacks',
	alternativeText: /[^mw]or/,
	soldiersImgPath: 'http://settlersonlinewiki.eu/unit/',
	soldiersImgStyles: 'width: 24px;',
	generalsImgPath: 'http://settlersonlinewiki.eu/unit/',
	generalsImgStyles: 'width: 28px;',
	columnWithGeneralsTitle: 'garrison',
	soldiersImgConfig: [

		{'pattern':  new RegExp('Lowly Poacher', 'gi'), 'img': 'lotrzyk.png'},
		{'pattern':  new RegExp('Hound', 'gi'), 'img': 'pies.png'},
		{'pattern':  new RegExp('Rabbit Hunter', 'gi'), 'img': 'lowca.png'},
		{'pattern':  new RegExp('Hunter', 'gi'), 'img': 'lowca.png', searchPattern: new RegExp('[\\d|,] Hunter', 'gi')},


	            /* MILITARY - BASIC */
		{'pattern':  new RegExp('Recruit', 'gi'), 'img': 'rekrut.png', searchPattern: new RegExp('[\\d|,] Recruit', 'gi')},
		{'pattern':  new RegExp('Militia', 'gi'), 'img': 'ochotnik.png', searchPattern: new RegExp('[\\d|,] Militia', 'gi')},
		{'pattern':  new RegExp('Elite Soldier', 'gi'), 'img': 'elitarny.png', searchPattern: new RegExp('[\\d|,] Elite Soldier', 'gi')},
		{'pattern':  new RegExp('Soldier', 'gi'), 'img': 'zolnierz.png', searchPattern: new RegExp('[\\d|,] Soldier', 'gi')},
		{'pattern':  new RegExp('Longbowman', 'gi'), 'img': 'wyborny.png', searchPattern: new RegExp('[\\d|,] Longbowman', 'gi')},
		{'pattern':  new RegExp('Bowman', 'gi'), 'img': 'lucznik.png', searchPattern: new RegExp('[\\d|,] Bowman', 'gi')},
		{'pattern':  new RegExp('Crossbowman', 'gi'), 'img': 'kusznik.png', searchPattern: new RegExp('[\\d|,] Crossbowman', 'gi')},
		{'pattern':  new RegExp('Cannoneer', 'gi'), 'img': 'puszkarz.png', searchPattern: new RegExp('[\\d|,] Cannoneer', 'gi')},
                /* MILITARY - HEAVY */
		{'pattern':  new RegExp('Mounted Swordsman', 'gi'), 'img': 'konnyzbrojny.png'},
		{'pattern':  new RegExp('Swordsman', 'gi'), 'img': 'zbrojny.png', searchPattern: new RegExp('[\\d|,] Swordsman', 'gi')},
		{'pattern':  new RegExp('Knight', 'gi'), 'img': 'rycerz.png'},
		{'pattern':  new RegExp('Marksman', 'gi'), 'img': 'arkebuzer.png', searchPattern: new RegExp('[\\d|,] Marksman', 'gi')},
		{'pattern':  new RegExp('Mounted Marksman', 'gi'), 'img': 'konnyarkebuzer.png'},
		{'pattern':  new RegExp('Armored Marksman', 'gi'), 'img': 'arkebuzerwzbroi.png'},
		{'pattern':  new RegExp('Besieger', 'gi'), 'img': 'obleznik.png'},
                /* SPECIAL ATTACKS */
		{'pattern':  new RegExp('Chocolate Covered Arrows', 'gi'), 'img': 'czekoladowastrzala.png'},
		{'pattern':  new RegExp('Rain Of Arrows', 'gi'), 'img': 'grad.png'},
		{'pattern':  new RegExp('Rain Of Flaming Arrows', 'gi'), 'img': 'ognistastrzala.png'},
		{'pattern':  new RegExp('Blacktree Arrow', 'gi'), 'img': 'czarnastrzala.png'},
		{'pattern':  new RegExp('Assassine', 'gi'), 'img': 'skrytobojca.png'},
		{'pattern':  new RegExp('Assassin', 'gi'), 'img': 'asason.png', searchPattern: new RegExp('(assassin[^e])|(assassin$)', 'gi')},
		{'pattern':  new RegExp('Ballista', 'gi'), 'img': 'balista.png'},
		{'pattern':  new RegExp('Small Catapult', 'gi'), 'img': 'malakatapulta.png'},
		{'pattern':  new RegExp('Big Catapult', 'gi'), 'img': 'duzakatapulta.png'},
		{'pattern':  new RegExp('Ranged Support', 'gi'), 'img': 'wsparcie.png'},
		{'pattern':  new RegExp('Weak Point Potion', 'gi'), 'img': 'mikstura.png'},
                /* GENERALS */
		{'pattern':  new RegExp('\\(200\\)', 'gi'), 'img': 'ngeneral.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(GEN\\)', 'gi'), 'img': 'ngeneral.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(250\\)', 'gi'), 'img': 'nweteran.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(VET\\)', 'gi'), 'img': 'nweteran.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(270\\)', 'gi'), 'img': 'nmajor.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MAJ\\)', 'gi'), 'img': 'nmajor.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MMA\\)', 'gi'), 'img': 'nmistrz.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(NUS\\)', 'gi'), 'img': 'nnusala.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(VAR\\)', 'gi'), 'img': 'nvargus.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(ANS\\)', 'gi'), 'img': 'nanslem.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(BRS\\)', 'gi'), 'img': 'nborys.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(STF\\)', 'gi'), 'img': 'nniezlomny.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(YGG\\)', 'gi'), 'img': 'nmlodszy.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(GEM\\)', 'gi'), 'img': 'nstarszy.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(OGG\\)', 'gi'), 'img': 'nstarszy.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MAD\\)', 'gi'), 'img': 'nnaukowiec.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MED\\)', 'gi'), 'img': 'nmedyk.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MCH\\)', 'gi'), 'img': 'nswmikolaj.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(Mary\\)', 'gi'), 'img': 'nswmikolaj.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(CLO\\)', 'gi'), 'img': 'nzakapturzony.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(Dracul\\)', 'gi'), 'img': 'ndrakul.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(BHG\\)', 'gi'), 'img': 'ndgeneral.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(MD\\)', 'gi'), 'img': 'nmistrz2.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(SYL\\)', 'gi'), 'img': 'nsylwana.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(TB\\)', 'gi'), 'img': 'ndrzacobrody.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(GHOST\\)', 'gi'), 'img': 'nduch.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(FRO\\)', 'gi'), 'img': 'nmrozny.png', 'kind': 'general'},
		{'pattern':  new RegExp('\\(LON\\)', 'gi'), 'img': 'nsamotnik.png', 'kind': 'general'},
                /* ENEMY - BASIC */
		{'pattern':  new RegExp('Scavenger', 'gi'), 'img': 'lotrzyk.png'},
		{'pattern':  new RegExp('Thug', 'gi'), 'img': 'lotr.png'},
		{'pattern':  new RegExp('Guard Dog', 'gi'), 'img': 'pies.png'},
		{'pattern':  new RegExp('Roughneck', 'gi'), 'img': 'oprych.png'},
		{'pattern':  new RegExp('Stone Thrower', 'gi'), 'img': 'miotaczkamieni.png'},
		{'pattern':  new RegExp('Ranger', 'gi'), 'img': 'lowca.png'},
		{'pattern':  new RegExp('One-Eyed Bert', 'gi'), 'img': 'bert.png'},
		{'pattern':  new RegExp('Skunk', 'gi'), 'img': 'smierdziel.png'},
		{'pattern':  new RegExp('Chuck', 'gi'), 'img': 'chuck.png'},
		{'pattern':  new RegExp('Metal Toothed', 'gi'), 'img': 'zelaznozebny.png'},
		{'pattern':  new RegExp('Wild Mary', 'gi'), 'img': 'maryna.png'},
		{'pattern':  new RegExp('Grey Wolf', 'gi'), 'img': 'szarywilk.png'},
		{'pattern':  new RegExp('Jomviking', 'gi'), 'img': 'wikingzjomsborka.png'},
		{'pattern':  new RegExp('Jomsviking', 'gi'), 'img': 'wikingzjomsborka.png'},
		{'pattern':  new RegExp('Housecarl', 'gi'), 'img': 'huskarl.png'},
		{'pattern':  new RegExp('Karl', 'gi'), 'img': 'karl.png', searchPattern: new RegExp('[\\d|,] Karl', 'gi')},
		{'pattern':  new RegExp('Thrall', 'gi'), 'img': 'tral.png'},
		{'pattern':  new RegExp('Valkyrie', 'gi'), 'img': 'walkiria.png'},
		{'pattern':  new RegExp('Berserk', 'gi'), 'img': 'berserker.png'},
		{'pattern':  new RegExp('Cultist', 'gi'), 'img': 'kultysta.png'},
		{'pattern':  new RegExp('Fanatic', 'gi'), 'img': 'fanatyk.png'},
		{'pattern':  new RegExp('Shadowsneaker', 'gi'), 'img': 'jezdziecmroku.png'},
		{'pattern':  new RegExp('Firedancer', 'gi'), 'img': 'siewcapozogi.png'},
		{'pattern':  new RegExp('Dancing Dervish', 'gi'), 'img': 'derwisz.png'},
		{'pattern':  new RegExp('High Dark Priest', 'gi'), 'img': 'arcykaplan.png'},
		{'pattern':  new RegExp('Dark High Priest', 'gi'), 'img': 'arcykaplan.png'},
		{'pattern':  new RegExp('Dark Priest', 'gi'), 'img': 'kaplan.png', searchPattern: new RegExp('[\\d|,] Dark Priest', 'gi')},
		{'pattern':  new RegExp('Witch Swamp', 'gi'), 'img': 'wiedzma.png'},
		{'pattern':  new RegExp('Swamp Witch', 'gi'), 'img': 'wiedzma.png'},
		{'pattern':  new RegExp('Night Spawn', 'gi'), 'img': 'pomiotpiekielny.png'},
		{'pattern':  new RegExp('Caltrop', 'gi'), 'img': 'kolce.png'},
		{'pattern':  new RegExp('Deckscrubber', 'gi'), 'img': 'majtek.png'},
		{'pattern':  new RegExp('Sabrerattler', 'gi'), 'img': 'lupiezca.png'},
		{'pattern':  new RegExp('Gunman', 'gi'), 'img': 'ogniomistrz.png'},
		{'pattern':  new RegExp('Knifethrower', 'gi'), 'img': 'nozownik.png'},
		{'pattern':  new RegExp('Knife Thrower', 'gi'), 'img': 'nozownik.png'},
		{'pattern':  new RegExp('Pirate Officer', 'gi'), 'img': 'pirackioficer.png'},
		{'pattern':  new RegExp('Crazy Cook', 'gi'), 'img': 'kuchta.png'},
		{'pattern':  new RegExp('Recruit Deserter', 'gi'), 'img': 'rekrut.png'},
		{'pattern':  new RegExp('Militia Deserter', 'gi'), 'img': 'ochotnik.png'},
		{'pattern':  new RegExp('Cavalry Deserter', 'gi'), 'img': 'konny.png'},
		{'pattern':  new RegExp('Soldier Deserter', 'gi'), 'img': 'zolnierz.png'},
		{'pattern':  new RegExp('Elite Soldier Deserter', 'gi'), 'img': 'elitarny.png'},
		{'pattern':  new RegExp('Bowman Deserter', 'gi'), 'img': 'lucznik.png'},
		{'pattern':  new RegExp('Longbowman Deserter', 'gi'), 'img': 'wyborny.png'},
		{'pattern':  new RegExp('Crossbowman Deserter', 'gi'), 'img': 'kusznik.png'},
		{'pattern':  new RegExp('Cannoneer Deserter', 'gi'), 'img': 'puszkarz.png'},
		{'pattern':  new RegExp('Sir Robin', 'gi'), 'img': 'sirrobin.png'},
		{'pattern':  new RegExp('Big Bertha', 'gi'), 'img': 'wielkaberta.png'},
		{'pattern':  new RegExp('Lance Rider', 'gi'), 'img': 'wlocznikkonny.png'},
		{'pattern':  new RegExp('Riding Bowman', 'gi'), 'img': 'lucznikkonny.png'},
		{'pattern':  new RegExp('Riding Amazonian', 'gi'), 'img': 'konnaamazonka.png'},
		{'pattern':  new RegExp('Nomad', 'gi'), 'img': 'nomada.png'},
		{'pattern':  new RegExp('Cataphract', 'gi'), 'img': 'katafrakt.png'},
		{'pattern':  new RegExp('Composite Bowman', 'gi'), 'img': 'strzelec.png'},
		{'pattern':  new RegExp('Composite Bow', 'gi'), 'img': 'strzelec.png', searchPattern: new RegExp('[\\d|,] Composite Bow', 'gi')},
		{'pattern':  new RegExp('Uproarious Bull', 'gi'), 'img': 'wscieklybyk.png'},
		{'pattern':  new RegExp('Striker', 'gi'), 'img': 'napastnik.png'},
		{'pattern':  new RegExp('Fullback', 'gi'), 'img': 'obronca.png'},
		{'pattern':  new RegExp('Midfielder', 'gi'), 'img': 'pomocnik.png'},
		{'pattern':  new RegExp('Goalkeeper', 'gi'), 'img': 'bramkarz.png'},
		{'pattern':  new RegExp('Croaker', 'gi'), 'img': 'zrzeda.png'},
		{'pattern':  new RegExp('Tribesman', 'gi'), 'img': 'tubylec.png'},
		{'pattern':  new RegExp('Mysterious Shaman', 'gi'), 'img': 'szaman.png'},
		{'pattern':  new RegExp('Shaman', 'gi'), 'img': 'szaman.png', searchPattern: new RegExp('[\\d|,] Shaman', 'gi')},
		{'pattern':  new RegExp('Jaguar', 'gi'), 'img': 'jaguar.png'},
		{'pattern':  new RegExp('Garrun The Trapper', 'gi'), 'img': 'trapergarrun.png'},
		{'pattern':  new RegExp('Miniature Clay Golem', 'gi'), 'img': 'glowagolema01.png'},
		{'pattern':  new RegExp('Miniature Rock Golem', 'gi'), 'img': 'glowagolema02.png'},
		{'pattern':  new RegExp('Miniature Ice Golem', 'gi'), 'img': 'glowagolema04.png'},
		{'pattern':  new RegExp('Miniature Lava Golem', 'gi'), 'img': 'glowagolema03.png'},
		{'pattern':  new RegExp('Mad Scientist', 'gi'), 'img': 'snaukowiec.png'},
		{'pattern':  new RegExp('Dark Lord', 'gi'), 'img': 'mrocznylord.png'},
		{'pattern':  new RegExp('Furious Boar', 'gi'), 'img': 'rozwscieczonydzik.png'},
		{'pattern':  new RegExp('Boar', 'gi'), 'img': 'dzik.png', searchPattern: new RegExp('[\\d|,] Boar', 'gi')},
		{'pattern':  new RegExp('Bear', 'gi'), 'img': 'niedzwiedz.png', searchPattern: new RegExp('[\\d|,] Bear', 'gi')},
		{'pattern':  new RegExp('Wolf Packleader', 'gi'), 'img': 'przywodcawatahy.png'},
		{'pattern':  new RegExp('Wolf', 'gi'), 'img': 'wilk.png', searchPattern: new RegExp('[\\d|,] Wolf', 'gi')},
		{'pattern':  new RegExp('Fox', 'gi'), 'img': 'lis.png', searchPattern: new RegExp('[\\d|,] Fox', 'gi')},
		{'pattern':  new RegExp('Royal Recruit', 'gi'), 'img': 'rekrut.png'},
		{'pattern':  new RegExp('Royal Militia', 'gi'), 'img': 'ochotnik.png'},
		{'pattern':  new RegExp('Royal Cavalry', 'gi'), 'img': 'konny.png'},
		{'pattern':  new RegExp('Royal Bowman', 'gi'), 'img': 'lucznik.png'},
		{'pattern':  new RegExp('Royal Longbowman', 'gi'), 'img': 'wyborny.png'},
		{'pattern':  new RegExp('Royal Crossbowman', 'gi'), 'img': 'kusznik.png'},
		{'pattern':  new RegExp('Royal Elite Soldier', 'gi'), 'img': 'elitarny.png'},
		{'pattern':  new RegExp('Royal Cannoneer', 'gi'), 'img': 'puszkarz.png'},
		{'pattern':  new RegExp('Giant Bogor', 'gi'), 'img': 'wielkibogor.png'},
		{'pattern':  new RegExp('Giant Gogor', 'gi'), 'img': 'wielkigogor.png'},
		{'pattern':  new RegExp('Unicorn', 'gi'), 'img': 'jednorozec.png'},
		{'pattern':  new RegExp('Evil King', 'gi'), 'img': 'zlykrol.png'},
		{'pattern':  new RegExp('Giant Bear', 'gi'), 'img': 'wielkiniedzwiedz.png'},
		{'pattern':  new RegExp('Greedy Innkeeper', 'gi'), 'img': 'chciwykarczmarz.png'},
		{'pattern':  new RegExp('Iron Fist', 'gi'), 'img': 'zelaznoreki.png'},
		{'pattern':  new RegExp('Rival Dressmaker', 'gi'), 'img': 'krawieckonkurent.png'},
		{'pattern':  new RegExp('Lying Goat', 'gi'), 'img': 'klamliwakoza.png'},
		{'pattern':  new RegExp('Cudgel Claus', 'gi'), 'img': 'swietypalkolaj.png'},
		{'pattern':  new RegExp('Black Bull', 'gi'), 'img': 'czarnybyk.png'},
		{'pattern':  new RegExp('Dark Wizard', 'gi'), 'img': 'mrocznymag.png'},
		{'pattern':  new RegExp('Rascal', 'gi'), 'img': 'urwis.png'},
		{'pattern':  new RegExp('Ruffian', 'gi'), 'img': 'zboj.png'},
		{'pattern':  new RegExp('Prankster', 'gi'), 'img': 'dowcipnis.png'},
		{'pattern':  new RegExp('Vandal', 'gi'), 'img': 'wandal.png'},
		{'pattern':  new RegExp('Scoundrel', 'gi'), 'img': 'lotr2.png'},
		{'pattern':  new RegExp('Scallywag', 'gi'), 'img': 'lobuz.png'},
		{'pattern':  new RegExp('Bully', 'gi'), 'img': 'osilek.png'},
		{'pattern':  new RegExp('Cad', 'gi'), 'img': 'lajdak.png'},
		{'pattern':  new RegExp('Grouch', 'gi'), 'img': 'zrzeda2.png'},
		{'pattern':  new RegExp('Whiner', 'gi'), 'img': 'maruda.png'},
		{'pattern':  new RegExp('Denis The Delinquent', 'gi'), 'img': 'denis.png'},
		{'pattern':  new RegExp('Alex The Troublemaker', 'gi'), 'img': 'aleks.png'},
		{'pattern':  new RegExp('Bob The Miscreant', 'gi'), 'img': 'bob.png'},
                /* ENEMY - ELITE */
		{'pattern':  new RegExp('Sword Clasher', 'gi'), 'img': 'zwadzca.png'},
		{'pattern':  new RegExp('Sword Wielder', 'gi'), 'img': 'szermierz.png'},
		{'pattern':  new RegExp('Sword Master', 'gi'), 'img': 'mistrzmiecza.png'},
		{'pattern':  new RegExp('Horseman', 'gi'), 'img': 'jezdziec.png'},
		{'pattern':  new RegExp('Dune Marksman', 'gi'), 'img': 'wydmowystrzelec.png'},
		{'pattern':  new RegExp('Desert Marksman', 'gi'), 'img': 'pustynnystrzelec.png'},
		{'pattern':  new RegExp('Mounted Bowman', 'gi'), 'img': 'lucznikkonny2.png'},
		{'pattern':  new RegExp('Stone Cannon', 'gi'), 'img': 'kamiennedzialo.png'},
		{'pattern':  new RegExp('Shrewd Thief', 'gi'), 'img': 'sprytnyrozbojnik.png'},
		{'pattern':  new RegExp('Smart Thief', 'gi'), 'img': 'madryrozbojnik.png'},
		{'pattern':  new RegExp('Mysterious Thief', 'gi'), 'img': 'tajemniczyrozbojnik.png'},
		{'pattern':  new RegExp('Treacherous Thief', 'gi'), 'img': 'zdradzieckirozbojnik.png'},
		{'pattern':  new RegExp('Snooty Thief', 'gi'), 'img': 'nadetyrozbojnik.png'},
		{'pattern':  new RegExp('Grayed Thief', 'gi'), 'img': 'siwyrozbojnik.png'},
		{'pattern':  new RegExp('Sneaking Thief', 'gi'), 'img': 'podstepnyrozbojnik.png'},
		{'pattern':  new RegExp('Scarred Thief', 'gi'), 'img': 'pobliznionyrozbojnik.png'},
		{'pattern':  new RegExp('Greedy Thief', 'gi'), 'img': 'chciwyrozbojnik.png'},
		{'pattern':  new RegExp('Silly Thief', 'gi'), 'img': 'glupirozbojnik.png'},
		{'pattern':  new RegExp('Bandit Lord Bjorn', 'gi'), 'img': 'bjorn.png'},
		{'pattern':  new RegExp('Bandit Lord', 'gi'), 'img': 'wladcabandytow.png', searchPattern: new RegExp('[\\d|,] Bandit Lord', 'gi')},
		{'pattern':  new RegExp('Sailor', 'gi'), 'img': 'zeglarz.png', searchPattern: new RegExp('[\\d|,] Sailor', 'gi')},
		{'pattern':  new RegExp('Battle Hardened Sailor', 'gi'), 'img': 'doswiadczonyzeglarz.png'},
		{'pattern':  new RegExp('Mounted Sailor', 'gi'), 'img': 'zeglarzkonny.png'},
		{'pattern':  new RegExp('Boatswain', 'gi'), 'img': 'bosman.png'},
		{'pattern':  new RegExp('Petty Officer', 'gi'), 'img': 'podoficer.png'},
		{'pattern':  new RegExp('Cannon Master', 'gi'), 'img': 'kanonier.png'},
		{'pattern':  new RegExp('Steersman', 'gi'), 'img': 'sternik.png'},
		{'pattern':  new RegExp('Mutineer', 'gi'), 'img': 'buntownik.png'},
		{'pattern':  new RegExp('Captain', 'gi'), 'img': 'kapitan.png', searchPattern: new RegExp('[\\d|,] Captain', 'gi')},
		{'pattern':  new RegExp('Grumpy Parrot', 'gi'), 'img': 'papuga.png'},
		{'pattern':  new RegExp('Oasis Guardian', 'gi'), 'img': 'straznikoazy.png'},
		{'pattern':  new RegExp('Boulder Worm', 'gi'), 'img': 'kamiennyrobak.png'},
		{'pattern':  new RegExp('Giant Bat', 'gi'), 'img': 'olbrzyminietoperz.png'},
		{'pattern':  new RegExp('Hungry Blossom', 'gi'), 'img': 'wyglodnialykwiat.png'},
		{'pattern':  new RegExp('Fierce Blossom', 'gi'), 'img': 'dzikikwiat.png'},
		{'pattern':  new RegExp('Bulbous Blossom', 'gi'), 'img': 'bulwiastykwiat.png'},
		{'pattern':  new RegExp('Library Golem', 'gi'), 'img': 'bibliotecznygolem.png'},
		{'pattern':  new RegExp('Large Stone Statue', 'gi'), 'img': 'kamiennyposag.png'},
		{'pattern':  new RegExp('Mossy Stone Statue', 'gi'), 'img': 'omszalyposag.png'},
		{'pattern':  new RegExp('Stick Wielding Ape', 'gi'), 'img': 'malpazkijem.png'},
		{'pattern':  new RegExp('Stone Throwing Ape', 'gi'), 'img': 'malpazkamieniami.png'},
		{'pattern':  new RegExp('Alpha Ape', 'gi'), 'img': 'malpaalfa.png'},
		{'pattern':  new RegExp('Nervous Ape', 'gi'), 'img': 'nerwowamalpa.png'},
		{'pattern':  new RegExp('Giant Cannon', 'gi'), 'img': 'wielkaarmata.png'},
		{'pattern':  new RegExp('Informant', 'gi'), 'img': 'informator.png'},
		{'pattern':  new RegExp('Giant Sea Snake', 'gi'), 'img': 'wazmorski.png'},
		{'pattern':  new RegExp('Grumpy Guard', 'gi'), 'img': 'zrzedliwystraznik.png'},
		{'pattern':  new RegExp('Insane Guard', 'gi'), 'img': 'szalonystraznik.png'},
		{'pattern':  new RegExp('El Chupacabra', 'gi'), 'img': 'czupakabra.png'},
		{'pattern':  new RegExp('The Pied Piper Of Hamelin', 'gi'), 'img': 'flecista.png'},
		{'pattern':  new RegExp('The Mayor', 'gi'), 'img': 'wladyka.png'},
		{'pattern':  new RegExp('The King Of Rats', 'gi'), 'img': 'krolszczurow.png'},
		{'pattern':  new RegExp('Ilsebille The Evil Queen', 'gi'), 'img': 'zlakrolowa.png'},
		{'pattern':  new RegExp('Royal Huntsmen Leader', 'gi'), 'img': 'mysliwy.png'},
		{'pattern':  new RegExp('Ancient Dragon', 'gi'), 'img': 'smok.png'},
		{'pattern':  new RegExp('Preacher Of Flames', 'gi'), 'img': 'kaznodzieja.png'},
		{'pattern':  new RegExp('The Evil Stepmother', 'gi'), 'img': 'zlamacocha.png'},
		{'pattern':  new RegExp('Royal Captain', 'gi'), 'img': 'krolewskikapitan.png'},
		{'pattern':  new RegExp('Royal Juggernaut', 'gi'), 'img': 'kolos.png'},
		{'pattern':  new RegExp('Treasure', 'gi'), 'img': 'skarb.png'},
		{'pattern':  new RegExp('Deer', 'gi'), 'img': 'jelon.png'},
		{'pattern':  new RegExp('Frost Fox', 'gi'), 'img': 'lis2.png'},
		{'pattern':  new RegExp('Frost Eagle', 'gi'), 'img': 'orzel.png'},
		{'pattern':  new RegExp('Frost Wolf', 'gi'), 'img': 'wilk2.png'},
		{'pattern':  new RegExp('Frost Leopard', 'gi'), 'img': 'leopard.png'},
		{'pattern':  new RegExp('Frost Ibex', 'gi'), 'img': 'koziorozec.png'},
		{'pattern':  new RegExp('Frost Bear', 'gi'), 'img': 'niedzwiedz2.png'},
		{'pattern':  new RegExp('Frost Giant', 'gi'), 'img': 'gigant2.png'},
		{'pattern':  new RegExp('Ghastly Wolf', 'gi'), 'img': 'upiornywilk.png'},
		{'pattern':  new RegExp('Gargantuan Lynx', 'gi'), 'img': 'rys.png'},
		{'pattern':  new RegExp('Frost Matriarch Bear', 'gi'), 'img': 'matriarchalny.png'},
		{'pattern':  new RegExp('Steel Beard', 'gi'), 'img': 'stalowobrody.png'},
		{'pattern':  new RegExp('Winter Terror', 'gi'), 'img': 'postrach.png'},
		{'pattern':  new RegExp('Enormous Ibex', 'gi'), 'img': 'ogromnykoziorozec.png'},
		{'pattern':  new RegExp('Ravaging Ox', 'gi'), 'img': 'niszczacywol.png'},
		{'pattern':  new RegExp('Smilodon', 'gi'), 'img': 'szablozebny.png'},
		{'pattern':  new RegExp('Colossal Eagle', 'gi'), 'img': 'ogromnyorzel.png'},
		{'pattern':  new RegExp('Paragon Elk', 'gi'), 'img': 'los.png'},
		{'pattern':  new RegExp('Mammoth', 'gi'), 'img': 'mamut.png'},
		{'pattern':  new RegExp('Risi', 'gi'), 'img': 'risi.png'},
		{'pattern':  new RegExp('Giant', 'gi'), 'img': 'gigant.png', searchPattern: new RegExp('[\\d|,] Giant', 'gi')},
		
		
		{'pattern':  new RegExp('Cavalry', 'gi'), 'img': 'konny.png', searchPattern: new RegExp('[\\d|,] Cavalry', 'gi')},
                /* ENEMY - BONABERTI */
		{'pattern':  new RegExp('Blonde Bowman', 'gi'), 'img': 'blondlucznik.png'},
		{'pattern':  new RegExp('Defensive Miner', 'gi'), 'img': 'gornikobronny.png'},
		{'pattern':  new RegExp('Reckless Rider', 'gi'), 'img': 'lekkomyslnyjezdziec.png'},
		{'pattern':  new RegExp('Firm Defender', 'gi'), 'img': 'stanowczyobronca.png'},
		{'pattern':  new RegExp('Golden Guard', 'gi'), 'img': 'zlotystraznik.png'},
		{'pattern':  new RegExp('Slick Bandit Boss', 'gi'), 'img': 'zrecznyszef.png'},
	]
};

function prepare_summary(total_losses, alternative_losses) {
	"use strict";
	var alternative_text = [],
	    summ = [];
	for (var y = 0; y < initialData.soldiers.length; y++){
		if (total_losses[initialData.soldiers[y]] > 0){
			summ.push(total_losses[initialData.soldiers[y]] + initialData.soldiers[y]);
		}
	}
	if (alternative_losses.length > 0){
		var alternative_summ = [],
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
		};
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
						reExecResult = reExecResult.replace('>', '').replace('<', '').replace(',', '');
						tdHtml = tdHtml.replace(
							reExecResult,
							reExecResult.replace(imgConfig.pattern, '') + soldierImg
						);
					});
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
