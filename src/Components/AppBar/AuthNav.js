import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthNav = () => {
  return (
    <>
      <div>
        <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/register">Sign up</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">LogIn</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default AuthNav;
