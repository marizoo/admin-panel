import ContainerMain from "./components/ContainerMain";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";

const App = () => {
  return (
  <Router>
    <Topbar />
    <ContainerMain>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
        <Route path="/newUser">
          <NewUser />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:productId">
          <Product />
        </Route>
        <Route path="/newproduct">
          <NewProduct />
        </Route>
      </Switch>
    </ContainerMain>
    </Router>
  );
};

export default App;