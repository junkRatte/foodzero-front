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
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ScrollToTop />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/blogs" exact component={Blogs} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/blog/:title" exact component={BlogPostPage} />
            <Route path="/meal/:name" exact component={MealDescriptionPage} />
          </Switch>
        </AnimatePresence>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
