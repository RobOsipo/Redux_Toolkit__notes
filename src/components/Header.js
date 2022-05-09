import classes from './Header.module.css';
import {authActions} from '../store/index'
import {useDispatch} from 'react-redux'

const Header = () => {

const dispatch = useDispatch()

const logout = () => {
    dispatch(authActions.logout())
}


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
