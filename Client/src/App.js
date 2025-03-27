import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import HomeLogin from "./Components/HomeLogin";
import Deposite from "./Components/Deposite";
import Withdraw from "./Components/Withdraw";
import Bot from "./Components/Bot";
import AboutUs from "./Components/AboutUs";
import CashOut from "./Components/CashOut";
import Faq from "./Components/Faq";
import Cookies from "js-cookie";
import AdminPanel from "./Components/AdminPanel";
import UsersList from "./Components/UsersList";
import EditUser from "./Components/EditUser";
import AdminWithdraw from "./Components/AdminWithdraw";
import CryptoAddy from "./Components/CryptoAddy";
import PrivateRoute from "./Components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Switch>
      {Cookies.get("login") ? ((Cookies.get("role") === 'User')?(
          <PrivateRoute exact path="/" component={HomeLogin} />
        ):(
          <PrivateRoute exact path="/" component={AdminPanel} />
        )):(<Route exact path="/" component={Home} />)}
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/Faq" component={Faq} />
        <PrivateRoute exact path="/HomeLogin" component={HomeLogin} />
        <PrivateRoute exact path="/Deposite" component={Deposite} />
        <PrivateRoute exact path="/Withdraw" component={Withdraw} />
        <PrivateRoute exact path="/Bot" component={Bot} />
        <PrivateRoute exact path="/CashOut" component={CashOut} />
        <PrivateRoute exact path="/UsersList" component={UsersList} />
        <PrivateRoute exact path="/EditUser" component={EditUser} />
        <PrivateRoute exact path="/AdminWithdraw" component={AdminWithdraw} />
        <PrivateRoute exact path="/CryptoAddy" component={CryptoAddy} />
      </Switch>
    </div>
  );
}

export default App;
