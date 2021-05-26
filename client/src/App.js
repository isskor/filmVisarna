import About from './pages/About';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MovieContextProvider>
          <FilterContextProvider>
            <UserContextProvider>
              <Nav />
              <Route exact path='/'>
                <Home />
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
              <Route exact path="/thank-you-for-registering">
                <RegisterThxPage />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
            </UserContextProvider>
          </FilterContextProvider>
        </MovieContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
