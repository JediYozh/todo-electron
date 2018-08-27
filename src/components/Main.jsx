import styled from 'styled-components';

const Main = styled.main`
  height: 450px;
  max-width: 360px;
  margin: 130px auto;
  width: auto;
  background: #283643;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  overflow: auto;

  @media (max-width: 700px) {
    margin: 0;
    padding: 0;
    min-width: 100%;
    min-height: 100vh;
    position: relative;
  }
`;

export default Main;
