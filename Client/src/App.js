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
function App() {
  return (
    <div className="App">
      <Switch>
        {Cookies.get("login") ? ((Cookies.get("role") === 'User')?(
          <Route exact path="/" component={HomeLogin} />
        ):(
          <Route exact path="/" component={AdminPanel} />
        )):(<Route exact path="/" component={Home} />)}
        
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/HomeLogin" component={HomeLogin} />
        <Route exact path="/Deposite" component={Deposite} />
        <Route exact path="/Withdraw" component={Withdraw} />
        <Route exact path="/Bot" component={Bot} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/CashOut" component={CashOut} />
        <Route exact path="/Faq" component={Faq} />
        <Route exact path="/UsersList" component={UsersList} />
        <Route exact path="/EditUser" component={EditUser} />
        <Route exact path="/AdminWithdraw" component={AdminWithdraw} />
        <Route exact path="/CryptoAddy" component={CryptoAddy} />
      </Switch>
    </div>
  );
}

export default App;
