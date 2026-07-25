export interface Package {
  id: string;
  bottles: number;
  title: string;
  image: string;
  pricePerBottle: number;
  badge: string;
  /** Highlighted "most popular" card */
  featured: boolean;
  instantSavings: number | null;
  freeShipping: boolean;
  total: number;
  checkoutUrl: string;
}

export const packages: Package[] = [
  {
    id: "1-bottle",
    bottles: 1,
    title: "1 Bottle",
    image: "/assets/1bottle.jpg",
    pricePerBottle: 39.95,
    badge: "Sample Option",
    featured: false,
    instantSavings: null,
    freeShipping: true,
    total: 39.95,
    checkoutUrl: "https://www.checkout-ds24.com/product/472629",
  },
  {
    id: "3-bottle",
    bottles: 3,
    title: "3 Bottles",
    image: "/assets/3bottle.jpg",
    pricePerBottle: 35.95,
    badge: "Most Popular",
    featured: true,
    instantSavings: 12.0,
    freeShipping: true,
    total: 107.85,
    checkoutUrl: "https://www.checkout-ds24.com/product/472942",
  },
  {
    id: "6-bottle",
    bottles: 6,
    title: "6 Bottles",
    image: "/assets/6bottle.png",
    pricePerBottle: 33.25,
    badge: "Biggest Savings",
    featured: false,
    instantSavings: 40.2,
    freeShipping: true,
    total: 199.5,
    checkoutUrl: "https://www.checkout-ds24.com/product/472943",
  },
];

export const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });
