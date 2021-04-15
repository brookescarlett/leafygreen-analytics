import React, { createContext, useContext, useMemo, useReducer } from "react";
import { AllProductData } from "./types";

const DataActionTypes = {
  SetData: "Set_DATA",
} as const;

type DataActionTypes = typeof DataActionTypes[keyof typeof DataActionTypes];

export { DataActionTypes as DataActionTypes };

interface ActionPayload {
  [DataActionTypes.SetData]: AllProductData;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionMap<Action extends Record<string, any>> = {
  [Key in keyof Action]: Action[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: Action[Key];
      };
};

type Action = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];

type Dispatch = (action: Action) => void;

export interface State {
  data?: AllProductData;
}

interface DataProviderInterface {
  children: Array<Element | JSX.Element>;
}

interface ContextInterface {
  state: State;
  dispatch: Dispatch;
}

const DataContext = createContext<ContextInterface>({
  state: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case DataActionTypes.SetData:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}

export function DataProvider({ children }: DataProviderInterface) {
  const [state, dispatch] = useReducer(reducer, {});

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
