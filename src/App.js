import './App.css';
import Header from './Header';
import Top from './Top';
import Content from './Content'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './MovieDetails';
function App() {
  return (
    <Router>
    <div className='body'>
     <Header/>
 
      
     <Switch> 
         <Route exact path="/">
         <Top/>
        <Content/>
        </Route>

        <Route path="/mov/:name">
          <MovieDetails />
        </Route>

    </Switch>
    <Footer/>
   </div>
   </Router>
  );
}

export default App;
