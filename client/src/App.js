import CheckoutPage from './pages/CheckoutPage';
import About from "./pages/About";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Navbar.js";
import Home from "./pages/Home";
import MovieContextProvider from "./contexts/MovieContext";
import UserContextProvider from "./contexts/UserContext";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import FilterContextProvider from "./contexts/FilterContext";
import Login from "./components/Login";
import RegisterThxPage from "./pages/RegisterThxPage";
import ProfilePage from "./pages/ProfilePage";
import BookingSeatPage from "./pages/BookingSeatPage";
import Footer from "./components/Footer";
import CartContextProvider from "./contexts/CartContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieContextProvider>
          <FilterContextProvider>
            <UserContextProvider>
              <CartContextProvider>
                <Nav />
                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/loginpage">
                  <LoginPage />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/movies/:id">
                  <DetailPage />
                </Route>
                <Route exact path="/showtime/:id">
                  <BookingSeatPage />
                </Route>
                <Route exact path="/thank-you-for-registering">
                  <RegisterThxPage />
                </Route>
                <Route exact path="/Profile">
                  <ProfilePage />
                </Route>
                <Route exact path='/checkout'>
                  <CheckoutPage />
                </Route>
              </CartContextProvider>
            </UserContextProvider>
          </FilterContextProvider>
        </MovieContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
