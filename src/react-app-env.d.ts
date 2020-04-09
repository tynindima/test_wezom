// eslint-disable-next-line
/// <reference types="react-scripts" />


interface Good {
  id: number;
  title1: string;
  starClass: string;
  reviews: string;
  kinds: Kinds;
  img: string;
  additions: Additions;
  price: string;
  discount: string;
}

interface Kinds {
  summer: boolean;
  passenger: boolean;
  newTire: boolean;
}

interface Additions {
  latest: boolean;
  hit: boolean;
  discount: boolean;
}
