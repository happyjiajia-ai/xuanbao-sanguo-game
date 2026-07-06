const levels = [
  {
    id: "level-28",
    no: 28,
    title: "刘备暂居小沛",
    theme: "寄人篱下时保持目标",
    people: "刘备、吕布",
    accent: "#507b5d",
    scene: "hut",
    warmup: "如果你暂时住在别人家，或者借用别人的东西，怎样做会让别人放心？",
    story: "吕布夺了徐州后，刘备没有马上硬拼。他带着人暂时住到小沛，一边保护身边的人，一边等待新的机会。这个时候，刘备心里不舒服，但他还要先稳住局面。",
    choiceQuestion: "刘备这时最需要先做好哪件事？",
    choices: [
      { label: "稳住身边的人", detail: "让大家先不要慌，知道接下来怎么过" },
      { label: "马上打回徐州", detail: "看起来勇敢，但可能让大家更危险" },
      { label: "记住自己的目标", detail: "现在退一步，不代表以后不努力" }
    ],
    judgementQuestion: "刘备暂时忍一忍，这个办法好在哪里？风险在哪里？",
    speechPrompt: "说一说：你觉得刘备这时最难受的地方是什么？他为什么还要先忍住？",
    lifePrompt: "生活里有没有一次你很想马上赢回来，但更好的办法是先停一下、想一想？",
    rewritePrompt: "如果你是刘备，住在小沛时会做哪三件小事，让大家重新有信心？",
    feedback: "你今天练的是：遇到不顺时先稳住，再找机会。",
    badges: ["坚持", "情绪管理", "判断"]
  },
  {
    id: "level-29",
    no: 29,
    title: "辕门射戟",
    theme: "用聪明办法化解冲突",
    people: "吕布、刘备、纪灵",
    accent: "#2d7f8d",
    scene: "road",
    warmup: "两个朋友快吵起来了，你能不能不用骂人、不用打架，让他们先停下来？",
    story: "纪灵带兵来打刘备，吕布不想让两边真的打起来。他把戟插在远处，说如果自己一箭射中小枝，两边就停战。大家答应了，吕布果然射中，暂时化解了冲突。",
    choiceQuestion: "吕布射戟这个办法，最有用的地方是什么？",
    choices: [
      { label: "让大家先停下来", detail: "冲突暂停，才有机会重新想办法" },
      { label: "显示自己很厉害", detail: "这有用，但不是最重要的目标" },
      { label: "给双方一个台阶", detail: "两边不用马上认输，也能收手" }
    ],
    judgementQuestion: "这个办法聪明吗？如果吕布没有射中，会发生什么？",
    speechPrompt: "说一说：吕布这次是只想逞强，还是也真的解决了问题？为什么？",
    lifePrompt: "如果两个同学争一个玩具，你能设计一个让两边都先停下来的办法吗？",
    rewritePrompt: "如果不靠射箭，吕布还可以用什么办法让双方停战？",
    feedback: "你今天练的是：不硬碰硬，也可以解决冲突。",
    badges: ["智慧", "判断", "表达"]
  },
  {
    id: "level-30",
    no: 30,
    title: "吕布再逼刘备",
    theme: "看清别人反复变化",
    people: "刘备、吕布",
    accent: "#b43d36",
    scene: "city",
    warmup: "如果一个朋友一会儿帮你，一会儿又欺负你，你会怎么保护自己？",
    story: "吕布有时帮刘备，有时又逼刘备。刘备发现，不能只看吕布说了什么，还要看他一次次做了什么。面对反复变化的人，刘备必须更小心地选择下一步。",
    choiceQuestion: "刘备面对吕布，最应该提醒自己什么？",
    choices: [
      { label: "不能只听好话", detail: "好话不等于可靠，要看行动" },
      { label: "每次都相信他", detail: "这样可能一次次让自己陷入危险" },
      { label: "先保护自己人", detail: "情况不稳时，安全和退路很重要" }
    ],
    judgementQuestion: "吕布这种反复变化，会给身边的人带来什么麻烦？",
    speechPrompt: "说一说：你觉得刘备还要不要继续相信吕布？可以相信多少？",
    lifePrompt: "生活里有没有人答应过你一件事，后来又变了？你当时怎么办？",
    rewritePrompt: "如果你帮刘备设计一个和吕布相处的规则，会写哪三条？",
    feedback: "你今天练的是：看人不能只看一句话，要看连续的行动。",
    badges: ["判断", "反思", "责任"]
  },
  {
    id: "level-31",
    no: 31,
    title: "刘备投曹操",
    theme: "困难时寻找暂时的帮助",
    people: "刘备、曹操",
    accent: "#4f73a6",
    scene: "palace",
    warmup: "遇到自己解决不了的困难时，找别人帮忙丢人吗？",
    story: "刘备被吕布逼得很难受，只好去投靠曹操。曹操很厉害，也很危险。刘备知道这不是最舒服的选择，但眼前要先让大家有地方站稳。",
    choiceQuestion: "刘备投曹操，最像是哪一种选择？",
    choices: [
      { label: "先找一个落脚点", detail: "把眼前最危险的局面稳下来" },
      { label: "完全放弃目标", detail: "投靠别人不一定代表放弃自己" },
      { label: "边观察边学习", detail: "和厉害的人相处，也要保持清醒" }
    ],
    judgementQuestion: "找曹操帮忙有什么好处？又有什么风险？",
    speechPrompt: "说一说：如果你是刘备，你会不会去找曹操？为什么？",
    lifePrompt: "你有没有一次遇到难题，先请老师、家长或同学帮忙？后来你学到了什么？",
    rewritePrompt: "如果刘备不去找曹操，他还可以去哪儿？这个新办法有什么问题？",
    feedback: "你今天练的是：求助不是认输，求助后还要保持判断。",
    badges: ["解决问题", "判断", "坚持"]
  },
  {
    id: "level-32",
    no: 32,
    title: "曹操识刘备",
    theme: "厉害的人会看见潜力",
    people: "曹操、刘备",
    accent: "#6c5f92",
    scene: "tent",
    warmup: "如果别人看出你其实很有本事，你会开心、紧张，还是两种都有？",
    story: "曹操接纳刘备，但他不是随便帮忙。曹操看出刘备不是普通人，心里既欣赏，又有防备。刘备也知道，自己不能把所有想法都摆出来。",
    choiceQuestion: "曹操为什么会特别注意刘备？",
    choices: [
      { label: "刘备有人愿意跟随", detail: "能让别人信任，本身就是能力" },
      { label: "刘备看起来很弱", detail: "表面弱，不代表没有潜力" },
      { label: "刘备心里有目标", detail: "有目标的人，不会只看眼前" }
    ],
    judgementQuestion: "曹操欣赏刘备，同时又防备他，这矛盾吗？",
    speechPrompt: "说一说：一个人真正厉害的地方，别人是怎么看出来的？",
    lifePrompt: "你有没有被老师或教练看出一个优点？你当时有什么感觉？",
    rewritePrompt: "如果刘备想让曹操放心一点，但又不丢掉目标，他可以怎么说？",
    feedback: "你今天练的是：别人怎么看你，常常来自你一直做的事。",
    badges: ["表达", "判断", "责任"]
  },
  {
    id: "level-33",
    no: 33,
    title: "煮酒论英雄",
    theme: "被看穿时保持冷静",
    people: "曹操、刘备",
    accent: "#d56b38",
    scene: "fire",
    warmup: "如果别人突然说中了你心里的秘密，你会怎么让自己不慌？",
    story: "曹操和刘备一边煮酒，一边谈谁是天下英雄。曹操突然说：天下英雄，只有你和我。刘备心里一惊，但他没有乱说，而是借雷声掩饰过去。",
    choiceQuestion: "刘备这时最重要的能力是什么？",
    choices: [
      { label: "冷静", detail: "先稳住表情和话，不让自己露出破绽" },
      { label: "马上反驳", detail: "太急着反驳，可能更容易被看穿" },
      { label: "随机应变", detail: "借雷声把紧张变成一个解释" }
    ],
    judgementQuestion: "刘备用雷声掩饰紧张，这个办法好不好？有没有不诚实的问题？",
    speechPrompt: "说一说：你觉得刘备是真的胆小，还是很会保护自己？为什么？",
    lifePrompt: "你有没有一次紧张但还要继续完成任务？你用了什么办法？",
    rewritePrompt: "如果没有雷声，刘备还可以怎么回答曹操？",
    feedback: "你今天练的是：紧张不丢人，关键是下一步怎么稳住。",
    badges: ["情绪管理", "智慧", "表达"]
  },
  {
    id: "level-34",
    no: 34,
    title: "刘备借机离开",
    theme: "机会来了要会行动",
    people: "刘备、曹操",
    accent: "#bd8f2f",
    scene: "road",
    warmup: "如果你知道一个地方不适合久待，什么时候离开比较合适？",
    story: "刘备知道曹操已经注意到自己，留得越久越危险。后来他找到机会，带兵离开曹操身边。离开不是逃避，而是为了保住未来的可能。",
    choiceQuestion: "刘备为什么要找机会离开？",
    choices: [
      { label: "保护自己的目标", detail: "再留下去，可能被曹操控制" },
      { label: "不想遵守规则", detail: "离开不一定是不守规则，要看原因" },
      { label: "带着责任离开", detail: "不能只顾自己，还要考虑跟随的人" }
    ],
    judgementQuestion: "刘备离开曹操，是勇敢、谨慎，还是两者都有？",
    speechPrompt: "说一说：什么时候坚持留下是好事，什么时候离开才是好办法？",
    lifePrompt: "你有没有一次发现一个办法不合适，于是换了一个办法？",
    rewritePrompt: "如果刘备要给身边的人解释为什么离开，他可以怎么说？",
    feedback: "你今天练的是：好选择不一定最轻松，但要服务长期目标。",
    badges: ["判断", "责任", "坚持"]
  },
  {
    id: "level-35",
    no: 35,
    title: "关羽暂投曹操",
    theme: "困难中的边界",
    people: "关羽、曹操、刘备",
    accent: "#b43d36",
    scene: "palace",
    warmup: "如果你暂时接受别人帮助，怎样说清楚自己的底线？",
    story: "刘备失散后，关羽为了保护刘备的家眷，暂时投到曹操那里。他不是忘了刘备，而是在困难中先保护该保护的人，同时等刘备的消息。",
    choiceQuestion: "关羽暂时投曹操，最重要的原因是什么？",
    choices: [
      { label: "保护刘备家眷", detail: "先照顾弱小和需要保护的人" },
      { label: "喜欢曹操的礼物", detail: "礼物可能打动人，但不是他的核心选择" },
      { label: "等待刘备消息", detail: "暂时留下，是为了之后能重新汇合" }
    ],
    judgementQuestion: "暂时接受曹操帮助，会不会影响关羽的忠诚？为什么？",
    speechPrompt: "说一说：关羽这次选择里，最难平衡的是什么？",
    lifePrompt: "如果你答应了朋友一件事，但中间遇到困难，你会怎么守住承诺？",
    rewritePrompt: "你会帮关羽写哪一句话，说明自己的底线？",
    feedback: "你今天练的是：接受帮助时，也可以说清楚边界。",
    badges: ["责任", "坚持", "表达"]
  },
  {
    id: "level-36",
    no: 36,
    title: "关羽立约三事",
    theme: "把规则提前说清楚",
    people: "关羽、曹操",
    accent: "#7b695c",
    scene: "tent",
    warmup: "开始合作前，把规则说清楚，会不会让关系更轻松？",
    story: "关羽答应暂时留在曹操那里，但他提出三件事：保护刘备家眷，只降汉不降曹，一旦知道刘备在哪里就离开。曹操答应了这些条件。",
    choiceQuestion: "关羽为什么要先立约？",
    choices: [
      { label: "避免以后说不清", detail: "提前讲清楚，减少误会" },
      { label: "故意为难曹操", detail: "立约不是为难，而是说清底线" },
      { label: "保护重要承诺", detail: "他知道自己最不能丢的是什么" }
    ],
    judgementQuestion: "曹操答应这些条件，说明他看重关羽什么？",
    speechPrompt: "说一说：如果你和同学一起做小组任务，开始前要说清哪三件事？",
    lifePrompt: "你有没有一次因为没说清规则，后来发生误会？",
    rewritePrompt: "给关羽的三条约定换成小学生版，你会怎么写？",
    feedback: "你今天练的是：规则说在前面，合作更稳。",
    badges: ["表达", "责任", "判断"]
  },
  {
    id: "level-37",
    no: 37,
    title: "斩颜良",
    theme: "能力强也要知道为何出手",
    people: "关羽、颜良、曹操",
    accent: "#c94d3f",
    scene: "road",
    warmup: "如果你很擅长一件事，什么时候应该出手帮忙？",
    story: "颜良很勇猛，曹操这边很头疼。关羽出战，很快斩了颜良，帮曹操解决了大麻烦。但关羽心里清楚，自己出力不代表忘记原来的承诺。",
    choiceQuestion: "关羽这次出战，除了勇敢，还体现了什么？",
    choices: [
      { label: "有能力解决难题", detail: "关键时刻能承担任务" },
      { label: "想一直留在曹操身边", detail: "出力不代表改变自己的目标" },
      { label: "用行动回报照顾", detail: "接受帮助后，也可以认真做该做的事" }
    ],
    judgementQuestion: "关羽帮曹操立功，会不会让他更难离开？",
    speechPrompt: "说一说：一个人很厉害时，怎样不被夸奖和礼物带偏？",
    lifePrompt: "你有没有一次因为做得好，被别人夸了？你怎么保持自己原来的目标？",
    rewritePrompt: "如果曹操用很多奖励留关羽，关羽可以怎么回答？",
    feedback: "你今天练的是：能力越强，越要记得自己的目标。",
    badges: ["勇气", "责任", "判断"]
  },
  {
    id: "level-38",
    no: 38,
    title: "诛文丑",
    theme: "连续成功后不骄傲",
    people: "关羽、文丑、曹操",
    accent: "#d56b38",
    scene: "fire",
    warmup: "如果你连续两次做得很好，怎样让自己不飘起来？",
    story: "关羽又打败了文丑，名声更大了。曹操更加欣赏他，送给他更多礼遇。对关羽来说，连续成功既是荣耀，也是一种考验。",
    choiceQuestion: "连续立功后，关羽最需要小心什么？",
    choices: [
      { label: "被夸得忘了目标", detail: "夸奖很好，但不能让人迷路" },
      { label: "看不起别人", detail: "一骄傲，就容易犯错" },
      { label: "更清楚自己要走", detail: "成功之后也要记得原来的承诺" }
    ],
    judgementQuestion: "曹操对关羽越好，关羽为什么反而更难选择？",
    speechPrompt: "说一说：你觉得成功多了以后，最容易出现什么问题？",
    lifePrompt: "你有没有一次赢了游戏或比赛后有点得意？后来发生了什么？",
    rewritePrompt: "帮关羽设计一句提醒自己的话，贴在心里。",
    feedback: "你今天练的是：成功以后也要会复盘。",
    badges: ["反思", "情绪管理", "坚持"]
  },
  {
    id: "level-39",
    no: 39,
    title: "关羽得知刘备下落",
    theme: "知道消息后果断行动",
    people: "关羽、刘备、曹操",
    accent: "#2f8970",
    scene: "river",
    warmup: "如果你一直等一个重要消息，终于等到了，下一步要先做什么？",
    story: "关羽终于知道刘备还活着，也知道了刘备的大概去处。按照之前的约定，他准备离开曹操，去找刘备。消息来了，考验也来了：说到做到并不总是容易。",
    choiceQuestion: "关羽知道刘备下落后，最应该怎么做？",
    choices: [
      { label: "按约定离开", detail: "之前说清楚的事，现在要做到" },
      { label: "再多拿些奖励", detail: "拖延可能让自己偏离承诺" },
      { label: "把家眷照顾好再走", detail: "行动要果断，也要负责" }
    ],
    judgementQuestion: "关羽离开前要不要向曹操说明？为什么？",
    speechPrompt: "说一说：你觉得说到做到最难的地方是什么？",
    lifePrompt: "你有没有一次答应了事情，后来真的坚持做到了？",
    rewritePrompt: "如果你是关羽，离开前会给曹操留一封怎样的信？",
    feedback: "你今天练的是：承诺不是说完就结束，要在关键时刻做到。",
    badges: ["责任", "坚持", "表达"]
  },
  {
    id: "level-40",
    no: 40,
    title: "过五关斩六将",
    theme: "目标清楚，也要想代价",
    people: "关羽、刘备家眷、守关将领",
    accent: "#bd8f2f",
    scene: "road",
    warmup: "如果你非常想完成一件事，但路上一直有人拦你，你会怎么做？",
    story: "关羽护送刘备家眷去找刘备，一路遇到阻拦。他心里目标很清楚，所以继续往前。但每一次冲突都会带来代价，也会让事情变得更复杂。",
    choiceQuestion: "关羽一路往前，最重要的力量来自哪里？",
    choices: [
      { label: "目标清楚", detail: "知道自己为什么出发，才不容易放弃" },
      { label: "武艺高强", detail: "能力很重要，但不是唯一原因" },
      { label: "保护家眷", detail: "他不是一个人赶路，还带着责任" }
    ],
    judgementQuestion: "关羽一路打过去，有没有更少冲突的办法？",
    speechPrompt: "说一说：勇敢和鲁莽有什么区别？关羽这次更像哪一种？",
    lifePrompt: "你有没有一次为了完成目标，中间遇到很多小阻碍？",
    rewritePrompt: "如果让关羽先沟通再行动，你会帮他说哪三句话？",
    feedback: "你今天练的是：有目标很好，也要想办法减少不必要的冲突。",
    badges: ["勇气", "判断", "责任"]
  },
  {
    id: "level-41",
    no: 41,
    title: "古城会",
    theme: "误会出现后修复关系",
    people: "关羽、张飞、刘备",
    accent: "#c94d3f",
    scene: "city",
    warmup: "如果好朋友误会你了，你会先解释、先生气，还是先听他说？",
    story: "关羽终于见到张飞，但张飞以为关羽真的投降曹操，十分生气。关羽必须证明自己没有忘记兄弟，也要让张飞的情绪慢慢下来。",
    choiceQuestion: "张飞为什么会误会关羽？",
    choices: [
      { label: "他只看到关羽在曹操那里", detail: "只看表面，很容易误会" },
      { label: "他太在乎兄弟情", detail: "越在乎，越容易生气和着急" },
      { label: "他完全不讲道理", detail: "张飞冲动，但背后也有担心" }
    ],
    judgementQuestion: "关羽面对张飞的误会，最应该先做什么？",
    speechPrompt: "说一说：解释误会时，怎样既说清自己，又照顾对方情绪？",
    lifePrompt: "你有没有被同学或家人误会过？后来怎么说清楚的？",
    rewritePrompt: "如果你是刘备，看到两个人快吵起来，会怎么劝？",
    feedback: "你今天练的是：修复关系要说清事实，也要看见情绪。",
    badges: ["表达", "情绪管理", "合作"]
  },
  {
    id: "level-42",
    no: 42,
    title: "刘备兄弟重聚",
    theme: "团队重新出发",
    people: "刘备、关羽、张飞",
    accent: "#507b5d",
    scene: "peach",
    warmup: "一个队伍分开过、吵过之后，怎样才能重新合作？",
    story: "刘备、关羽、张飞经历分散和误会后，终于重新聚在一起。重聚不是简单地开心一下，还要重新整理目标、分工和信任。",
    choiceQuestion: "三兄弟重聚后，最需要先恢复什么？",
    choices: [
      { label: "信任", detail: "相信彼此没有忘记共同目标" },
      { label: "计划", detail: "开心之后，还要知道下一步怎么走" },
      { label: "面子", detail: "只顾面子，可能又错过真正的问题" }
    ],
    judgementQuestion: "经历误会后，关系还能不能变得更稳？为什么？",
    speechPrompt: "说一说：一个好团队遇到分歧后，怎样重新开始？",
    lifePrompt: "你和朋友或队友有没有一次吵完又和好？后来有什么不同？",
    rewritePrompt: "帮三兄弟设计一次重聚会议：每个人先说一句什么？",
    feedback: "你今天练的是：关系修复后，还要一起定下一步。",
    badges: ["合作", "表达", "反思"]
  },
  {
    id: "level-43",
    no: 43,
    title: "袁绍与曹操对峙",
    theme: "强弱不只看人数",
    people: "袁绍、曹操",
    accent: "#6c5f92",
    scene: "tent",
    warmup: "比赛前，一方人多、一方人少，是不是人多的一定赢？",
    story: "袁绍兵多势大，看起来更强。曹操兵少一些，但更重视速度、判断和执行。大战之前，真正的胜负还没有出现，双方的选择会慢慢改变局面。",
    choiceQuestion: "判断谁更可能赢，不能只看什么？",
    choices: [
      { label: "人数多少", detail: "人多有优势，但不是全部" },
      { label: "谁更会做决定", detail: "关键时刻的选择很重要" },
      { label: "谁更会听建议", detail: "能听进去提醒，少犯大错" }
    ],
    judgementQuestion: "袁绍看起来强，他最可能轻视什么？",
    speechPrompt: "说一说：你觉得一个队伍真正强，除了人数，还要有什么？",
    lifePrompt: "运动或游戏里，有没有人少的一方赢过？为什么？",
    rewritePrompt: "如果你是袁绍的提醒官，会提前提醒他哪三件事？",
    feedback: "你今天练的是：看问题不能只看表面优势。",
    badges: ["判断", "反思", "智慧"]
  },
  {
    id: "level-44",
    no: 44,
    title: "官渡关键选择",
    theme: "关键一步改变局面",
    people: "曹操、袁绍、许攸",
    accent: "#2d7f8d",
    scene: "fire",
    warmup: "一件事快卡住时，如果有人给你一个重要线索，你会先做什么？",
    story: "官渡对峙时，曹操得到重要消息，知道袁绍粮草所在。粮草是军队能不能继续坚持的关键。曹操抓住机会，做出突袭乌巢的决定。",
    choiceQuestion: "曹操为什么要抓住粮草这个点？",
    choices: [
      { label: "打到关键处", detail: "不一定正面硬拼，先找最重要的问题" },
      { label: "只是运气好", detail: "有机会也要敢判断、敢行动" },
      { label: "让对手乱起来", detail: "粮草出问题，队伍就容易慌" }
    ],
    judgementQuestion: "得到线索后马上行动，有什么好处？有什么风险？",
    speechPrompt: "说一说：什么叫抓住关键一步？你能举一个生活例子吗？",
    lifePrompt: "做作业或训练时，你有没有发现一个关键点，解决后整件事变简单？",
    rewritePrompt: "如果曹操没有选择突袭粮草，他还可以怎么打？",
    feedback: "你今天练的是：遇到复杂问题，先找最关键的一点。",
    badges: ["解决问题", "智慧", "判断"]
  },
  {
    id: "level-45",
    no: 45,
    title: "官渡之战复盘",
    theme: "胜利和失败都要复盘",
    people: "曹操、袁绍",
    accent: "#7b695c",
    scene: "mountain",
    warmup: "赢了一局游戏后，还需要复盘吗？输了一局后，又该怎么复盘？",
    story: "官渡之战后，曹操以少胜多，袁绍由强转弱。曹操赢，不只是因为勇敢；袁绍输，也不只是因为倒霉。真正值得看的，是他们各自做了哪些选择。",
    choiceQuestion: "复盘官渡之战，最应该看什么？",
    choices: [
      { label: "关键选择", detail: "哪一步改变了局面" },
      { label: "谁更倒霉", detail: "只说倒霉，学不到下次办法" },
      { label: "谁听了建议", detail: "能不能听提醒，会影响结果" }
    ],
    judgementQuestion: "曹操赢了以后，也可能犯什么错误？袁绍输了以后，还能学到什么？",
    speechPrompt: "说一说：如果你是袁绍，失败后第一件要复盘的事是什么？",
    lifePrompt: "你最近有没有一次输了或做错？如果再来一次，你想换哪个办法？",
    rewritePrompt: "给袁绍设计一个失败后再尝试计划，写三步。",
    feedback: "你今天练的是：失败不是我不行，而是找原因、换办法、再试一次。",
    badges: ["反思", "换办法", "坚持"]
  }
];

