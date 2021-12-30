import { useContext, useEffect, useRef, useState } from "react";
import cartesianCoordinateToScreen from "../../utils/cartesianCoordinateToScreen";
import { Point } from "../global-state/@types/GlobalStateTypes";
import GlobalStateContext from "../global-state/GlobalStateContext";

export default function Lines() {
  const points = useContext(GlobalStateContext)[0].triangle
    .map((p) => (cartesianCoordinateToScreen(p, window.innerWidth, window.innerHeight)));
  const ref = useRef<HTMLCanvasElement>(null);

  const [size, setSize] = useState<[number, number]>([window.innerWidth, window.innerHeight]);


  useEffect(() => {
    if (ref.current === null) return;
    const ctx = ref.current.getContext("2d");
    const listener = () => {
      setSize([window.innerWidth, window.innerHeight]);
      drawLines(points, ctx);
    };
    drawLines(points, ctx);
    window.addEventListener('resize', listener);
    return () => { window.removeEventListener('resize', listener); }
  }, [points]);

  return (
    <canvas
      width={size[0]}
      height={size[1]}
      ref={ref}
    />
  );
}

function drawLines(points: Point[], ctx: CanvasRenderingContext2D | null) {
  if (ctx === null) return;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.lineTo(points[1].x, points[1].y);
  ctx.lineTo(points[2].x, points[2].y);
  ctx.lineTo(points[0].x, points[0].y);
  ctx.strokeStyle = 'white';
  ctx.stroke();
}