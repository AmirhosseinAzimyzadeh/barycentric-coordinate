import { Point } from "../components/global-state/@types/GlobalStateTypes";

export default function screenCoordinateToCartesian(
  screenPoint: Point,
  width: number,
  height: number,
): Point {
  return {
    x: (width / 2) - screenPoint.x,
    y: (height / 2) - screenPoint.y,
  };
}