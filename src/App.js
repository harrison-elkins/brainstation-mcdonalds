import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Bingo from "./pages/Bingo/Bingo";
import Addtobag from "./pages/Add-to-bag/Add-to-bag";
import Order from "./pages/Order/Order";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bingo" exact component={Bingo} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
