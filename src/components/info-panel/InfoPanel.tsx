import { useState } from 'react';
import styles from './info-panel.module.css';
import BarycentricCoordinate from './components/BarycentricCoordinate';
import ExpandButton from './components/ExpandButton';

export default function InfoPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.container}
      data-is-open={isOpen}
    >
      <div className={styles.header}>
        <BarycentricCoordinate />
        <ExpandButton
          isOpen={isOpen}
          onClick={() => {
            setIsOpen((prevState) => !prevState)
          }}
        />
      </div>
      {
        !isOpen ? (<></>) : (
          <>
            <h3>Barycentric Coordinate</h3>
            <p>Grab a point and move it to see how numbers in this coordinate system changes</p>
            <a href='https://github.com/AmirhosseinAzimyzadeh/barycentric-coordinate'>
              Source code (Github)
            </a>
          </>
        )
      }
    </div>
  );
}
