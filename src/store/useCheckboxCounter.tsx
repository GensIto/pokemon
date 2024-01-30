import { ReactNode, createContext, useContext } from "react";
import { StoreApi, createStore, useStore } from "zustand";

type CheckboxCounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

const CreateCheckboxCounterStore = (): StoreApi<CheckboxCounterState> => {
  return createStore<CheckboxCounterState>((set) => ({
    count: 0,
    increase: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    decrease: () => {
      set((state) => ({ count: state.count - 1 }));
    },
  }));
};

export const CheckboxCounterContext = createContext<ReturnType<
  typeof CreateCheckboxCounterStore
> | null>(null);

export const CheckboxCounterProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const store = CreateCheckboxCounterStore();
  return (
    <CheckboxCounterContext.Provider value={store}>
      {children}
    </CheckboxCounterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCheckboxCounterStore = (): CheckboxCounterState => {
  const store = useContext(CheckboxCounterContext);
  if (store === null) {
    throw new Error("no provider");
  }
  return useStore(store);
};
