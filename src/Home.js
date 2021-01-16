import React, { Component } from "react";


import "./App.css";
import ANTB from "./ANTB";
import AnimeList from "./AnimeItem";


import axios from "axios";



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



  render() {
    const allAnimes = this.state.moreAnime.map((item, i) => {
      return (
        <AnimeList item={item} id={i} addAnime={() => this.props.addNewAnime(item)} fav={this.addFav}/>
      );
    });

    const oneAnimes = this.state.SearcAnime.map((item, i) => {
      return <AnimeList item={item} id={i} addAnime={() => this.props.addNewAnime(item)} fav={this.addFav}/>;
    });

    return (
      
      <div className="Anime-library">

        <div className="newapp">
        
          <div className="heading">
            <h1>Old Anime List </h1>
            <div className="head">


            </div>
<div class="inputSearch"> 
            <input
            class="input"
              type="text"
              value={this.state.searchValue}
              onChange={this.handleChange}
              placeholder="Type to search"
            ></input>

            <button
              type="button"
              class="InputButton"
              onClick={this.SearchOnAnime}
            >
              {" "}
              Enter
            </button>
            </div>

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
