import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Company from "./components/pages/Company/Company";
import Contact from "./components/pages/Contact/Contact";
import Container from "./components/layout/Container/Container";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import NewProject from "./components/pages/NewProject/NewProject";
import Projects from "./components/pages/Projects/Projects";

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
        </Container>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
