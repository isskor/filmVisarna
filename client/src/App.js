import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Navbar.js";
import Home from "./pages/Home";
import MovieContextProvider from "./contexts/MovieContext";
import UserContextProvider from "./contexts/UserContext";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import FilterContextProvider from "./contexts/FilterContext";
import Login from './components/Login'
import Calendar from './components/Calendar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieContextProvider>
          <FilterContextProvider>
            <UserContextProvider>
              <Nav />
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/loginpage">
                <LoginPage />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/calendar">
                <Calendar />
              </Route>
              <Route exact path="/movies/:id">
                <DetailPage />
              </Route>
            </UserContextProvider>
          </FilterContextProvider>
        </MovieContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
