import './assets/scss/global.scss'
import { Header } from "./cmps/Header";
import { Footer } from './cmps/Footer';
import { PlantApp } from './pages/PlantApp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PlantApp></PlantApp>
      <Footer></Footer>
    </div>
  );
}

export default App;