const steps = ["热身", "故事", "选择", "判断", "表达", "生活", "改编", "徽章"];
const levelPlaceMap = {
  "level-28": "小沛",
  "level-29": "小沛",
  "level-30": "徐州/小沛",
  "level-31": "许都",
  "level-32": "许都",
  "level-33": "许都",
  "level-34": "许都",
  "level-35": "下邳",
  "level-36": "下邳",
  "level-37": "白马",
  "level-38": "延津",
  "level-39": "许都",
  "level-40": "五关路",
  "level-41": "古城",
  "level-42": "古城",
  "level-43": "官渡",
  "level-44": "乌巢",
  "level-45": "官渡"
};
const stageGroups = [
  { id: "xiaopei", title: "小沛徐州", subtitle: "稳住局面", levels: ["level-28", "level-29", "level-30"], x: 20, y: 58 },
  { id: "xudu", title: "许都暗流", subtitle: "冷静藏锋", levels: ["level-31", "level-32", "level-33", "level-34"], x: 42, y: 36 },
  { id: "xiapi", title: "关羽立约", subtitle: "守住底线", levels: ["level-35", "level-36"], x: 31, y: 72 },
  { id: "baima", title: "白马延津", subtitle: "立功不迷路", levels: ["level-37", "level-38"], x: 60, y: 34 },
  { id: "gucheng", title: "千里寻兄", subtitle: "重修信任", levels: ["level-39", "level-40", "level-41", "level-42"], x: 70, y: 63 },
  { id: "guandu", title: "官渡乌巢", subtitle: "抓住关键", levels: ["level-43", "level-44", "level-45"], x: 83, y: 30 }
];
const state = {
  mode: "family",
  view: "home",
  mapStage: "",
  level: null,
  step: 0,
  selectedChoice: null,
  judgement: "",
  transcript: "",
  life: "",
  rewrite: "",
  parentNote: "",
  recorder: null,
  chunks: [],
  audioUrl: "",
  recognition: null,
  recognizing: false
};

