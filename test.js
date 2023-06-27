const flavor_text_entries = [
  {
    flavor_text:
      "キバが２つ。とにかく　なんでも\nかじってみる。１ぴき　みつけたら\n４０ぴきは　そこに　すんでるはず。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "Bites anything\nwhen it attacks.\nSmall and very\fquick, it is a\ncommon sight in\nmany places.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "red",
      url: "https://pokeapi.co/api/v2/version/1/",
    },
  },
  {
    flavor_text:
      "Bites anything\nwhen it attacks.\nSmall and very\fquick, it is a\ncommon sight in\nmany places.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/version/2/",
    },
  },
  {
    flavor_text:
      "Will chew on any­\nthing with its\nfangs. If you see\fone, it is certain\nthat 40 more live\nin the area.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/version/3/",
    },
  },
  {
    flavor_text:
      "It eats anything.\nWherever food is\navailable, it will\fsettle down and\nproduce offspring\ncontinuously.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "gold",
      url: "https://pokeapi.co/api/v2/version/4/",
    },
  },
  {
    flavor_text:
      "Living wherever\nthere is food\navailable, it\fceaselessly scav­\nenges for edibles\nthe entire day.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "silver",
      url: "https://pokeapi.co/api/v2/version/5/",
    },
  },
  {
    flavor_text:
      "This POKéMON's\nimpressive vital­\nity allows it to\flive anywhere. It\nalso multiplies\nvery quickly.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "crystal",
      url: "https://pokeapi.co/api/v2/version/6/",
    },
  },
  {
    flavor_text:
      "RATTATA is cautious in the extreme.\nEven while it is asleep, it constantly\nlistens by moving its ears around.\fIt is not picky about where it lives -\nit will make its nest anywhere.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "ruby",
      url: "https://pokeapi.co/api/v2/version/7/",
    },
  },
  {
    flavor_text:
      "RATTATA is cautious in the extreme.\nEven while it is asleep, it constantly\nlistens by moving its ears around.\fIt is not picky about where it lives -\nit will make its nest anywhere.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "sapphire",
      url: "https://pokeapi.co/api/v2/version/8/",
    },
  },
  {
    flavor_text:
      "A RATTATA is cautious in the extreme.\nEven while it is asleep, it constantly\nmoves its ears and listens for danger.\nIt will make its nest anywhere.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "emerald",
      url: "https://pokeapi.co/api/v2/version/9/",
    },
  },
  {
    flavor_text:
      "Its fangs are long and very sharp.\nThey grow continuously, so it gnaws on\nhard things to whittle them down.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "firered",
      url: "https://pokeapi.co/api/v2/version/10/",
    },
  },
  {
    flavor_text:
      "Bites anything when it attacks. Small and\nvery quick, it is a common sight in many\nplaces.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "leafgreen",
      url: "https://pokeapi.co/api/v2/version/11/",
    },
  },
  {
    flavor_text:
      "Cautious in the extreme, its\nhardy vitality lets it live in\nany kind of environment.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "diamond",
      url: "https://pokeapi.co/api/v2/version/12/",
    },
  },
  {
    flavor_text:
      "Cautious in the extreme, its\nhardy vitality lets it live in\nany kind of environment.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "pearl",
      url: "https://pokeapi.co/api/v2/version/13/",
    },
  },
  {
    flavor_text:
      "Cautious in the extreme, its\nhardy vitality lets it live in\nany kind of environment.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "platinum",
      url: "https://pokeapi.co/api/v2/version/14/",
    },
  },
  {
    flavor_text:
      "It eats anything. Wherever food is\navailable, it will settle down and\nproduce offspring continuously.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "heartgold",
      url: "https://pokeapi.co/api/v2/version/15/",
    },
  },
  {
    flavor_text:
      "Living wherever there is food\navailable, it ceaselessly scavenges\nfor edibles the entire day.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "soulsilver",
      url: "https://pokeapi.co/api/v2/version/16/",
    },
  },
  {
    flavor_text:
      "D’une prudence extrême, sa nature\nrobuste lui permet de s’adapter à\ntous les terrains.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "black",
      url: "https://pokeapi.co/api/v2/version/17/",
    },
  },
  {
    flavor_text:
      "Cautious in the extreme, its\nhardy vitality lets it live in\nany kind of environment.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "black",
      url: "https://pokeapi.co/api/v2/version/17/",
    },
  },
  {
    flavor_text:
      "D’une prudence extrême, sa nature\nrobuste lui permet de s’adapter à\ntous les terrains.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "white",
      url: "https://pokeapi.co/api/v2/version/18/",
    },
  },
  {
    flavor_text:
      "Cautious in the extreme, its\nhardy vitality lets it live in\nany kind of environment.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "white",
      url: "https://pokeapi.co/api/v2/version/18/",
    },
  },
  {
    flavor_text:
      "It searches for food all day. It gnaws\non hard objects to wear down its fangs,\nwhich grow constantly during its lifetime.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "black-2",
      url: "https://pokeapi.co/api/v2/version/21/",
    },
  },
  {
    flavor_text:
      "It searches for food all day. It gnaws\non hard objects to wear down its fangs,\nwhich grow constantly during its lifetime.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "white-2",
      url: "https://pokeapi.co/api/v2/version/22/",
    },
  },
  {
    flavor_text:
      "たべるものが　あるところなら\nどこにだって　せいそくする。\n１にちじゅう　エサを　さがしている。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "x",
      url: "https://pokeapi.co/api/v2/version/23/",
    },
  },
  {
    flavor_text:
      "먹을 것이 있는 곳이라면\n어디서든 서식한다.\n온종일 먹이를 찾아다닌다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "x",
      url: "https://pokeapi.co/api/v2/version/23/",
    },
  },
  {
    flavor_text:
      "Vivant là où se trouve la nourriture, ce charognard\npasse ses journées à la rechercher.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "x",
      url: "https://pokeapi.co/api/v2/version/23/",
    },
  },
  {
    flavor_text:
      "Es baut sein Nest, wo es Futter findet. Es ist den\nganzen Tag auf der Suche nach etwas Essbarem.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "x",
      url: "https://pokeapi.co/api/v2/version/23/",
    },
  },
  {
    flavor_text:
      "Vive allí donde haya comida disponible. Busca todo\nel día, sin descanso, algo comestible.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "x",
      url: "https://pokeapi.co/api/v2/version/23/",
    },
  },
  {
    flavor_text:
      "Vive ovunque si trovi del cibo, cercando\nincessantemente qualsiasi cosa sia commestibile.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "x",
      url: "https://pokeapi.co/api/v2/version/23/",
    },
  },
  {
    flavor_text:
      "Living wherever there is food available,\nit ceaselessly scavenges for edibles\nthe entire day.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "x",
      url: "https://pokeapi.co/api/v2/version/23/",
    },
  },
  {
    flavor_text:
      "食べるものが　あるところなら\nどこにだって　生息する。\n１日中　エサを　探している。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "x",
      url: "https://pokeapi.co/api/v2/version/23/",
    },
  },
  {
    flavor_text:
      "キバは　ながくて　するどい。\nいっしょう　のびつづけるので\nかたい　モノを　かじって　けずる。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "y",
      url: "https://pokeapi.co/api/v2/version/24/",
    },
  },
  {
    flavor_text:
      "송곳니는 길고 날카롭다.\n평생 자라나기 때문에\n단단한 것을 갉아서 깎는다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "y",
      url: "https://pokeapi.co/api/v2/version/24/",
    },
  },
  {
    flavor_text:
      "Les dents de Rattata sont longues et tranchantes.\nComme elles poussent sans arrêt, il doit ronger tout\nce qu’il trouve pour pouvoir les tailler.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "y",
      url: "https://pokeapi.co/api/v2/version/24/",
    },
  },
  {
    flavor_text:
      "Seine Reißzähne sind lang und scharf. Da sie\nständig wachsen, nagt es immerzu an etwas,\num sie abzuwetzen.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "y",
      url: "https://pokeapi.co/api/v2/version/24/",
    },
  },
  {
    flavor_text:
      "Tiene unos largos y afilados colmillos que no dejan de\ncrecer. Le resultan muy útiles para destruir cosas.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "y",
      url: "https://pokeapi.co/api/v2/version/24/",
    },
  },
  {
    flavor_text:
      "I denti affilati gli continuano a crescere, costringendolo\na limarseli mordicchiando oggetti molto duri.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "y",
      url: "https://pokeapi.co/api/v2/version/24/",
    },
  },
  {
    flavor_text:
      "Its fangs are long and very sharp. They grow\ncontinuously, so it gnaws on hard things to whittle\nthem down.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "y",
      url: "https://pokeapi.co/api/v2/version/24/",
    },
  },
  {
    flavor_text:
      "キバは　長くて　鋭い。\n一生　伸び続けるので\n硬い　ものを　かじって　削る。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "y",
      url: "https://pokeapi.co/api/v2/version/24/",
    },
  },
  {
    flavor_text:
      "けいかいしんが　とても　つよく　ねている　ときも\nみみを　うごかし　まわりの　おとを　きいている。\nどこにでも　すみつき　す　を　つくる。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "omega-ruby",
      url: "https://pokeapi.co/api/v2/version/25/",
    },
  },
  {
    flavor_text:
      "경계심이 매우 강해서 자고 있을 때도\n귀를 움직여 주변의 소리를 듣고 있다.\n어디에든 자리를 잡고 둥지를 만든다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "omega-ruby",
      url: "https://pokeapi.co/api/v2/version/25/",
    },
  },
  {
    flavor_text:
      "Rattata est extrêmement prudent. Même lorsqu’il est endormi,\nil fait pivoter ses oreilles pour écouter autour de lui.\nEn ce qui concerne son habitat, il n’est vraiment pas difficile.\nIl peut faire son nid n’importe où.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "omega-ruby",
      url: "https://pokeapi.co/api/v2/version/25/",
    },
  },
  {
    flavor_text:
      "Rattfratz ist extrem vorsichtig. Sogar im Schlaf nimmt es\nalles wahr, indem es seine Ohren bewegt. Es stellt keine\ngroßen Ansprüche an seinen Lebensraum und richtet sein\nNest überall ein.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "omega-ruby",
      url: "https://pokeapi.co/api/v2/version/25/",
    },
  },
  {
    flavor_text:
      "Rattata es cauto como él solo. Hasta cuando duerme mueve\nlas orejas para oír todos los ruidos. No es nada delicado a\nla hora de elegir su hábitat. Cualquier sitio es bueno para\ncavar su madriguera.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "omega-ruby",
      url: "https://pokeapi.co/api/v2/version/25/",
    },
  },
  {
    flavor_text:
      "Rattata è estremamente cauto. Anche quando dorme tiene\nsempre le orecchie tese, muovendole come sonde. Non ha\nparticolari esigenze di habitat: costruisce la propria tana\novunque.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "omega-ruby",
      url: "https://pokeapi.co/api/v2/version/25/",
    },
  },
  {
    flavor_text:
      "Rattata is cautious in the extreme. Even while it is asleep,\nit constantly listens by moving its ears around. It is not picky\nabout where it lives—it will make its nest anywhere.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "omega-ruby",
      url: "https://pokeapi.co/api/v2/version/25/",
    },
  },
  {
    flavor_text:
      "警戒心が　とても　強く　寝ている　ときも\n耳を　動かし　周りの　音を　聞いている。\nどこにでも　すみつき　巣　を　つくる。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "omega-ruby",
      url: "https://pokeapi.co/api/v2/version/25/",
    },
  },
  {
    flavor_text:
      "けいかいしんが　とても　つよく　ねている　ときも\nみみを　うごかし　まわりの　おとを　きいている。\nどこにでも　すみつき　す　を　つくる。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "alpha-sapphire",
      url: "https://pokeapi.co/api/v2/version/26/",
    },
  },
  {
    flavor_text:
      "경계심이 매우 강해서 자고 있을 때도\n귀를 움직여 주변의 소리를 듣고 있다.\n어디에든 자리를 잡고 둥지를 만든다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "alpha-sapphire",
      url: "https://pokeapi.co/api/v2/version/26/",
    },
  },
  {
    flavor_text:
      "Rattata est extrêmement prudent. Même lorsqu’il est endormi,\nil fait pivoter ses oreilles pour écouter autour de lui.\nEn ce qui concerne son habitat, il n’est vraiment pas difficile.\nIl peut faire son nid n’importe où.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "alpha-sapphire",
      url: "https://pokeapi.co/api/v2/version/26/",
    },
  },
  {
    flavor_text:
      "Rattfratz ist extrem vorsichtig. Sogar im Schlaf nimmt es\nalles wahr, indem es seine Ohren bewegt. Es stellt keine\ngroßen Ansprüche an seinen Lebensraum und richtet sein\nNest überall ein.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "alpha-sapphire",
      url: "https://pokeapi.co/api/v2/version/26/",
    },
  },
  {
    flavor_text:
      "2개의 이빨로 뭐든지 일단\n갉고 본다. 1마리를 발견했다면\n그곳에 40마리는 살고 있을 것이다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "Rattata es cauto como él solo. Hasta cuando duerme mueve\nlas orejas para oír todos los ruidos. No es nada delicado a\nla hora de elegir su hábitat. Cualquier sitio es bueno para\ncavar su madriguera.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "alpha-sapphire",
      url: "https://pokeapi.co/api/v2/version/26/",
    },
  },
  {
    flavor_text:
      "Rattata è estremamente cauto. Anche quando dorme tiene\nsempre le orecchie tese, muovendole come sonde. Non ha\nparticolari esigenze di habitat: costruisce la propria tana\novunque.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "alpha-sapphire",
      url: "https://pokeapi.co/api/v2/version/26/",
    },
  },
  {
    flavor_text:
      "Rattata is cautious in the extreme. Even while it is asleep,\nit constantly listens by moving its ears around. It is not\npicky about where it lives—it will make its nest anywhere.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "alpha-sapphire",
      url: "https://pokeapi.co/api/v2/version/26/",
    },
  },
  {
    flavor_text:
      "警戒心が　とても　強く　寝ている　ときも\n耳を　動かし　周りの　音を　聞いている。\nどこにでも　すみつき　巣　を　つくる。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "alpha-sapphire",
      url: "https://pokeapi.co/api/v2/version/26/",
    },
  },
  {
    flavor_text:
      "まえばは　しぬまで　のびつづけるので\nメンテナンスが　ひつよう。　ヤスリを\nよういしないと　はしらを　かじられる。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "앞니는 죽을 때까지 계속 자라기 때문에\n관리가 필요하다. 이갈이 용품을\n준비하지 않으면 기둥을 갉는다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "門牙會終生生長，所以要隨時保養。\n不幫牠準備好銼刀的話，\n牠就會去咬柱子來磨牙。",
    language: {
      name: "zh-Hant",
      url: "https://pokeapi.co/api/v2/language/4/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "Il doit toujours prendre soin de ses incisives\ncar elles poussent sans arrêt. S’il n’a rien pour\nles limer, il se rabattra sur un pilier.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "Seine Nagezähne benötigen ständige Pflege, da\nsie sein ganzes Leben lang wachsen. Steht kein\nNagestein zur Verfügung, knabbert es an Holz.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "Debe cuidar regularmente sus incisivos, pues\nestos siguen creciendo hasta que muere. Si no\ntiene nada con qué afilarlos, suele roer pilares.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "I suoi incisivi non smettono mai di crescere e\nrichiedono continue cure. Se non gli viene data\nuna lima per regolarli, rosicchia i tavoli o altro.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "Its incisors continue growing until its death.\nIf its Trainer doesn’t offer it a file to gnaw on, it\nwill gnaw on door frames, table legs, and so on.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "前歯は　死ぬまで　伸び続けるので\nメンテナンスが　必要。　ヤスリを\n用意しないと　柱を　かじられる。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "门牙会终生生长，所以必须要保养。\n不准备好锉刀的话，会把柱子都啃掉。",
    language: {
      name: "zh-Hans",
      url: "https://pokeapi.co/api/v2/language/12/",
    },
    version: {
      name: "sun",
      url: "https://pokeapi.co/api/v2/version/27/",
    },
  },
  {
    flavor_text:
      "せいめいりょくが　つよく　きたない\nばしょでも　へいきで　くらす。\nほっておくと　どんどん　ふえていく。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "생명력이 강해서 더러운\n곳에서도 사는데 문제없다.\n내버려두면 점점 수가 불어난다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "生命力很強，\n即使在骯髒的地方也能安然生活。\n放任不管的話會不停繁殖。",
    language: {
      name: "zh-Hant",
      url: "https://pokeapi.co/api/v2/language/4/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "Un Pokémon très résistant, capable de survivre\nmême dans des milieux très insalubres.\nIl prolifère si l’on n’y prend pas garde.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "Sie strotzen vor Lebenskraft und können selbst\nan schmutzigen Orten problemlos überleben.\nBleiben sie ungestört, vermehren sie sich rasch.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "Su gran resistencia le permite vivir en los\nlugares más insalubres. Su población puede\ncrecer rápidamente.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "La sua straordinaria resistenza gli permette di\nadattarsi anche ad habitat insalubri. Se lasciato\nindisturbato, si riproduce in gran numero.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "With their strong capacity for survival, they can\nlive in dirty places without concern. Left\nunchecked, their numbers multiply rapidly.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "生命力が　強く　汚い\n場所でも　平気で　暮らす。\nほっておくと　どんどん　増えていく。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "生命力很强，\n即使在肮脏的地方也能坦然生活。\n放任不管的话会不停繁殖。",
    language: {
      name: "zh-Hans",
      url: "https://pokeapi.co/api/v2/language/12/",
    },
    version: {
      name: "moon",
      url: "https://pokeapi.co/api/v2/version/28/",
    },
  },
  {
    flavor_text:
      "いっしょう　まえばが　のびつづける。\nあまりに　のびすぎると　エサが\nたべられなくなって　がし　する。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text:
      "평생 앞니가 계속 자란다.\n너무 많이 자라면 먹이를\n먹을 수 없어 굶어 죽는다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text: "門牙會終生生長，\n如果長得太長，\n就會因為無法進食而餓死。",
    language: {
      name: "zh-Hant",
      url: "https://pokeapi.co/api/v2/language/4/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text:
      "Ses incisives poussent tout au long de sa vie.\nSi elles dépassent une certaine longueur,\nil ne peut plus s’alimenter et meurt de faim.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text:
      "Seine Nagezähne wachsen sein ganzes Leben\nüber. Werden sie allzu lang, kann es damit nicht\nmehr fressen und verhungert.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text:
      "Sus incisivos crecen durante toda su vida. Si\naumentan demasiado de tamaño, no puede\nalimentarse y muere de inanición.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text:
      "I suoi incisivi continuano a crescere per tutta\nla vita. Se si allungano troppo, non riesce più\na nutrirsi e muore di fame.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text:
      "Its incisors grow continuously throughout its life.\nIf its incisors get too long, this Pokémon\nbecomes unable to eat, and it starves to death.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text:
      "一生　前歯が　伸び続ける。\nあまりに　伸びすぎると　エサが\n食べられなくなって　餓死　する。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text: "门牙会终生生长。\n但要是长得太长，\n就会因无法进食而饿死。",
    language: {
      name: "zh-Hans",
      url: "https://pokeapi.co/api/v2/language/12/",
    },
    version: {
      name: "ultra-sun",
      url: "https://pokeapi.co/api/v2/version/29/",
    },
  },
  {
    flavor_text:
      "ありふれた　ポケモンだが　ちゅうい。\nするどい　まえばは　かたい\nざいもくさえ　かんたんに　へしおる。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "흔한 포켓몬이지만 주의해야 한다.\n날카로운 앞니는 단단한 나무도\n간단하게 부러뜨린다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "雖然是常見的寶可夢，但還是要小心。\n銳利的門牙十分堅硬，\n就連木材也能輕易咬斷。",
    language: {
      name: "zh-Hant",
      url: "https://pokeapi.co/api/v2/language/4/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "Prenez garde à ce Pokémon très répandu :\nses puissantes incisives sont si acérées\nqu’elles peuvent couper des troncs d’arbre.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "Ein weitverbreitetes Pokémon, das nicht ganz\nungefährlich ist. Selbst hartes Holz zerkleinert\nes mit seinen scharfen Nagezähnen mühelos.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "Un Pokémon muy extendido con el que conviene\ntener cuidado ya que sus afilados incisivos son\ncapaces de roer maderas nobles sin problema.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "È un Pokémon molto comune con il quale è\nmeglio fare attenzione: con i suoi incisivi affilati\npuò tranciare anche un’asse di legno durissimo.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "This Pokémon is common but hazardous. Its\nsharp incisors can easily cut right through\nhard wood.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "ありふれた　ポケモンだが　注意。\n鋭い　前歯は　堅い\n材木さえ　簡単に　へしおる。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "虽是常见的宝可梦，但也不能掉以轻心。\n锋利的门牙甚至连坚硬的\n木材都能轻易咬断。",
    language: {
      name: "zh-Hans",
      url: "https://pokeapi.co/api/v2/language/12/",
    },
    version: {
      name: "ultra-moon",
      url: "https://pokeapi.co/api/v2/version/30/",
    },
  },
  {
    flavor_text:
      "長著２顆大牙，碰到什麼都會\n先咬上一口。只要看見１隻出沒，\n附近肯定還住著40隻以上。",
    language: {
      name: "zh-Hant",
      url: "https://pokeapi.co/api/v2/language/4/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "Il peut ronger n’importe quoi avec ses\ndeux dents. Quand on en voit un, il y en\na certainement 40 dans le coin.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "Es knabbert mit seinen zwei Nagezähnen alles\nund jeden an. Stößt man auf eines, findet man\nsicherlich 40 weitere in der Gegend.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "Es propenso a hincar los incisivos en cualquier\ncosa que se le ponga por delante. Si se ve\nalguno, seguramente haya cuarenta cerca.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "Con i suoi incisivi rode qualsiasi cosa.\nSe se ne avvista uno, è probabile che\nin zona vivano almeno 40 esemplari.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "Will chew on anything with its fangs. If you\nsee one, you can be certain that 40 more\nlive in the area.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "キバが２つ。とにかく　なんでも\nかじってみる。１匹　見つけたら\n４０匹は　そこに　住んでるはず。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "有两颗大门牙，见什么咬什么。\n只要看到１只小拉达出没，\n附近肯定还住着40只以上。",
    language: {
      name: "zh-Hans",
      url: "https://pokeapi.co/api/v2/language/12/",
    },
    version: {
      name: "lets-go-pikachu",
      url: "https://pokeapi.co/api/v2/version/31/",
    },
  },
  {
    flavor_text:
      "キバが２つ。とにかく　なんでも\nかじってみる。１ぴき　みつけたら\n４０ぴきは　そこに　すんでるはず。",
    language: {
      name: "ja-Hrkt",
      url: "https://pokeapi.co/api/v2/language/1/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
  {
    flavor_text:
      "2개의 이빨로 뭐든지 일단\n갉고 본다. 1마리를 발견했다면\n그곳에 40마리는 살고 있을 것이다.",
    language: {
      name: "ko",
      url: "https://pokeapi.co/api/v2/language/3/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
  {
    flavor_text:
      "長著２顆大牙，碰到什麼都會\n先咬上一口。只要看見１隻出沒，\n附近肯定還住著40隻以上。",
    language: {
      name: "zh-Hant",
      url: "https://pokeapi.co/api/v2/language/4/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
  {
    flavor_text:
      "Il peut ronger n’importe quoi avec ses\ndeux dents. Quand on en voit un, il y en\na certainement 40 dans le coin.",
    language: {
      name: "fr",
      url: "https://pokeapi.co/api/v2/language/5/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
  {
    flavor_text:
      "Es knabbert mit seinen zwei Nagezähnen alles\nund jeden an. Stößt man auf eines, findet man\nsicherlich 40 weitere in der Gegend.",
    language: {
      name: "de",
      url: "https://pokeapi.co/api/v2/language/6/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
  {
    flavor_text:
      "Es propenso a hincar los incisivos en cualquier\ncosa que se le ponga por delante. Si se ve\nalguno, seguramente haya cuarenta cerca.",
    language: {
      name: "es",
      url: "https://pokeapi.co/api/v2/language/7/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
  {
    flavor_text:
      "Con i suoi incisivi rode qualsiasi cosa.\nSe se ne avvista uno, è probabile che\nin zona vivano almeno 40 esemplari.",
    language: {
      name: "it",
      url: "https://pokeapi.co/api/v2/language/8/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
  {
    flavor_text:
      "Will chew on anything with its fangs. If you\nsee one, you can be certain that 40 more\nlive in the area.",
    language: {
      name: "en",
      url: "https://pokeapi.co/api/v2/language/9/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
  {
    flavor_text:
      "キバが２つ。とにかく　なんでも\nかじってみる。１匹　見つけたら\n４０匹は　そこに　住んでるはず。",
    language: {
      name: "ja",
      url: "https://pokeapi.co/api/v2/language/11/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
  {
    flavor_text:
      "有两颗大门牙，见什么咬什么。\n只要看到１只小拉达出没，\n附近肯定还住着40只以上。",
    language: {
      name: "zh-Hans",
      url: "https://pokeapi.co/api/v2/language/12/",
    },
    version: {
      name: "lets-go-eevee",
      url: "https://pokeapi.co/api/v2/version/32/",
    },
  },
];

console.log(
  flavor_text_entries.find(({ language, version }) => language.name === "es")
);
