import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Navbar.js";
import Home from "./pages/Home";
import MovieContextProvider from "./contexts/MovieContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieContextProvider>
          <Nav />
          <Route exact path="/">
            <Home />
          </Route>
        </MovieContextProvider>
      </BrowserRouter>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
