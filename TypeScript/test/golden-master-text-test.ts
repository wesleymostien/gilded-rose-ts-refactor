import { Item } from "../app/item/item";
import { GildedRose } from "../app/gilded-rose/gilded-rose";

console.log("OMGHAI!");

const items = [
  new Item({ name: "+5 Dexterity Vest", sellIn: 10, quality: 20 }),
  new Item({ name: "Aged Brie", sellIn: 2, quality: 0 }),
  new Item({ name: "Elixir of the Mongoose", sellIn: 5, quality: 7 }),
  new Item({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }),
  new Item({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 }),
  new Item({ name: "Backstage passes", sellIn: 15, quality: 20 }),
  new Item({ name: "Backstage passes", sellIn: 10, quality: 49 }),
  new Item({ name: "Backstage passes", sellIn: 5, quality: 49 }),
  new Item({ name: "Conjured Mana Cake", sellIn: 3, quality: 6 }),
];

GildedRose.setItems(items);

let days: number = 30;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  GildedRose.items.forEach((element) => {
    console.log(element.name + ", " + element.sellIn + ", " + element.quality);
  });
  console.log();
  GildedRose.updateQuality();
}
