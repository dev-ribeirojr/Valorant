import './app.css';
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";

import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
