import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img1: "https://cdn.shopify.com/s/files/1/0649/3968/8172/products/geniusmugmockupfront.jpg",
    img2: "https://cdn.shopify.com/s/files/1/0649/3968/8172/products/geniusmugmockupback.jpg",
    name: "Peanuts Genius Mug",
    currentPrice: 700,
    originalPrice: 1300,
    category: "Cartoon",
    rating: 4.9,
    fastDelivery:true,
    outOfStock:false,
    product:"Mugs"
  },
  
  {
    _id: uuid(),
    img1: "https://m.media-amazon.com/images/I/614T9h3ze0L._SL1500_.jpg",
    img2: "https://m.media-amazon.com/images/I/51Ka4l7sF9L._SL1500_.jpg",
    name: "Penguin Prints FC Barcelona Mug",
    currentPrice: 299,
    originalPrice: 599,
    category: "Sport",
    rating: 3.5,
    fastDelivery:true,
    outOfStock:false,
    product:"Mugs"
  },
  {
    _id: uuid(),
    img1: "https://i.etsystatic.com/28312465/r/il/00e588/3357931542/il_794xN.3357931542_kucf.jpg",
    img2: "https://i.etsystatic.com/28312465/r/il/8fa0c3/3357934792/il_794xN.3357934792_haug.jpg",
    name: "Japanese Hand-crafted Ceramic Mug",
    currentPrice: 2000,
    originalPrice: 3000,
    category: "Modern",
    rating: 2.5,
    fastDelivery:false,
    outOfStock:false,
    product:"Mugs"
  },
  {
    _id: uuid(),
    img1: "https://i.etsystatic.com/6718782/r/il/86f78b/4776692349/il_794xN.4776692349_idak.jpg",
    img2: "data:image/jpeg;base64,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",
    name: "Classic Horse Theme Mug",
    currentPrice: 550,
    originalPrice: 700,
    category: "Classic",
    rating: 5,
    fastDelivery:false,
    outOfStock:true,
    product:"Mugs"
  },
  {
    _id: uuid(),
    img1: "https://m.media-amazon.com/images/I/712u63FeD1L._SL1500_.jpg",
    img2: "https://m.media-amazon.com/images/I/51z7A8+6pgS._SL1500_.jpg",
    name: "Plain Black Ceramic Mug",
    currentPrice: 399,
    originalPrice: 499,
    category: "Basic",
    rating: 4,
    fastDelivery:true,
    outOfStock:false,
    product:"Mugs"
  },
];
