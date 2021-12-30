import {
  GlobalState,
  Action,
  ActionTypes,
  convertType,
  Point,
} from "../@types/GlobalStateTypes";

export default function mainReducer(state: GlobalState, action: Action): GlobalState {
  switch (action.type) {
    case ActionTypes.TARGET_POINT:
      return {
        ...state,
        targetPoint: convertType<Point>(action.payload),
      };
    case ActionTypes.TRIANGLE:
      const triAction = convertType<{ index: number, trianglePoint: Point }>(action.payload);
      const { triangle } = state;
      triangle[triAction.index] = triAction.trianglePoint;
      return {
        ...state,
        triangle,
      };
    default:
      console.warn('Invalid Action Type');
      return state;
  }
}
