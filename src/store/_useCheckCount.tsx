import React, { createContext, useContext, useReducer, ReactNode } from "react";

type CounterState = {
  count: number;
};
type CounterAction = { type: "increase" } | { type: "decrease" };

type CounterContextProps = {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
};

const CounterContext = createContext<CounterContextProps | undefined>(
  undefined
);

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const CounterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const UseCounterStore = (): CounterState & {
  increase: () => void;
  decrease: () => void;
} => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("CounterProvider内でuseCounterStoreを使用してください");
  }
  const { state, dispatch } = context;

  const increase = () => dispatch({ type: "increase" });
  const decrease = () => dispatch({ type: "decrease" });

  return {
    count: state.count,
    increase,
    decrease,
  };
};
