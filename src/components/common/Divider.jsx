import styled from 'styled-components';

export const Divider = styled.hr`
  margin: 0;
  padding: 0;
  height: 1px; 
  border: none; 
  margin-left: ${({ left }) => (left || '0')};
  margin-right: -18px;
  background: rgb(28, 39, 50);
`;
