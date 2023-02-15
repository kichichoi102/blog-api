import logger from '../../logger';

export default async client => {
  // Deletes ALL existing entries
  return client('comments').then(function () {
    // Inserts seed entries
    return client('comments').insert([
      {
        postId: 1,

        name: 'id labore ex et quam laborum',
        userId: 1,
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
      },
      {
        postId: 1,

        name: 'quo vero reiciendis velit similique earum',
        userId: 2,
        body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
      },
      {
        postId: 1,

        name: 'odio adipisci rerum aut animi',
        userId: 3,
        body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
      },
      {
        postId: 1,

        name: 'alias odio sit',
        userId: 1,
        body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
      },
      {
        postId: 1,

        name: 'vero eaque aliquid doloribus et culpa',
        userId: 1,
        body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
      },
      {
        postId: 2,

        name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        userId: 1,
        body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
      },
      {
        postId: 2,

        name: 'repellat consequatur praesentium vel minus molestias voluptatum',
        userId: 1,
        body: 'maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor',
      },
      {
        postId: 2,

        name: 'et omnis dolorem',
        userId: 1,
        body: 'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque',
      },
      {
        postId: 2,

        name: 'provident id voluptas',
        userId: 1,
        body: 'sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus',
      },
      {
        postId: 2,

        name: 'eaque et deleniti atque tenetur ut quo ut',
        userId: 1,
        body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis',
      },
      {
        postId: 3,

        name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
        userId: 1,
        body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
      },
      {
        postId: 3,

        name: 'modi ut eos dolores illum nam dolor',
        userId: 1,
        body: 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit',
      },
      {
        postId: 3,

        name: 'aut inventore non pariatur sit vitae voluptatem sapiente',
        userId: 1,
        body: 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et',
      },
      {
        postId: 3,

        name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae',
        userId: 1,
        body: 'vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum',
      },
      {
        postId: 3,

        name: 'debitis magnam hic odit aut ullam nostrum tenetur',
        userId: 1,
        body: 'nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia',
      },
      {
        postId: 4,

        name: 'perferendis temporibus delectus optio ea eum ratione dolorum',
        userId: 2,
        body: 'iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis',
      },
      {
        postId: 4,

        name: 'eos est animi quis',
        userId: 2,
        body: 'consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore',
      },
      {
        postId: 4,

        name: 'aut et tenetur ducimus illum aut nulla ab',
        userId: 2,
        body: 'veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias',
      },
      {
        postId: 4,

        name: 'sed impedit rerum quia et et inventore unde officiis',
        userId: 2,
        body: 'doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut',
      },
      {
        postId: 4,

        name: 'molestias expedita iste aliquid voluptates',
        userId: 2,
        body: 'qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore',
      },
      {
        postId: 5,

        name: 'aliquid rerum mollitia qui a consectetur eum sed',
        userId: 2,
        body: 'deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus',
      },
      {
        postId: 5,

        name: 'porro repellendus aut tempore quis hic',
        userId: 2,
        body: 'qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum',
      },
      {
        postId: 5,

        name: 'quis tempora quidem nihil iste',
        userId: 2,
        body: 'voluptates provident repellendus iusto perspiciatis ex fugiat ut\nut dolor nam aliquid et expedita voluptate\nsunt vitae illo rerum in quos\nvel eligendi enim quae fugiat est',
      },
      {
        postId: 5,

        name: 'in tempore eos beatae est',
        userId: 2,
        body: 'repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur',
      },
      {
        postId: 5,

        name: 'autem ab ea sit alias hic provident sit',
        userId: 2,
        body: 'sunt aut quae laboriosam sit ut impedit\nadipisci harum laborum totam deleniti voluptas odit rem ea\nnon iure distinctio ut velit doloribus\net non ex',
      },
      {
        postId: 6,

        name: 'in deleniti sunt provident soluta ratione veniam quam praesentium',
        userId: 2,
        body: 'incidunt sapiente eaque dolor eos\nad est molestias\nquas sit et nihil exercitationem at cumque ullam\nnihil magnam et',
      },
      {
        postId: 6,

        name: 'doloribus quibusdam molestiae amet illum',
        userId: 3,
        body: 'nisi vel quas ut laborum ratione\nrerum magni eum\nunde et voluptatem saepe\nvoluptas corporis modi amet ipsam eos saepe porro',
      },
      {
        postId: 6,

        name: 'quo voluptates voluptas nisi veritatis dignissimos dolores ut officiis',
        userId: 3,
        body: 'voluptatem repellendus quo alias at laudantium\nmollitia quidem esse\ntemporibus consequuntur vitae rerum illum\nid corporis sit id',
      },
      {
        postId: 6,

        name: 'eum distinctio amet dolor',
        userId: 3,
        body: 'tempora voluptatem est\nmagnam distinctio autem est dolorem\net ipsa molestiae odit rerum itaque corporis nihil nam\neaque rerum error',
      },
      {
        postId: 6,

        name: 'quasi nulla ducimus facilis non voluptas aut',
        userId: 3,
        body: 'consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et',
      },
      {
        postId: 7,

        name: 'ex velit ut cum eius odio ad placeat',
        userId: 3,
        body: 'quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut',
      },
      {
        postId: 7,

        name: 'dolorem architecto ut pariatur quae qui suscipit',
        userId: 3,
        body: 'nihil ea itaque libero illo\nofficiis quo quo dicta inventore consequatur voluptas voluptatem\ncorporis sed necessitatibus velit tempore\nrerum velit et temporibus',
      },
      {
        postId: 7,

        name: 'voluptatum totam vel voluptate omnis',
        userId: 3,
        body: 'fugit harum quae vero\nlibero unde tempore\nsoluta eaque culpa sequi quibusdam nulla id\net et necessitatibus',
      },
      {
        postId: 7,

        name: 'omnis nemo sunt ab autem',
        userId: 3,
        body: 'omnis temporibus quasi ab omnis\nfacilis et omnis illum quae quasi aut\nminus iure ex rem ut reprehenderit\nin non fugit',
      },
      {
        postId: 7,

        name: 'repellendus sapiente omnis praesentium aliquam ipsum id molestiae omnis',
        userId: 3,
        body: 'dolor mollitia quidem facere et\nvel est ut\nut repudiandae est quidem dolorem sed atque\nrem quia aut adipisci sunt',
      },
      {
        postId: 8,

        name: 'sit et quis',
        userId: 3,
        body: 'aut vero est\ndolor non aut excepturi dignissimos illo nisi aut quas\naut magni quia nostrum provident magnam quas modi maxime\nvoluptatem et molestiae',
      },
      {
        postId: 8,

        name: 'beatae veniam nemo rerum voluptate quam aspernatur',
        userId: 3,
        body: 'qui rem amet aut\ncumque maiores earum ut quia sit nam esse qui\niusto aspernatur quis voluptas\ndolorem distinctio ex temporibus rem',
      },
      {
        postId: 8,

        name: 'maiores dolores expedita',
        userId: 4,
        body: 'unde voluptatem qui dicta\nvel ad aut eos error consequatur voluptatem\nadipisci doloribus qui est sit aut\nvelit aut et ea ratione eveniet iure fuga',
      },
      {
        postId: 8,

        name: 'necessitatibus ratione aut ut delectus quae ut',
        userId: 4,
        body: 'atque consequatur dolorem sunt\nadipisci autem et\nvoluptatibus et quae necessitatibus rerum eaque aperiam nostrum nemo\neligendi sed et beatae et inventore',
      },
      {
        postId: 8,

        name: 'non minima omnis deleniti pariatur facere quibusdam at',
        userId: 4,
        body: 'quod minus alias quos\nperferendis labore molestias quae ut ut corporis deserunt vitae\net quaerat ut et ullam unde asperiores\ncum voluptatem cumque',
      },
      {
        postId: 9,

        name: 'voluptas deleniti ut',
        userId: 4,
        body: 'facere repudiandae vitae ea aut sed quo ut et\nfacere nihil ut voluptates in\nsaepe cupiditate accusantium numquam dolores\ninventore sint mollitia provident',
      },
      {
        postId: 9,

        name: 'nam qui et',
        userId: 4,
        body: 'aut culpa quaerat veritatis eos debitis\naut repellat eius explicabo et\nofficiis quo sint at magni ratione et iure\nincidunt quo sequi quia dolorum beatae qui',
      },
      {
        postId: 9,

        name: 'molestias sint est voluptatem modi',
        userId: 4,
        body: 'voluptatem ut possimus laborum quae ut commodi delectus\nin et consequatur\nin voluptas beatae molestiae\nest rerum laborum et et velit sint ipsum dolorem',
      },
      {
        postId: 9,

        name: 'hic molestiae et fuga ea maxime quod',
        userId: 4,
        body: 'qui sunt commodi\nsint vel optio vitae quis qui non distinctio\nid quasi modi dicta\neos nihil sit inventore est numquam officiis',
      },
      {
        postId: 9,

        name: 'autem illo facilis',
        userId: 4,
        body: 'ipsum odio harum voluptatem sunt cumque et dolores\nnihil laboriosam neque commodi qui est\nquos numquam voluptatum\ncorporis quo in vitae similique cumque tempore',
      },
      {
        postId: 10,

        name: 'dignissimos et deleniti voluptate et quod',
        userId: 4,
        body: 'exercitationem et id quae cum omnis\nvoluptatibus accusantium et quidem\nut ipsam sint\ndoloremque illo ex atque necessitatibus sed',
      },
      {
        postId: 10,

        name: 'rerum commodi est non dolor nesciunt ut',
        userId: 4,
        body: 'occaecati laudantium ratione non cumque\nearum quod non enim soluta nisi velit similique voluptatibus\nesse laudantium consequatur voluptatem rem eaque voluptatem aut ut\net sit quam',
      },
      {
        postId: 10,

        name: 'consequatur animi dolorem saepe repellendus ut quo aut tenetur',
        userId: 4,
        body: 'illum et alias quidem magni voluptatum\nab soluta ea qui saepe corrupti hic et\ncum repellat esse\nest sint vel veritatis officia consequuntur cum',
      },
      {
        postId: 10,

        name: 'rerum placeat quae minus iusto eligendi',
        userId: 5,
        body: 'id est iure occaecati quam similique enim\nab repudiandae non\nillum expedita quam excepturi soluta qui placeat\nperspiciatis optio maiores non doloremque aut iusto sapiente',
      },
      {
        postId: 10,

        name: 'dolorum soluta quidem ex quae occaecati dicta aut doloribus',
        userId: 5,
        body: 'eum accusamus aut delectus\narchitecto blanditiis quia sunt\nrerum harum sit quos quia aspernatur vel corrupti inventore\nanimi dicta vel corporis',
      },
      {
        postId: 11,

        name: 'molestias et odio ut commodi omnis ex',
        userId: 5,
        body: 'perferendis omnis esse\nvoluptate sit mollitia sed perferendis\nnemo nostrum qui\nvel quis nisi doloribus animi odio id quas',
      },
      {
        postId: 11,

        name: 'esse autem dolorum',
        userId: 5,
        body: 'et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mollitia fugit qui repellat expedita sunt\naut fugiat vel illo quos aspernatur ducimus',
      },
      {
        postId: 11,

        name: 'maiores alias necessitatibus aut non',
        userId: 5,
        body: 'a at tempore\nmolestiae odit qui dolores molestias dolorem et\nlaboriosam repudiandae placeat quisquam\nautem aperiam consectetur maiores laboriosam nostrum',
      },
      {
        postId: 11,

        name: 'culpa eius tempora sit consequatur neque iure deserunt',
        userId: 5,
        body: 'et ipsa rem ullam cum pariatur similique quia\ncum ipsam est sed aut inventore\nprovident sequi commodi enim inventore assumenda aut aut\ntempora possimus soluta quia consequatur modi illo',
      },
      {
        postId: 11,

        name: 'quas pariatur quia a doloribus',
        userId: 5,
        body: 'perferendis eaque labore laudantium ut molestiae soluta et\nvero odio non corrupti error pariatur consectetur et\nenim nam quia voluptatum non\nmollitia culpa facere voluptas suscipit veniam',
      },
      {
        postId: 12,

        name: 'et dolorem corrupti sed molestias',
        userId: 5,
        body: 'cum esse odio nihil reiciendis illum quaerat\nest facere quia\noccaecati sit totam fugiat in beatae\nut occaecati unde vitae nihil quidem consequatur',
      },
      {
        postId: 12,

        name: 'qui quidem sed',
        userId: 5,
        body: 'dolorem facere itaque fuga odit autem\nperferendis quisquam quis corrupti eius dicta\nrepudiandae error esse itaque aut\ncorrupti sint consequatur aliquid',
      },
      {
        postId: 12,

        name: 'sint minus reiciendis qui perspiciatis id',
        userId: 5,
        body: 'veritatis qui nihil\nquia reprehenderit non ullam ea iusto\nconsectetur nam voluptas ut temporibus tempore provident error\neos et nisi et voluptate',
      },
      {
        postId: 12,

        name: 'quis ducimus distinctio similique et illum minima ab libero',
        userId: 6,
        body: 'cumque molestiae officia aut fugiat nemo autem\nvero alias atque sed qui ratione quia\nrepellat vel earum\nea laudantium mollitia',
      },
      {
        postId: 12,

        name: 'expedita libero quos cum commodi ad',
        userId: 6,
        body: 'error eum quia voluptates alias repudiandae\naccusantium veritatis maiores assumenda\nquod impedit animi tempore veritatis\nanimi et et officiis labore impedit blanditiis repudiandae',
      },
      {
        postId: 13,

        name: 'quidem itaque dolores quod laborum aliquid molestiae',
        userId: 6,
        body: 'deserunt cumque laudantium\net et odit quia sint quia quidem\nquibusdam debitis fuga in tempora deleniti\nimpedit consequatur veniam reiciendis autem porro minima',
      },
      {
        postId: 13,

        name: 'libero beatae consequuntur optio est hic',
        userId: 6,
        body: 'tempore dolorum corrupti facilis\npraesentium sunt iste recusandae\nunde quisquam similique\nalias consequuntur voluptates velit',
      },
      {
        postId: 13,

        name: 'occaecati dolor accusantium et quasi architecto aut eveniet fugiat',
        userId: 6,
        body: 'aut eligendi et molestiae voluptatum tempora\nofficia nihil sit voluptatem aut deleniti\nquaerat consequatur eaque\nsapiente tempore commodi tenetur rerum qui quo',
      },
      {
        postId: 13,

        name: 'consequatur aut ullam voluptas dolorum voluptatum sequi et',
        userId: 6,
        body: 'sed illum quis\nut aut culpa labore aspernatur illo\ndolorem quia vitae ut aut quo repellendus est omnis\nesse at est debitis',
      },
      {
        postId: 13,

        name: 'earum ea ratione numquam',
        userId: 6,
        body: 'qui debitis vitae ratione\ntempora impedit aperiam porro molestiae placeat vero laboriosam recusandae\npraesentium consequatur facere et itaque quidem eveniet\nmagnam natus distinctio sapiente',
      },
      {
        postId: 14,

        name: 'eius nam consequuntur',
        userId: 6,
        body: 'necessitatibus libero occaecati\nvero inventore iste assumenda veritatis\nasperiores non sit et quia omnis facere nemo explicabo\nodit quo nobis porro',
      },
      {
        postId: 14,

        name: 'omnis consequatur natus distinctio',
        userId: 6,
        body: 'nulla quo itaque beatae ad\nofficiis animi aut exercitationem voluptatum dolorem doloremque ducimus in\nrecusandae officia consequuntur quas\naspernatur dolores est esse dolores sit illo laboriosam quaerat',
      },
      {
        postId: 14,

        name: 'architecto ut deserunt consequatur cumque sapiente',
        userId: 6,
        body: 'sed magni accusantium numquam quidem omnis et voluptatem beatae\nquos fugit libero\nvel ipsa et nihil recusandae ea\niste nemo qui optio sit enim ut nostrum odit',
      },
      {
        postId: 14,

        name: 'at aut ea iure accusantium voluptatum nihil ipsum',
        userId: 7,
        body: 'omnis dolor autem qui est natus\nautem animi nemo voluptatum aut natus accusantium iure\ninventore sunt ea tenetur commodi suscipit facere architecto consequatur\ndolorem nihil veritatis consequuntur corporis',
      },
      {
        postId: 14,

        name: 'eum magni accusantium labore aut cum et tenetur',
        userId: 7,
        body: 'omnis aliquam praesentium ad voluptatem harum aperiam dolor autem\nhic asperiores quisquam ipsa necessitatibus suscipit\npraesentium rem deserunt et\nfacere repellendus aut sed fugit qui est',
      },
      {
        postId: 15,

        name: 'vel pariatur perferendis vero ab aut voluptates labore',
        userId: 7,
        body: 'mollitia magnam et\nipsum consequatur est expedita\naut rem ut ex doloremque est vitae est\ncumque velit recusandae numquam libero dolor fuga fugit a',
      },
      {
        postId: 15,

        name: 'quia sunt dolor dolor suscipit expedita quis',
        userId: 7,
        body: 'quisquam voluptas ut\npariatur eos amet non\nreprehenderit voluptates numquam\nin est voluptatem dicta ipsa qui esse enim',
      },
      {
        postId: 15,

        name: 'ut quia ipsa repellat sunt et sequi aut est',
        userId: 7,
        body: 'nam qui possimus deserunt\ninventore dignissimos nihil rerum ut consequatur vel architecto\ntenetur recusandae voluptate\nnumquam dignissimos aliquid ut reprehenderit voluptatibus',
      },
      {
        postId: 15,

        name: 'ut non illum pariatur dolor',
        userId: 7,
        body: 'non accusamus eum aut et est\naccusantium animi nesciunt distinctio ea quas quisquam\nsit ut voluptatem modi natus sint\nfacilis est qui molestias recusandae nemo',
      },
      {
        postId: 15,

        name: 'minus laboriosam consequuntur',
        userId: 7,
        body: 'natus numquam enim asperiores doloremque ullam et\nest molestias doloribus cupiditate labore vitae aut voluptatem\nitaque quos quo consectetur nihil illum veniam\nnostrum voluptatum repudiandae ut',
      },
      {
        postId: 16,

        name: 'porro ut soluta repellendus similique',
        userId: 7,
        body: 'sunt qui consequatur similique recusandae repellendus voluptates eos et\nvero nostrum fugit magnam aliquam\nreprehenderit nobis voluptatem eos consectetur possimus\net perferendis qui ea fugiat sit doloremque',
      },
      {
        postId: 16,

        name: 'dolores et quo omnis voluptates',
        userId: 7,
        body: 'eos ullam dolorem impedit labore mollitia\nrerum non dolores\nmolestiae dignissimos qui maxime sed voluptate consequatur\ndoloremque praesentium magnam odio iste quae totam aut',
      },
      {
        postId: 16,

        name: 'voluptas voluptas voluptatibus blanditiis',
        userId: 7,
        body: 'qui adipisci eveniet excepturi iusto magni et\nenim ducimus asperiores blanditiis nemo\ncommodi nihil ex\nenim rerum vel nobis nostrum et non',
      },
      {
        postId: 16,

        name: 'beatae ut ad quisquam sed repellendus et',
        userId: 8,
        body: 'et inventore sapiente sed\nsunt similique fugiat officia velit doloremque illo eligendi quas\nsed rerum in quidem perferendis facere molestias\ndolore dolor voluptas nam vel quia',
      },
      {
        postId: 16,

        name: 'et cumque ad culpa ut eligendi non',
        userId: 8,
        body: 'dignissimos itaque ab et tempore odio omnis voluptatem\nitaque perferendis rem repellendus tenetur nesciunt velit\nqui cupiditate recusandae\nquis debitis dolores aliquam nam',
      },
      {
        postId: 17,

        name: 'aut non consequuntur dignissimos voluptatibus dolorem earum recusandae dolorem',
        userId: 8,
        body: 'illum et voluptatem quis repellendus quidem repellat\nreprehenderit voluptas consequatur mollitia\npraesentium nisi quo quod et\noccaecati repellendus illo eius harum explicabo doloribus officia',
      },
      {
        postId: 17,

        name: 'ea est non dolorum iste nihil est',
        userId: 8,
        body: 'officiis dolorem voluptas aliquid eveniet tempora qui\nea temporibus labore accusamus sint\nut sunt necessitatibus voluptatum animi cumque\nat reiciendis voluptatem iure aliquid et qui dolores et',
      },
      {
        postId: 17,

        name: 'nihil qui accusamus ratione et molestias et minus',
        userId: 8,
        body: 'et consequatur voluptates magnam fugit sunt repellendus nihil earum\nofficiis aut cupiditate\net distinctio laboriosam\nmolestiae sunt dolor explicabo recusandae',
      },
      {
        postId: 17,

        name: 'quia voluptatibus magnam voluptatem optio vel perspiciatis',
        userId: 8,
        body: 'ratione ut magni voluptas\nexplicabo natus quia consequatur nostrum aut\nomnis enim in qui illum\naut atque laboriosam aliquid blanditiis quisquam et laborum',
      },
      {
        postId: 17,

        name: 'non voluptas cum est quis aut consectetur nam',
        userId: 8,
        body: 'quisquam incidunt dolores sint qui doloribus provident\nvel cupiditate deleniti alias voluptatem placeat ad\nut dolorem illum unde iure quis libero neque\nea et distinctio id',
      },
      {
        postId: 18,

        name: 'suscipit est sunt vel illum sint',
        userId: 8,
        body: 'eum culpa debitis sint\neaque quia magni laudantium qui neque voluptas\nvoluptatem qui molestiae vel earum est ratione excepturi\nsit aut explicabo et repudiandae ut perspiciatis',
      },
      {
        postId: 18,

        name: 'dolor asperiores autem et omnis quasi nobis',
        userId: 8,
        body: 'assumenda corporis architecto repudiandae omnis qui et odit\nperferendis velit enim\net quia reiciendis sint\nquia voluptas quam deserunt facilis harum eligendi',
      },
      {
        postId: 18,

        name: 'officiis aperiam odit sint est non',
        userId: 8,
        body: 'laudantium corrupti atque exercitationem quae enim et veniam dicta\nautem perspiciatis sit dolores\nminima consectetur tenetur iste facere\namet est neque',
      },
      {
        postId: 18,

        name: 'in voluptatum nostrum voluptas iure nisi rerum est placeat',
        userId: 8,
        body: 'quibusdam rerum quia nostrum culpa\nculpa est natus impedit quo rem voluptate quos\nrerum culpa aut ut consectetur\nsunt esse laudantium voluptatibus cupiditate rerum',
      },
      {
        postId: 18,

        name: 'eum voluptas dolores molestias odio amet repellendus',
        userId: 9,
        body: 'vitae cupiditate excepturi eum veniam laudantium aspernatur blanditiis\naspernatur quia ut assumenda et magni enim magnam\nin voluptate tempora\nnon qui voluptatem reprehenderit porro qui voluptatibus',
      },
      {
        postId: 19,

        name: 'repellendus est laboriosam voluptas veritatis',
        userId: 9,
        body: 'qui nisi at maxime deleniti quo\nex quas tenetur nam\ndeleniti aut asperiores deserunt cum ex eaque alias sit\net veniam ab consequatur molestiae',
      },
      {
        postId: 19,

        name: 'repellendus aspernatur occaecati tempore blanditiis deleniti omnis qui distinctio',
        userId: 9,
        body: 'nihil necessitatibus omnis asperiores nobis praesentium quia\nab debitis quo deleniti aut sequi commodi\nut perspiciatis quod est magnam aliquam modi\neum quos aliquid ea est',
      },
      {
        postId: 19,

        name: 'mollitia dolor deleniti sed iure laudantium',
        userId: 9,
        body: 'ut quis et id repellat labore\nnobis itaque quae saepe est ullam aut\ndolor id ut quis\nsunt iure voluptates expedita voluptas doloribus modi saepe autem',
      },
      {
        postId: 19,

        name: 'vero repudiandae voluptatem nobis',
        userId: 9,
        body: 'reiciendis delectus nulla quae voluptas nihil provident quia\nab corporis nesciunt blanditiis quibusdam et unde et\nmagni eligendi aperiam corrupti perspiciatis quasi\nneque iure voluptatibus mollitia',
      },
      {
        postId: 19,

        name: 'voluptatem unde quos provident ad qui sit et excepturi',
        userId: 9,
        body: 'at ut tenetur rem\nut fuga quis ea magnam alias\naut tempore fugiat laboriosam porro quia iure qui\narchitecto est enim',
      },
      {
        postId: 20,

        name: 'non sit ad culpa quis',
        userId: 9,
        body: 'eum itaque quam\nlaboriosam sequi ullam quos nobis\nomnis dignissimos nam dolores\nfacere id suscipit aliquid culpa rerum quis',
      },
      {
        postId: 20,

        name: 'reiciendis culpa omnis suscipit est',
        userId: 9,
        body: 'est ducimus voluptate saepe iusto repudiandae recusandae et\nsint fugit voluptas eum itaque\nodit ab eos voluptas molestiae necessitatibus earum possimus voluptatem\nquibusdam aut illo beatae qui delectus aut officia veritatis',
      },
      {
        postId: 20,

        name: 'praesentium dolorem ea voluptate et',
        userId: 9,
        body: 'ex et expedita cum voluptatem\nvoluptatem ab expedita quis nihil\nesse quo nihil perferendis dolores velit ut culpa aut\ndolor maxime necessitatibus voluptatem',
      },
      {
        postId: 20,

        name: 'laudantium delectus nam',
        userId: 9,
        body: 'aut quam consequatur sit et\nrepellat maiores laborum similique voluptatem necessitatibus nihil\net debitis nemo occaecati cupiditate\nmodi dolorum quia aut',
      },
      {
        postId: 20,

        name: 'et sint quia dolor et est ea nulla cum',
        userId: 10,
        body: 'architecto dolorem ab explicabo et provident et\net eos illo omnis mollitia ex aliquam\natque ut ipsum nulla nihil\nquis voluptas aut debitis facilis',
      },
    ]);
  });
};
