import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div style={{ display: 'flex', padding: '0.5rem', alignItems: 'center' }}>
                <h1>Movies App</h1>
                <h2 style={{ marginLeft: '2rem', marginTop: '0.2rem' }}>Favourites</h2>
            </div>
        )
    }
}
