import React from 'react';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route exact path="/" component={PostListPage} />
      <Route path="/:id" component={PostPage} />
    </>
  );
};

export default App;
