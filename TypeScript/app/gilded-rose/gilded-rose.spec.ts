import { Item } from "@/item/item";
import { GildedRose } from "./gilded-rose";

const setupAndUpdateItems = (items: Item[]) => {
  GildedRose.setItems(items);
  GildedRose.updateQuality();
};

describe("GildedRose", () => {
  beforeEach(() => {
    GildedRose.setItems([]);
  });

  describe("normal item", () => {
    it("should decrease quality and sellIn of normal items", () => {
      setupAndUpdateItems([
        new Item({ name: "normal item", sellIn: 10, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(19);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should decrease quality twice as fast when sellIn is negative", () => {
      setupAndUpdateItems([
        new Item({ name: "normal item", sellIn: 0, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(18);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });

    it("should not let quality go below 0", () => {
      setupAndUpdateItems([
        new Item({ name: "normal item", sellIn: 10, quality: 0 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });
  });

  describe("Aged Brie", () => {
    it("should increase quality of Aged Brie", () => {
      setupAndUpdateItems([
        new Item({ name: "Aged Brie", sellIn: 10, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(21);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should increase quality twice as fast when sellIn is negative", () => {
      setupAndUpdateItems([
        new Item({ name: "Aged Brie", sellIn: 0, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(22);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });

    it("should not let Aged Brie quality go above 50", () => {
      setupAndUpdateItems([
        new Item({ name: "Aged Brie", sellIn: 10, quality: 50 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should not let Aged Brie quality go above 50 when sellIn is negative", () => {
      setupAndUpdateItems([
        new Item({ name: "Aged Brie", sellIn: 0, quality: 49 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("should not change Sulfuras quality or sellIn", () => {
      setupAndUpdateItems([
        new Item({
          name: "Sulfuras, Hand of Ragnaros",
          sellIn: 10,
          quality: 80,
        }),
      ]);

      expect(GildedRose.items[0].quality).toBe(80);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });
  });

  describe("Backstage passes", () => {
    it("should increase Backstage passes quality", () => {
      setupAndUpdateItems([
        new Item({ name: "Backstage passes", sellIn: 15, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(21);
      expect(GildedRose.items[0].sellIn).toBe(14);
    });

    it("should not let Backstage passes quality go above 50", () => {
      setupAndUpdateItems([
        new Item({ name: "Backstage passes", sellIn: 10, quality: 50 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should increase Backstage passes quality by 2 when sellIn <= 10", () => {
      setupAndUpdateItems([
        new Item({ name: "Backstage passes", sellIn: 10, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(22);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should increase Backstage passes quality by 3 when sellIn <= 5", () => {
      setupAndUpdateItems([
        new Item({ name: "Backstage passes", sellIn: 5, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(23);
      expect(GildedRose.items[0].sellIn).toBe(4);
    });

    it("should drop Backstage passes quality to 0 after concert", () => {
      setupAndUpdateItems([
        new Item({ name: "Backstage passes", sellIn: 0, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });
  });

  describe("Conjured Mana Cake", () => {
    it("should decrease Conjured items quality twice as fast", () => {
      setupAndUpdateItems([
        new Item({ name: "Conjured Mana Cake", sellIn: 10, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(18);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should decrease Conjured items quality 4 times as fast when sellIn is negative", () => {
      setupAndUpdateItems([
        new Item({ name: "Conjured Mana Cake", sellIn: 0, quality: 20 }),
      ]);

      expect(GildedRose.items[0].quality).toBe(16);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });
  });
});
