import { Point } from "../components/global-state/@types/GlobalStateTypes";

export default function cartesianCoordinateToScreen(
  cartesianPoint: Point,
  width: number,
  height: number,
): Point {
  return {
    x: (width / 2) - cartesianPoint.x,
    y: (height / 2) - cartesianPoint.y,
  };
}