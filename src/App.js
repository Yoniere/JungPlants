import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/global.scss'
import { Header } from "./cmps/Header";
import { Footer } from './cmps/Footer';
import { PlantApp } from './pages/PlantApp';
import { About } from './cmps/About'
import { Home } from './cmps/Home'
import { PlantDetails } from './pages/PlantDetails'
import { PlantEdit } from './pages/PlantEdit';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/plant/edit/:id?" component={PlantEdit}></Route>
          <Route path="/plant/:id" component={PlantDetails}></Route>
          <Route path="/plant" component={PlantApp} />
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Home}></Route>
          {/* <PlantApp></PlantApp> */}
        </Switch>
        <Footer></Footer>

      </div>
    </Router>
  );
}

export default App;
