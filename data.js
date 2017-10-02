mongo数据库中有read-data库，库中有books表格和user表格，books表格用来存储书籍数据，user表格用来存储用户信息数据
db.books.insert({
    title:'雨季不再来',
    author: '三毛',
    point: '9.9',
    price:'1900',
    img:'http://localhost:8080/images/book/book6.jpg',
    old_price: '4300',
    intro: '《雨季不再来》是2007年北京十月文艺出版社出版的图书，作者是三毛。该书以三毛的生命历程为主题，记录了三毛17岁到22岁的成长过程，真实呈现出三毛少女时代的成长感受。',
    label: ['小说','近代小说','文学作品'],
    catalog:['第一章','第二章','第三章','第四章','第五章'],
    comments:[
        {username:'汤亚萍',user_head_img:'',time:'2017-07-30',content:'关系复杂，人物写的生动活泼。里面的白嘉轩正直，不记仇，但骨子里还是有封建的思想。鹿兆海，鹿兆鹏，白灵对各自的党忠心真诚。'},
        {username:'规划图有',user_head_img:'',time:'2017-07-20',content:'这本书情感很真实，回味无穷。'},
        {username:'哪路',user_head_img:'',time:'2017-05-07',content:'很喜欢三毛的文字，写到我心里去了。'},
        {username:'而我',user_head_img:'',time:'2017-04-07',content:'很喜欢三毛的文字，写到我心里去了。'}
    ],
    words:'48.6万字',
    grounding_time:'2011-7',
    company:'北京十月文艺出版社',
    id:'9787530211106',
    contents:[
        {title:'第一章',content: [
            '当我开始爬树时，太阳并没有照耀得那么凶猛，整个树林是新鲜而又清凉的，刚一进来的时候几乎使我忘了这已是接近夏天的一个早晨了。阳光透过树上的叶子照在我脸上，我觉得睁不开眼睛，便换了一个姿势躲开太阳。',
            '这时的帕柯正在我躺着的树干下，她坐在一大堆枯叶上，旁边放着她那漂亮的粗麻编的大手袋，脚旁散着几张报纸。这是帕柯的老习惯，无论到那儿，总有几张当天的或过时的报纸跟着她，而帕柯时常有意无意的翻动着，一方面又不经意的摆出一幅异乡人的无聊样子来。现在我伏在树上看着她，她就怪快乐的样子，又伸手去翻起报纸来。',
            '我在树上可以看见那河，那是一条冲得怪急的小河，一块块的卵石被水冲得又清洁又光滑，去年这个时候，我总喜欢跟帕柯在石头上跨来跨去。小河在纱帽山跟学校交接的那个山谷里流着。我渡水时老是又叫又喊的，总幻想着纱帽山的蛇全在河里，而帕柯从不怕蛇，也从不喊叫，她每到河边总将书一放，就一声不响的涉到对岸的大相思树下去。太阳照耀着整个河床，我们累了就会躺在大石上晒一下，再收拾东西一块走公路去吃冰，然后等车回家。有时辛堤和奥肯也会一块儿去，但我看得出，只有帕柯和我是真正快快乐乐的在水里走来走去。这样的情形并没有很多次，后来帕柯要预备转学考试，就停掉了这种放学后的回家方式。',
            '辛堤今天破例想自己去涉起水来，他在带着土黄色的卵石上走着，肩上还背了照相机。天很热，辛堤的白衬衫外面却套了一件今年流行的男孩背心，那种格子的花样显得古怪而轻浮。我看看帕柯，她也正在看下面的河，于是我就对辛堤嚷起来。',
            '“辛堤，不要那样子走来走去了，你不是还有一堂课，快回去上，我跟帕柯在这儿等你。”',
            '“卡诺，不要催我吧，如今的帕柯已不是从前每天来上学的她了，让我留在这儿，明早帕柯就再不会来了。”辛堤仰着头朝我喊着，这时候阳光照在他单纯的脸上，显得他气色很好，水花在他脚边溅起，在阳光里亮得像透明的碎钻石，我看着这情景就异常的欢悦起来。',
            '帕柯在树下走来走去，一会儿她走过来，用手绕着我躺着的树干，摇晃着身体，一面又仰头在看树顶的天空。“卡诺，离开这儿已经一年多了，今早我坐车上山觉得什么都没有变过，连心情都是一样的，要不是辛堤这会儿背着我的相机，我真会觉得我们正是下课了，来这林子玩的，我没有离开过。”',
            '“柏柯，你早就离开了，你离去已不止一年了，今早在车站见你时，我就知道你真的走了有好久了，要不然再见你时不会有那样令人惊异的欢悦。”'
        ]},
        {title:'第二章',content:[
            '今天的帕柯穿得异常的好看，绸衬衫的领子很软的搭在颈上，裙子也系得好好的，还破例的用了皮带，一双咖啡色的凉鞋踏在枯叶上，看起来很调和，头发直直的披在肩上，又光滑又柔软。整个的帕柯给这普通的星期一早晨带来了假日的气息，我觉得反而不对劲起来。',
            '“帕柯，你全身都不对劲，除了那几张报纸之外，你显得那么陌生。”',
            '“卡诺，你这样说我似乎要笑起来，你知道么，早晨我起来时就一直告诉自己，今天的我不是去新庄，今天是回华冈去，我就迷惑起来，觉得昨天才上山去过，那地方对我并不意味着什么，我去也不是去做什么，整个心境就是那样的，我不喜欢那种不在乎的样子，就让自己换了一件新衣服，好告诉自己，今天是不同的。卡诺，你看我，我这做作的人。”“帕柯，不要在意那种没有来由的心情吧，毕竟回来的快乐有时是并不明显的，也不要来这儿找你的过去，你没有吧？柏柯。”',
            '“没有。卡诺，不是没有，我不知道。”',
            '“不要再想这些，我们去叫辛堤起来。”',
            '我从树上踩着低桠处的树枝下来，地上除了野生的凤尾草之外，便是一大片落叶和小枯树枝铺成的地，从去年入秋以来就没有人扫过这儿的叶子。树林之外有一条小径斜斜的通到那横跨小河的水泥桥上，然后过了桥，经过橘子园直通到学校的左方。我走到树边的斜坡上向下望着辛堤，他不在河里，辛堤已经拿着脱下来的背心，低着头经过那桥向我们的地方走来。',
            '林外的太阳依旧照耀着，一阵并不凉爽的风吹过我和帕柯站的斜坡，野草全都摇晃起来，辛堤已经走上了那伸延得很陡的小径，我由上面望着他，由于阳光的关系，我甚至可以清楚的看见他绣在衬衫口袋上的小海马。此时的帕柯站在我身旁，一双手搁在我肩上，我们同时注视着坡下的辛堤，他仍低着头走着，丝毫没有察觉我们在看他。四周的一切好似都突然寂寥起来，除了吹过的风之外没有一点声音，我们热切的注视着他向我们走近，此时，这一个本来没有意味着什么的动作，就被莫名其妙的蒙上了一层具有某种特殊意象的心境。辛堤那样在阳光下走近，就像带回来了往日在一起的时光，他将我们过去的日子放在肩上；走过桥，上坡，一步一步的向我们接近。',
            '“帕柯，这光景就像以前，跟那时一模一样，帕柯，你看光线怎么样照射在他的头发上，去年没有逝去，我们也没再经过一年，就像我们刚刚涉水上来，正在等着辛堤一样。”“是的，卡诺，只要我们记得，没有一件事情会真正的过去。”',
            '“帕柯，有时觉得你走了，有时又觉得你不过是请假，你还会来的。”',
            '“我不知道，卡诺，我没有认真想过。”',
            '辛堤走到尚差林子几步时，就很快的将肩上的背心一丢，口中嚷着热，走到树荫下便将身子像鸟似的扑到地上去。他自己并不知道，刚才他那样上坡时，带给了我们如何巨大的一种对过去时光的缅怀。',
            '“热坏了，卡诺，你带了咖啡没有？”'
        ]},
        {title:'第三章',content:[
            '“辛堤，你忘了，我中午留在学校才带咖啡的，今天是陪帕柯，整天没课。帕柯，你几点想回去？”',
            '“不知道，不管，累了就回去，你走过来。辛堤不要懒了，替我们拍照吧。”',
            '辛堤靠在那棵杨桐树的树根上，将背心罩着相机，开始装起软片来，我枕着帕柯的麻布手袋仰面躺着，而帕柯正满面无聊的在嚼一根酢浆草。我转一个身想看看河，但我是躺着的，看不见什么，只有树梢的阳光照射在帕柯的裙上，跳动着一个个圆圆的斑点。',
            '我们从上山到现在已快三个钟点了，我觉得异常的疲倦。树林很凉爽，相思树开满黄花，风一吹香气便飘下来，我躺着就想睡过去了，小河的水仍在潺潺的流着，远处有汽车正在经过公路。',
            '“卡诺，我在你书上写了新地址，这次搬到大直去了，你喜欢大直吗？”',
            '“帕柯，你这不怕麻烦的家伙，这学期你已经搬了三次家了。”',
            '“一切的感觉就是那样无助，好似那儿都不是我该定下来的地方，就是暑假回乡时也是一样。故乡古老的屋宇和那终年飘着蔗糖味的街道都不再羁绊我了，这种心境不是一天中突然来的，三年前它就开始一点一滴的被累积下来，那时我觉得长大了，卡诺，我已没有自己的地方了。”“帕柯。”',
            '“我喜欢用我的方式过自由自在的日子，虽然我自己也不确信我活得有多好。”',
            '“我不喜欢城市，尤其是山下那个城，但我每天都回到那里去，帕柯，我是一个禁不起流浪的人。”'
        ]},
        {title:'第四章',content: [
            '“我不会，我每日放学就在街上游荡，我就跟他们一块吃小摊逛街直到夜深。”',
            '那时我躺得不想起来，地上的湿气透过小草和枯叶慢慢的渗到背脊里去，我觉得两肩又隐约的发痛起来，就随手拉了一张报纸垫在身下，辛堤已装好软片向我们走来。“挪过来一点，卡诺，你脸上有树叶的影子，坐到帕柯左边去，你总不会就这样躺着拍照吧。”',
            '“就让我躺着吧，毕竟怎么拍是不重要的。”',
            '时间已近正午了，我渐渐对这些情景厌烦起来，很希望换个地方，我是个不喜欢拍照的人，觉得那是件做作的事情。“卡诺，你这不合作的朋友，帕柯一年都没来一次，你却不肯好好跟她一起拍些照片，卡诺——”',
            '辛堤生气起来，一脸不高兴的样子，帕柯看见就笑了。“辛堤，好朋友，我们去吃冰吧，不要跟卡诺过不去，毕竟我们没有什么改变，何必硬把它搞得跟以往有什么不同呢。”',
            '于是我们离开了树林，抱着许多书，穿过桥，上坡，再经过一个天主堂就到大路了。从树林中走到正午的天空下总是不令人欢悦的，太阳被云层遮住，见不到具体的投射下来的光线，但放眼望去，在远处小山的上面，那照耀得令人眼花的天空正一望无际的展开着。大路上静静的停放着几辆车子，路旁的美洲菊盛开着火焰似的花朵，柏油路并没有被晒得很烫，但我走在上面，却因为传上来的那一点微热，使人从脚下涌起一股空乏的虚弱来。'
        ]},
        {title:'第五章',content: [
            '到冰店的路并不很长，我们只需再经过一个旧木堆，绕过一家洗衣店和车站就到了，我们懒散的走着，有时踢踢石头，路上偶尔有相识的同学迎面走过。我们三人都没说话，经过木堆时，嗅到腐木的味道，一切就更真实起来了。',
            '“我们干脆提早一点吃饭去，我想去那家小店。”“又要多走四十几步路，帕柯，你最多事。”',
            '小店的墙上贴了许多汽水广告和日历女郎的照片，另外又挂了许多开张时别人送的镜子。以前帕柯常常嘲笑这家土气的小店，今日却又想它了。',
            '今天的学生不多，我们坐在靠街的一张桌子，一面等东西吃一面看着公路上来来往往的车辆，刚才的太阳晒得我头痛，我觉得该去照照镜子，仔细去看看自己的脸，于是我就挪过椅子，对着一面画有松鹤的镜子打量起自己来，真是满面疲乏的神色了。回身去看他们，帕柯正在喝茶，辛堤在另一桌与几个男同学谈话，样子怪有精神的，这时蛋花汤来了，他就坐回来吃得很起劲。帕柯拿起筷子在擦，动作慢慢的，脸上露出思索的表情，但她没说什么。',
            '“卡诺，我们吃完了去阳明山，走小路去，底片还有好多呢。”辛堤吃着东西人就起劲了。'
        ]}
    ]
})