const views = {
  home: document.querySelector("#homeView"),
  map: document.querySelector("#mapView"),
  play: document.querySelector("#playView"),
  journal: document.querySelector("#journalView"),
  parent: document.querySelector("#parentView")
};

const levelGrid = document.querySelector("#levelGrid");
const levelSummary = document.querySelector("#levelSummary");
const stepper = document.querySelector("#stepper");
const playStage = document.querySelector("#playStage");
const journalList = document.querySelector("#journalList");
const parentStats = document.querySelector("#parentStats");
const clearJournalBtn = document.querySelector("#clearJournalBtn");
const exportJournalBtn = document.querySelector("#exportJournalBtn");
const importJournalBtn = document.querySelector("#importJournalBtn");
const importJournalInput = document.querySelector("#importJournalInput");
const journalBackupStatus = document.querySelector("#journalBackupStatus");

function getJournal() {
  try {
    return JSON.parse(localStorage.getItem("sanguoGrowthJournal") || "[]");
  } catch {
    return [];
  }
}

function saveJournal(items) {
  localStorage.setItem("sanguoGrowthJournal", JSON.stringify(items));
}

function setBackupStatus(message) {
  if (journalBackupStatus) journalBackupStatus.textContent = message;
}

function completedLevelIds() {
  return new Set(getJournal().map(card => card.levelId));
}

