import React, { Component } from "react";

import AnimeItem from "./AnimeItem";
import "./App.css";
import ANTB from "./ANTB";
import AnimeList from "./AnimeItem";
// import watch from "./watch";
import watch from './Watch';

import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      moreAnime: [],
      LastNumber: 0,
      setSerachValue: "",
      SearcAnime: [],
      fav: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getAnime();
  }

  SearchOnAnime = () => {
    console.log("Search on Anime ...");
    console.log(this.state.searchValue);
    axios
      .get(
        `https://kitsu.io/api/edge/anime?filter[text]=${this.state.searchValue}`
      )
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ SearcAnime: response.data.data });
        this.setState({ moreAnime: [] });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  getAnime = () => {
    console.log("Bring More Anime ...");
    axios
      .get(
        `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${this.state.LastNumber}`
      )
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        const mainData = response.data.data;

        this.setState({ moreAnime: this.state.moreAnime.concat(mainData) });
        this.setState({ LastNumber: this.state.LastNumber + 21 });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  //   addNew = (e,anime) => {
  // let watchLater = [...this.state.watchLater]
  // watchLater.push(anime)
  //     this.setState({ watchLater: watchLater});
  //     console.log(this.state.watchLater)
  //     this.setState({ moreAnime: [] });
  // };

//   addtowatch = (item) => {
//     console.log(item);
//     const fav = [...this.state.fav];
//     fav.push(item);
//     console.log("item : ", item);

//     this.setState({ fav });
//     console.log(this.state.fav);
//   };

  // handleFaveToggle = film => {
  //   const faves = [...this.state.faves];
  //   const filmIndex = faves.indexOf(film);

  //   if (filmIndex !== -1) {
  //     faves.splice(filmIndex, 1);
  //     console.log(`Removing ${film.title} From Favors`);
  //   } else {
  //     faves.push(film);
  //     console.log(`Adding ${film.title} To Favors`);
  //   }
  //   this.setState({ faves });
  // };

  render() {
    const allAnimes = this.state.moreAnime.map((item, i) => {
      return (
        <AnimeList item={item} id={i} addAnime={() => this.props.addNewAnime(item)} />
      );
    });

    const oneAnimes = this.state.SearcAnime.map((item, i) => {
      return <AnimeList item={item} id={i} />;
    });

    return (
      
      <div className="Anime-library">

        <div className="newapp">
        
          <div className="heading">
            <h1>Old Anime List </h1>
            <div className="head">


            </div>

            <input
              type="text"
              value={this.state.searchValue}
              onChange={this.handleChange}
              placeholder="Type to search"
            ></input>

            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={this.SearchOnAnime}
            >
              {" "}
              Enter
            </button>
            <button onClick={this.addNew}> click</button>
          </div>
          <div className="AnimeItem">

            {allAnimes}

            {oneAnimes}
          </div>
          <div className="AanimeButton">
            {" "}
            <button type="button" class="buttonMore" onClick={this.getAnime}>
              Click for More Anime
            </button>{" "}

            
          </div>
        </div>
      </div>
    );
  }
}
