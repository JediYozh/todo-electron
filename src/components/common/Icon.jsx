import styled from 'styled-components';

export const Icon = styled.img.attrs({
  width: ({ width }) => width || 15,
  height: ({ height }) => height || 13
})`
  cursor: pointer;
`;
