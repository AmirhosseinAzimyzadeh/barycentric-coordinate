import { useContext } from "react";
import { ActionTypes } from "../global-state/@types/GlobalStateTypes";
import GlobalStateContext from "../global-state/GlobalStateContext";

interface Props {
  x: number,
  y: number,
  isTargetPoint: boolean
}

export default function Point(props: Props) {
  const { x, y, isTargetPoint } = props;

  return (
    <div
      style={{
        width: 10,
        height: 10,
        backgroundColor: isTargetPoint ? 'rgba(100, 100, 255)' : 'white',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        left: x,
        top: y,
        borderRadius: '50%',
      }}
    >

    </div>
  );
}
