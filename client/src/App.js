import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Navbar.js";
import Home from "./pages/Home";
import MovieContextProvider from "./contexts/MovieContext";
import DetailPage from "./pages/DetailPage";

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
        <Route exact path="/DetailPage">
          <DetailPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
