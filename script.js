const poems = [
  [1,"天智天皇","秋の田の かりほの庵の 苫をあらみ わが衣手は 露にぬれつつ"],
  [2,"持統天皇","春すぎて 夏来にけらし 白妙の 衣ほすてふ 天の香具山"],
  [3,"柿本人麻呂","あしびきの 山鳥の尾の しだり尾の ながながし夜を ひとりかも寝む"],
  [4,"山部赤人","田子の浦に うち出でてみれば 白妙の 富士の高嶺に 雪は降りつつ"],
  [5,"猿丸大夫","奥山に 紅葉踏み分け 鳴く鹿の 声聞く時ぞ 秋は悲しき"],
  [6,"中納言家持","かささぎの 渡せる橋に 置く霜の 白きを見れば 夜ぞ更けにける"],
  [7,"安倍仲麿","天の原 ふりさけ見れば 春日なる 三笠の山に 出でし月かも"],
  [8,"喜撰法師","わが庵は 都のたつみ しかぞ住む 世をうぢ山と 人はいふなり"],
  [9,"小野小町","花の色は うつりにけりな いたづらに わが身世にふる ながめせしまに"],
  [10,"蝉丸","これやこの 行くも帰るも 別れては 知るも知らぬも 逢坂の関"],
  [11,"参議篁","わたの原 八十島かけて 漕ぎ出でぬと 人には告げよ 海人の釣舟"],
  [12,"僧正遍昭","天つ風 雲の通ひ路 吹きとぢよ をとめの姿 しばしとどめむ"],
  [13,"陽成院","筑波嶺の 峰より落つる みなの川 恋ぞつもりて 淵となりぬる"],
  [14,"河原左大臣","陸奥の しのぶもぢずり 誰ゆゑに 乱れそめにし 我ならなくに"],
  [15,"光孝天皇","君がため 春の野に出でて 若菜摘む わが衣手に 雪は降りつつ"],
  [16,"中納言行平","立ち別れ いなばの山の 峰に生ふる まつとし聞かば 今帰り来む"],
  [17,"在原業平朝臣","ちはやぶる 神代も聞かず 竜田川 からくれなゐに 水くくるとは"],
  [18,"藤原敏行朝臣","住の江の 岸に寄る波 よるさへや 夢の通ひ路 人目よくらむ"],
  [19,"伊勢","難波潟 短き芦の ふしの間も 逢はでこの世を 過ぐしてよとや"],
  [20,"元良親王","わびぬれば 今はた同じ 難波なる 身をつくしても 逢はむとぞ思ふ"],
  [21,"素性法師","今来むと いひしばかりに 長月の 有明の月を 待ち出でつるかな"],
  [22,"文屋康秀","吹くからに 秋の草木の しをるれば むべ山風を 嵐といふらむ"],
  [23,"大江千里","月見れば ちぢにものこそ 悲しけれ わが身一つの 秋にはあらねど"],
  [24,"菅家","このたびは 幣も取りあへず 手向山 紅葉の錦 神のまにまに"],
  [25,"三条右大臣","名にし負はば 逢坂山の さねかづら 人に知られで くるよしもがな"],
  [26,"貞信公","小倉山 峰のもみぢ葉 心あらば 今ひとたびの みゆき待たなむ"],
  [27,"中納言兼輔","みかの原 わきて流るる いづみ川 いつ見きとてか 恋しかるらむ"],
  [28,"源宗于朝臣","山里は 冬ぞ寂しさ まさりける 人目も草も かれぬと思へば"],
  [29,"凡河内躬恒","心あてに 折らばや折らむ 初霜の 置きまどはせる 白菊の花"],
  [30,"壬生忠岑","有明の つれなく見えし 別れより 暁ばかり 憂きものはなし"],
  [31,"坂上是則","朝ぼらけ 有明の月と 見るまでに 吉野の里に 降れる白雪"],
  [32,"春道列樹","山川に 風のかけたる しがらみは 流れもあへぬ 紅葉なりけり"],
  [33,"紀友則","ひさかたの 光のどけき 春の日に しづ心なく 花の散るらむ"],
  [34,"藤原興風","誰をかも 知る人にせむ 高砂の 松も昔の 友ならなくに"],
  [35,"紀貫之","人はいさ 心も知らず ふるさとは 花ぞ昔の 香ににほひける"],
  [36,"清原深養父","夏の夜は まだ宵ながら 明けぬるを 雲のいづこに 月宿るらむ"],
  [37,"文屋朝康","白露に 風の吹きしく 秋の野は つらぬきとめぬ 玉ぞ散りける"],
  [38,"右近","忘らるる 身をば思はず 誓ひてし 人の命の 惜しくもあるかな"],
  [39,"参議等","浅茅生の 小野の篠原 忍ぶれど あまりてなどか 人の恋しき"],
  [40,"平兼盛","忍ぶれど 色に出でにけり わが恋は ものや思ふと 人の問ふまで"],
  [41,"壬生忠見","恋すてふ わが名はまだき 立ちにけり 人知れずこそ 思ひそめしか"],
  [42,"清原元輔","契りきな かたみに袖を しぼりつつ 末の松山 波越さじとは"],
  [43,"権中納言敦忠","逢ひ見ての のちの心に くらぶれば 昔はものを 思はざりけり"],
  [44,"中納言朝忠","逢ふことの 絶えてしなくは なかなかに 人をも身をも 恨みざらまし"],
  [45,"謙徳公","あはれとも いふべき人は 思ほえで 身のいたづらに なりぬべきかな"],
  [46,"曽禰好忠","由良のとを 渡る舟人 かぢを絶え ゆくへも知らぬ 恋の道かな"],
  [47,"恵慶法師","八重むぐら しげれる宿の 寂しきに 人こそ見えね 秋は来にけり"],
  [48,"源重之","風をいたみ 岩打つ波の おのれのみ くだけてものを 思ふころかな"],
  [49,"大中臣能宣朝臣","みかきもり 衛士のたく火の 夜は燃え 昼は消えつつ ものをこそ思へ"],
  [50,"藤原義孝","君がため 惜しからざりし 命さへ 長くもがなと 思ひけるかな"],
  [51,"藤原実方朝臣","かくとだに えやはいぶきの さしも草 さしも知らじな 燃ゆる思ひを"],
  [52,"藤原道信朝臣","明けぬれば 暮るるものとは 知りながら なほ恨めしき 朝ぼらけかな"],
  [53,"右大将道綱母","嘆きつつ ひとり寝る夜の 明くる間は いかに久しき ものとかは知る"],
  [54,"儀同三司母","忘れじの 行く末までは かたければ 今日を限りの 命ともがな"],
  [55,"大納言公任","滝の音は 絶えて久しく なりぬれど 名こそ流れて なほ聞こえけれ"],
  [56,"和泉式部","あらざらむ この世のほかの 思ひ出に 今ひとたびの 逢ふこともがな"],
  [57,"紫式部","めぐり逢ひて 見しやそれとも 分かぬ間に 雲隠れにし 夜半の月かな"],
  [58,"大弐三位","有馬山 猪名の笹原 風吹けば いでそよ人を 忘れやはする"],
  [59,"赤染衛門","やすらはで 寝なましものを 小夜更けて かたぶくまでの 月を見しかな"],
  [60,"小式部内侍","大江山 いく野の道の 遠ければ まだふみも見ず 天の橋立"],
  [61,"伊勢大輔","いにしへの 奈良の都の 八重桜 今日九重に 匂ひぬるかな"],
  [62,"清少納言","夜をこめて 鳥の空音は はかるとも よに逢坂の 関は許さじ"],
  [63,"左京大夫道雅","今はただ 思ひ絶えなむ とばかりを 人づてならで 言ふよしもがな"],
  [64,"権中納言定頼","朝ぼらけ 宇治の川霧 絶え絶えに あらはれわたる 瀬々の網代木"],
  [65,"相模","恨みわび ほさぬ袖だに あるものを 恋に朽ちなむ 名こそ惜しけれ"],
  [66,"前大僧正行尊","もろともに あはれと思へ 山桜 花よりほかに 知る人もなし"],
  [67,"周防内侍","春の夜の 夢ばかりなる 手枕に かひなく立たむ 名こそ惜しけれ"],
  [68,"三条院","心にも あらで憂き世に ながらへば 恋しかるべき 夜半の月かな"],
  [69,"能因法師","嵐吹く 三室の山の もみぢ葉は 竜田の川の 錦なりけり"],
  [70,"良暹法師","寂しさに 宿を立ち出でて 眺むれば いづこも同じ 秋の夕暮れ"],
  [71,"大納言経信","夕されば 門田の稲葉 おとづれて 芦のまろやに 秋風ぞ吹く"],
  [72,"祐子内親王家紀伊","音に聞く 高師の浜の あだ波は かけじや袖の ぬれもこそすれ"],
  [73,"権中納言匡房","高砂の 尾上の桜 咲きにけり 外山の霞 立たずもあらなむ"],
  [74,"源俊頼朝臣","憂かりける 人を初瀬の 山おろしよ はげしかれとは 祈らぬものを"],
  [75,"藤原基俊","契りおきし させもが露を 命にて あはれ今年の 秋もいぬめり"],
  [76,"法性寺入道前関白太政大臣","わたの原 漕ぎ出でて見れば ひさかたの 雲居にまがふ 沖つ白波"],
  [77,"崇徳院","瀬を早み 岩にせかるる 滝川の われても末に 逢はむとぞ思ふ"],
  [78,"源兼昌","淡路島 通ふ千鳥の 鳴く声に 幾夜寝覚めぬ 須磨の関守"],
  [79,"左京大夫顕輔","秋風に たなびく雲の 絶え間より もれ出づる月の 影のさやけさ"],
  [80,"待賢門院堀河","長からむ 心も知らず 黒髪の 乱れて今朝は ものをこそ思へ"],
  [81,"後徳大寺左大臣","ほととぎす 鳴きつる方を 眺むれば ただ有明の 月ぞ残れる"],
  [82,"道因法師","思ひわび さても命は あるものを 憂きにたへぬは 涙なりけり"],
  [83,"皇太后宮大夫俊成","世の中よ 道こそなけれ 思ひ入る 山の奥にも 鹿ぞ鳴くなる"],
  [84,"藤原清輔朝臣","長らへば またこのごろや しのばれむ 憂しと見し世ぞ 今は恋しき"],
  [85,"俊恵法師","夜もすがら もの思ふころは 明けやらで 閨のひまさへ つれなかりけり"],
  [86,"西行法師","嘆けとて 月やはものを 思はする かこち顔なる わが涙かな"],
  [87,"寂蓮法師","村雨の 露もまだひぬ まきの葉に 霧立ちのぼる 秋の夕暮れ"],
  [88,"皇嘉門院別当","難波江の 芦のかりねの ひとよゆゑ 身を尽くしてや 恋ひわたるべき"],
  [89,"式子内親王","玉の緒よ 絶えなば絶えね ながらへば 忍ぶることの 弱りもぞする"],
  [90,"殷富門院大輔","見せばやな 雄島の海人の 袖だにも ぬれにぞぬれし 色は変はらず"],
  [91,"後京極摂政前太政大臣","きりぎりす 鳴くや霜夜の さむしろに 衣かたしき ひとりかも寝む"],
  [92,"二条院讃岐","わが袖は 潮干に見えぬ 沖の石の 人こそ知らね 乾く間もなし"],
  [93,"鎌倉右大臣","世の中は 常にもがもな 渚漕ぐ 海人の小舟の 綱手かなしも"],
  [94,"参議雅経","み吉野の 山の秋風 小夜更けて ふるさと寒く 衣打つなり"],
  [95,"前大僧正慈円","おほけなく 憂き世の民に おほふかな わが立つ杣に 墨染の袖"],
  [96,"入道前太政大臣","花さそふ 嵐の庭の 雪ならで ふりゆくものは わが身なりけり"],
  [97,"権中納言定家","来ぬ人を まつほの浦の 夕なぎに 焼くや藻塩の 身もこがれつつ"],
  [98,"従二位家隆","風そよぐ ならの小川の 夕暮は みそぎぞ夏の しるしなりける"],
  [99,"後鳥羽院","人もをし 人も恨めし あぢきなく 世を思ふゆゑに もの思ふ身は"],
  [100,"順徳院","ももしきや 古き軒端の しのぶにも なほあまりある 昔なりけり"]
].map(([number, author, text]) => ({ number, author, text }));

