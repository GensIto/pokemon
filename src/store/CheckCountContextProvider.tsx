import { createContext, ReactNode } from "react";

import { createCheckboxCounterStore } from "./useCheckCount";

export const CheckboxCounterContext = createContext<ReturnType<
  typeof createCheckboxCounterStore
> | null>(null);

export const CheckboxCounterProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const store = createCheckboxCounterStore();
  return (
    <CheckboxCounterContext.Provider value={store}>
      {children}
    </CheckboxCounterContext.Provider>
  );
};
