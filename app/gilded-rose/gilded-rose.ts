import { Item } from "@/item/item";

export class GildedRose {
  static items: Item[] = [];

  static setItems(items: Item[]): void {
    GildedRose.items = items;
  }

  static updateQuality(): void {
    for (const item of GildedRose.items) {
      item.update();
    }
  }
}
