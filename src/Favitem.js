import React, { Component } from "react";
import addFav from './addFav'

export default class Favitem extends Component {

  handleClick = e =>{
    this.props.removeFromWatch(this.props.item)
  }
  render() {
    // let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster_path}`

    let poster = this.props.item.attributes.posterImage.small;
    // let releaseDate = <h2> `${new Date(this.props.item.attributes.startDate)}` </h2>
    // console.log("Date : ", releaseDate)

    let releaseDate = new Date(this.props.item.attributes.startDate);

    return (
      <div className="ANimeList">
        <div className="image-container">
       
         
        <img src={poster} alt="" />
          
          <h3 class="title"> {this.props.item.attributes.titles.en_jp} - {releaseDate.getFullYear()} </h3>
          {/* <h2 class="date"> {releaseDate.getFullYear()}</h2> */}
          {/* <div className="overlay d-flex align-items-center justify-content-center"></div> */}
        </div>

        {/* <addFav onClick={this.handleClick}/>  */}

        <button class="ButtonStyle" onClick={this.handleClick}> remove Anime from watch List </button>


        {/* <h1>Name:{this.props.AnimeName}</h1>
                <img src={this.props.Img} alt='movie'></img> */}
      </div>
    );
  }
}
