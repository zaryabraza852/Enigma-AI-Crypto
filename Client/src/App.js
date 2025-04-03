import "./App.css";
import { Switch, Route,Redirect } from "react-router-dom";
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
import { jwtDecode } from "jwt-decode";

function App() {
  const token = Cookies.get("token");
  let isAuthenticated = false;
  let isAdmin = false;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      isAuthenticated = true;
      isAdmin = decoded.Role === true; 
    } catch (error) {
      isAuthenticated = false;
    }
  }
  return (
    <div className="App">
      <Switch>
        {/* Redirect users based on their role */}
      {/* {Cookies.get("login") ? ((Cookies.get("role") === 'User')?(
          <PrivateRoute exact path="/" component={HomeLogin} />
        ):(
          <PrivateRoute exact path="/" component={AdminPanel} />
        )):(<Route exact path="/" component={Home} />)} */}

        {/* Redirect users based on authentication and role */}
        <Route
          exact
          path="/"
          render={() =>
            isAuthenticated ? (
              isAdmin ? <Redirect to="/AdminPanel" /> : <Redirect to="/HomeLogin" />
            ) : (
              <Redirect to="/home" />
            )
          }
        />

        {/* Public Routes */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/Faq" component={Faq} />

          {/* User Routes */}
        <PrivateRoute exact path="/HomeLogin" component={HomeLogin} />
        <PrivateRoute exact path="/Deposite" component={Deposite} />
        <PrivateRoute exact path="/Withdraw" component={Withdraw} />
        <PrivateRoute exact path="/Bot" component={Bot} />
        <PrivateRoute exact path="/CashOut" component={CashOut} />

        {/* Admin Routes */}
        <PrivateRoute exact path="/AdminPanel" component={AdminPanel} adminOnly={true} />
        <PrivateRoute exact path="/EditUser" component={EditUser} adminOnly={true} />
        <PrivateRoute exact path="/UsersList" component={UsersList} adminOnly={true} />
        <PrivateRoute exact path="/AdminWithdraw" component={AdminWithdraw} adminOnly={true} />
        <PrivateRoute exact path="/CryptoAddy" component={CryptoAddy} adminOnly={true} />
        
      </Switch>
    </div>
  );
}

export default App;
