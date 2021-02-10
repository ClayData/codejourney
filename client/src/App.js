import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import Tomato from './pages/Tomato/Tomato';

function App() {


  return (
    <Router>
      <div className="App"> 
        <NavBar />
        <Route exact path="/" component={SignIn}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/tomato" component={Tomato} />
      </div>
    </Router>
  );
}

export default App;
