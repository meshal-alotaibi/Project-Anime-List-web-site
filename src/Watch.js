import React, { Component } from 'react'
import AnimeList from "./AnimeItem"

export default class watch extends Component {
    render() {

    const allAnimes = this.props.fav.map((item, i) => {
            return (
              <AnimeList item={item} id={i} addAnime={() => this.props.addNewAnime(item)} />
            );
          });

        console.log("text" , this.props.fav)
        
        return (
            <div>
                <h2>welcom</h2>
            
                {allAnimes}
            </div>
        )
    }
}
