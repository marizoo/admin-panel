import ContainerMain from "./components/ContainerMain";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList";

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
        <Route exact path="/users">
          <UserList />
        </Route>
      </Switch>
    </ContainerMain>
    </Router>
  );
};

export default App;