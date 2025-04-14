export class Item {
  name: string;
  quality: number;
  sellIn: number;

  constructor(name: string, sellIn: number = 0, quality: number = 0) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
