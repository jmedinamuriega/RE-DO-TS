import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting';
import NumberList from './components/NumberList';
import ColorList from './components/ColorList';
import EvenNumbers from './components/EvenNumbers';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/task1">Task 1: Basic TypeScript Types</Link>
            </li>
            <li>
              <Link to="/task2">Task 2: Handling Array Manipulation</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
      </div>
    </Router>
  );
}

const Task1: React.FC = () => {
  return (
    <div>
      <Greeting />
      <NumberList />
    </div>
  );
}

const Task2: React.FC = () => {
  return (
    <div>
      <ColorList />
      <EvenNumbers />
      <UserList />
    </div>
  );
}

export default App;
