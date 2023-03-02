import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/companies">
            <Company />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newproject">
            <NewProject />
          </Route>
          <Route exact path="/project/:id">
            <Project />
          </Route>
        </Container>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
