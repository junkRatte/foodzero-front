import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./js/components/Navbar";
import Home from "./js/pages/Home";
import Menu from "./js/pages/Menu";
import Blogs from "./js/pages/Blogs";
import About from "./js/pages/About";
import Contact from "./js/pages/Contact";

/* http://127.0.0.1:8000/api/blogs */

function App() {
  return (
    <Router>
      <div className="App">
        <div className="layout-container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/blogs" component={Blogs}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
