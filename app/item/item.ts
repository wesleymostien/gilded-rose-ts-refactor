import { ITEM } from "./item.constant";
import { ItemData, ItemName } from "./item.type";
import { getItemType, isSulfuras } from "./item.util";

export class Item {
  name: ItemName.All;
  quality: number;
  sellIn: number;

  static readonly MAX_QUALITY = 50;
  static readonly MIN_QUALITY = 0;

  static readonly DEFAULT = {
    QUALITY: Item.MAX_QUALITY,
    SULFURAS_QUALITY: 80,

    SELL_IN: 10,
  };

  constructor(itemData: ItemData) {
    this.name = itemData.name;
    this.sellIn = itemData.sellIn ?? Item.DEFAULT.SELL_IN;
    this.quality = this.setQuality(itemData.quality);
  }

  private setQuality(newQuality = Item.DEFAULT.QUALITY): number {
    return (this.quality = isSulfuras(this.name)
      ? Item.DEFAULT.SULFURAS_QUALITY
      : Math.min(Item.MAX_QUALITY, Math.max(Item.MIN_QUALITY, newQuality)));
  }

  update(): void {
    const itemType = getItemType(this.name);

    if (itemType === ITEM.Sulfuras) {
      return;
    }

    let factor = -1;
    this.sellIn--;

    if (this.sellIn < 0) {
      factor = factor * 2;
    }

    switch (itemType) {
      case ITEM.AgedBrie:
        factor = factor * -1;
        break;

      case ITEM.BackstagePasses:
        if (this.sellIn < 0) {
          this.setQuality(Item.MIN_QUALITY);
          return;
        }

        factor = factor * -1;

        if (this.sellIn < 6) {
          factor = factor * 3;
        } else if (this.sellIn < 11) {
          factor = factor * 2;
        }
        break;

      case ITEM.Conjured:
        factor = factor * 2;
        break;

      default:
        break;
    }

    this.setQuality(this.quality + factor);
  }
}
