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
    category: "cartoon",
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
    category: "sport",
    rating: 3.5,
    fastDelivery:true,
    outOfStock:true,
    product:"Mugs"
  },
  {
    _id: uuid(),
    img1: "https://i.etsystatic.com/28312465/r/il/00e588/3357931542/il_794xN.3357931542_kucf.jpg",
    img2: "https://i.etsystatic.com/28312465/r/il/8fa0c3/3357934792/il_794xN.3357934792_haug.jpg",
    name: "Japanese Hand-crafted Handmade Ceramic Mug",
    currentPrice: 2000,
    originalPrice: 3000,
    category: "modern",
    rating: 2.5,
    fastDelivery:false,
    outOfStock:false,
    product:"Mugs"
  },
  {
    _id: uuid(),
    img1: "https://i.etsystatic.com/6718782/r/il/86f78b/4776692349/il_794xN.4776692349_idak.jpg",
    img2: "https://i.etsystatic.com/6718782/r/il/58328a/4776692467/il_75x75.4776692467_ja6v.jpg9",
    name: "Classic Horse Theme Mug",
    currentPrice: 550,
    originalPrice: 700,
    category: "classic",
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
    category: "basic",
    rating: 4,
    fastDelivery:true,
    outOfStock:false,
    product:"Mugs"
  },
];
