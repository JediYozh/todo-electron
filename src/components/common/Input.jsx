import styled from 'styled-components';

export const Input = styled.input.attrs({
  type: 'text',
})`
  &:focus {
    outline: 0;
  }
  background: transparent;
  border: none;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  width: 80%;
  padding-left: ${({ editing }) => (editing ? '0' : '1em')};
`;
