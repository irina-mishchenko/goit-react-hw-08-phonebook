import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Navigation from "./Navigation";
import { authSelectors } from './../../redux/auth';

import s from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
    <header className={s.header}>
      <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
    <hr/>
    </>
  );
}
