import React, { Component } from "react";

import AnimeItem from "./AnimeItem";
import "./App.css";
import ANTB from "./ANTB";
import AnimeList from "./AnimeItem";
// import SearchBox from "./SearchBox";
import Search from "./Search";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      moreAnime: [],
      LastNumber: 0,
      setSerachValue : '',
      SearcAnime: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.getAnime()
  }

  SearchOnAnime = () => {
    console.log("Search on Anime ...");
    console.log(this.state.searchValue)
    axios
      .get(
        `https://kitsu.io/api/edge/anime?filter[text]=${this.state.searchValue}`
      )
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
   
        
        
    // var children = hege.concat(stale);
        this.setState({ SearcAnime: response.data.data }); 
        this.setState({ moreAnime: [] });
       

      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

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
  // removeAllTasks = () => {
  //   console.log('CLEAR THE TASKS ... ');
  //   this.setState({ tasks: [] });
  // };

  render() {
    const allAnimes = this.state.moreAnime.map((item, i) => {
      return <AnimeList item={item} id={i} />;
    });

    const oneAnimes = this.state.SearcAnime.map((item, i) => {
      return <AnimeList item={item} id={i} />;
    });
    // <h1> Titel={item.attributes.titles.en_jp} </h1>

    return (
      <div className="Anime-library">
        <div className="App">
          <div className="heading">
            <h1>Old Anime List </h1>
            <input 
              type="text"
              value={this.state.searchValue}
              onChange={this.handleChange}
              placeholder="Type to search"
            ></input>
            
            <button type="button" class="btn btn-outline-dark" onClick={this.SearchOnAnime}> Enter</button>


            

            {/* <button onClick={this.getMoreAnime}>Bring Anime</button>

 */}
          </div>
          <div className="AnimeItem">
            {allAnimes}

            {oneAnimes}
          </div>
          <div className="AanimeButton">   <button type="button" class="buttonMore" onClick={this.getAnime}>Click for More Anime</button> </div>

        </div>
       
      </div>
    );
  }
}
