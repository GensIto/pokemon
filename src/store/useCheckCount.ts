import { useContext } from "react";
import { createStore, type StoreApi, useStore } from "zustand";

import { CheckboxCounterContext } from "./CheckCountContextProvider";

export const createCheckboxCounterStore = (): StoreApi<{
  count: number;
  increase: () => void;
  decrease: () => void;
}> =>
  createStore<{
    count: number;
    increase: () => void;
    decrease: () => void;
  }>((set) => ({
    count: 0,
    increase: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    decrease: () => {
      set((state) => ({ count: state.count - 1 }));
    },
  }));

export const useCheckboxCounterStore = (): {
  count: number;
  increase: () => void;
  decrease: () => void;
} => {
  const store = useContext(CheckboxCounterContext);
  if (store === null) {
    throw new Error("no provider");
  }
  return useStore(store);
};
