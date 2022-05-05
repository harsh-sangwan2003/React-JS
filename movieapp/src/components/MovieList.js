import React, { Component } from 'react'
import { movies } from '../movieData'
import axios from 'axios'

export default class MovieList extends Component {

    constructor() {

        console.log('Constructor First');
        super();

        this.state = {

            hover: '',
            parr: [1],
            movies: [],
            currPage: 1
        }
    }

    async componentDidMount() {

        console.log("Mounting will come third");
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=352ab5d55074de8f0d188679577ca0f8&language=en-US&page=${this.state.currPage}`);
        let movieData = res.data;

        this.setState({

            movies: [...movieData.results]
        })
    }

    movieChange = async () => {

        console.log("Mounting will come third");
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=352ab5d55074de8f0d188679577ca0f8&language=en-US&page=${this.state.currPage}`);
        let movieData = res.data;

        this.setState({

            movies: [...movieData.results]
        })
    }

    handlePrevious = () => {

        if (this.state.currPage != 1) {

            this.setState({

                currPage: this.state.currPage - 1
            }, this.movieChange)
        }
    }

    handleCurrent = (value) => {

        if (value != this.state.currPage) {

            this.setState({

                currPage: value
            }, this.movieChange)
        }
    }

    handleNext = () => {

        let tempArr = [];

        for (let i = 1; i <= this.state.parr.length + 1; i++)
            tempArr.push(i);

        console.log(tempArr);

        this.setState({

            parr: [...tempArr],
            currPage: this.state.currPage + 1
        }, this.movieChange)
    }


    render() {

        console.log('Render Second');
        let movieArr = movies.results;


        return (
            <>

                <div>
                    <h3 className='text-center'><strong>Trending</strong></h3>
                </div>

                <div className="movies-list">
                    {

                        this.state.movies.map(movieEle => (

                            <div
                                className="card movie-card"
                                onMouseEnter={() => this.setState({ hover: movieEle.id })}
                                onMouseLeave={() => this.setState({ hover: '' })}
                            >
                                < img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} className="card-img-top movie-img" style={{ width: "20vw", height: "40vh" }} alt="..." />

                                <h5 className='card-title movie-title'>{movieEle.title}</h5>

                                <div className="button-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>

                                    {
                                        this.state.hover == movieEle.id && <a href="#" className='btn btn-primary text-center movies-button'>Add To Favourites</a>
                                    }
                                </div>

                            </ div>
                        ))
                    }
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#" onClick={this.handlePrevious}>Previous</a></li>

                            {
                                this.state.parr.map(value => (

                                    <li className="page-item"><a className="page-link" href="#" onClick={() => this.handleCurrent(value)}>{value}</a></li>
                                ))
                            }

                            <li className="page-item"><a className="page-link" href="#" onClick={this.handleNext}>Next</a></li>
                        </ul>
                    </nav>
                </div>

            </>
        )
    }
}
