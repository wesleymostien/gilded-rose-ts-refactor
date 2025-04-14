import { Item } from "@/item/item";

export class GildedRose {
  static items: Item[] = [];

  static setItems(items: Item[]): void {
    GildedRose.items = items;
  }

  static updateQuality(): void {
    for (const item of GildedRose.items) {
      GildedRose.updateItem(item);
    }
  }

  private static updateItem(item: Item): void {
    if (item.name !== "Aged Brie" && item.name !== "Backstage passes") {
      if (item.quality > 0) {
        if (item.name !== "Sulfuras, Hand of Ragnaros") {
          item.quality--;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality++;
        if (item.name === "Backstage passes") {
          if (item.sellIn < 11) {
            item.quality = Math.min(50, item.quality + 1);
          }
          if (item.sellIn < 6) {
            item.quality = Math.min(50, item.quality + 1);
          }
        }
      }
    }

    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn--;
    }

    if (item.sellIn < 0) {
      if (item.name !== "Aged Brie") {
        if (item.name !== "Backstage passes") {
          if (item.quality > 0) {
            if (item.name !== "Sulfuras, Hand of Ragnaros") {
              item.quality--;
            }
          }
        } else {
          item.quality = 0;
        }
      } else {
        if (item.quality < 50) {
          item.quality++;
        }
      }
    }
  }
}
