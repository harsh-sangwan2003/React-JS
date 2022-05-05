import React, { Component } from 'react'
import { movies } from '../movieData'
import axios from 'axios'
export default class Banner extends Component {

    render() {

        let result = movies.results;
        let idx = Math.floor(Math.random() * 10);
        let backdrop_path = result[idx].backdrop_path;

        return (
            <div className="card banner-card">
                < img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..." />

                <h5 className="card-title banner-title">Card title</h5>
                <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </ div>
        )
    }
}
