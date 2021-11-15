import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./js/pages/HomePage";
import Menu from "./js/pages/MenuPage";
import Blogs from "./js/pages/BlogsPage";
import About from "./js/pages/AboutPage";
import Contact from "./js/pages/ContactPage";
import Footer from "./js/components/Footer";
import ScrollToTopButton from "./js/components/ScrollToTopButton";
import BlogPostPage from "./js/components/BlogPostPage";
import ScrollToTop from "./js/components/ScrollToTop";
import MealDescriptionPage from "./js/components/MealDescriptionPage";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog/:title" exact component={BlogPostPage} />
          <Route path="/meal/:name" exact component={MealDescriptionPage} />
        </Switch>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
