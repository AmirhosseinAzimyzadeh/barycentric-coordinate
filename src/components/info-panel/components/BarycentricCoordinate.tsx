import { useContext } from "react";
import findBarycentricCoordinate from "../../../utils/findBarycentricCoordinate";
import GlobalStateContext from "../../global-state/GlobalStateContext";
import InOutDetector from "./InOutDetector";

const frac = 3;

export default function BarycentricCoordinate() {
  const [data] = useContext(GlobalStateContext);
  const { a, b, c } = findBarycentricCoordinate(
    data.targetPoint,
    data.triangle,
  );

  return (
    <>
      <div
        style={{
          userSelect: 'all',
          fontSize: 18,
          color: 'rgba(255, 255, 255, 0.8)'
        }}
      >
        {a.toFixed(frac)}, {b.toFixed(frac)}, {c.toFixed(frac)}
      </div>
      <InOutDetector a={a} b={b} c={c} />
    </>
  );
}