function setView(view) {
  state.view = view;
  Object.entries(views).forEach(([key, element]) => {
    if (element) element.classList.toggle("is-active", key === view);
  });
  if (view === "map") renderMap();
  if (view === "journal") renderJournal();
  if (view === "parent") renderParent();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMap() {
  const done = completedLevelIds();
  const nextLevel = levels.find(level => !done.has(level.id)) || levels[0];
  const recommendedStage = stageForLevel(nextLevel) || stageGroups[0];
  const selectedStage = stageGroups.find(stage => stage.id === state.mapStage) || recommendedStage;
  const visibleLevels = selectedStage.levels.map(id => levels.find(level => level.id === id)).filter(Boolean);
  levelGrid.innerHTML = `
    <div class="map-layout">
    <section class="game-map-panel" aria-label="三国阶段地图">
      <div class="stage-map">
        <img src="./assets/sanguo-cover.webp" alt="三国地图">
        <div class="cover-overlay cover-overlay-scroll">
          <strong>瑄宝闯三国</strong>
          <span>表达 · 判断 · 复盘 · 换办法</span>
        </div>
        <div class="cover-overlay cover-overlay-task">
          <strong>当前任务</strong>
          <span>选择一关，讲清理由</span>
        </div>
        <div class="cover-overlay cover-overlay-legend">
          <span>已完成</span>
          <span>当前关卡</span>
          <span>未通关</span>
        </div>
        ${stageGroups.map((stage, index) => {
          const stageLevels = stage.levels.map(id => levels.find(level => level.id === id)).filter(Boolean);
          const completed = stageLevels.filter(level => done.has(level.id)).length;
          const isActive = stage.id === selectedStage.id;
          const isRecommended = stage.id === recommendedStage.id;
          return `
            <button class="stage-node ${isActive ? "is-active" : ""} ${isRecommended ? "is-recommended" : ""}" type="button" data-stage="${stage.id}" style="--x:${stage.x}%; --y:${stage.y}%;">
              <span><b class="stage-order">${index + 1}</b>${stage.title}</span>
              <small>${completed}/${stageLevels.length}</small>
            </button>
          `;
        }).join("")}
      </div>
      <div class="stage-sequence" aria-label="章节时间线">
        ${stageGroups.map((stage, index) => {
          const isActive = stage.id === selectedStage.id;
          const stageLevels = stage.levels.map(id => levels.find(level => level.id === id)).filter(Boolean);
          return `
            <button class="stage-sequence-step ${isActive ? "is-active" : ""}" type="button" data-stage="${stage.id}">
              <strong>${index + 1}</strong>
              <span>${stage.title}</span>
              <small>${stageLevels[0]?.no || ""}-${stageLevels[stageLevels.length - 1]?.no || ""}</small>
            </button>
          `;
        }).join("")}
      </div>
      <section class="advisor-card map-game-advisor" aria-label="小军师提示">
        ${advisorGirlSvg()}
        <div>
          <strong class="advisor-name">小军师 瑄瑄</strong>
          <p>建议今日：第 ${nextLevel.no} 关 ${nextLevel.title}。也可以点地图上的任意阶段自由选关。</p>
        </div>
      </section>
    </section>

    <section class="stage-level-panel" aria-label="${selectedStage.title}关卡">
      <div class="stage-level-head">
        <div>
          <span class="place-tag">${selectedStage.title}</span>
          <h3>${selectedStage.subtitle}</h3>
        </div>
        <strong>${visibleLevels.length} 个故事</strong>
      </div>
      <div class="timeline-grid stage-level-grid">
      ${visibleLevels.map(level => {
        const isCompleted = done.has(level.id);
        const isCurrent = level.id === nextLevel.id;
        return `
          <button class="timeline-card ${isCompleted ? "is-completed" : ""} ${isCurrent ? "is-current" : ""}" type="button" data-level="${level.id}" style="--accent:${level.accent}">
            <div class="timeline-card-head">
              <span class="level-row-no">第 ${level.no} 关</span>
              <span class="place-tag">${placeForLevel(level)}</span>
            </div>
            <div class="avatar-stack">${avatarsForLevel(level)}</div>
            <h3>${level.title}</h3>
            <p>${level.theme}</p>
            <div class="badge-row">${level.badges.slice(0, 2).map(toBadge).join("")}</div>
            <span class="level-row-state">${isCompleted ? "已完成" : isCurrent ? "建议今日" : "可挑战"}</span>
          </button>
        `;
      }).join("")}
      </div>
    </section>
    </div>
  `;

  levelGrid.querySelectorAll("[data-stage]").forEach(button => {
    button.addEventListener("click", () => {
      state.mapStage = button.dataset.stage;
      renderMap();
    });
  });
  bindLevelCards();
}

function bindLevelCards(root = levelGrid) {
  root.querySelectorAll("[data-level]").forEach(card => {
    card.addEventListener("click", () => startLevel(card.dataset.level));
  });
}

function toBadge(text) {
  return `<span class="badge">${text}</span>`;
}

function primaryPeople(level) {
  return level.people.split("、").slice(0, 3);
}

function placeForLevel(level) {
  return levelPlaceMap[level.id] || "故事路上";
}

function stageForLevel(level) {
  return stageGroups.find(stage => stage.levels.includes(level.id));
}

function routePointForLevel(level, index) {
  const points = [
    { x: 18, y: 61 }, { x: 24, y: 52 }, { x: 30, y: 62 },
    { x: 39, y: 43 }, { x: 46, y: 35 }, { x: 52, y: 42 }, { x: 58, y: 33 },
    { x: 34, y: 74 }, { x: 41, y: 67 }, { x: 48, y: 75 }, { x: 55, y: 65 }, { x: 62, y: 72 }, { x: 69, y: 61 },
    { x: 73, y: 43 }, { x: 79, y: 50 }, { x: 84, y: 38 },
    { x: 70, y: 24 }, { x: 76, y: 19 }, { x: 82, y: 25 }, { x: 88, y: 18 }, { x: 92, y: 28 }
  ];
  return points[index] || points[points.length - 1];
}

function ancientMapSvg() {
  return `
    <svg viewBox="0 0 1180 680" preserveAspectRatio="none" role="img" aria-label="三国真实地理古地图">
      <defs>
        <linearGradient id="riverBlue" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#6fa6b3" stop-opacity="0.82"></stop>
          <stop offset="100%" stop-color="#4f8c98" stop-opacity="0.68"></stop>
        </linearGradient>
      </defs>
      <rect width="1180" height="680" fill="#ead29b"></rect>
      <path d="M42 502 C170 440 256 478 362 420 C472 360 558 384 690 316 C818 250 924 286 1138 178" fill="none" stroke="#d0a86a" stroke-width="42" stroke-linecap="round" opacity="0.5"></path>
      <path d="M64 512 C190 448 270 486 378 424 C486 362 574 390 704 316 C830 246 930 286 1148 176" fill="none" stroke="#8b5b32" stroke-width="5" stroke-dasharray="14 16" stroke-linecap="round" opacity="0.62"></path>
      <path d="M120 372 C238 318 318 340 430 292 C548 240 632 268 748 210 C874 146 968 164 1100 112" fill="none" stroke="url(#riverBlue)" stroke-width="22" stroke-linecap="round" opacity="0.74"></path>
      <path d="M128 384 C248 330 328 352 438 306 C560 256 640 282 758 224 C884 164 976 180 1110 130" fill="none" stroke="#d7eef0" stroke-width="4" stroke-linecap="round" opacity="0.56"></path>
      <g fill="#78694c" opacity="0.58">
        <path d="M74 158 L128 80 L184 158 Z"></path>
        <path d="M128 166 L196 62 L270 166 Z"></path>
        <path d="M220 166 L282 92 L344 166 Z"></path>
        <path d="M870 578 L930 500 L990 578 Z"></path>
        <path d="M944 580 L1018 462 L1096 580 Z"></path>
      </g>
      <g fill="none" stroke="#9a7b48" stroke-width="2" opacity="0.42">
        <path d="M92 118 C250 186 304 126 462 196 C622 268 736 196 916 256 C1020 292 1080 270 1142 244"></path>
        <path d="M70 588 C214 548 330 606 456 560 C600 508 686 574 844 520 C960 480 1030 508 1128 466"></path>
      </g>
      <g fill="#7a4218" font-family="Microsoft YaHei, PingFang SC, sans-serif" font-weight="900" opacity="0.42">
        <text x="178" y="478" font-size="30">小沛</text>
        <text x="468" y="214" font-size="30">许都</text>
        <text x="382" y="622" font-size="30">古城</text>
        <text x="858" y="326" font-size="30">官渡</text>
        <text x="986" y="184" font-size="30">乌巢</text>
      </g>
    </svg>
  `;
}

function advisorGirlSvg() {
  return `
    <svg class="advisor-girl" viewBox="0 0 112 112" role="img" aria-label="可爱小女孩军师">
      <circle cx="56" cy="56" r="52" fill="#fff1bf"></circle>
      <path d="M24 98 C28 69 84 69 88 98 Z" fill="#79a66a"></path>
      <path d="M36 78 L76 78 L70 96 L42 96 Z" fill="#f7d98b"></path>
      <circle cx="56" cy="44" r="23" fill="#f1b17c"></circle>
      <path d="M30 45 C32 18 80 14 84 45 C72 32 42 32 30 45 Z" fill="#382a28"></path>
      <path d="M31 42 C22 48 18 60 23 68 C33 61 35 50 31 42 Z" fill="#382a28"></path>
      <path d="M81 42 C90 48 94 60 89 68 C79 61 77 50 81 42 Z" fill="#382a28"></path>
      <path d="M38 30 L56 15 L74 30 L70 38 L42 38 Z" fill="#c94d3f"></path>
      <circle cx="56" cy="27" r="4" fill="#f2bc45"></circle>
      <circle cx="47" cy="45" r="3" fill="#4c2f29"></circle>
      <circle cx="65" cy="45" r="3" fill="#4c2f29"></circle>
      <path d="M48 56 Q56 63 65 56" fill="none" stroke="#7a382c" stroke-width="4" stroke-linecap="round"></path>
      <path d="M78 76 C88 66 94 57 96 45" fill="none" stroke="#d6a35e" stroke-width="5" stroke-linecap="round"></path>
      <path d="M94 42 L104 32" stroke="#d6a35e" stroke-width="5" stroke-linecap="round"></path>
      <path d="M93 42 C98 44 103 44 108 40 C103 50 98 55 91 58 Z" fill="#f7e9c5" stroke="#b99b61" stroke-width="2"></path>
    </svg>
  `;
}

function avatarsForLevel(level) {
  return primaryPeople(level).map(name => avatarSvg(name)).join("");
}

function avatarSvg(name) {
  const key = name.replace("家眷", "");
  const profiles = {
    刘备: { color: "#4fa05f", border: "#4b9b5a", bg: "#dff0d6", skin: "#f4c48d", hair: "#3b2d28", prop: "hands", tags: ["可靠", "坚持"] },
    关羽: { color: "#2f7f4f", border: "#2f7f4f", bg: "#efdcd6", skin: "#cd7357", hair: "#3b2d28", prop: "blade", tags: ["守信", "勇敢"] },
    张飞: { color: "#4d3470", border: "#4d3470", bg: "#f1dca7", skin: "#c77854", hair: "#2a1f24", prop: "spear", tags: ["豪爽", "重情义"] },
    曹操: { color: "#9d2531", border: "#9d2531", bg: "#e9d6d3", skin: "#e0a477", hair: "#3a2b2a", prop: "tablet", tags: ["聪明", "判断"] },
    吕布: { color: "#d3322f", border: "#d3322f", bg: "#f5e3a6", skin: "#efb27c", hair: "#3b2d28", prop: "halberd", tags: ["强大", "耀眼"] },
    袁绍: { color: "#5c7898", border: "#5c7898", bg: "#dce7f0", skin: "#dfaa7b", hair: "#3b2d28", prop: "flag", tags: ["势大", "犹豫"] },
    纪灵: { color: "#8a7a45", border: "#8a7a45", bg: "#eadfbd", skin: "#e1aa78", hair: "#3d3926", prop: "blade", tags: ["武将", "听令"] },
    颜良: { color: "#8c4a3f", border: "#8c4a3f", bg: "#ead8cd", skin: "#d69a72", hair: "#49302d", prop: "blade", tags: ["勇猛", "冲锋"] },
    文丑: { color: "#6f5a88", border: "#6f5a88", bg: "#e1d8ed", skin: "#d69a72", hair: "#382f47", prop: "spear", tags: ["强悍", "急战"] },
    许攸: { color: "#4f8a8b", border: "#4f8a8b", bg: "#d8eeee", skin: "#e3ad7d", hair: "#2e4d4e", prop: "scroll", tags: ["线索", "计策"] }
  };
  const profile = profiles[key] || { color: "#6b7f8f", border: "#6b7f8f", bg: "#e5e1d0", skin: "#e1aa78", hair: "#34404a", prop: "scroll", tags: ["人物", "观察"] };
  const props = {
    hands: `<circle cx="94" cy="136" r="8" fill="#f4c48d"></circle><circle cx="112" cy="136" r="8" fill="#f4c48d"></circle><path d="M62 122 C77 134 90 140 104 140 C118 140 133 132 148 120" fill="none" stroke="#f4d98d" stroke-width="7" stroke-linecap="round"></path>`,
    blade: `<path d="M166 56 L166 188" stroke="#5c3b2b" stroke-width="6" stroke-linecap="round"></path><path d="M166 55 L186 16 L183 80 C175 78 170 68 166 55 Z" fill="#f2d979" stroke="#3d302b" stroke-width="4"></path><path d="M166 55 C144 76 142 108 160 132" fill="none" stroke="#3d302b" stroke-width="5" stroke-linecap="round"></path><path d="M154 116 H178" stroke="#e4c342" stroke-width="5" stroke-linecap="round"></path>`,
    spear: `<path d="M48 50 L178 152" stroke="#4b352b" stroke-width="6" stroke-linecap="round"></path><path d="M42 48 C45 22 66 18 74 34 C62 36 52 42 42 48 Z" fill="#f6cf65" stroke="#3d302b" stroke-width="4"></path><path d="M74 34 C92 46 92 68 75 86" fill="none" stroke="#3d302b" stroke-width="5"></path>`,
    tablet: `<rect x="158" y="128" width="24" height="54" rx="5" fill="#8b5b35" stroke="#3d302b" stroke-width="4"></rect><text x="170" y="162" text-anchor="middle" font-size="18" font-weight="900" fill="#fff4cf">令</text>`,
    halberd: `<path d="M168 52 L168 196" stroke="#5c3b2b" stroke-width="6" stroke-linecap="round"></path><path d="M168 50 L181 14 L194 50 L184 78 L168 50 Z" fill="#f2c744" stroke="#3d302b" stroke-width="4"></path><path d="M168 72 C142 48 118 48 106 70" fill="none" stroke="#d3322f" stroke-width="9" stroke-linecap="round"></path><path d="M168 72 C194 48 218 48 230 70" fill="none" stroke="#d3322f" stroke-width="9" stroke-linecap="round"></path>`,
    flag: `<path d="M158 82 L158 186" stroke="#4b352b" stroke-width="6" stroke-linecap="round"></path><path d="M164 90 C190 78 204 88 222 78 L222 126 C204 138 190 128 164 140 Z" fill="#7890aa" stroke="#3d302b" stroke-width="4"></path><text x="194" y="119" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">袁</text>`,
    scroll: `<rect x="156" y="128" width="30" height="54" rx="5" fill="#efd69a" stroke="#3d302b" stroke-width="4"></rect><path d="M164 144 H178 M164 160 H178" stroke="#9b6a2f" stroke-width="4" stroke-linecap="round"></path>`
  };
  return `
    <svg class="character-card" viewBox="0 0 220 260" role="img" aria-label="${key}">
      <rect x="7" y="7" width="206" height="246" rx="18" fill="#fffaf0" stroke="${profile.border}" stroke-width="5"></rect>
      <circle cx="110" cy="94" r="66" fill="${profile.bg}" opacity="0.9"></circle>
      ${props[profile.prop] || props.scroll}
      <path d="M74 202 L146 202 L138 126 C130 116 90 116 82 126 Z" fill="${profile.color}" stroke="#3d302b" stroke-width="5"></path>
      <path d="M82 130 C70 152 65 174 65 186" fill="none" stroke="${profile.color}" stroke-width="12" stroke-linecap="round"></path>
      <path d="M138 130 C154 145 160 164 164 178" fill="none" stroke="${profile.color}" stroke-width="10" stroke-linecap="round"></path>
      <circle cx="110" cy="74" r="31" fill="${profile.skin}" stroke="#3d302b" stroke-width="5"></circle>
      <path d="M80 72 C86 44 135 42 140 72 C122 62 98 62 80 72 Z" fill="${profile.hair}"></path>
      <path d="M94 78 C98 75 102 75 106 78 M116 78 C120 75 124 75 128 78" fill="none" stroke="#3d302b" stroke-width="4" stroke-linecap="round"></path>
      <path d="M100 91 Q110 99 120 91" fill="none" stroke="#3d302b" stroke-width="4" stroke-linecap="round"></path>
      <path d="M102 104 C105 123 115 123 118 104" fill="${profile.hair}"></path>
      <rect x="58" y="205" width="104" height="24" rx="12" fill="${profile.color}"></rect>
      <text x="110" y="223" text-anchor="middle" font-size="20" font-weight="900" fill="#fff">${key}</text>
      <rect x="50" y="236" width="52" height="16" rx="8" fill="#f2d979"></rect>
      <rect x="118" y="236" width="52" height="16" rx="8" fill="#f2d979"></rect>
      <text x="76" y="248" text-anchor="middle" font-size="11" font-weight="800" fill="#3f2a1d">${profile.tags[0]}</text>
      <text x="144" y="248" text-anchor="middle" font-size="11" font-weight="800" fill="#3f2a1d">${profile.tags[1]}</text>
    </svg>
  `;
}

function titleForLevel(level) {
  const primary = level.badges[0];
  const titles = {
    坚持: "稳住目标小将",
    情绪管理: "冷静收心官",
    判断: "冷静判断官",
    智慧: "换办法军师",
    表达: "小小讲述官",
    反思: "复盘小军师",
    责任: "守信担当官",
    解决问题: "关键一步军师",
    勇气: "勇敢前行者",
    合作: "关系修复师",
    换办法: "再试一次勇士"
  };
  return titles[primary] || "三国成长小军师";
}

function commandForLevel(level) {
  const templates = {
    坚持: "今日军师令：先稳住，再找机会。你没有只看眼前的不顺。",
    情绪管理: "今日军师令：紧张和不开心都可以有，先停一下再行动。",
    判断: "今日军师令：看见好处，也看见风险，选择会更稳。",
    智慧: "今日军师令：不硬碰硬，换个办法也能打开局面。",
    表达: "今日军师令：把理由说清楚，就是很重要的能力。",
    反思: "今日军师令：复盘不是责怪自己，是找到下次的新办法。",
    责任: "今日军师令：答应的事，在关键时刻也要记得。",
    解决问题: "今日军师令：复杂问题先找关键一步，再慢慢推进。",
    勇气: "今日军师令：勇敢不是乱冲，是知道为什么继续往前。",
    合作: "今日军师令：关系出问题时，先听清楚，再说清楚。",
    换办法: "今日军师令：这次办法不够好，下次还可以再试。"
  };
  return templates[level.badges[0]] || "今日军师令：你说出了自己的想法，也完成了一次认真复盘。";
}

function letterForLevel(level) {
  if (level.people.includes("关羽")) {
    return "关羽来信：我看到你在想“承诺”和“责任”。能说出自己的理由，比只说对错更重要。";
  }
  if (level.people.includes("张飞")) {
    return "张飞来信：你今天没有急着下结论，还愿意听一听、想一想，这就是进步。";
  }
  if (level.people.includes("曹操")) {
    return "曹操来信：你开始学会找关键一步了。遇到复杂问题，先抓重点。";
  }
  if (level.people.includes("吕布")) {
    return "吕布来信：你看到了办法的好处，也看到了风险。会判断，比只会赢更厉害。";
  }
  if (level.people.includes("袁绍")) {
    return "袁绍来信：失败后愿意复盘，下一次才有机会换一个办法。";
  }
  return "刘备来信：你今天在困难里找办法，也没有忘记自己的目标。";
}

function startLevel(id) {
  const level = levels.find(item => item.id === id);
  if (!level) return;
  state.level = level;
  state.step = 0;
  state.selectedChoice = null;
  state.judgement = "";
  state.transcript = "";
  state.life = "";
  state.rewrite = "";
  state.parentNote = "";
  state.audioUrl = "";
  stopRecognition();
  renderPlay();
  setView("play");
}

function renderPlay() {
  renderLevelSummary();
  renderStepper();
  const renderers = [
    renderWarmupStep,
    renderStoryStep,
    renderChoiceStep,
    renderJudgementStep,
    renderSpeakStep,
    renderLifeStep,
    renderRewriteStep,
    renderFinishStep
  ];
  playStage.innerHTML = renderers[state.step]();
  bindStepControls();
}

function renderLevelSummary() {
  const level = state.level;
  levelSummary.innerHTML = `
    <div class="avatar-stack large">${avatarsForLevel(level)}</div>
    <span class="place-tag">${placeForLevel(level)}</span>
    <span class="badge">第 ${level.no} 关</span>
    <h2>${level.title}</h2>
    <p>${level.theme}</p>
    <p><strong>人物：</strong>${level.people}</p>
    <div class="badge-row">${level.badges.map(toBadge).join("")}</div>
    <p>${state.mode === "family" ? "亲子模式：家长只追问，不批改。" : "孩子模式：把理由说清楚就很好。"}</p>
  `;
}

function renderStepper() {
  stepper.innerHTML = steps.map((step, index) => `
    <button class="step-dot ${index === state.step ? "is-active" : ""}" type="button" data-step-index="${index}" ${index === state.step ? `aria-current="step"` : ""}>${step}</button>
  `).join("");
}

function renderWarmupStep() {
  return `
    <article class="stage-card">
      <div class="stage-copy">
        <p class="eyebrow">听前热身</p>
        <h2>${state.level.warmup}</h2>
        <p>先随便聊一聊，不用答得标准。今天只做这一关，可以慢慢说。</p>
      </div>
      <div class="prompt-box">家长提示：只问“你为什么这样想？”不要马上纠正。</div>
      <button class="primary-btn" type="button" data-next>进入故事</button>
    </article>
  `;
}

function renderStoryStep() {
  return `
    <article class="stage-card">
      <div class="stage-copy">
        <p class="eyebrow">故事小剧场</p>
        <h2>${state.level.title}</h2>
        <p>${state.level.story}</p>
      </div>
      <button class="primary-btn" type="button" data-next>我听懂了</button>
    </article>
  `;
}

function renderChoiceStep() {
  return `
    <article class="stage-card">
      <div class="stage-copy">
        <p class="eyebrow">人物选择</p>
        <h2>${state.level.choiceQuestion}</h2>
      </div>
      <div class="choice-grid">
        ${state.level.choices.map((choice, index) => `
          <button class="choice-btn ${state.selectedChoice === index ? "is-selected" : ""}" type="button" data-choice="${index}">
            <strong>${choice.label}</strong>
            <span>${choice.detail}</span>
          </button>
        `).join("")}
      </div>
      <button class="primary-btn" type="button" data-next ${state.selectedChoice === null ? "disabled" : ""}>选好了</button>
    </article>
  `;
}

function renderJudgementStep() {
  return `
    <article class="stage-card">
      <div class="stage-copy">
        <p class="eyebrow">我来判断</p>
        <h2>${state.level.judgementQuestion}</h2>
        <p>可以说“好”、也可以说“有风险”，重点是说出理由。</p>
      </div>
      <div class="judgement-row">
        ${["好办法", "有风险", "我不确定"].map(item => `
          <button class="soft-btn judgement-chip" type="button" data-fill-judgement="${item}">${item}</button>
        `).join("")}
      </div>
      <textarea id="judgementInput" placeholder="我觉得这个办法……因为……">${state.judgement}</textarea>
      <button class="primary-btn" type="button" data-next>判断好了</button>
    </article>
  `;
}

function renderSpeakStep() {
  return `
    <article class="stage-card">
      <div class="stage-copy">
        <p class="eyebrow">语音表达</p>
        <h2>${state.level.speechPrompt}</h2>
        <p>建议讲 1 分钟左右。可以录音，也可以让家长帮忙写关键词。</p>
      </div>
      <div class="record-panel">
        <div class="record-actions">
          <button class="primary-btn" type="button" data-record>开始录音</button>
          <button class="soft-btn" type="button" data-speech>语音转文字</button>
        </div>
        <div class="record-status" id="recordStatus">${recordSupportText()}</div>
        ${state.audioUrl ? `<audio controls src="${state.audioUrl}"></audio>` : ""}
        <textarea id="transcriptInput" placeholder="孩子说出的理由或关键词">${state.transcript}</textarea>
      </div>
      <div class="feedback-card">提示：可以用“我觉得……因为……”开头。</div>
      <button class="primary-btn" type="button" data-next>说完了</button>
    </article>
  `;
}

function renderLifeStep() {
  return `
    <article class="stage-card">
      <div class="stage-copy">
        <p class="eyebrow">生活迁移</p>
        <h2>${state.level.lifePrompt}</h2>
        <p>把三国里的办法，连到自己的学习、运动、朋友或家庭游戏里。</p>
      </div>
      <textarea id="lifeInput" placeholder="这让我想到……">${state.life}</textarea>
      <button class="primary-btn" type="button" data-next>想好了</button>
    </article>
  `;
}

function renderRewriteStep() {
  return `
    <article class="stage-card">
      <div class="stage-copy">
        <p class="eyebrow">我来改故事</p>
        <h2>${state.level.rewritePrompt}</h2>
        <p>可以大胆想。新办法要说清楚：谁会更好？谁会遇到新麻烦？</p>
      </div>
      <textarea id="rewriteInput" placeholder="如果我来改，我会……">${state.rewrite}</textarea>
      ${state.mode === "family" ? `<input id="parentNoteInput" placeholder="家长一句观察：我今天看到她最好的地方是……" value="${state.parentNote}">` : ""}
      <button class="primary-btn" type="button" data-next>完成这一关</button>
    </article>
  `;
}

function renderFinishStep() {
  const title = titleForLevel(state.level);
  const command = commandForLevel(state.level);
  const letter = letterForLevel(state.level);
  return `
    <article class="stage-card">
      <div class="stage-copy">
        <p class="eyebrow">今日奖励</p>
        <h2>${state.level.title}完成了</h2>
        <p>${state.level.feedback}</p>
      </div>
      <div class="reward-grid">
        <section class="reward-card title-card">
          <div class="reward-icon award-icon" aria-hidden="true"></div>
          <span>今日称号</span>
          <strong>${title}</strong>
        </section>
        <section class="reward-card">
          <div class="reward-icon command-icon" aria-hidden="true"></div>
          <span>今日军师令</span>
          <p>${command}</p>
        </section>
        <section class="reward-card letter-card">
          <div class="reward-icon letter-icon" aria-hidden="true"></div>
          <span>人物来信</span>
          <p>${letter}</p>
        </section>
      </div>
      <div class="badge-row">${state.level.badges.map(toBadge).join("")}</div>
      <div class="feedback-card">${feedbackText()}</div>
      <div class="finish-actions">
        <button class="primary-btn" type="button" data-save>保存成长卡</button>
        <button class="ghost-btn" type="button" data-view="map">返回关卡地图</button>
      </div>
    </article>
  `;
}

function bindStepControls() {
  stepper.querySelectorAll("[data-step-index]").forEach(button => {
    button.addEventListener("click", () => jumpToStep(Number(button.dataset.stepIndex)));
  });
  playStage.querySelectorAll("[data-next]").forEach(button => {
    button.addEventListener("click", nextStep);
  });
  playStage.querySelectorAll("[data-choice]").forEach(button => {
    button.addEventListener("click", () => {
      state.selectedChoice = Number(button.dataset.choice);
      renderPlay();
    });
  });
  playStage.querySelectorAll("[data-fill-judgement]").forEach(button => {
    button.addEventListener("click", () => {
      const input = playStage.querySelector("#judgementInput");
      const prefix = button.dataset.fillJudgement;
      if (input) {
        input.value = input.value ? input.value : `${prefix}，因为`;
        input.focus();
        state.judgement = input.value;
      }
    });
  });
  const judgementInput = playStage.querySelector("#judgementInput");
  if (judgementInput) judgementInput.addEventListener("input", event => state.judgement = event.target.value);
  const transcriptInput = playStage.querySelector("#transcriptInput");
  if (transcriptInput) transcriptInput.addEventListener("input", event => state.transcript = event.target.value);
  const lifeInput = playStage.querySelector("#lifeInput");
  if (lifeInput) lifeInput.addEventListener("input", event => state.life = event.target.value);
  const rewriteInput = playStage.querySelector("#rewriteInput");
  if (rewriteInput) rewriteInput.addEventListener("input", event => state.rewrite = event.target.value);
  const parentNoteInput = playStage.querySelector("#parentNoteInput");
  if (parentNoteInput) parentNoteInput.addEventListener("input", event => state.parentNote = event.target.value);
  const recordButton = playStage.querySelector("[data-record]");
  if (recordButton) recordButton.addEventListener("click", toggleRecording);
  const speechButton = playStage.querySelector("[data-speech]");
  if (speechButton) speechButton.addEventListener("click", toggleSpeechRecognition);
  const saveButton = playStage.querySelector("[data-save]");
  if (saveButton) saveButton.addEventListener("click", saveCurrentCard);
  bindGlobalViewButtons(playStage);
}

function nextStep() {
  captureCurrentInputs();
  if (state.step < steps.length - 1) {
    state.step += 1;
    renderPlay();
  }
}

function jumpToStep(index) {
  if (index < 0 || index >= steps.length || index === state.step) return;
  captureCurrentInputs();
  state.step = index;
  renderPlay();
}

function captureCurrentInputs() {
  const judgementInput = playStage.querySelector("#judgementInput");
  const transcriptInput = playStage.querySelector("#transcriptInput");
  const lifeInput = playStage.querySelector("#lifeInput");
  const rewriteInput = playStage.querySelector("#rewriteInput");
  const parentNoteInput = playStage.querySelector("#parentNoteInput");
  if (judgementInput) state.judgement = judgementInput.value.trim();
  if (transcriptInput) state.transcript = transcriptInput.value.trim();
  if (lifeInput) state.life = lifeInput.value.trim();
  if (rewriteInput) state.rewrite = rewriteInput.value.trim();
  if (parentNoteInput) state.parentNote = parentNoteInput.value.trim();
}

function selectedChoiceLabel() {
  if (state.selectedChoice === null) return "未选择";
  return state.level.choices[state.selectedChoice].label;
}

function feedbackText() {
  const parts = ["你完成了今天这一关。"];
  if (state.judgement) parts.push("你说出了自己的判断。");
  if (state.transcript) parts.push("你进行了表达。");
  if (state.life) parts.push("你把故事连到了生活。");
  if (state.rewrite) parts.push("你想到了新办法。");
  return parts.join(" ");
}

function recordSupportText() {
  if (!navigator.mediaDevices || !window.MediaRecorder) return "这个浏览器不支持录音，可以直接让家长帮忙写。";
  return "点击开始录音，讲完后再次点击停止。录音只保存在当前页面里。";
}

async function toggleRecording() {
  if (!navigator.mediaDevices || !window.MediaRecorder) return;
  const status = playStage.querySelector("#recordStatus");
  if (state.recorder && state.recorder.state === "recording") {
    state.recorder.stop();
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.chunks = [];
    state.recorder = new MediaRecorder(stream);
    state.recorder.addEventListener("dataavailable", event => state.chunks.push(event.data));
    state.recorder.addEventListener("stop", () => {
      const blob = new Blob(state.chunks, { type: "audio/webm" });
      state.audioUrl = URL.createObjectURL(blob);
      stream.getTracks().forEach(track => track.stop());
      renderPlay();
    });
    state.recorder.start();
    if (status) status.textContent = "正在录音，讲完后点停止录音。";
    const button = playStage.querySelector("[data-record]");
    if (button) button.textContent = "停止录音";
  } catch {
    if (status) status.textContent = "没有拿到麦克风权限，可以改用文字记录。";
  }
}

function toggleSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const status = playStage.querySelector("#recordStatus");
  if (!SpeechRecognition) {
    if (status) status.textContent = "这个浏览器不支持语音转文字，可以用录音或文字记录。";
    return;
  }
  if (state.recognizing) {
    stopRecognition();
    return;
  }
  state.recognition = new SpeechRecognition();
  state.recognition.lang = "zh-CN";
  state.recognition.interimResults = true;
  state.recognition.continuous = true;
  state.recognition.onresult = event => {
    let text = "";
    for (let index = 0; index < event.results.length; index += 1) {
      text += event.results[index][0].transcript;
    }
    state.transcript = text;
    const input = playStage.querySelector("#transcriptInput");
    if (input) input.value = text;
  };
  state.recognition.onend = () => {
    state.recognizing = false;
    const button = playStage.querySelector("[data-speech]");
    if (button) button.textContent = "语音转文字";
  };
  state.recognition.start();
  state.recognizing = true;
  const button = playStage.querySelector("[data-speech]");
  if (button) button.textContent = "停止转写";
  if (status) status.textContent = "正在尝试转写，说完后点停止转写。";
}

