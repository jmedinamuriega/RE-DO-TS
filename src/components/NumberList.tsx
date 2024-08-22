import React from 'react';

const NumberList: React.FC = () => {
  let numberList: number[] = [5, 10, 15];

  return (
    <ul>
      {numberList.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
}

export default NumberList;
