import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/companies" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
          <Route exact path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
