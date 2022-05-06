import React, { Component } from 'react'

export default class Favourites extends Component {
    render() {
        return (
            <div className="main-container">

                <div className="row">
                    <div className="col-3 movie-genre">
                        <ul class="list-group genre-selector">
                            <li class="list-group-item">Favourites</li>
                            <li class="list-group-item">Action</li>
                            <li class="list-group-item">Action</li>
                            <li class="list-group-item">Action</li>
                            <li class="list-group-item">Action</li>
                        </ul>
                    </div>

                    <div className="col-9">

                        <div className='row'>
                            <input type="text" className="input-group-text col" />
                            <input type="number" className="input-group-text col" />
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
