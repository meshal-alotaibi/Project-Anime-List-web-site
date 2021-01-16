import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './Home';
import Watch from './Watch';





export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: [],
    };
  }

  addtowatch = (item) => {
    console.log(item);
    const fav = [...this.state.fav];
    fav.push(item);
    console.log("item : ", item);

    this.setState({ fav });
    console.log(this.state.fav);
  };

removeFromWatch =(ele)=>{

const newFav = this.state.fav.filter((item) => item !== ele);
 
this.setState({fav : newFav}, 
  function(){
    console.log(this.state.fav)
  })
}

  render() {

    return (
      
<Router>
        <div className="menu-bar">
        

          <nav class="navbar">
            <Link to="/"><button class="ButtonStyleSec"> Home Page</button></Link>
            <Link to="/watch"><button class="ButtonStyleSec" > watch List </button> </Link> 
            
          </nav>

          
          <Route exact path="/" render={(props) => <Home addNewAnime={this.addtowatch} {...props} />} />


          <Route  path="/watch" render={(props) => <Watch   fav={this.state.fav} removeFromWatch={this.removeFromWatch} {...props} />} />
        </div>
      </Router>
    );
  }
 
}


