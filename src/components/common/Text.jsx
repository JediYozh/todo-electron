import styled from 'styled-components';

export const Text = styled.p`
  display: inline-block;
  width: 78%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: ${({ completed }) => (completed ? '#86909a' : '#fff')};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')}
  overflow-wrap: break-word;
`;
