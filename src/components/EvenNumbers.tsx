import React from 'react';
import { filterNumbers } from '../utils/filterNumbers';

const EvenNumbers: React.FC = () => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers: number[] = filterNumbers(numbers);

  return (
    <div>
      <h2>Even Numbers</h2>
      <ul>
        {evenNumbers.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default EvenNumbers;
