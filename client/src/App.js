import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './components/Navbar.js'
import Home from './pages/Home'
import MovieContext from './contexts/MovieContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MovieContext.Provider>
      <Nav/>
      <Route exact path="/">
      <Home />
      </Route>
      </MovieContext.Provider>
      </BrowserRouter>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