function stopRecognition() {
  if (state.recognition && state.recognizing) state.recognition.stop();
  state.recognizing = false;
}

function saveCurrentCard() {
  captureCurrentInputs();
  const journal = getJournal();
  journal.unshift({
    id: `${Date.now()}`,
    date: new Date().toLocaleString("zh-CN"),
    mode: state.mode === "family" ? "亲子模式" : "孩子模式",
    levelId: state.level.id,
    levelNo: state.level.no,
    title: state.level.title,
    theme: state.level.theme,
    people: state.level.people,
    choice: selectedChoiceLabel(),
    judgement: state.judgement,
    transcript: state.transcript,
    life: state.life,
    rewrite: state.rewrite,
    parentNote: state.parentNote,
    rewardTitle: titleForLevel(state.level),
    command: commandForLevel(state.level),
    letter: letterForLevel(state.level),
    badges: state.level.badges
  });
  saveJournal(journal);
  setView("journal");
}

function exportJournal() {
  const journal = getJournal();
  if (!journal.length) {
    setBackupStatus("还没有成长卡，完成一关后再导出。");
    return;
  }
  const backup = {
    app: "sanguoGrowthJournal",
    version: 1,
    exportedAt: new Date().toISOString(),
    items: journal.map(card => ({ ...card, audioUrl: "" }))
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const today = new Date().toISOString().slice(0, 10);
  link.href = URL.createObjectURL(blob);
  link.download = `瑄宝三国成长册-${today}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  setBackupStatus("成长册备份已生成，请在 iPad 弹出的面板里保存到文件或 iCloud。");
}

function normalizeImportedJournal(data) {
  const items = Array.isArray(data) ? data : data && Array.isArray(data.items) ? data.items : null;
  if (!items) return null;
  return items
    .filter(item => item && typeof item === "object" && item.levelId && item.title)
    .map(item => ({
      ...item,
      id: item.id ? `${item.id}` : `${item.levelId}-${item.date || Date.now()}-${item.title}`,
      badges: Array.isArray(item.badges) ? item.badges : []
    }));
}

function importJournalFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = normalizeImportedJournal(JSON.parse(reader.result));
      if (!imported || !imported.length) {
        setBackupStatus("没有识别到可导入的成长卡，请确认选择的是成长册备份文件。");
        return;
      }
      if (!confirm(`将导入 ${imported.length} 张成长卡，并与本机记录合并。确定导入吗？`)) return;
      const current = getJournal();
      const seen = new Set();
      const merged = [...imported, ...current].filter(card => {
        const key = card.id || `${card.levelId}-${card.date}-${card.title}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      saveJournal(merged);
      renderJournal();
      renderParent();
      renderMap();
      setBackupStatus(`已导入 ${merged.length - current.length} 张新成长卡，本机共有 ${merged.length} 张。`);
    } catch {
      setBackupStatus("导入失败：文件格式不对，请选择之前导出的 .json 备份。");
    } finally {
      importJournalInput.value = "";
    }
  });
  reader.readAsText(file);
}

