import React, { Component } from 'react'

export default class AnimeList extends Component {
    render() {

        // let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster_path}`

        let poster = this.props.item.attributes.posterImage.tiny
        // let releaseDate = <h2> `${new Date(this.props.item.attributes.startDate)}` </h2> 
        // console.log("Date : ", releaseDate)

        let releaseDate = new  Date(this.props.item.attributes.startDate)

        


       


        return (

            <div className="ANimeList">

                <h1> Title : {this.props.item.attributes.titles.en_jp} </h1>
              

                <img src={poster} alt="" />

                {/* {releaseDate.getFullYear()} */}
                <h3>YEAR: {releaseDate.getFullYear()}</h3>
                

                {/* <h1>Name:{this.props.AnimeName}</h1>
                <img src={this.props.Img} alt='movie'></img> */}

            
                
            </div>
        )
    }
}