db.books.insert({
    title:'他的国',
    author: '韩寒',
    point: '9.3',
    price:'2389',
    img:'http://localhost:8080/images/book/book7.jpg',
    old_price: '5300',
    intro: '《他的国》讲述了一个荒诞而扭曲的故事——亭林镇领导破坏小镇原有的宁静招商引资，开了家印刷厂，排放出有害化学物质使周围动物异常变异，领导又引导居民把变大的动物卖给外地人吃。这个故事里的夸张和超现实像是卡夫卡，讽刺像是晚清小说，那么结合在一起就是部现代的“官场变形记”。',
    label: ['小说','超现实','青春'],
    catalog:['第一章','第二章','第三章','第四章'],
    comments:[
        {username:'算法',user_head_img:'',time:'2017-07-30',content:'关系复杂，人物写的生动活泼。里面的白嘉轩正直，不记仇，但骨子里还是有封建的思想。鹿兆海，鹿兆鹏，白灵对各自的党忠心真诚。'},
        {username:'规划我二人图有',user_head_img:'',time:'2017-07-20',content:'这本书情感很真实，回味无穷。'},
        {username:'热让他',user_head_img:'',time:'2017-05-07',content:'很喜欢。'},
        {username:'三顿饭',user_head_img:'',time:'2017-04-07',content:'很幽默的文字啊！'}
    ],
    words:'184.9万字',
    grounding_time:'2013-03-01',
    company:'天津人民出版社',
    id:'5467530211106',
    contents:[
        {title:'第一章',content: [
            '左小龙骑着他的摩托车绕着亭林镇开了三圈，因为这个下午没有任何事情可以做。昨天他听说燃油将要涨价，便在加油站加满了汽油，今天一看涨价的是柴油，心情就有些郁闷。首先他觉得自己是做大事的人，不应该去贪图这些小便宜，这不是他的性格，但最郁闷的是，既然决定义无反顾地去贪了，结果却是一如既往地没有贪着。',
            '这个下午阳光高照。一切春天的感觉之所以美好是因为人总是在冬天想的比较多。这部摩托车是左小龙新买来的，花费了自己几乎所有的积蓄，。这意味着不能摔车，因为没钱维修。但是左小龙从骑摩托车开始到现在从来没有摔过，他天生有强大的平衡能力，除了利弊轻重和人际往来他经常平衡不好外，摩托车和自行车他从来都能完美平衡。但是自行车对他来说太慢了，他在很小的时候，已经开始开摩托，他风雨无阻有事没事都要骑，千里江陵一日还。这部摩托车只开了一年，是因为到里程数报废了，折算下来等于饶了地球好几圈。',
            '他是那么喜欢摩托车，因为他觉得那是男人力量的延伸。我相信如果枪支开放，他一定拥有一支。因为那同样是力量的延伸。可惜的是，不仅枪支不开放，连摩托车都禁了。看来政策的宗旨是为了让男人难以延伸。',
            '这春天的气息浓郁得让摩托车引擎的空燃比都发生了变化。左小龙想找个地方去调整一下他的摩托车，因为没有以前快了。亭林镇是个很小的地方，很迷你，反正就是迷你，不能迷我，所以当地的有为青年都去了大城市里。剩下的都是阿猫阿狗们，不大气，不成大气，不成大气候。',
            '但左小龙觉得，他不能接受大城市，大城市虽然大，但容不下一台摩托车。小地方虽然小，但可以让你随意停。他发现路边新开了一个修车铺，开进去后缓慢放下支脚，环看四周。左手边有一个扳手，长三分米。正对着是一扇窗，窗外是他们的中央院子，院子外面放着柴油桶，可以爬上去然后翻出这个房子，右手边是清洗化油器的汽油，一米外有一包烟和打火机，打火机是有用的因为桌子上还有个烟屁股。地上插着插座正在烧水，水会在两分钟开。',
            '左小龙暗自想，这环境真是太容易防身了。如果从屋子里出来的是他的仇人，在仇人操家伙前，他可以有扳手防身，如果敌人的家伙比自己的家伙长，那水炉砸过去敌人肯定够呛，屋里的人被制服以后，如果外面涌来他的帮手，左小龙则可以用打火机点燃化油器边的汽油，用扳手砸开窗，跳出去以后顺着柴油桶一蹬，然后柴油桶就倒地，自己则可以翻出围墙，顺利脱身。',
            '真是很安全，在这里没人可以暗算我。左小龙的内心发言道。',
            '突然间背后一只手拍在左小龙的肩膀上，左小龙吓了一大跳，摩托车都差点没扶住。背后的人说道：“修摩托车啊。”'
        ]},
        {title:'第二章',content:[
            '左小龙差点被自己分泌的肾上腺素呛到。他镇定道：“嗯，调整一下。这个摩托车有点慢了，我觉得是空燃比有问题。”',
            '修理工把摩托车推进了屋子，发动以后闻了闻味道，说：“没问题啊。我骑一下。”',
            '左小龙略有犹豫，毕竟摩托车就像他的女人，被别人骑一骑心里肯定不痛快。但转念他又想，这就好比自己的女人患了妇科疾病，但正好碰到个男医生，那也没有办法。',
            '修理工上车以后笨拙的在屋子里调了个头，左小龙生怕他在自己的修理铺里就撞了。但毕竟已经答应了，碍于面子也不能反悔。',
            '修理工出了铺子以后就是一大下的油门，前轮离地了一米高。左小龙看得没有想法，只以为对方在骑马。修理工就这么抬着前轮开了五十米，缓缓将前轮放下，开到了左小龙的面前，说：“我知道原因了，是后轮的胎压太低了，所以你觉得车有点慢。我帮你把轮胎压力调整一点就好了，但也不能打得太多，到了夏天了胎压会升高得很快，容易爆胎。”',
            '左小龙还没回过神来，点了点头。',
            '经过了调整以后，左小龙的确感觉车子比原来好开很多。他于是开车前往雕塑园找大帅。这一路要穿过整个熟悉的地方，可以开小差，因为开错路也没有关系，他对这个地方太熟悉了。穿过了死气沉沉的人群，他来到了雕塑园。',
            '雕塑园被废弃了很久。原来这里想做一个亚洲最大的雕塑园，虽然当地老百姓都很难理解，周边城市的人是否会驱车一百里来一个莫名其妙的地方看一些雕塑。而前期所呈现的雕塑风格也和周围化工区里的破工厂厂雕没什么区别。在这个雕塑园建设到抽象风格向写实主义过渡的阶段，资金出了问题，政府又接管了它。这个巨大的公园里就只有废弃的简易民工宿舍和一些傻逼呵呵的雕塑。左小龙的职责就是看守这个雕塑园，左小龙是苟且喘息的开发商指定的看守者，他的朋友大帅则是当地开发办请来看这个雕塑园的。虽然一个是开发商，一个是开发办，而且都是看守雕塑园，但区别就是，在这个地方没有人问津的时候，开发商请来的左小龙等于是园长，开发办请来的大帅等于园书记。雕塑园大到快一望无际，长满了各种种类的植物，很多海鸥一般奇怪的大鸟经常从园子最中央草木最盛处扑腾而起，飞往十公里外的海边。有些都快长成老鹰的大小。当然，就这个问题大帅和左小龙有过争执，因为大家都没见过老鹰，大帅想象中的老鹰是合理大小，但左小龙想象中的老鹰快赶上滑翔伞那么大了，后来争论的结果是左小龙妥协了，说老猫头鹰也算老鹰吧，我见过猫头鹰，就算差不多大吧。这样大家也都能接受。',
            '雕塑园里还有各种各样的动物，野兔、野狗、野鸡、野鸭都在这里被他们两人发现过。当然，不排除是家兔、家狗、家鸡、家鸭不小心到了这里以后,不注意打理自己的外表而被误会了。那些天马行空一样乱窜到底是天生的野物还是不拘小节的家禽，这个也都没有定论，因为两人从来没有活捉过一个。但是有一天，左小龙看见了一头野猪。大帅就没有那么幸运，他基本上看见的都是野猫。但是不管怎么样，这个地方很野。',
            '通往雕塑园有两条路，左小龙往往选择比较难走的路，此时他就自觉是一个越野摩托车手，一切惊起的野物都被认为是其他车手，最后他赢了。所以每次他的朋友见到他都是不知原因的春风满面。那是因为左小龙把禽兽都打败了。',
            '他找到大帅，对他说：“大帅啊，我有一个想法，但我现在来不及和你说了，我有个事，我得去找一下泥巴。”',
            '说完就拧油门离开了。'
        ]},
        {title:'第三章',content:[
            '泥巴是一个纯情的姑娘。其实没有人知道什么是纯情，纯情就是一种腔调。但泥巴就是拥有这样的腔调。这世界上没有纯情的姑娘，只有疑似纯情。',
            '泥巴很漂亮，不少人追求，都未遂。未遂的原因是泥巴都觉得他们不遂，要么上身不遂，要么下身不遂，泥巴看人注重精神。在她眼里，没有独特精神魅力的男人们都是不健全的。',
            '她的这个性格的养成很难解释，一般难以理解的性格都是由难以理解的简单原因构成，连环杀人犯可能只是因为小时候被人很痛的踩了一脚。泥巴是因为小时候看过一部电影，所以改变了她的爱情观。但可悲的是，她不记得自己究竟看过一个什么电影了。这就意味着，她没有机会再看一遍，修正自己成长中的理解错误。',
            '泥巴喜欢画画和幻想，这两者相辅相成，消耗大量时间。她可以边画边想，也可以边想边画，可以根据自己的画再幻想，也可以根据自己的幻想画画，这么着，一天就过去了。泥巴学了很长时间的美术，以前在小学的时候和其他队员一起画画，一天他们去画一匹马，但纯情的姑娘在这个时候就显露出自己的与众不同来，所有男男女女交的作业中，唯独泥巴画的马是不带xx巴的。泥巴说，多难为情啊。',
            '于是，她的纯情开始被传诵。',
            '可能，可能，很多，很多年后大家会意识到他们错了。其他人只是在写生，有一画一，有老二画老二，她们中的很多人甚至都不知道那是xx巴，但至少泥巴已经知道了。而这居然构成了她纯情的最初证据。',
            '泥巴走路慢条斯理，泥巴说话细声细气，泥巴的一切都告诉大家，她是一个好姑娘。她自己把自己弄成了画。',
            '但泥巴就是喜欢左小龙。'
        ]},
        {title:'第四章',content: [
            '泥巴早在学校的时候就爱上到处溜达的左小龙，她都能分辨自己喜欢的男人的摩托车声和一般阿猫阿狗的摩托车声有什么区别，哪怕他们开的是同一款车。在泥巴看来，这引擎声都是性感的。泥巴在学校的时候最喜欢在五楼的阳台上观望前方，前面就是一个溜冰场，左小龙在那个时候喜欢溜冰——可能他觉得，溜冰至少比跑步快，所以，溜冰也是男人力量的延伸。但是泥巴还是喜欢他的白色摩托车。当时所有人的摩托车不是红的就是黑的，唯独左小龙的摩托车是白的。',
            '左小龙成天叼着一只烟，戴着帽子，骑着摩托车无所事事。这是一种真正的无所事事，无所事事到让外人看着就仿佛是在谋划着干大事。',
            '泥巴在一年前向左小龙表达过她的情意。泥巴给左小龙画了一张画，画里的左小龙唯一的改变就是那香烟变成了雪茄。泥巴把画递给了左小龙。左小龙正在给自己的白色摩托车充气，他接过一看后说，恩，不错，就是香烟粗了点。多少钱？',
            '泥巴说：“不要钱。”',
            '左小龙把烟掐了说：“嗯，我最近穷，要钱没有，要命根子有一条。”',
            '泥巴深深低下了头。但内心想，这就是我喜欢的男人。'
        ]}
    ]
})

