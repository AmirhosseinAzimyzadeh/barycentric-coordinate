import React, { useEffect, useReducer } from "react";
import Debounce from "../../utils/Debounce";
import { ActionTypes } from "./@types/GlobalStateTypes";
import GlobalStateContext, { defaultStateValue } from "./GlobalStateContext";
import mainReducer from "./reducers/mainReducer";

const debounce = new Debounce();

export default function GlobalState(props: React.PropsWithChildren<{}>) {
  const reducerValue = useReducer(
    mainReducer,
    defaultStateValue,
    () => { return defaultStateValue },
  );

  useEffect(() => {
    const listener = () => {};
    window.addEventListener('resize',  () => {
      debounce.use(() =>{
        reducerValue[1]({ type: ActionTypes.RESET, payload: {x:0, y:0} });
      });
    });
    return () => { window.removeEventListener('resize', listener); }
  }, [reducerValue]);

  return (
    <GlobalStateContext.Provider value={reducerValue}>
      <>
        {props.children}
      </>
    </GlobalStateContext.Provider>
  );
}