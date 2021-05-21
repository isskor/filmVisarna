import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Navbar.js";
import Home from "./pages/Home";
import MovieContextProvider from "./contexts/MovieContext";
import UserContextProvider from "./contexts/UserContext";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserContextProvider>
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
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
