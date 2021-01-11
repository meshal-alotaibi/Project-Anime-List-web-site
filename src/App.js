import React, { Component } from "react";



import AnimeItem from "./AnimeItem";
import "./App.css";
import ANTB from "./ANTB";
import AnimeList from "./AnimeItem";
// import SearchBox from "./SearchBox";
import Search from "./Search";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue : (''),
     
 

    };
    this.handleChange = this.handleChange.bind(this);

  }

  // handleChange(event) {
  //   this.setState({searchValue: event.target.value});
  // }
  

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }
  
  render() {

   
  
  



    const allAnimes = ANTB.data.map((item, i) => {
      return <AnimeList item = {item} id={i} />
    } );
    // <h1> Titel={item.attributes.titles.en_jp} </h1>

  


    return (
      <div className="Anime-library">
        <div className="App">
        

       
          <div className='heading'>

          <h1>Old Anime</h1>
          <input type="text" value={this.state.searchValue} onChange={this.handleChange} 
				className='form-control'
				// value={this.props.value}

				placeholder='Type to search'
			></input>


        
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

