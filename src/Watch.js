import React, { Component } from 'react'
import AnimeList from "./AnimeItem"
import Favitem from "./Favitem"

export default class watch extends Component {

    handleClick = e =>{
        this.props.addAnime(this.props.item)
      }
    render() {
        

    const allAnimes = this.props.fav.map((item, i) => {
            return (
              <Favitem item={item} id={i} removeFromWatch={this.props.removeFromWatch}/>
            );
          });

        console.log("text" , this.props.fav)
        
        return (
            <div className="AnimeItem">


            
                {allAnimes}

            
            </div>
        )
    }
}
