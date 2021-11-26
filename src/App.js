// import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login'

function App() {
  /*
  const localStorageUsers = localStorage.getItem('GRUPO1_V1');
  let parsedUser;

  if (!localStorageUsers) {
    localStorage.setItem("GRUPO1_V1", JSON.stringify([]));
    parsedUser = [];
  } else {
    parsedUser = JSON.parse(localStorageUsers);
  }

  const changeState = (newState) => {
    const stringedUsers = JSON.stringify(newState);
    localStorage.setItem("GRUPO1_V1", stringedUsers);
  }
  */

  return (
    <div className="App">
      <Login />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export { App };