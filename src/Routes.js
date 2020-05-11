import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SiteRoute from './SiteRoute';
import Home from './pages/Home';
import PokemonList from './pages/pokemons/PokemonList';
import PokemonDetail from './pages/pokemons/PokemonDetail';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <SiteRoute exact path='/pokemons' component={PokemonList} />
        <SiteRoute exact path='/pokemons/:id' component={PokemonDetail} />
        <SiteRoute path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;