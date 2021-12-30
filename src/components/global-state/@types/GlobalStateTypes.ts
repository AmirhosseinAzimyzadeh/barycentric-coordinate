// -----------------------
// ----- STATE TYPES -----
// -----------------------
export interface Point {
  x: number,
  y: number,
}

export type Triangle = [Point, Point, Point];

export interface GlobalState {
  targetPoint: Point,
  triangle: Triangle,
}

// -------------------------
// ----- REDUCER TYPES -----
// -------------------------
export enum ActionTypes {
  TARGET_POINT,
  TRIANGLE,
  RESET,
};

export type Action = {
  type: ActionTypes,
  payload: Point | {index: number, trianglePoint: Point},
}

export function convertType<T>(t: any): T {
  return t;
}