function renderJournal() {
  const journal = getJournal();
  if (!journal.length) {
    journalList.innerHTML = document.querySelector("#emptyJournalTemplate").innerHTML;
    bindGlobalViewButtons(journalList);
    return;
  }
  journalList.innerHTML = journal.map(card => `
    <article class="journal-card">
      <h3>第 ${card.levelNo || ""} 关 ${card.title}</h3>
      <div class="journal-meta">
        <span>${card.date}</span>
        <span>${card.mode}</span>
        <span>${card.theme}</span>
      </div>
      <div class="badge-row">${card.badges.map(toBadge).join("")}</div>
      <p><strong>人物：</strong>${card.people || "未记录"}</p>
      <p><strong>我选择：</strong>${card.choice || "未记录"}</p>
      <p><strong>我的判断：</strong>${card.judgement || "未记录"}</p>
      <p><strong>我说的理由：</strong>${card.transcript || "未记录"}</p>
      <p><strong>生活里的例子：</strong>${card.life || "未记录"}</p>
      <p><strong>我的新办法：</strong>${card.rewrite || "未记录"}</p>
      ${card.rewardTitle ? `<p><strong>今日称号：</strong>${card.rewardTitle}</p>` : ""}
      ${card.command ? `<p><strong>今日军师令：</strong>${card.command}</p>` : ""}
      ${card.letter ? `<p><strong>人物来信：</strong>${card.letter}</p>` : ""}
      ${card.parentNote ? `<p><strong>家长观察：</strong>${card.parentNote}</p>` : ""}
    </article>
  `).join("");
}

