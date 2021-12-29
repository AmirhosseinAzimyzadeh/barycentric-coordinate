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
};

export type Action = {
  type: ActionTypes,
  payload: Point | Triangle,
}

export function convertType<T>(t: any): T {
  return t;
}
