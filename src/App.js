import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout";
import NoMatch from "./Components/NoMatch/NoMatch";
import AddProduct from "./Components/AddProduct/AddProduct";
import Search from "./Components/Search/Search";

function App() {
  return (
    <Router>
      <div>
        <Search></Search>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
