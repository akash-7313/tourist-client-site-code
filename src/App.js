// import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddDestination from "./components/AddDestination/AddDestination";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import NotFound from "./components/NotFound/NotFound";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/addDestination">
              <AddDestination></AddDestination>
            </PrivateRoute>
            <PrivateRoute exact path="/destination/:destinationId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
