import React from 'react';
import { Provider } from 'react-redux'
import { PokemonIndex } from './../components/pokemon/pokemon_index_container'

const Root = ({ store }) => {
    <Provider store={store}>
        <h1>Hello, world!</h1>
    </Provider>
}

export default Root;