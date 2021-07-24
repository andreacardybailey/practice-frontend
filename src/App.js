import React, { useEffect, useState } from "react";
import UserTodos from './UserTodos.js'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {/* Write your code below */}
    </div>
  );
}

export default App;
