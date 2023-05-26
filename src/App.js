import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <WhatWeDo />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
