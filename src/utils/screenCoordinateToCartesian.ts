import { Point } from "../components/global-state/@types/GlobalStateTypes";

export default function screenCoordinateToCartesian(
  screenPoint: Point,
  width: number,
  height: number,
): Point {
  return {
    x: screenPoint.x - (width / 2),
    y: screenPoint.y - (height / 2)
  };
}