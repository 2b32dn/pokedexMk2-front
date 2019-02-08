import React from 'react';
import { Switch, Route } from 'react-router-dom'

import NotFound from './NotFound'
import PokemonsPage from '../../containers/PokemonsPage';
// import PokemonPage from '../../containers/PokemonPage';


const Routes = () => {
  return ( 
    <Switch>
      <Route exact path="/" component={PokemonsPage}/>
      {/* <Route exact path="/pokemon/:id" component={PokemonPage}/> */}
      <Route path="*" component={NotFound}/>
    </Switch>
   );
}
 
export default  Routes;