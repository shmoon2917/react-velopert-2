import React, { useState } from 'react';
import axios from 'axios';
import User from './User';
import { useAsync } from 'react-async';

const getUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

const Users = () => {
  const [userId, setUserId] = useState(null);
  const { data: users, error, isLoading, reload } = useAsync({
    promiseFn: getUsers,
  });

  const onClickUser = (id) => () => {
    setUserId(id);
  };

  if (error) return <div>에러가 발생했습니다</div>;
  if (isLoading) return <div>로딩중...</div>;
  if (!users) return <button onClick={reload}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={onClickUser(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={reload}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
