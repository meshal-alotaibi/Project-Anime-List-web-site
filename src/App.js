import React, { Component } from "react";

import AnimeItem from "./AnimeItem";
import "./App.css";
import ANTB from "./ANTB";
import AnimeList from "./AnimeItem";
import SearchBox from "./SearchBox";


export default class App extends Component {
  render() {
    console.log(ANTB);



    const allAnimes = ANTB.data.map((item, i) => {
      return <AnimeList item = {item} id={i} />
    } );
    // <h1> Titel={item.attributes.titles.en_jp} </h1>


    return (
      <div className="Anime-library">
        <div className="App">
        

       
          <div className='heading'>
          <h1>Old Anime</h1>
				<SearchBox />
			</div>
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

