import { Item } from "./item";
import { ITEM } from "./item.constant";

const DEFAULT_QUALITY = 50;
const DEFAULT_SELL_IN = 10;
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

describe("Item Class", () => {
  describe("Constructor", () => {
    const itemTypes = [
      { name: "normal item", itemName: "Test Item" },
      { name: "Aged Brie", itemName: ITEM.AgedBrie },
      { name: "Backstage passes", itemName: ITEM.BackstagePasses },
      { name: "Conjured", itemName: ITEM.Conjured },
      { name: "Sulfuras", itemName: ITEM.Sulfuras },
    ];

    itemTypes.forEach(({ name, itemName }) => {
      describe(name, () => {
        it(`should allow ${name} item to be created with provided values`, () => {
          const item = new Item({ name: itemName, quality: 20, sellIn: 10 });

          expect(item.name).toBe(itemName);
          expect(item.quality).toBe(20);
          expect(item.sellIn).toBe(10);
        });

        it(`should create an ${name} item with provided name and default values`, () => {
          //@ts-expect-error Missing required props.
          const item = new Item({ name: itemName });

          expect(item.name).toBe(itemName);
          expect(item.quality).toBe(DEFAULT_QUALITY);
          expect(item.sellIn).toBe(DEFAULT_SELL_IN);
        });

        it(`should use the provided sellIn value for ${name} item`, () => {
          //@ts-expect-error Missing required props.
          const item = new Item({ name: itemName, sellIn: 5 });

          expect(item.name).toBe(itemName);
          expect(item.quality).toBe(DEFAULT_QUALITY);
          expect(item.sellIn).toBe(5);
        });

        it(`should use the provided quality value for ${name} item`, () => {
          const item = new Item({ name: itemName, quality: 30 });

          expect(item.name).toBe(itemName);
          expect(item.quality).toBe(30);
          expect(item.sellIn).toBe(DEFAULT_SELL_IN);
        });

        it(`should set quality to MIN_QUALITY if the provided value is below MIN_QUALITY for ${name} item`, () => {
          const item = new Item({ name: itemName, quality: -10 });

          expect(item.quality).toBe(MIN_QUALITY);
        });

        it(`should set quality to MAX_QUALITY if the provided value is above MAX_QUALITY for ${name} item`, () => {
          const item = new Item({ name: itemName, quality: 60 });

          expect(item.quality).toBe(MAX_QUALITY);
        });
      });
    });

    describe("Conjured", () => {
      it("should allow Conjured items to be created with a suffix", () => {
        const item = new Item({
          name: ITEM.Conjured + " Sword",
          quality: 15,
          sellIn: 5,
        });

        expect(item.name).toBe("Conjured Sword");
        expect(item.quality).toBe(15);
        expect(item.sellIn).toBe(5);
      });
    });

    describe("Sulfuras", () => {
      it("should allow Sulfuras items to be created with a suffix", () => {
        const item = new Item({
          name: ITEM.Sulfuras + ", Hand of Ragnaros",
          quality: 15,
          sellIn: 5,
        });

        expect(item.name).toBe("Sulfuras, Hand of Ragnaros");
        expect(item.quality).toBe(15);
        expect(item.sellIn).toBe(5);
      });
    });
  });
});
