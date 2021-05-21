import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Navbar.js";
import Home from "./pages/Home";
import MovieContextProvider from "./contexts/MovieContext";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieContextProvider>
          <Nav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/movies/:id">
            <DetailPage />
          </Route>
        </MovieContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
