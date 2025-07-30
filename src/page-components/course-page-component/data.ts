import { PageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";

export const page: PageModel = {
  _id: '1',
  alias: 'js-course',
  title: 'Курс JavaScript',
  tags: ['JavaScript', 'React', 'Frontend'],
  description: 'Научись программировать на JavaScript с нуля.',
  hh: {
    count: 100,
    juniorSalary: 400,
    middleSalary: 800,
    seniorSalary: 1500
  },
  advantages: [
    { id: 'a1', title: 'Практика', description: 'Много заданий' },
    { id: 'a2', title: 'Поддержка', description: 'Чат с ментором' },
    { id: 'a3', title: 'Сертификат', description: 'Получите сертификат после курса' }
  ],
  category: 'Courses',
};

export const products: ProductModel[] = [
  {
    alias: 'python-course',
    title: 'Python для начинающих',
    _id: 'prod5',
    productId: 'p5',
    category: 'Courses',
    price: 110,
    credit: 11,
    images: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
    oldPrice: 139,
    description: 'Освой Python с нуля: синтаксис, ООП, проекты.',
    advantages: 'Простой синтаксис',
    disadvantages: 'Много теории',
    tags: ['Python', 'Backend', 'Данные'],
    characteristics: [
      { name: 'Формат', value: 'Онлайн' },
      { name: 'Уровень', value: 'Начальный' }
    ],
    initialRating: 4.6,
    reviewCount: 3,
    reviews: [
      {
        _id: 'r5',
        name: 'Алина',
        title: 'Отличный старт',
        description: 'Теперь могу писать скрипты и боты!',
        rating: 5,
        productId: 'p5'
      }
    ]
  },
  {
    alias: 'cpp-course',
    title: 'Алгоритмы на C++',
    _id: 'prod6',
    productId: 'p6',
    category: 'Courses',
    price: 130,
    credit: 13,
   images: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    oldPrice: 170,
    description: 'Углублённое изучение алгоритмов и структур данных на C++.',
    advantages: 'Сильная алгоритмическая база',
    disadvantages: 'Сложный язык',
    tags: ['C++', 'Алгоритмы', 'Подготовка к собеседованию'],
    characteristics: [
      { name: 'Формат', value: 'Онлайн' },
      { name: 'Уровень', value: 'Продвинутый' }
    ],
    initialRating: 4.3,
    reviewCount: 4,
    reviews: [
      {
        _id: 'r6',
        name: 'Денис',
        title: 'Жёстко, но мощно',
        description: 'Курс для тех, кто реально хочет понять алгоритмы.',
        rating: 4,
        productId: 'p6'
      }
    ]
  },
  {
    alias: 'go-course',
    title: 'Промышленный Go',
    _id: 'prod7',
    productId: 'p7',
    category: 'Courses',
    price: 145,
    credit: 14,
    images: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    oldPrice: 180,
    description: 'Пишем производительные микросервисы на Go.',
    advantages: 'Высокая производительность',
    disadvantages: 'Сложный синтаксис',
    tags: ['Go', 'Backend', 'Микросервисы'],
    characteristics: [
      { name: 'Формат', value: 'Онлайн' },
      { name: 'Стек', value: 'Go + Docker + REST' }
    ],
    initialRating: 4.1,
    reviewCount: 2,
    reviews: [
      {
        _id: 'r7',
        name: 'Рустам',
        title: 'Для backend-разработчиков',
        description: 'Помог перейти с Node.js на Go',
        rating: 4,
        productId: 'p7'
      }
    ]
  },
  {
    alias: 'java-course',
    title: 'Java Spring Boot',
    _id: 'prod8',
    productId: 'p8',
    category: 'Courses',
    price: 99,
    credit: 9,
  images: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
    oldPrice: 139,
    description: 'Быстрый старт в Java + Spring Boot.',
    advantages: 'Популярен в корпорациях',
    disadvantages: 'Много шаблонного кода',
    tags: ['Java', 'Spring', 'Backend'],
    characteristics: [
      { name: 'Формат', value: 'Онлайн' },
      { name: 'База', value: 'Java + Spring MVC' }
    ],
    initialRating: 4.0,
    reviewCount: 3,
    reviews: [
      {
        _id: 'r8',
        name: 'Марат',
        title: 'Рабочий стек',
        description: 'Понял как писать REST API на Spring',
        rating: 4,
        productId: 'p8'
      }
    ]
  },
  {
    alias: 'typescript-course',
    title: 'TypeScript + React',
    _id: 'prod9',
    productId: 'p9',
    category: 'Courses',
    price: 105,
    credit: 10,
    images: '/img/ts.jpg',
    oldPrice: 149,
    description: 'Пиши безопасный frontend с TypeScript и React.',
    advantages: 'Типобезопасность',
    disadvantages: 'Много синтаксического шума',
    tags: ['TypeScript', 'React', 'Frontend'],
    characteristics: [
      { name: 'Формат', value: 'Онлайн' },
      { name: 'Уровень', value: 'Средний' }
    ],
    initialRating: 4.7,
    reviewCount: 5,
    reviews: [
      {
        _id: 'r9',
        name: 'Сергей',
        title: 'Must-have для React',
        description: 'Теперь не боюсь типов!',
        rating: 5,
        productId: 'p9'
      }
    ]
  }
];