import { Outlet} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
