import './app.css';
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";


function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
