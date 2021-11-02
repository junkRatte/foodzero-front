import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./js/pages/HomePage";
import Menu from "./js/pages/MenuPage";
import Blogs from "./js/pages/BlogsPage";
import About from "./js/pages/AboutPage";
import Contact from "./js/pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
