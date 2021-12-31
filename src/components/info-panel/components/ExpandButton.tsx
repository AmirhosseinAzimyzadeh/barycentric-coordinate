interface Props {
  isOpen: boolean,
  onClick: () => void,
}

export default function ExpandButton(props: Props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: '5px',
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        cursor: 'pointer',
        marginLeft: 'auto',
      }}
    >
      <svg
        style={{
          transform: props.isOpen ? 'rotate(180deg)' : '',
          transition: '0.3s',
        }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="white"/>
      </svg>
    </button>
  );
}