import { ITEM } from "./item.constant";
import type { ItemName } from "./item.type";

export const getItemType = (name: ItemName.All): ItemName.All => {
  switch (true) {
    case isAgedBrie(name):
      return ITEM.AgedBrie;

    case isBackstagePasses(name):
      return ITEM.BackstagePasses;

    case isConjured(name):
      return ITEM.Conjured;

    case isSulfuras(name):
      return ITEM.Sulfuras;

    default:
      return name;
  }
};

export const isAgedBrie = (name: string): boolean => name === ITEM.AgedBrie;

export const isBackstagePasses = (name: string): boolean =>
  name === ITEM.BackstagePasses;

export const isConjured = (name: string): boolean =>
  name.startsWith(ITEM.Conjured);

export const isNormalItem = (name: string): boolean =>
  !isAgedBrie(name) &&
  !isBackstagePasses(name) &&
  !isSulfuras(name) &&
  !isConjured(name);

export const isSulfuras = (name: string): boolean =>
  name.startsWith(ITEM.Sulfuras);
