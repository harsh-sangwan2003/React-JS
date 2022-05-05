import React, { Component } from 'react'

// When we don't use default the component is wrapper inside an object
export default class NavBar extends Component {
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ color: 'blue' }}>Movies App</h1>
                <h2 style={{ paddingLeft: '2rem', color: 'blue' }}>Favourites</h2>
            </div>
        )
    }
}
