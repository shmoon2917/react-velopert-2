import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setUsers(null);
      setError(null);
      setLoading(true);
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  if (error) return <div>에러가 발생했습니다</div>;
  if (loading) return <div>로딩중...</div>;
  if (!users) return <button onClick={fetchUsers}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user, id) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
};

export default Users;
