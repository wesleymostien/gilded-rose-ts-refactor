import { ItemData, ItemName } from "./item.type";

export class Item {
  name: ItemName.All;
  quality: number;
  sellIn: number;

  static readonly MAX_QUALITY = 50;
  static readonly MIN_QUALITY = 0;

  static readonly DEFAULT_QUALITY = Item.MAX_QUALITY;
  static readonly DEFAULT_SELL_IN = 10;

  constructor(itemData: ItemData) {
    this.name = itemData.name;
    this.sellIn = itemData.sellIn ?? Item.DEFAULT_SELL_IN;
    this.quality = this.constructQuality(itemData.quality);
  }

  private constructQuality(value: number = Item.DEFAULT_QUALITY): number {
    let validValue = value;

    if (validValue < Item.MIN_QUALITY) {
      validValue = Item.MIN_QUALITY;
    }

    if (validValue > Item.MAX_QUALITY) {
      validValue = Item.MAX_QUALITY;
    }

    return validValue;
  }

  update(): void {
    if (this.name !== "Aged Brie" && this.name !== "Backstage passes") {
      if (this.quality > 0) {
        if (this.name !== "Sulfuras, Hand of Ragnaros") {
          this.quality--;
        }
      }
    } else {
      if (this.quality < Item.MAX_QUALITY) {
        this.quality++;
        if (this.name === "Backstage passes") {
          if (this.sellIn < 11) {
            this.quality = Math.min(Item.MAX_QUALITY, this.quality + 1);
          }
          if (this.sellIn < 6) {
            this.quality = Math.min(Item.MAX_QUALITY, this.quality + 1);
          }
        }
      }
    }

    if (this.name !== "Sulfuras, Hand of Ragnaros") {
      this.sellIn--;
    }

    if (this.sellIn < 0) {
      if (this.name !== "Aged Brie") {
        if (this.name !== "Backstage passes") {
          if (this.quality > 0) {
            if (this.name !== "Sulfuras, Hand of Ragnaros") {
              this.quality--;
            }
          }
        } else {
          this.quality = 0;
        }
      } else {
        if (this.quality < Item.MAX_QUALITY) {
          this.quality++;
        }
      }
    }
  }
}
