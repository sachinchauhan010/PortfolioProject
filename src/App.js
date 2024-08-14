import { Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx"
function App() {
  return (
    <div className="bg-gray-900 box-border">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
