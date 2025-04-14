import { ITEM } from "./item.constant";
import type { ItemName } from "./item.type";
import {
  getItemType,
  isAgedBrie,
  isBackstagePasses,
  isConjured,
  isNormalItem,
  isSulfuras,
} from "./item.util";

describe("Item util", () => {
  describe("getItemType", () => {
    it("should return Aged Brie type", () => {
      expect(getItemType("Aged Brie")).toBe(ITEM.AgedBrie);
    });

    it("should return Backstage passes type", () => {
      expect(getItemType("Backstage passes")).toBe(ITEM.BackstagePasses);
    });

    it("should return Conjured type", () => {
      expect(getItemType("Conjured")).toBe(ITEM.Conjured);
    });

    it("should return Conjured type with suffux", () => {
      expect(getItemType("Conjured whatever")).toBe(ITEM.Conjured);
    });

    it("should return Sulfuras type", () => {
      expect(getItemType("Sulfuras")).toBe(ITEM.Sulfuras);
    });

    it("should return Sulfuras type with suffix", () => {
      expect(getItemType("Sulfuras suffix")).toBe(ITEM.Sulfuras);
    });

    it("should return the original name for normal items", () => {
      expect(getItemType("Normal Item")).toBe("Normal Item");
    });
  });

  describe("isAgedBrie", () => {
    it("should return true for Aged Brie", () => {
      expect(isAgedBrie("Aged Brie")).toBe(true);
    });

    it("should return false for other items", () => {
      expect(isAgedBrie("Normal Item")).toBe(false);
    });
  });

  describe("isBackstagePasses", () => {
    it("should return true for Backstage passes", () => {
      expect(isBackstagePasses("Backstage passes")).toBe(true);
    });

    it("should return false for other items", () => {
      expect(isBackstagePasses("Normal Item")).toBe(false);
    });
  });

  describe("isConjured", () => {
    it("should return true for Conjured items", () => {
      expect(isConjured("Conjured Mana Cake")).toBe(true);
      expect(isConjured("Conjured Sword")).toBe(true);
      expect(isConjured("Conjured")).toBe(true);
    });

    it("should return false for other items", () => {
      expect(isConjured("Normal Item")).toBe(false);
      expect(isConjured("Aged Brie")).toBe(false);
    });
  });

  describe("isSulfuras", () => {
    it("should return true for Sulfuras items", () => {
      expect(isSulfuras("Sulfuras, Hand of Ragnaros")).toBe(true);
      expect(isSulfuras("Sulfuras")).toBe(true);
      expect(isSulfuras("Sulfuras +5 Sword")).toBe(true);
    });

    it("should return false for other items", () => {
      expect(isSulfuras("Normal Item")).toBe(false);
      expect(isSulfuras("Aged Brie")).toBe(false);
    });
  });

  describe("isNormalItem", () => {
    it("should return true for normal items", () => {
      expect(isNormalItem("Normal Item")).toBe(true);
      expect(isNormalItem("Another Item")).toBe(true);
    });

    it("should return false for special items", () => {
      expect(isNormalItem("Aged Brie")).toBe(false);
      expect(isNormalItem("Backstage passes")).toBe(false);
      expect(isNormalItem("Conjured Mana Cake")).toBe(false);
      expect(isNormalItem("Sulfuras, Hand of Ragnaros")).toBe(false);
    });
  });
});
