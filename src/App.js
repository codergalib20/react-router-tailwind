import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutFood from './components/AboutFood/AboutFood';
import Contact from './components/Contact/Contact';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Restaurants from './components/Restaurants/Restaurants';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/foods">
            <Restaurants></Restaurants>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/content">
            <Content></Content>
          </Route>
          <Route path="/food/:foodDetail">
             <AboutFood></AboutFood>
          </Route>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="*">
              <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
