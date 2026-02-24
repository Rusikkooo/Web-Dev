import { Component, Input } from "@angular/core";
import { Product } from "./product.model";
@Component({
    selector:'app-productList',
    standalone: true,
    styleUrls:['./productList.component.css'],
    templateUrl:'./productList.component.html'
    
        
    
    
})

export class productListComponent{
    @Input() product : any;
    products: Product[] = [
        {
            id: 1,
            name: 'Смартфон Apple iPhone 15 128Gb черный',
            description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.'
            ,
            price: 390000,
            rating: 4.8,
            image:'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-small','https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-small','https://resources.cdn-kaspi.kz/img/m/p/h51/h10/86275143663646.jpg?format=gallery-small'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
        },
        {
            id:2,
            name:'Ресанта сварочный полуавтомат',
            description:'САИПА-160П 65/142 (аргонная (аргонодуговая) сварка, полуавтоматическая сварка (MIG/MAG), ручная дуговая сварка (MMA), FCAW)',
            price:42000,
            rating:5.0,
            image:'https://resources.cdn-kaspi.kz/img/m/p/p10/p2b/87413738.jpg?format=gallery-medium',
            images:['https://resources.cdn-kaspi.kz/img/m/p/p9c/p95/62331825.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p80/p95/62331826.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p64/p95/62331827.jpg?format=gallery-medium'],
            link:'https://kaspi.kz/shop/p/resanta-svarochnyi-poluavtomat-saipa-160p-65-142-argonnaja-argonodugovaja-svarka-poluavtomaticheskaja-svarka-mig-mag-ruchnaja-dugovaja-svarka-mma-fcaw--116075652/?c=750000000'
        },
        {
            id:3,
            name:'Клавиатура Ajazz AK820 черный',
            description:'Механическая клавиатура Ajazz AK820 в черном цвете с проводным подключением и английской раскладкой. Переключатели GX Red обеспечивают мягкое и быстрое нажатие, что делает её отличным выбором для геймеров и офисной работы. Компактный дизайн и качественная сборка гарантируют комфорт при длительном использовании.',
            price:20000,
            rating:4.3,
            image:'https://resources.cdn-kaspi.kz/img/m/p/p3f/p76/24839378.jpg?format=gallery-small',
            images:['https://resources.cdn-kaspi.kz/img/m/p/p3f/p76/24839378.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h65/h9d/86413640237086.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pc2/pc8/42515626.jpg?format=preview-medium'],
            link:'https://kaspi.kz/shop/p/ajazz-ak820-chernyi-120925482/?c=750000000'


        },
        {
            id:4,
            name:'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
            description:"Полны достоинств.Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи. Более быстрый двухъядерный процессор для повышенной производительности. Apple Watch SE полны достоинств, а теперь это ещё более выгодная покупка, чем когда‑либо." ,
            price:180000,
            rating:4.6,
            image:'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
            images:['https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-small','https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-small','https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium'],
            link:'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'


        },

        {
            id:5,
            name:'Отпариватель AVENTIX PAR200 фиолетовый',
            description:'AVENTIX 2 в 1 гладкость и стиль за минуты! Мощность 1300 Вт легко справляется даже с плотными тканями Керамическое антипригарное покрытие бережно скользит по ткани защищая её Подходит для всех материалов от шёлка до бархата Вертикальная и горизонтальная глажка благодаря повороту на 90 LED - дисплей всегда правильный режим для вашей одежды Увеличенный резервуар 190 мл несколько вещей без дозаправки Длина шнура 18 м свобода движений без ограничений Лёгкий и компактный (08 кг) идеально для дома и путешествий AVENTIX ваш персональный стилист всегда под рукой!',
            price:13499 ,
            rating:4.8,
            image:'https://resources.cdn-kaspi.kz/img/m/p/p87/p48/61023361.jpeg?format=gallery-medium',
            images:['https://resources.cdn-kaspi.kz/img/m/p/p5a/p4f/61023363.jpeg?format=gallery-small','https://resources.cdn-kaspi.kz/img/m/p/p2e/p56/61023365.jpeg?format=gallery-small','https://resources.cdn-kaspi.kz/img/m/p/p2e/p56/61023365.jpeg?format=gallery-small'],
            link:'https://kaspi.kz/shop/p/otparivatel-aventix-par200-fioletovyi-144751155/?c=750000000'


        },
        {
            id:6,
            name:'Блендер стационарный MONTERO PRO K9 серебристый',
            description:'Представьте себе помощника, который превращает любые продукты в идеальную текстуру — от нежных смузи до густых соусов. Именно таким станет MONTERO PRO K9.',
            price:13499 ,
            rating:4.8,
            image:'https://resources.cdn-kaspi.kz/img/m/p/pb6/p3e/63083117.jpeg?format=gallery-medium',
            images:['https://resources.cdn-kaspi.kz/img/m/p/p20/p42/63083118.jpeg?format=gallery-small','https://resources.cdn-kaspi.kz/img/m/p/p9f/p90/63083120.jpeg?format=gallery-small','https://resources.cdn-kaspi.kz/img/m/p/p89/p45/63083119.jpeg?format=gallery-small'],
            link:'https://kaspi.kz/shop/p/blender-statsionarnyi-montero-pro-k9-serebristyi-133292706/?c=750000000'


        },
        {
            id:7,
            name:'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
            description:'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
            price:521471 ,
            rating:5.0,
            image:'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-large',
            images:['https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium'],
            link:'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'


        },
        {
            id:8,
            name:'Флаг Казахстан 150x90 см',
            description:'Флаг Казахстана 150x90 см — это символ гордости и идентичности, который станет отличным дополнением для вашего дома или офиса. Изготовленный из качественного трикотажа, он гарантирует долговечность и яркость цветов.',
            price:849  ,
            rating:5.0,
            image:'https://resources.cdn-kaspi.kz/img/m/p/heb/h22/63505322639390.jpg?format=gallery-medium',
            images:['https://resources.cdn-kaspi.kz/img/m/p/h33/hf5/85065385181214.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pba/pbe/38725422.jpeg?format=preview-large','https://resources.cdn-kaspi.kz/img/m/p/h6e/ha4/86206610964510.png?format=preview-large'],
            link:'https://kaspi.kz/shop/p/flag-kazahstan-150x90-sm-107021446/?c=750000000'


        },
        {
            id:9,
            name:'Умная колонка Яндекс Станция Лайт YNDX-00025 фиолетовый',
            description:'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз. У Алисы в Станции Лайт свой характер — он зависит от цвета устройства. Чтобы пользоваться Станцией Лайт, нужны подключение к интернету по Wi-Fi и уч. запись на Яндексе.',
            price:55000,
            rating:4.5,
            image:'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
            images:['https://resources.cdn-kaspi.kz/img/m/p/haa/h8e/64362957799454.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hb0/h05/64362960617502.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hd4/h36/64362963599390.jpg?format=gallery-medium'],
            link:'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=750000000'


        },
        {
            id:10,
            name:'Настольная плита RAF R-8004 коричневый',
            description:'Настольная плита RAF R-8004 — идеальный выбор для тех, кто ценит компактность и функциональность на кухне. Эта электрическая плита сочетает в себе современные технологии и удобство использования.',
            price:84991 ,
            rating:4.2,
            image:'https://resources.cdn-kaspi.kz/img/m/p/h91/ha4/85808968794142.jpg?format=gallery-medium',
            images:['https://resources.cdn-kaspi.kz/img/m/p/hb5/h0b/85808968826910.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h0f/hd7/83795991527454.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf1/h25/85138832719902.jpg?format=gallery-medium'],
            link:'https://kaspi.kz/shop/p/nastol-naja-plita-raf-r-8004-korichnevyi-106487742/?c=750000000'


        }
        
        
        ]
        shareToTelegram(product:any){
            const message = `Мынаны бір қарап жіберші:${product.name}\n Ссылка: ${product.link}`;
            const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${message}`;
            console.log(product);
            window.open(url, '_blank');
        }
        link(product:any){
            const linkValue = product.link;
            window.open(linkValue,'blank');
        }
    }