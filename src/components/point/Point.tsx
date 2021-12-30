import { useContext, useCallback, useEffect, useState } from "react";
import cartesianCoordinateToScreen from "../../utils/cartesianCoordinateToScreen";
import screenCoordinateToCartesian from "../../utils/screenCoordinateToCartesian";
import { ActionTypes, Point as PointType } from "../global-state/@types/GlobalStateTypes";
import GlobalStateContext from "../global-state/GlobalStateContext";
import Coordinate from "./Coordinate";
import styles from './point.module.css';

interface Props {
  point: PointType,
  isTargetPoint: boolean,
  index?: number,
}

export default function Point(props: Props) {
  const dispatch = useContext(GlobalStateContext)[1];
  const [showCoordinate, setShowCoordinate] = useState(false);

  const { x, y } = cartesianCoordinateToScreen(
    props.point,
    window.innerWidth,
    window.innerHeight,
  );

  const left: string = `${(x / window.innerWidth) * 100}%`;
  const top: string = `${(y / window.innerHeight) * 100}%`;

  const mouseMoveListener = useCallback((e: MouseEvent) => {
    const screenPoint: PointType = { x: e.clientX, y: e.clientY }
    const cartesianPoint: PointType = screenCoordinateToCartesian(
      screenPoint,
      window.innerWidth,
      window.innerHeight,
    );
    if (props.isTargetPoint) {
      dispatch({
        type: ActionTypes.TARGET_POINT,
        payload: cartesianPoint,
      });
    } else if (props.index !== undefined) {
      dispatch({
        type: ActionTypes.TRIANGLE,
        payload: {
          index: props.index,
          trianglePoint: cartesianPoint,
        }
      })
    }
  }, [dispatch, props.index, props.isTargetPoint]);

  useEffect(() => {
    const mouseUpListener = () => {
      window.removeEventListener('mousemove', mouseMoveListener);
    };
    window.addEventListener('mouseup', mouseUpListener);
    return () => { window.removeEventListener('mouseup', mouseUpListener); }
  }, [mouseMoveListener]);

  return (
    <div
      className={styles.point}
      style={{
        backgroundColor: props.isTargetPoint ? 'rgba(100, 100, 255)' : 'white',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        left,
        top,
      }}
      onMouseDown={() => {
        window.addEventListener('mousemove', mouseMoveListener);
      }}
      onMouseEnter={() => { setShowCoordinate(true); }}
      onMouseLeave={() => { setShowCoordinate(false); }}
    >
      <Coordinate
        point={props.point}
        show={showCoordinate}
      />
    </div>
  );
}
