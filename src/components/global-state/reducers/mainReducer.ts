import {
  GlobalState,
  Action,
  ActionTypes,
  convertType,
  Point,
  Triangle,
} from "../@types/GlobalStateTypes";

export default function mainReducer(state: GlobalState, action: Action): GlobalState {
  console.log('reducer called');
  switch (action.type) {
    case ActionTypes.TARGET_POINT:
      return {
        ...state,
        targetPoint: convertType<Point>(action.payload),
      };
    case ActionTypes.TRIANGLE:
      return {
        ...state,
        triangle: convertType<Triangle>(action.payload),
      };
    default:
      console.warn('Invalid Action Type');
      return state;
  }
}
