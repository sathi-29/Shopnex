export type FashionProduct = {
  id: string;
  name: string;
  brand: string;
  gender: string;
  masterCategory: string;
  subCategory: string;
  image: string;
  available: boolean;
  demoPriceInr: number;
  demoOriginalPriceInr?: number;
};

export const fashionProductDataset = "ceyda/fashion-products-small";
export const fashionProductDatasetSource =
  "https://huggingface.co/datasets/ceyda/fashion-products-small";

export const fashionProducts: {
  flashDeals: FashionProduct[];
  trending: FashionProduct[];
} = {
  flashDeals: [
    {
      id: "53759",
      name: "Puma Grey T-Shirt",
      brand: "Puma",
      gender: "Men",
      masterCategory: "Apparel",
      subCategory: "Topwear",
      image: "/images/fashion/53759.jpg",
      available: true,
      demoPriceInr: 1299,
      demoOriginalPriceInr: 1799,
    },
    {
      id: "59263",
      name: "Titan Silver Watch",
      brand: "Titan",
      gender: "Women",
      masterCategory: "Accessories",
      subCategory: "Watches",
      image: "/images/fashion/59263.jpg",
      available: true,
      demoPriceInr: 3499,
      demoOriginalPriceInr: 4999,
    },
    {
      id: "47957",
      name: "Murcia Blue Handbag",
      brand: "Murcia",
      gender: "Women",
      masterCategory: "Accessories",
      subCategory: "Bags",
      image: "/images/fashion/47957.jpg",
      available: true,
      demoPriceInr: 2799,
      demoOriginalPriceInr: 3999,
    },
  ],
  trending: [
    {
      id: "49461",
      name: "Vans Blue Casual Shoes",
      brand: "Vans",
      gender: "Men",
      masterCategory: "Footwear",
      subCategory: "Shoes",
      image: "/images/fashion/49461.jpg",
      available: true,
      demoPriceInr: 3499,
    },
    {
      id: "59607",
      name: "FNF Green Wedding-Wear Saree",
      brand: "FNF",
      gender: "Women",
      masterCategory: "Apparel",
      subCategory: "Saree",
      image: "/images/fashion/59607.jpg",
      available: true,
      demoPriceInr: 4299,
    },
    {
      id: "48311",
      name: "Pitaraa Golden Brass Bead Bracelet",
      brand: "Pitaraa",
      gender: "Women",
      masterCategory: "Accessories",
      subCategory: "Jewellery",
      image: "/images/fashion/48311.jpg",
      available: true,
      demoPriceInr: 1199,
    },
    {
      id: "58513",
      name: "Tonga Maroon Top",
      brand: "Tonga",
      gender: "Women",
      masterCategory: "Apparel",
      subCategory: "Topwear",
      image: "/images/fashion/58513.jpg",
      available: true,
      demoPriceInr: 1499,
    },
  ],
};

export const availableFashionProducts = [
  ...fashionProducts.flashDeals,
  ...fashionProducts.trending,
].filter((product) => product.available);
