import { Fragment } from "react";

import Counter from './components/Counter';
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated=useSelector((state)=>state.authKey.isAuthenticated);

  return (
    <Fragment>
      <Header/>
      {!isAuthenticated && <Auth/>}
      <Counter />
      {isAuthenticated && <UserProfile/>}
    </Fragment>
  );
}

export default App;
