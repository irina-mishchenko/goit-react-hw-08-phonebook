import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>

      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home Page</Nav.Link>
        </Nav.Item>
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav.Item>
        )}
      </Nav>
    </div>
  );
};

export default Navigation;
