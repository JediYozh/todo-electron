import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';

const mapStateToProps = ({ todos }) => ({ todos });

const TodoList = ({ todos }) => (
  <div>
    {todos.map(({ ...props, id }) => <Todo key={id} {...props} />)}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps)(TodoList);
