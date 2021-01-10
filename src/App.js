import React, { Component } from "react";

import AnimeItem from "./AnimeItem";
import "./App.css";
import ANTB from "./ANTB";
import AnimeList from "./AnimeItem";

export default class App extends Component {
  render() {
    console.log(ANTB);



    const allAnimes = ANTB.data.map((item, i) => {
      return <AnimeList item = {item}  />
    } );
    // <h1> Titel={item.attributes.titles.en_jp} </h1>


    return (
      <div className="/anime-library">
        <div className="App">
          <h1>Anime Item</h1>
          <div className="AnimeItem">
            {allAnimes}
            {/* <AnimeItem AnimeName={ANTB.data[0].attributes.titles.en} /> */}
            {/* <AnimeList AnimeName={ANTB.data[1].attributes.titles.en} Img={ANTB.data[1].attributes.posterImage.medium}/> 
      <AnimeList AnimeName={ANTB.data[2].attributes.titles.en} Img={ANTB.data[2].attributes.posterImage.medium}/>  */}
          </div>
        </div>
      </div>
    );
  }
}
