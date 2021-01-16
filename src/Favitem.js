import React, { Component } from "react";
import addFav from './addFav'

export default class Favitem extends Component {

  handleClick = e =>{
    this.props.removeFromWatch(this.props.item)
  }
  render() {
  

    let poster = this.props.item.attributes.posterImage.small;


    let releaseDate = new Date(this.props.item.attributes.startDate);

    return (
      <div className="ANimeList">
        <div className="image-container">
       
         
        <img src={poster} alt="" class="center"  />
          
          <h3 class="title"> {this.props.item.attributes.titles.en_jp} - {releaseDate.getFullYear()} </h3>

        </div>


        <div class="buttonForAdd">  

        <button class="ButtonStyle" onClick={this.handleClick}> remove Anime from watch List </button>
        </div>

      </div>
    );
  }
}