const selected = new Set(poems.map((poem) => poem.number));
let queue = [];
let currentTimer = null;
let currentIndex = -1;

const poemList = document.querySelector("#poem-list");
const selectedCount = document.querySelector("#selected-count");
const nowCard = document.querySelector("#now-card");
const rateInput = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");

function renderPoems() {
  const keyword = document.querySelector("#search").value.trim();
  poemList.innerHTML = "";
  poems
    .filter((poem) => `${poem.number} ${poem.author} ${poem.text}`.includes(keyword))
    .forEach((poem) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "poem-card";
      card.setAttribute("aria-pressed", selected.has(poem.number));
      card.innerHTML = `<strong>${poem.number}. ${poem.author}</strong><span>${poem.text}</span>`;
      card.addEventListener("click", () => togglePoem(poem.number));
      poemList.appendChild(card);
    });
}

function updateSelectedCount() {
  selectedCount.textContent = `${selected.size}首を選択中`;
}

function togglePoem(number) {
  selected.has(number) ? selected.delete(number) : selected.add(number);
  updateSelectedCount();
  renderPoems();
}

function buildQueue() {
  queue = poems.filter((poem) => selected.has(poem.number));
  if (document.querySelector("#order").value === "random") {
    queue = queue.sort(() => Math.random() - 0.5);
  }
  currentIndex = -1;
}

