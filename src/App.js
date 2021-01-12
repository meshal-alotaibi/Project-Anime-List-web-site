import React, { Component } from "react";

import AnimeItem from "./AnimeItem";
import "./App.css";
import ANTB from "./ANTB";
import AnimeList from "./AnimeItem";
// import SearchBox from "./SearchBox";
import Search from "./Search";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      moreAnime: [],
      LastNumber: 0,
      setSerachValue : '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.getAnime()
  }

  //  getMovieRequest = async () => {
  // 	const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

  // 	const response = await fetch(url);
  // 	const responseJson = await response.json();

  // 	if (responseJson.Search) {
  // 		setMovies(responseJson.Search);
  // 	}
  // };

  // handleChange(event) {
  //   this.setState({searchValue: event.target.value});
  // }

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
        // bring the main data and set it in the state
        const mainData = response.data.data;
        // var children = hege.concat(stale);
        this.setState({ moreAnime: this.state.moreAnime.concat(mainData) });
        this.setState({ LastNumber: this.state.LastNumber + 21 });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };


  render() {
    const allAnimes = this.state.moreAnime.map((item, i) => {
      return <AnimeList item={item} id={i} />;
    });
    // <h1> Titel={item.attributes.titles.en_jp} </h1>

    return (
      <div className="Anime-library">
        <div className="App">
          <div className="heading">
            <h1>Old Anime</h1>
            <input
              type="text"
              value={this.state.searchValue}
              onChange={this.handleChange}
              className="form-control"
              // value={this.props.value}

              placeholder="Type to search"
            ></input>

            {/* <button onClick={this.getMoreAnime}>Bring Anime</button>

 */}
          </div>
          <div className="AnimeItem">
            {allAnimes}
          </div>
          <div className="AanimeButton">   <button onClick={this.getAnime}>Click for More Anime</button> </div>

        </div>
       
      </div>
    );
  }
}
