import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';


const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
`;

const Layout = () => (
  <Container>
    <Header />
    <Outlet />
  </Container>
);

export default Layout;