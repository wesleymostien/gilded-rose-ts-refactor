import { Item } from "./item";
import { ITEM } from "./item.constant";

export namespace ItemName {
  export type AgedBrie = typeof ITEM.AgedBrie;
  export type BackstagePasses = typeof ITEM.BackstagePasses;
  export type Conjured = `${typeof ITEM.Conjured}${string}`;
  export type Sulfuras = `${typeof ITEM.Sulfuras}${string}`;

  export type Special = AgedBrie | BackstagePasses | Conjured | Sulfuras;

  export type All = Special | string;
}

export type ItemData =
  | {
      name: ItemName.Sulfuras;
      quality?: never;
      sellIn?: never;
    }
  | (Pick<Item, "name" | "quality"> & {
      name: Exclude<ItemName.All, ItemName.Sulfuras>;
    } & Partial<Pick<Item, "sellIn">>);
