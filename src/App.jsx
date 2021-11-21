import ContainerMain from "./components/ContainerMain";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";

const App = () => {
  return (
  <div>
    <Topbar />
    <ContainerMain>
      <Sidebar />
      <Home />
    </ContainerMain>
    </div>
  );
};

export default App;