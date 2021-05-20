import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Navbar.js";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/DetailPage">
          <DetailPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
