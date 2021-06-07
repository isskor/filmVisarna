import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
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
import BookingCalendar from "./components/BookingCalendar.js";
import CartContextProvider from "./contexts/CartContext";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";
import PreviousBookings from "./pages/PreviousBookings";
import UpcomingBookings from "./pages/UpcomingBookings";
import ScrollTop from "./components/ScrollTop";
import NoPageFound from "./pages/NoPageFound";
import UserRoutes from "./components/UserRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTop />
        <MovieContextProvider>
          <FilterContextProvider>
            <UserContextProvider>
              <CartContextProvider>
                <Nav />
                <Switch>
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
                  <UserRoutes exact path="/showtime/:id">
                    <BookingSeatPage />
                  </UserRoutes>
                  <Route
                    exact
                    path="/thank-you-for-registering"
                    component={RegisterThxPage}
                  />
                  <UserRoutes exact path="/Profile">
                    <ProfilePage />
                  </UserRoutes>
                  <UserRoutes exact path="/checkout">
                    <CheckoutPage />
                  </UserRoutes>
                  <Route exact path="/calendar">
                    <BookingCalendar />
                  </Route>
                  <UserRoutes exact path="/upcoming-bookings">
                    <UpcomingBookings />
                  </UserRoutes>
                  <UserRoutes exact path="/previous-bookings">
                    <PreviousBookings />
                  </UserRoutes>
                  <Route>
                    <NoPageFound />
                  </Route>
                </Switch>
                <Footer />
              </CartContextProvider>
            </UserContextProvider>
          </FilterContextProvider>
        </MovieContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
