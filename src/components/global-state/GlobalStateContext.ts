import React from "react";
import { Action, GlobalState as StateType } from "./@types/GlobalStateTypes";

const defaultStateValue: StateType = {
  targetPoint: { x: 0, y: 0 },
  triangle: [
    { x: 100, y: -100 },
    { x: -100, y: -100 },
    { x: 0, y: 100 },
  ]
};

const GlobalStateContext = React
  .createContext<[StateType, React.Dispatch<Action>]>([defaultStateValue, (action) => { }]);
export { defaultStateValue };
export default GlobalStateContext;