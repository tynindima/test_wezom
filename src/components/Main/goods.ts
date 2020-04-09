import tire1 from './img/tire1.png';
import tire2 from './img/tire2.png';
import tire3 from './img/tire3.png';
import tire4 from './img/tire4.png';

export const goods = [
  {
    id: 1,
    title1: 'FA 12 Readymix 1 л Concentrat, Germany',
    starClass: 'stars--5',
    reviews: 'Отзывы (10)',
    kinds: {
      summer: true,
      passenger: true,
      newTire: true,
    },
    img: tire1,
    additions: {
      latest: true,
      hit: true,
      discount: true,
    },
    price: '599',
    discount: '1 250',
  },
  {
    id: 2,
    title1: 'FA 12 Readymix 1 л Concentrat, Germany',
    starClass: 'stars--3',
    reviews: 'Отзывы (10)',
    kinds: {
      summer: true,
      passenger: false,
      newTire: true,
    },
    img: tire2,
    additions: {
      latest: true,
      hit: true,
      discount: false,
    },
    price: '599',
    discount: '1 250',
  },
  {
    id: 3,
    title1: 'FA 12 Readymix 1 л Concentrat, Germany',
    starClass: '',
    reviews: 'Без отзывов',
    kinds: {
      summer: true,
      passenger: true,
      newTire: true,
    },
    img: tire3,
    additions: {
      latest: true,
      hit: false,
      discount: false,
    },
    price: '9 570',
    discount: '11 250',
  },
  {
    id: 4,
    title1: '',
    starClass: 'stars--5',
    reviews: 'Отзывы (10)',
    kinds: {
      summer: true,
      passenger: true,
      newTire: false,
    },
    img: tire4,
    additions: {
      latest: false,
      hit: false,
      discount: false,
    },
    price: '599',
    discount: '',
  },
];
