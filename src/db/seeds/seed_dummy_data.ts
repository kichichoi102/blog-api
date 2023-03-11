import { Knex } from 'knex';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex: Knex): Promise<void> {
  // Deletes All existing entries
  await knex('comments').del();
  await knex('posts').del();
  await knex('users').del();
  
  // Insert users seed data
  await knex('users')
    .insert([
      {
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        lat: '-37.3159',
        lng: '81.1496',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
      },
      {
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        lat: '-43.9509',
        lng: '-34.4618',
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
      },
      {
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        lat: '-68.6102',
        lng: '-47.0653',
        phone: '1-463-123-4447',
        website: 'ramiro.info',
      },
      {
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        lat: '-68.6102',
        lng: '-47.0653',
        phone: '493-170-9623 x156',
        website: 'kale.biz',
      },
      {
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
        lat: '-31.8129',
        lng: '62.5342',
        phone: '(254)954-1289',
        website: 'demarco.info',
      },
      {
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
        lat: '-71.4197',
        lng: '71.7478',
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
      },
      {
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        street: 'Rex Trail',
        suite: 'Suite 280',
        city: 'Howemouth',
        zipcode: '58804-1099',
        lat: '24.8918',
        lng: '21.8984',
        phone: '210.067.6132',
        website: 'elvis.io',
      },
      {
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        street: 'Ellsworth Summit',
        suite: 'Suite 729',
        city: 'Aliyaview',
        zipcode: '45169',
        lat: '-14.3990',
        lng: '-120.7677',
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
      },
      {
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        street: 'Dayna Park',
        suite: 'Suite 449',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
        lat: '24.6463',
        lng: '-168.8889',
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
      },
      {
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        lat: '-38.2386',
        lng: '57.2232',
        phone: '024-648-3804',
        website: 'ambrose.net',
      },
    ])
    .then(() => console.log('Users seed data inserted'))
    .catch(err => console.error(err));

  // Insert users seed data
  await knex('posts')
    .insert([
      {
        userId: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      },
      {
        userId: 1,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      },
      {
        userId: 1,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
      },
      {
        userId: 1,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      },
      {
        userId: 1,
        title: 'dolorem eum magni eos aperiam quia',
        body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
      },
      {
        userId: 1,
        title: 'magnam facilis autem',
        body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
      },
      {
        userId: 1,
        title: 'dolorem dolore est ipsam',
        body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
      },
      {
        userId: 1,
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
      },
      {
        userId: 1,
        title: 'optio molestias id quia eum',
        body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
      },
      {
        userId: 2,
        title: 'et ea vero quia laudantium autem',
        body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
      },
      {
        userId: 2,
        title: 'in quibusdam tempore odit est dolorem',
        body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio',
      },
      {
        userId: 2,
        title: 'dolorum ut in voluptas mollitia et saepe quo animi',
        body: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
      },
      {
        userId: 2,
        title: 'voluptatem eligendi optio',
        body: 'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum',
      },
      {
        userId: 2,
        title: 'eveniet quod temporibus',
        body: 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae',
      },
      {
        userId: 2,
        title: 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
        body: 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta',
      },
      {
        userId: 2,
        title: 'fugit voluptas sed molestias voluptatem provident',
        body: 'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo',
      },
      {
        userId: 2,
        title: 'voluptate et itaque vero tempora molestiae',
        body: 'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam',
      },
      {
        userId: 2,
        title: 'adipisci placeat illum aut reiciendis qui',
        body: 'illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas',
      },
      {
        userId: 2,
        title: 'doloribus ad provident suscipit at',
        body: 'qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo',
      },
      {
        userId: 3,
        title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
        body: 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt',
      },
      {
        userId: 3,
        title: 'dolor sint quo a velit explicabo quia nam',
        body: 'eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse',
      },
      {
        userId: 3,
        title: 'maxime id vitae nihil numquam',
        body: 'veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis',
      },
      {
        userId: 3,
        title: 'autem hic labore sunt dolores incidunt',
        body: 'enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt',
      },
      {
        userId: 3,
        title: 'rem alias distinctio quo quis',
        body: 'ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio',
      },
      {
        userId: 3,
        title: 'est et quae odit qui non',
        body: 'similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero',
      },
      {
        userId: 3,
        title: 'quasi id et eos tenetur aut quo autem',
        body: 'eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur',
      },
      {
        userId: 3,
        title: 'delectus ullam et corporis nulla voluptas sequi',
        body: 'non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum',
      },
      {
        userId: 3,
        title: 'iusto eius quod necessitatibus culpa ea',
        body: 'odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores',
      },
      {
        userId: 3,
        title: 'a quo magni similique perferendis',
        body: 'alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia',
      },
      {
        userId: 4,
        title: 'ullam ut quidem id aut vel consequuntur',
        body: 'debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae',
      },
      {
        userId: 4,
        title: 'doloremque illum aliquid sunt',
        body: 'deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime',
      },
      {
        userId: 4,
        title: 'qui explicabo molestiae dolorem',
        body: 'rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod',
      },
      {
        userId: 4,
        title: 'magnam ut rerum iure',
        body: 'ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis',
      },
      {
        userId: 4,
        title: 'id nihil consequatur molestias animi provident',
        body: 'nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit',
      },
      {
        userId: 4,
        title: 'fuga nam accusamus voluptas reiciendis itaque',
        body: 'ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore',
      },
      {
        userId: 4,
        title: 'provident vel ut sit ratione est',
        body: 'debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui',
      },
      {
        userId: 4,
        title: 'explicabo et eos deleniti nostrum ab id repellendus',
        body: 'animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure',
      },
      {
        userId: 4,
        title: 'eos dolorem iste accusantium est eaque quam',
        body: 'corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex',
      },
      {
        userId: 4,
        title: 'enim quo cumque',
        body: 'ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam',
      },
      {
        userId: 5,
        title: 'non est facere',
        body: 'molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe',
      },
      {
        userId: 5,
        title: 'commodi ullam sint et excepturi error explicabo praesentium voluptas',
        body: 'odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut',
      },
      {
        userId: 5,
        title: 'eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis',
        body: 'similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis',
      },
      {
        userId: 5,
        title: 'optio dolor molestias sit',
        body: 'temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae',
      },
      {
        userId: 5,
        title: 'ut numquam possimus omnis eius suscipit laudantium iure',
        body: 'est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem',
      },
      {
        userId: 5,
        title: 'aut quo modi neque nostrum ducimus',
        body: 'voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid',
      },
      {
        userId: 5,
        title: 'quibusdam cumque rem aut deserunt',
        body: 'voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate',
      },
      {
        userId: 5,
        title: 'ut voluptatem illum ea doloribus itaque eos',
        body: 'voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit',
      },
      {
        userId: 5,
        title: 'laborum non sunt aut ut assumenda perspiciatis voluptas',
        body: 'inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut',
      },
      {
        userId: 5,
        title: 'repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem',
        body: 'error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur',
      },
    ])
    .then(() => console.log('Posts seed data inserted'))
    .catch(err => console.error(err));

  // Insert seed data
  await knex('comments')
    .insert([
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
    ])
    .then(() => console.log('Comments seed data inserted'))
    .catch(err => console.error(err));
}
