import React, { Component } from "react";

export default class AnimeList extends Component {
  render() {
    // let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster_path}`

    let poster = this.props.item.attributes.posterImage.small;
    // let releaseDate = <h2> `${new Date(this.props.item.attributes.startDate)}` </h2>
    // console.log("Date : ", releaseDate)

    let releaseDate = new Date(this.props.item.attributes.startDate);

    return (
      <div className="ANimeList">
        <div className="image-container d-flex justify-content-start m-3">
        <div className="overlay "> <img src={poster} alt="" /> </div>
         
        <img src={poster} alt="" />
          
          <h3> {this.props.item.attributes.titles.en_jp} </h3>

          <h3>{releaseDate.getFullYear()}</h3>
          {/* <div className="overlay d-flex align-items-center justify-content-center"></div> */}
        </div>

        {/* <h1>Name:{this.props.AnimeName}</h1>
                <img src={this.props.Img} alt='movie'></img> */}
      </div>
    );
  }
}
