import { useContext, useEffect, useRef, useState } from "react";
import cartesianCoordinateToScreen from "../../utils/cartesianCoordinateToScreen";
import findBarycentricCoordinate from "../../utils/findBarycentricCoordinate";
import { Point } from "../global-state/@types/GlobalStateTypes";
import GlobalStateContext from "../global-state/GlobalStateContext";

export default function Lines() {
  const [data] = useContext(GlobalStateContext);
  const targetPoint = cartesianCoordinateToScreen(
    data.targetPoint,
    window.innerWidth,
    window.innerHeight,
  );
  const points = data.triangle
    .map((p) => (cartesianCoordinateToScreen(p, window.innerWidth, window.innerHeight)));
  const ref = useRef<HTMLCanvasElement>(null);

  const [size, setSize] = useState<[number, number]>([window.innerWidth, window.innerHeight]);


  useEffect(() => {
    if (ref.current === null) return;
    const ctx = ref.current.getContext("2d");
    const listener = () => {
      setSize([window.innerWidth, window.innerHeight]);
      drawLines(points, targetPoint, ctx);
    };
    drawLines(points, targetPoint, ctx);
    window.addEventListener('resize', listener);
    return () => { window.removeEventListener('resize', listener); }
  }, [points, targetPoint]);

  return (
    <canvas
      width={size[0]}
      height={size[1]}
      ref={ref}
    />
  );
}

function drawLines(points: Point[], targetPoint: Point, ctx: CanvasRenderingContext2D | null) {
  if (ctx === null) return;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.lineTo(points[1].x, points[1].y);
  ctx.lineTo(points[2].x, points[2].y);
  ctx.lineTo(points[0].x, points[0].y);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // draw internal line if point is inside of triangle
  const {a, b, c} = findBarycentricCoordinate(
    targetPoint,
    [points[0], points[1], points[2]], // triangle
  );

  const isInside = (a < 1 && a > 0)
  && (b < 1 && b > 0)
  && (c < 1 && c > 0);

  if (!isInside) return;

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1;
  ctx.moveTo(targetPoint.x, targetPoint.y);
  ctx.lineTo(points[0].x, points[0].y);
  ctx.stroke();

  ctx.moveTo(targetPoint.x, targetPoint.y);
  ctx.lineTo(points[1].x, points[1].y);
  ctx.stroke();

  ctx.moveTo(targetPoint.x, targetPoint.y);
  ctx.lineTo(points[2].x, points[2].y);
  ctx.stroke();
}