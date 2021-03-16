import logo from './logo.svg';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  const location = useLocation()

  return (
    <div className="main">
      
      <div className="header">
        <Header />
      </div>

      <AnimatePresence exitBeforeEnter initial={false}>
        <div className="center">
          <Switch location={location} key={location.pathname}>
            <Route path="/about" component={About} />
            {/* <Route path="/projects" component={ProjectContainer} /> */}
            {/* <Route path="/blogs" component={BlogContainer} /> */}
            {/* <Route path="/misc" component={JustForFun} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </AnimatePresence>
        
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
