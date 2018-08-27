import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import trash from '../assets/trash.svg';
import edit from '../assets/edit.svg';
import disk from '../assets/disk.svg';
import { deleteTodo, editTodo } from '../actions';
import {
  Divider,
  Checkbox,
  Text,
  Button,
  Input,
  Icon
} from './common';

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id)),
  editTodo: (id, title) => dispatch(editTodo(id, title))
});

class Todo extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.state = {
      editing: false
    };
  }

  onEdit() {
    const { title, editTodo, id } = this.props;
    const { editing } = this.state;
    const { input } = this;

    if (input) {
      if (input.value !== title) {
        editTodo(id, input.value);
      }
    }
    this.setState(() => ({ editing: !editing }));
  }

  render() {
    const {
      completed,
      id, title,
      deleteTodo
    } = this.props;
    const { editing } = this.state;

    return (
      <div>
        <Row className="row">
          {!editing && <Checkbox checked={completed} id={id} />}
          {editing ? (
            <Input
              autoFocus
              innerRef={(node) => { this.input = node; }}
              defaultValue={title}
              onKeyPress={({ key }) => (key === 'Enter' ? this.onEdit() : null)}
              editing={editing}
            />) : (
              <Text completed={completed}>
                {title}
              </Text>
          )}
          <Options>
            <Button onClick={this.onEdit}>
              <Icon src={editing ? disk : edit} alt="edit" />
            </Button>
            <Button onClick={() => deleteTodo(id)}>
              <TrashIcon src={trash} alt="trash" />
            </Button>
          </Options>
        </Row>
        <Divider />
      </div>
    );
  }
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
};

const Row = styled.div``;

const Options = styled.div`
  img {
    cursor: pointer;
  }
  margin-left: auto;
  visibility: hidden;
  

  ${Row}:hover & {
    visibility: visible;
  }

  @media (max-width: 700px) {
    visibility: visible !important;
    display: block;
  }
`;

const TrashIcon = Icon.extend`
  margin-left: 6px;
`;

export default connect(undefined, mapDispatchToProps)(Todo);
