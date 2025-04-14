import { Item } from "../app/item/item";
import { GildedRose } from "../app/gilded-rose/gilded-rose";

console.log("OMGHAI!");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes", 15, 20),
  new Item("Backstage passes", 10, 49),
  new Item("Backstage passes", 5, 49),
  new Item("Conjured Mana Cake", 3, 6),
];

GildedRose.setItems(items);

let days: number = 30;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach((element) => {
    console.log(element.name + ", " + element.sellIn + ", " + element.quality);
  });
  console.log();
  GildedRose.updateQuality();
}
