interface Props {
  a: number,
  b: number,
  c: number,
}

export default function InOutDetector(props: Props) {
  const { a, b, c } = props;
  const isInside = (a < 1 && a > 0)
    && (b < 1 && b > 0)
    && (c < 1 && c > 0);

  const backgroundColor = isInside ? '#31A31E' : '#ED1C1C';
  const text = isInside ? 'Inside' : 'Outside';

  return (
    <span
      style={{
        backgroundColor,
        borderRadius: 5,
        padding: '4px 10px',
        // color: 'rgba(25, 25, 25, 1)',
        color: 'white',
        margin: '0 20px',
      }}
    >
      {text}
    </span>
  );
}
