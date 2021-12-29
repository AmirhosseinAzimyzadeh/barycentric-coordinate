import { useContext } from "react";
import GlobalStateContext from "../global-state/GlobalStateContext";
import Point from "../point/Point";

export default function Triangle() {
  const [data] = useContext(GlobalStateContext);
  return (
    <>
      {data.triangle.map((p, index) => (
        <Point
          key={index}
          point={p}
          isTargetPoint={false}
          index={index}
        />
      ))}
    </>
  );
}
