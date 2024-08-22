import React from 'react';

const ColorList: React.FC = () => {
  const colors: string[] = ["Red", "Green", "Blue"];

  return (
    <div>
      <h2>Colors</h2>
      <ul>
        {colors.map(color => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;
