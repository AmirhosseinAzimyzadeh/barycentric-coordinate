import { Point } from "../global-state/@types/GlobalStateTypes";

interface Props {
  show: boolean,
  point: Point,
}

export default function Coordinate(props: Props) {
  if (!props.show) return (<></>);

  const left = (props.point.x < 0)
    ? '-200%'
    : '100%';

  return (
    <span
      style={{
        position: 'absolute',
        padding: '4px 16px',
        backgroundColor: 'black',
        borderRadius: 5,
        marginBottom: 30,
        top: -30,
        zIndex: 3,
        left,
        transition: '0.3s',
      }}
    >
      <span>{-(props.point.x.toFixed(1))}</span>
      ,
      <span>{props.point.y.toFixed(1)}</span>
    </span>
  )
}
