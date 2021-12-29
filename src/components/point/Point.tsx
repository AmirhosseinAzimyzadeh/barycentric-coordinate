import { useContext, useCallback, useEffect } from "react";
import cartesianCoordinateToScreen from "../../utils/cartesianCoordinateToScreen";
import screenCoordinateToCartesian from "../../utils/screenCoordinateToCartesian";
import { ActionTypes, Point as PointType } from "../global-state/@types/GlobalStateTypes";
import GlobalStateContext from "../global-state/GlobalStateContext";
import styles from './point.module.css';

interface Props {
  point: PointType,
  isTargetPoint: boolean,
  index?: number,
}

export default function Point(props: Props) {
  const dispatch = useContext(GlobalStateContext)[1];

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
    }
  }, [dispatch, props.isTargetPoint]);

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
    >

    </div>
  );
}
