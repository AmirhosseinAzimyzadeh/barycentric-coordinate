import { Point, Triangle } from "../components/global-state/@types/GlobalStateTypes";

interface Output {
  a: number,
  b: number,
  c: number,
}

/**
 * Assume that the triangle is array of points => [P1, P2, P3]
 * then the target point is => tp = a(P1) + b(P2) + c(P3)
 * the goal is to find a, b, and, c | (a + b + c = 1)
 * 
 */
export default function findBarycentricCoordinate(
  targetPoint: Point,
  triangle: Triangle,
): Output {

  const denominator = ((triangle[1].y - triangle[2].y) * (triangle[0].x - triangle[2].x))
  + ((triangle[2].x - triangle[1].x) * (triangle[0].y - triangle[2].y));

  const a = (
    ((triangle[1].y - triangle[2].y) * (targetPoint.x - triangle[2].x))
    + ((triangle[2].x - triangle[1].x) * (targetPoint.y - triangle[2].y))
  ) / (denominator);

  const b = (
    ((triangle[2].y - triangle[0].y) * (targetPoint.x - triangle[2].x))
    + ((triangle[0].x - triangle[2].x) * (targetPoint.y - triangle[2].y))
  ) / (denominator);

  return {
    a,
    b,
    c: 1 + (-1 * a) + (-1 * b),
  };
}
