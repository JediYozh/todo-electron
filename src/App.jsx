import React from 'react';
import Header from './components/Header';
import NewTodo from './components/NewTodo';
import { Container } from './components/common';
import TodoList from './components/TodoList';
import Main from './components/Main';

const App = () => (
  <Main>
    <Container>
      <Header />
      <TodoList />
      <NewTodo />
    </Container>
  </Main>
);

export default App;
