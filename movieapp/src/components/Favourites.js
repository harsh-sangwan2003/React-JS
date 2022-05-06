import React, { Component } from 'react'
import { movies } from '../movieData'
import axios from 'axios'
export default class Favourites extends Component {

    render() {

        let movieArr = movies.results;
        let genreids = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Sci-Fi",
            10770: "TV",
            53: "Thriller",
            10752: "War",
            37: "Western",
        };

        let tempArr = [];

        movieArr.map(movieObj => {

            if (!tempArr.includes(genreids[movieObj.genre_ids[0]]))
                tempArr.push(genreids[movieObj.genre_ids[0]])
        })

        tempArr.unshift('All genres')

        return (


            <div className="main-container">

                <div className="row">
                    <div className="col-3 movie-genre">
                        <ul className="list-group genre-selector">
                            {
                                tempArr.map(genres => (

                                    <li className='list-group-item'><button className='btn'>{genres}</button></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-9 favourites-table">
                        <div className='row'>
                            <input type="text" placeholder='Search' className="input-group-text col" />
                            <input type="number" className="input-group-text col" />
                        </div>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Ratings</th>
                                    <th scope="col">Delete From List</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movieArr.map(movieEle => (

                                        <tr>
                                            <td scope="row">
                                                <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} style={{ width: '8rem', paddingRight: '1rem' }} alt="Movie Image" />
                                                {movieEle.title}
                                            </td>
                                            <td>{
                                                genreids[movieEle.genre_ids[0]]
                                            }</td>
                                            <td>{movieEle.popularity}</td>
                                            <td>{movieEle.vote_average}</td>
                                            <td><button className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <br />

                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>

                    </div>

                </div>

            </div>
        )
    }
}
