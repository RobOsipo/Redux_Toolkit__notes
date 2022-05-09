import classes from './Header.module.css';
import {authActions} from '../store/index'
import {useDispatch, useSelector} from 'react-redux'

const Header = () => {
// Im accessing the name of the key I created (auth) in the /store/index in the configureStore function
// so its state.AUTH.whateverStateIHave when im accessing state inside of useSelector
const isAuth = useSelector(state => state.auth.isAuthenticated)

const dispatch = useDispatch()

const logout = () => {
    dispatch(authActions.logout())
}


  return (
    <header className={classes.header}>
      <h1>Redux Toolkit</h1>
      {isAuth && <nav>
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
      </nav>}
    </header>
  );
};

export default Header;
