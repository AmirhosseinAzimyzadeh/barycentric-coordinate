import Point from "./components/point/Point";
import GlobalState from "./components/global-state/GlobalState";
import CartesianBoard from "./components/cartesian-board/CartesianBoard";

function App() {
  return (
    <GlobalState>
      <CartesianBoard />
      <Point isTargetPoint x={100} y={200} />
    </GlobalState>
  );
}

export default App;
