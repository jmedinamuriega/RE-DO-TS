import React from 'react';

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];

const UserList: React.FC = () => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.name}>
            {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
