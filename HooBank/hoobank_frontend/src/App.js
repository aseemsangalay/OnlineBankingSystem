import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import all pages
import Home from './screens/Home';
import ProfileCompletion from './screens/ProfileCompletion';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Register from './screens/Register';
import Transfer from './screens/Transfer';
import TransactionStatus from './screens/TransactionStatus';
import CreateAccount from './screens/CreateAccount';
import About from './screens/About';
import AdminLogin from './screens/AdminLogin';
import AdminDashboard from './screens/AdminDashboard';
import UpdateAccount from './screens/UpdateAccount';
import ForgetPassword from './screens/ForgetPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgetPassword} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={ProfileCompletion} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/transaction-status" component={TransactionStatus} />
          <Route path="/hoobank_admin" component={AdminLogin} />
          <Route path="/admin_dashboard" component={AdminDashboard} />
          <Route path="/update_account" component={UpdateAccount} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
