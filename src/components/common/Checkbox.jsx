import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

const Checkbox = ({ checked, id, toggleTodo }) => (
  <CheckContainer>
    <Checkmark checked={checked} onClick={() => toggleTodo(id)} />
  </CheckContainer>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const CheckContainer = styled.label`
  padding-left: 30px;
  height: 20px;
  user-select: none; 
  position: relative;
  display: inline-block;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 17px;
  width: 17px;
  background-color: ${({ checked }) => (checked ? '#4a8df5' : '#283643')};
  border: 1px solid #5e6974;
  border-radius: 50%;
  cursor: pointer;
`;

export default connect(undefined, mapDispatchToProps)(Checkbox);
