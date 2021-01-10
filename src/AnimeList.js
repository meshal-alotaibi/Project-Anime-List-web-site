import React, { Component } from 'react'

export default class AnimeList extends Component {
    render() {
        return (

            <div className="ANimeList">

                <h1>Name:{this.props.AnimeName}</h1>
                <img src={this.props.Img} alt='movie'></img>
                
            </div>
        )
    }
}
