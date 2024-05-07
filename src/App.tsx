import { useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import routes from "./routes";
import Footer from "./components/Footer";

function App() {
  const router = useRoutes(routes);

  return (
    <div>
      <Navbar />
      {router}
      <Footer />
    </div>
  );
}

export default App;
