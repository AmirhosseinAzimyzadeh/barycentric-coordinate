import { useContext } from "react";
import Point from "./components/point/Point";
import CartesianBoard from "./components/cartesian-board/CartesianBoard";
import Triangle from "./components/triangle/Triangle";
import GlobalStateContext from "./components/global-state/GlobalStateContext";
import InfoPanel from "./components/info-panel/InfoPanel";

function App() {
  const [data] = useContext(GlobalStateContext);
  return (
    <>
      <CartesianBoard />
      <Point isTargetPoint point={data.targetPoint} />
      <Triangle />
      <InfoPanel />
    </>
  );
}

export default App;
