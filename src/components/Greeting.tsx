import React from 'react';

const Greeting: React.FC = () => {
  let greeting: string = "Hello, TypeScript!";

  return (
    <h1>{greeting}</h1>
  );
}

export default Greeting;
