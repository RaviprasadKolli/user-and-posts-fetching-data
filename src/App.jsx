import React, { useState, useEffect } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [fetchUrl, setFetchUrl] = useState('');

  useEffect(() => {
    // Fetch user data from the API
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching user data:", error));
  }, [fetchUrl]); // Dependency array includes fetchUrl

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => setFetchUrl('https://jsonplaceholder.typicode.com/users')}>
        Fetch Users
      </button>
      <button onClick={() => setFetchUrl('https://jsonplaceholder.typicode.com/posts')}>
        Fetch Posts (Intentional Change for Example)
      </button>
    </div>
  );
};

export default FetchUsers;
