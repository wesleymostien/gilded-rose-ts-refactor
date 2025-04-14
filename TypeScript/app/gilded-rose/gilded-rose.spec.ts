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
    it("should create new normal item with default quality or sellIn", () => {
      GildedRose.setItems([new Item("normal item")]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(0);
    });

    it("should not allow quality to be above 50", () => {
      GildedRose.setItems([new Item("normal item", 10, 60)]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });

    it("should not allow quality to be below 0", () => {
      GildedRose.setItems([new Item("normal item", 10, -5)]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });

    it("should decrease quality and sellIn of normal items", () => {
      setupAndUpdateItems([new Item("normal item", 10, 20)]);

      expect(GildedRose.items[0].quality).toBe(19);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should decrease quality twice as fast when sellIn is negative", () => {
      setupAndUpdateItems([new Item("normal item", 0, 20)]);

      expect(GildedRose.items[0].quality).toBe(18);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });

    it("should not let quality go below 0", () => {
      setupAndUpdateItems([new Item("normal item", 10, 0)]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });
  });

  describe("Aged Brie", () => {
    it("should create new Aged Brie item with default quality or sellIn", () => {
      GildedRose.setItems([new Item("Aged Brie")]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(0);
    });

    it("should not allow quality to be above 50", () => {
      GildedRose.setItems([new Item("Aged Brie", 10, 60)]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });

    it("should not allow quality to be below 0", () => {
      GildedRose.setItems([new Item("Aged Brie", 10, -5)]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });

    it("should increase quality of Aged Brie", () => {
      setupAndUpdateItems([new Item("Aged Brie", 10, 20)]);

      expect(GildedRose.items[0].quality).toBe(21);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should increase quality twice as fast when sellIn is negative", () => {
      setupAndUpdateItems([new Item("Aged Brie", 0, 20)]);

      expect(GildedRose.items[0].quality).toBe(22);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });

    it("should not let Aged Brie quality go above 50", () => {
      setupAndUpdateItems([new Item("Aged Brie", 10, 50)]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should not let Aged Brie quality go above 50 when sellIn is negative", () => {
      setupAndUpdateItems([new Item("Aged Brie", 0, 49)]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("should create new Sulfuras item with default quality or sellIn", () => {
      GildedRose.setItems([new Item("Sulfuras, Hand of Ragnaros")]);

      expect(GildedRose.items[0].quality).toBe(80);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });

    it("should not change Sulfuras quality or sellIn", () => {
      setupAndUpdateItems([new Item("Sulfuras, Hand of Ragnaros")]);

      expect(GildedRose.items[0].quality).toBe(80);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });
  });

  describe("Backstage passes", () => {
    it("should create new Backstage passes item with default quality or sellIn", () => {
      GildedRose.setItems([new Item("Backstage passes")]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(0);
    });

    it("should not allow quality to be above 50", () => {
      GildedRose.setItems([new Item("Backstage passes", 10, 60)]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });

    it("should not allow quality to be below 0", () => {
      GildedRose.setItems([new Item("Backstage passes", 10, -5)]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });

    it("should increase Backstage passes quality", () => {
      setupAndUpdateItems([new Item("Backstage passes", 15, 20)]);

      expect(GildedRose.items[0].quality).toBe(21);
      expect(GildedRose.items[0].sellIn).toBe(14);
    });

    it("should not let Backstage passes quality go above 50", () => {
      setupAndUpdateItems([new Item("Backstage passes", 10, 50)]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should increase Backstage passes quality by 2 when sellIn <= 10", () => {
      setupAndUpdateItems([new Item("Backstage passes", 10, 20)]);

      expect(GildedRose.items[0].quality).toBe(22);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should increase Backstage passes quality by 3 when sellIn <= 5", () => {
      setupAndUpdateItems([new Item("Backstage passes", 5, 20)]);

      expect(GildedRose.items[0].quality).toBe(23);
      expect(GildedRose.items[0].sellIn).toBe(4);
    });

    it("should drop Backstage passes quality to 0 after concert", () => {
      setupAndUpdateItems([new Item("Backstage passes", 0, 20)]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });
  });

  describe("Conjured Mana Cake", () => {
    it("should create new Conjured item with default quality or sellIn", () => {
      GildedRose.setItems([new Item("Conjured Mana Cake")]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(0);
    });

    it("should not allow quality to be above 50", () => {
      GildedRose.setItems([new Item("Conjured Mana Cake", 10, 60)]);

      expect(GildedRose.items[0].quality).toBe(50);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });

    it("should not allow quality to be below 0", () => {
      GildedRose.setItems([new Item("Conjured Mana Cake", 10, -5)]);

      expect(GildedRose.items[0].quality).toBe(0);
      expect(GildedRose.items[0].sellIn).toBe(10);
    });

    it("should decrease Conjured items quality twice as fast", () => {
      setupAndUpdateItems([new Item("Conjured Mana Cake", 10, 20)]);

      expect(GildedRose.items[0].quality).toBe(18);
      expect(GildedRose.items[0].sellIn).toBe(9);
    });

    it("should decrease Conjured items quality 4 times as fast when sellIn is negative", () => {
      setupAndUpdateItems([new Item("Conjured Mana Cake", 0, 20)]);

      expect(GildedRose.items[0].quality).toBe(16);
      expect(GildedRose.items[0].sellIn).toBe(-1);
    });
  });
});
