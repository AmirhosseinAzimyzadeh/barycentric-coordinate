import Point from "./components/point/Point";
import GlobalState from "./components/global-state/GlobalState";

function App() {
  return (
    <GlobalState>
      <Point isTargetPoint x={100} y={200} />
    </GlobalState>
  );
}

export default App;
