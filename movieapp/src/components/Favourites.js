import React, { Component } from "react";

import { movies } from "../movieData";

export class Favourites extends Component {
    constructor() {
        super();

        this.state = {
            genres: [],
            currgenre: 'All genres',
            movies: [],
            currText: ''
        };
    }

    componentDidMount() {

        console.log("Hi");
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

        let data = JSON.parse(localStorage.getItem('movies-app') || '[]');

        let tempArr = [];

        data.map((movieObj) => {
            if (!tempArr.includes(genreids[movieObj.genre_ids[0]])) {
                tempArr.push(genreids[movieObj.genre_ids[0]]);
            }
        });

        tempArr.unshift("All genres");

        this.setState({

            movies: [...data],
            genres: [...tempArr]
        })

    }

    handleGenreChange(genre) {

        this.setState({

            currgenre: genre
        })

    }

    sortPopularityAsc() {

        let temp = [];

        temp = this.state.movies.sort((A, B) => A.popularity - B.popularity);

        this.setState({

            movies: [...temp]
        })
    }

    sortPopularityDesc() {

        let temp = [];

        temp = this.state.movies.sort((B, A) => A.popularity - B.popularity);

        this.setState({

            movies: [...temp]
        })
    }

    sortRatingUp() {

        let temp = [];

        temp = this.state.movies.sort((B, A) => A.vote_average - B.vote_average);

        this.setState({

            movies: [...temp]
        })
    }

    sortRatingDown() {

        let temp = [];

        temp = this.state.movies.sort((A, B) => A.vote_average - B.vote_average);

        this.setState({

            movies: [...temp]
        })
    }


    render() {

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

        const moviesArr = movies.results;
        console.log(moviesArr);

        let filterArr = [];

        if (this.state.currText == '') {

            filterArr = this.state.movies;
        }

        else {

            filterArr = this.state.movies.filter((movieObj) => {

                let title = movieObj.original_title.toLowerCase();
                return title.includes(this.state.currText.toLowerCase());
            })
        }

        if (this.state.currgenre != 'All genres') {

            filterArr = this.state.movies.filter(movieObj => genreids[movieObj.genre_ids[0]] == this.state.currgenre)
        }

        return (
            <div className="main">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group genre-selector">
                            {this.state.genres.map((genre) => (
                                this.state.currgenre == genre ?
                                    <li style={{ background: '#3f51b5', color: 'white', fontWeight: 'bold' }} class="list-group-item">{genre}</li> :
                                    <li style={{ color: '#3f51b5' }} class="list-group-item" onClick={() => this.handleGenreChange(genre)}>{genre}</li>

                            ))}
                        </ul>
                    </div>
                    <div className="col-9 favourites-table">
                        <div className="row">
                            <input
                                placeholder="Search"
                                type="text"
                                className="input-group-text col"
                                value={this.state.currText}
                                onChange={(e) => this.setState({

                                    currText: e.target.value
                                })}
                            />
                            <input type="number" className="input-group-text col" />
                        </div>

                        <div className="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">
                                            <i class="fa-solid fa-sort-up" onClick={() => this.sortPopularityDesc()}></i> Popularity
                                            <i class="fa-solid fa-sort-down" onClick={() => this.sortPopularityAsc()}></i> </th>
                                        <th scope="col"> <i class="fa-solid fa-sort-up" onClick={() => this.sortRatingDown()}></i> Ratings
                                            <i class="fa-solid fa-sort-down" onClick={() => this.sortRatingUp()}></i>
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterArr.map((movieElem) => (
                                        <tr>
                                            <td>
                                                <img
                                                    style={{ width: "6rem" }}
                                                    src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
                                                />
                                            </td>
                                            <th scope="row">{movieElem.title}</th>
                                            <td>{genreids[movieElem.genre_ids[0]]}</td>
                                            <td>{movieElem.popularity}</td>
                                            <td>{movieElem.vote_average}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        Previous
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favourites;