import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
const { createCardSwitcher } = require('page-switcher')

const switcher = createCardSwitcher([
  {
    show(){
      console.log('page one shown')
    },
    hide(){
      console.log('page one hidden')
    }
  },
  {
    show(){
      console.log('page two shown')
    },
    hide(){
      console.log('page two hidden')
    }
  },
])

switcher.next()
switcher.backwards()

function App() {
  return (
    <div className="main">
      
      <div className="header">
        <Header />
      </div>

      <div className="center">
        <Switch>
          <Route path="/about" component={About} />
          {/* <Route path="/projects" component={ProjectContainer} /> */}
          {/* <Route path="/blogs" component={BlogContainer} /> */}
          {/* <Route path="/misc" component={JustForFun} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
        
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
