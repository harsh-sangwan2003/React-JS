import React, { Component } from 'react'

//To extract movies from tmdb - title and images
import { movies } from '../movieData'

export default class MovieList extends Component {

    constructor() {

        super();

        this.state = {

            hover: '',
            parr: [1]
        }
    }
    render() {

        let moviesArr = movies.results;
        return (
            <>
                <div>
                    <h3 className='text-center'><strong>Trending</strong></h3>
                </div>

                <div className="movies-list">
                    {
                        moviesArr.map(movieEle => (

                            <div
                                className="card movie-card"
                                onMouseEnter={() => this.setState({ hover: movieEle.id })}
                                onMouseLeave={() => this.setState({ hover: '' })}
                            >
                                <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." />

                                <h5 className="card-title movie-title">{movieEle.title}</h5>

                                <div className="button-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
                                    {
                                        this.state.hover == movieEle.id &&
                                        <a
                                            href="#" className='btn btn-primary movie-button text-center'
                                        >Add To Favourites</a>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            {
                                this.state.parr.map(value => (

                                    <li className='page-item'><a className='page-link' href="#">{value}</a></li>
                                ))
                            }
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>

            </>
        )
    }
}