

import React, { Component } from 'react'


import AnimeList from './AnimeList';
import './App.css';
import ANTB from './ANTB'

export default class App extends Component {
  render() {
    console.log(ANTB)
    return (


          
<div className="film-library">
<div className="film-list">
  <h1 className="section-title">Anime</h1>
  </div>


    
            <div className="App">
      <h1>hi</h1>
      <div className="AnimeList">

      <AnimeList AnimeName={ANTB.data[0].attributes.titles.en} Img={ANTB.data[0].attributes.posterImage.medium}/> 
      <AnimeList AnimeName={ANTB.data[1].attributes.titles.en} Img={ANTB.data[1].attributes.posterImage.medium}/> 
      <AnimeList AnimeName={ANTB.data[2].attributes.titles.en} Img={ANTB.data[2].attributes.posterImage.medium}/> 


      </div>
      </div>

      </div>
    )
  }
}
