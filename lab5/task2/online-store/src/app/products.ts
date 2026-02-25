import { Product } from "./product.model";
import { Category } from './category.model';
// export interface Product{
//     id: number;//unique identifier
//     name: string;//product name
//     description:string;//short product description (2–3 sentences)
//     price: number;//product price in KZT
//     rating: number;//rating from 1 to 5 (can be decimal, e.g. 4.7)
//     image: string;//URL or local path to the main product image
//     images: string[];//array of image URLs for the gallery (minimum 3)
//     link: string;//string — direct URL to the product page on kaspi.kz
//     likes ?:number;
//     categoryid ?:number    
// }
export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Audio' },
  { id: 4, name: 'Accessories' }
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Смартфон Apple iPhone 17 256Gb черный',
        description: 'Apple iPhone 17 — новый уровень безупречной производительности в стильном черном корпусе.',
        price: 562190,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=gallery-large',
        images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0c/64462383.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/pa2/64165040.png?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/',
        categoryid : 1,
        likes:0
    },
    {
        id: 2,
        name: 'Смартфон Apple iPhone Air 512Gb золотистый',
        description: 'Apple iPhone Air 512Gb — это воплощение инноваций и элегантности.',
        price: 734990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p90/pb1/64171067.png?format=gallery-medium',
        images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/pe9/64477325.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/pae/64171071.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-air-512gb-zolotistyi-145468555/',
        categoryid:1,
        likes:0
    },
    {
        id: 3,
        name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля. Носи с собой и стань высоким',
        price: 799990,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/',
        categoryid:1,
        likes:0
    },
    {
        id: 4,
        name: 'Смартфон Apple iPhone 16 256Gb черный',
        description: 'iPhone 16 – новый дизайн, яркие цвета и мощный процессор, который слабее чем у корейцев',
        price: 446910,
        rating: 4.2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
        images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h79/87295471157278.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/',
        categoryid:1,
        likes:0
    },
    {
      id: 5,
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты гаджета.',
      price: 709500,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/',
      categoryid:1,
      likes:0
    },
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13 2020',
      description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1',
      price: 439984,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      categoryid:2,
      likes:0
    },
    {
        id: 7,
        name: 'Ноутбук Apple MacBook Air 13 2025',
        description: 'Apple MacBook  — ультрабук, который сочетает в высокую производительность',
        price: 523719,
        rating: 3.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p15/p53/50302342.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pa2/p53/50302347.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p6a/p53/50302345.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p46/p56/50302350.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mw0x3-141757964/?c=750000000',
        categoryid:2,
        likes:0
      },
      {
        id: 8,
        name: 'Ноутбук Apple MacBook Air 13 PRO 2025',
        description: 'Хороший мак у которого не только эстетика, но и 16 Гб / SSD 512 Гб / macOS / MW0X3',
        price: 651989,
        rating: 3.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p27/p41/16713243.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p6a/p53/50302345.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pa2/p53/50302347.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pbe/p53/50302348.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mw0x3-141757964/?c=750000000',
        categoryid:2,
        likes:0
      },
      {
        id: 9,
        name: 'Ноутбук Huawei MateBook D16 16"',
        description: 'Ноутбук HUAWEI MateBook D16 оборудован шестиядерным процессором Intel Core i5-13420H',
        price: 388965,
        rating: 4.2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h94/84934299090974.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h7d/h7b/84934299746334.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he9/hfc/84934299156510.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h3a/h16/84934299615262.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/huawei-matebook-d16-16-16-gb-ssd-512-gb-win-11-home-mitchellg-w5651-115943541/?c=750000000',
        categoryid:2,
        likes:0
      },
      {
        id: 10,
        name: 'Смартфон Apple iPhone 14 128Gb голубой',
        description: 'Воплощение инноваций и стиля, предлагающее передовые технологии.',
        price: 170753,
        rating: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he0/he8/64231929446430.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
        categoryid:2,
        likes:0
      },
      {
        id: 11,
        name: 'AirPods Pro 2', 
        description: 'Активное шумоподавление.', 
        price: 125000, 
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium', 
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h34/he4/84108189892638.jpg?format=gallery-medium'
        ], 
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000', 
        categoryid: 3, 
        likes: 0
      },
      {
        id: 12,
        name: 'Sony WH-1000XM5', 
      description: 'Лидер в шумоподавлении.', 
      price: 185000, 
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium'
      ], 
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000', 
      categoryid: 3, 
      likes: 0
    },
    {
      id: 13, name: 'Marshall Major IV', 
      description: '80 часов работы без подзарядки.', 
      price: 75000, 
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium', 
      images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium'
      ], 
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000', 
      categoryid: 3, 
      likes: 0
    },
    {
      id: 14, 
      name: 'Bose QuietComfort 45', 
      description: 'Легендарный комфорт.', 
      price: 160000, 
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/h7a/64374651715614.jpg?format=gallery-medium'
      ], 
      link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000', categoryid: 3, likes: 0
    },
    {
      id: 15, 
      name: 'JBL Flip 6 Blue', 
      description: 'Мощный звук для вечеринок.', 
      price: 55000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/ha1/65128805597214.jpg?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h73/65128808480798.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hab/h5a/65128811298846.jpg?format=gallery-medium'
      ], 
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-flip-6-chernyi-105120720/?c=750000000', categoryid: 3, 
      likes: 0
    },
  
    {
      id: 16,
      name: 'Apple Magic Mouse', 
      description: 'Беспроводная мышь с Multi-Touch.',
      price: 45000, 
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/h88/63761348722718.jpg?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb9/hd8/63761349017630.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/hd0/63761349509150.jpg?format=gallery-medium'
      ], 
      link: 'https://kaspi.kz/shop/p/apple-magic-mouse-2-belyi-9100708/?c=750000000', categoryid: 4, likes: 0
    },
    {
      id: 17, name: 'Logitech MX Keys',
      description: 'Продвинутая клавиатура.', 
      price: 65000, 
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5f/pb2/24853403.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h86/80091268055070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/hf0/80091268317214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/h35/80091268612126.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-mx-keys-mini-pale-920-010501-chernyi-109889494/?c=750000000', categoryid: 4, 
      likes: 0
    },
    {
      id: 18, name: 'Samsung T7 1TB',
      description: 'Внешний SSD диск.', 
      price: 55000, 
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hd3/66201475088414.jpg?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h20/hf5/66201477775390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/h3a/66201479381022.jpg?format=gallery-medium'
      ], 
      link: 'https://kaspi.kz/shop/p/samsung-t7-shield-mu-pe2t0s-2000-gb-107749257/?c=750000000', 
      categoryid: 4, 
      likes: 0
    },
    {
        id: 19, 
        name: 'USB-C Hub 7-in-1', 
        description: 'Все порты в одном устройстве. Идеально для макбука, у которого нету портов. В КБТУ проблема с интернетом и этот товар решает это', 
        price: 15000, 
        rating: 4.1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h3a/68357705826334.jpg?format=gallery-medium', 
        images: [], 
        link: 'https://kaspi.kz/shop/p/dok-stantsija-usb-hub-3-0-7-port-chernyi-108635675/?c=750000000', categoryid: 4, 
        likes: 0
      },
      {
        id: 20, name: 'Apple 20W USB-C', 
        description: 'Адаптер питания.', 
        price: 12000, 
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium', 
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/haa/h98/63961936723998.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h81/h1a/63961938624542.jpg?format=gallery-medium'
        ], link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000', categoryid: 4, 
        likes: 0
      }
  

    
        

]