function speak(poem) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`${poem.number}番。${poem.author}。${poem.text}`);
  utterance.lang = "ja-JP";
  utterance.rate = Number(rateInput.value);
  utterance.onend = scheduleNext;
  window.speechSynthesis.speak(utterance);
  nowCard.innerHTML = `<h3>${poem.number}. ${poem.author}</h3><p class="poem-text">${poem.text}</p>`;
}

function scheduleNext() {
  clearTimeout(currentTimer);
  const pauseMs = Number(document.querySelector("#pause").value) * 1000;
  currentTimer = setTimeout(readNext, pauseMs);
}

function readNext() {
  clearTimeout(currentTimer);
  if (!queue.length) buildQueue();
  if (!queue.length) {
    nowCard.innerHTML = '<p class="muted">読み上げる歌が選択されていません。</p>';
    return;
  }
  currentIndex += 1;
  if (currentIndex >= queue.length) {
    nowCard.innerHTML = '<p class="muted">この回の読み上げが終わりました。</p>';
    return;
  }
  speak(queue[currentIndex]);
}

function stopReading() {
  clearTimeout(currentTimer);
  window.speechSynthesis.cancel();
  nowCard.insertAdjacentHTML("beforeend", '<p class="muted">停止しました。</p>');
}

document.querySelector("#start").addEventListener("click", () => {
  buildQueue();
  readNext();
});
document.querySelector("#next").addEventListener("click", readNext);
document.querySelector("#stop").addEventListener("click", stopReading);
document.querySelector("#select-all").addEventListener("click", () => {
  poems.forEach((poem) => selected.add(poem.number));
  updateSelectedCount();
  renderPoems();
});
document.querySelector("#clear-all").addEventListener("click", () => {
  selected.clear();
  updateSelectedCount();
  renderPoems();
});
document.querySelector("#random-20").addEventListener("click", () => {
  selected.clear();
  [...poems].sort(() => Math.random() - 0.5).slice(0, 20).forEach((poem) => selected.add(poem.number));
  updateSelectedCount();
  renderPoems();
});
document.querySelector("#search").addEventListener("input", renderPoems);
rateInput.addEventListener("input", () => {
  rateValue.textContent = rateInput.value;
});

updateSelectedCount();
renderPoems();