function renderParent() {
  const journal = getJournal();
  const badgeCounts = journal.flatMap(card => card.badges || []).reduce((acc, badge) => {
    acc[badge] = (acc[badge] || 0) + 1;
    return acc;
  }, {});
  const topBadge = Object.entries(badgeCounts).sort((a, b) => b[1] - a[1])[0];
  const spokenCount = journal.filter(card => card.transcript).length;
  parentStats.innerHTML = `
    <article class="stat-card">
      <strong>${new Set(journal.map(card => card.levelId)).size}</strong>
      <p>已完成不同关卡</p>
    </article>
    <article class="stat-card">
      <strong>${spokenCount}</strong>
      <p>有表达记录</p>
    </article>
    <article class="stat-card">
      <strong>${topBadge ? topBadge[0] : "暂无"}</strong>
      <p>最常出现徽章</p>
    </article>
    <article class="stat-card">
      <strong>${levels.length}</strong>
      <p>试用版总关卡</p>
    </article>
  `;
}

function bindGlobalViewButtons(root = document) {
  root.querySelectorAll("[data-view]").forEach(button => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
}

function bindModeButtons() {
  document.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      document.querySelectorAll("[data-mode]").forEach(item => {
        item.classList.toggle("is-selected", item.dataset.mode === state.mode);
      });
    });
  });
}

clearJournalBtn.addEventListener("click", () => {
  if (confirm("只会清空这个浏览器里的成长记录，确定清空吗？")) {
    saveJournal([]);
    renderJournal();
    renderParent();
    renderMap();
    setBackupStatus("本机成长记录已清空。");
  }
});

exportJournalBtn.addEventListener("click", exportJournal);
importJournalBtn.addEventListener("click", () => importJournalInput.click());
importJournalInput.addEventListener("change", event => importJournalFile(event.target.files[0]));

bindGlobalViewButtons();
bindModeButtons();
renderMap();
