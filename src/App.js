import React from 'react';
import Users from './ch4(review)/Users';
import { UsersProvider } from './ch4(review)/UsersContext';

const App = () => {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
};

export default App;
