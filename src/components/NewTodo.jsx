import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import plus from '../assets/plus.svg';
import { addTodo } from '../actions';
import {
  Divider,
  Input,
  Button
} from './common';

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodo(title)),
});

class NewTodo extends Component {
  constructor() {
    super();

    this.onAdd = this.onAdd.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { input: '' };
  }

  onChange(input) {
    this.setState(() => ({ input }));
  }

  onAdd() {
    const { input } = this.state;
    const { addTodo } = this.props;
    if (input) {
      addTodo(input);
      this.setState(() => ({ input: '' }));
    }
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <Row className="row">
          <Button onClick={this.onAdd}>
            <Icon
              src={plus}
              height={15}
              width={15}
            />
          </Button>
          <Input
            value={input}
            placeholder="Type your next todo..."
            onChange={({ target: { value } }) => this.onChange(value)}
            onKeyPress={({ key }) => (key === 'Enter' ? this.onAdd() : null)}
          />
        </Row>
        <Divider />
      </div>
    );
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const Icon = styled.img`
  cursor: pointer;
  padding-left: 2px;
`;

const Row = styled.div``;

export default connect(undefined, mapDispatchToProps)(NewTodo);