db.books.insert({
    title:'陪你到世界终结',
    author: '夏茗悠',
    point: '9.4',
    price:'36434',
    img:'http://localhost:8080/images/book/book10.jpg',
    old_price: '56786',
    intro: '《陪你到世界终结》是夏茗悠已在《新蕾STORY101》连载完的主打连载的长篇，并且是《三年k班》的续篇。 对于麦芒同学的死党而言，有她的生活完全可以写成一部血流加泪流成河的诗史，因为她隔三差五就会干出点不可理喻的邪门事。',
    label: ['小说','言情','青春'],
    catalog:['第一章','第二章','第三章','第四章'],
    comments:[
        {username:'算法',user_head_img:'',time:'2017-07-30',content:'麦芒是外星人吧！'},
        {username:'麦芒',user_head_img:'',time:'2017-07-20',content:'这本书情感很真实，回味无穷。'},
        {username:'热让他',user_head_img:'',time:'2017-05-07',content:'很喜欢。'},
        {username:'三顿饭',user_head_img:'',time:'2017-04-07',content:'很幽默的文字啊！'}
    ],
    words:'184.9万字',
    grounding_time:'2011-10-31',
    company:'新世界出版社',
    id:'9787510412851',
    contents:[
        {title:'第一章',content: [
            '梅雨季节终于临近尾声。',
            '淡蓝色天空浮着棉白的云，气温疾速回升。',
            '教学楼下墙根边的低矮灌木爆出一整枝条的粉色小花，有同年级其他班的女生结伴拿着数码相机照相。祁寒在四楼，撑着头，从窗口居高临下看她们摆出各种奇怪的拍摄姿势。',
            '周五下午的社团活动时间，本该在篮球场挥汗如雨，却被数学老师挑出来塞进竞赛班。',
            '祁寒不禁想苦笑。',
            '搞什么啊？数学竞赛？那么严肃正经伟大的事业是怎么和我这种只求苟全性命于乱世的废柴扯上关系的？',
            '如果老师看见男生们奔出教室前向祁寒投来的深表同情或幸灾乐祸的目光，大概就不会觉得自己厚待这位“得意门生”了。',
            '虽然擅长这门学科，但并不意味着能牺牲真正的爱好换成在数学中投入多少兴趣，不像现在坐在讲台左侧的那位高年级学长。',
            '上学期就在远翔楼下看见喜报。F大的自主招生，被直接录取的全校只有他一个。真正可以高枕无忧了。但是这学期还是一直在学校看见他。',
            '第一次碰见时和他用“你好”作为谈话的开端，后来随着见面次数的增多，变成了在楼上看见从楼下经过会用“嘿”去打招呼的人。',
            '知道他并不是因为想旁观同窗的奋斗而在学校闲逛的变态，因为他穿行在办公室和高一教学楼的时间比呆在高三远翔楼的时间还多。自从挖来这个“剩余劳动力”后，竞赛班老师乐得清闲，讲一个小时的课就把后面的事丢给这位“助教”回办公室去电脑上看《大长今》了。',
            '所有答疑工作他都能应付下来，头脑不是一般好。',
            '讲台下高一生在做练习卷的同时，他也在讲台上写写划划。有一次课间祁寒偷偷把平摊的书翻过去，是本大学教学教材。',
            '接触不多的人都觉得他完美得无可挑剔，但人总会有缺陷。',
            '相处一段时间后也不难发现，他只是个行走的冰箱，如果不是自己整天热情的对他呼来唤去，甚至偶尔呛他几句，他大概不会和这个班任何学生有交集。',
            '而现在，课程结束后他也会把一堆数学材料拢起来收进书包里，接着问祁寒：“今天你是乘130还是打车回家？”',
            '取决于放课时间。',
            '如果赶上下班高峰期，公交车挤起来会很艰难。',
            '今天，祁寒看看表，才四点半。',
            '“一起乘130吧。”',
            '——和谢井原是这样的交集。'
        ]},
        {title:'第二章',content:[
            '走向车站的过程中，本来还在讨论某道例题的其他做法，井原的手机响起来。',
            '果然和他本人一样，呆板的默认铃声。',
            '祁寒坚持不去做偷听癖，扭过头喊着斜前方的同班女同学。',
            '对方回答自己“怎么也这么晚回去”的同时，瞥见自己身边正边走边接听电话的人，脸瞬间红透。',
            '为什么现在女生会喜欢这种石雕一样的冷漠男？',
            '难道仅仅因为是学长吗？',
            '听说在三年级同样人气很高。',
            '祁寒不禁有点疑惑的看向他。',
            '和自己身高相仿，所以头一转最先看见贴在耳边的手机翻盖上的大头贴。',
            '两个人。',
            '男生女生。亲密度五颗星。',
            '情侣！——绝对不会有误差的判断。',
            '等到井原阖上手机，祁寒笑嘻嘻地点着手机问：“女朋友啊？蛮可爱的嘛。”',
            '井原愣了一秒，才意识到他指的是大头贴上的女孩：“我表妹。每次撕掉她又会贴新的上去，执着度超过牛皮癣的广告张贴员。”',
            '第一次听到他无奈的语气。',
            '“读小学？”',
            '“和你一样，也高一了。”刚正经回答就反应过来，“在你眼里我像是那种有小学生女友的人吗？”',
            '逞了一时嘴快的祁寒朗声笑起来。',
            '男生的调侃下隐藏着不易觉察的攀比，不能和女生间那种一起笼统的称为嫉妒。',
            '只在意识到身边很多女孩子都把视线移开投向另一个身影时，稍微有一点能体会肉骨头被抢走的心情。',
            '关于“小学生女友”的话题几乎立刻就结束了。'
        ]},
        {title:'第三章',content:[
            '井原提起他妈妈刚才打过来的电话，“说昨天家里酱油就用完了，让我带一瓶回去，等会儿下车时再帮忙提醒我一遍”。即使是这样完全不适合18岁男生来处理的事情，他说在嘴边也没表现出丝毫困扰。',
            '连酱油都可以很自然的应付的人，究竟是怎样的女生能够造成他的无奈语调？',
            '下了楼梯，穿过校门，又过了马路。',
            '再把话题重新捡起来会不会显得别扭？',
            '在站台上停下来，井原听见身边比自己低两个年级的男生很突兀地问：“在我们学校吗？……你表妹。”',
            '顿了一下：“不是的。他在阳明中学。”',
            '“哦。”不知道该怎么回答了，有点没话找话，“那所学校离你家很近啊。”注意到井原打量自己的目光有点变化，又追加了一句更自然的，“当初我也想过考阳明，后来我妈说那学校女生太漂亮了不让我去，说我去了肯定要谈恋爱。”',
            '“那你最后来圣华是为了向你妈证明：在圣华也可以照谈不误？”',
            '“别拿这个亏我。最近被女生吵得头痛。”',
            '“谁让你小小年纪脚踩好几条船。”',
            '“你有资格说我？我本来不想提起京某卉和柳某川的。”把对方的绯闻对象全翻出来了。“三年级的金三角啊金三角！”居然还像唱歌一样念起来。',
            '井原冷眼的剜他一眼。“给我够了。”',
            '“你表妹中考多少分进的阳明啊？”',
            '井原迟疑的时间又长了一点。在这个空档间，130路公交车缓缓地靠近了站台。',
            '已经是第二次了，太明显了。',
            '不过说说也无妨。',
            '“517分。到目前为止成绩还可以，也是从小立志考F大。但……”',
            '井原不知想起了什么，陷入了沉思，“我倒不想给她任何压力，只希望她按自己的意愿去选择，坚信自己的判断，不必随波逐流，无忧无虑就好。”',
            '祁寒注意到，不知不觉，井原竟然露出了微笑。',
            '之前不算短的交往时间，让祁寒早已信服，此人不是面神经麻痹就是面肌肉僵化，任何时候都只有一副冷漠神情。',
            '听着他说“无忧无虑就好”，甚至有一些感动。可事后仔细一想，井原好象不是她爸妈吧？压力也不是他有资格给的吧？这都哪儿跟哪儿啊！'
        ]},
        {title:'第四章',content: [
            '阳明中学一年9班的学生正如常在上化学课，忽然整间实验室弥漫起一股奇怪的焦味，大家左右张望窃窃私语，老师也不由得放慢了讲课速度，皱着眉四下环顾。',
            '原本趴在桌上睡觉的许藤迁梦见自己遭遇火灾，终于在现实中被呛醒，谁知现实更加不得了，自己抽屉里正呲呲的往外冒着白烟。男生吓得不轻，险些从椅子上翻下去，不过立刻就明白了大概事态，意识到还没下课，压低了声音问同桌的女生：“教主，你怎么又犯抽了啊？”',
            '麦芒一边旁若无人地继续转动不知从哪儿找来的竹签，一边满脸坦然答道“没犯抽啊，在用酒精灯烤龙虾呢。”',
            '“烤、烤、烤龙虾？”男生揉揉眼睛，彻底醒了过来。',
            '“嗯。就是你上课前送我的那只啊。”',
            '“……”男生不禁感到内心无力，“我送你不是让你烤啊，烤来干嘛？”',
            '“吃呗。”',
            '“……”败给你了。',
            '不等许藤迁着手阻止女生的失常行径，讲台上的化学老师已经怒不可遏咬牙切齿地大吼道：“许藤迁！你又在干什么！站起来！”',
            '怨不得老师看走眼。',
            '白烟确实是从自己抽屉里冒出来的。',
            '更何况自己还是“屡教不改的惯犯”。',
            '许藤迁觉得和麦芒同桌以来，自己的生活已经完全可以写成一部血流加泪流成河的诗史。',
            '被化学老师和班主任联合镇压了一整个大课间，许藤迁头重脚轻地苦着脸回到教室。所有人都了然于胸，投来同情的目光。',
            '经过前桌时，韩一一伸出手拍了拍他的手臂：“请节哀。”',
            '许藤迁落座：“好歹我也算一介校草吧，怎么就老活得像菟丝花一样悲情。”转头向左侧的麦芒，“你说说，这已经是我第几次替你背黑锅了？我冤不冤哪？”',
            '麦芒这时已经明白自己又干了坏事，满脸堆笑：“不冤不冤，你要坚强乐观！最起码龙虾是你抓来送我的嘛。”',
            '许藤迁决定跟她彻底解释清楚这个问题，转过身郑重地以正面对着她：“你看吧，正常女生，收到别人赠送的龙虾只会用线绑起来玩，一般人会拿来烤吗？”',
            '“怎么玩？”女生露出懵懂的表情。',
            '又来了！',
            '“就是……看它爬来爬去……吧……”男生边说边觉得没有说服力。果然，对方听完后还是没有任何表情变化。',
            '趴在桌上打瞌睡的韩一一终于听不下去了，回过头对许藤迁叹了口气：“你就不该把她当正常女生，正常女生能收到龙虾这种礼物吗？”',
            '许藤迁愣了三秒，转回身，欲哭无泪地撑着额角：“对不起，是我的错。”',
            '大脑不知道是什么构造，隔三差五会干点不可理喻的邪门事，殃及无辜群众之后，一定会想不通错在何处从而理直气壮，并对受害者强行实施“你要坚强乐观”的精神挟持。',
            '麦芒绝对是做邪教教主的科。死党韩一一下过这样的定义。'
        ]}
    ]
})


user用户： 
{username: '',password: '',shelf: []}




