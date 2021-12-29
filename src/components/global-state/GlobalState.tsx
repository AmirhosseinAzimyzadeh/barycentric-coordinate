import React, { useReducer } from "react";
import GlobalStateContext, { defaultStateValue } from "./GlobalStateContext";
import mainReducer from "./reducers/mainReducer";

export default function GlobalState(props: React.PropsWithChildren<{}>) {
  const reducerValue = useReducer(
    mainReducer,
    defaultStateValue,
    () => { return defaultStateValue },
  );

  return (
    <GlobalStateContext.Provider value={reducerValue}>
      <>
        {props.children}
      </>
    </GlobalStateContext.Provider>
  );
}