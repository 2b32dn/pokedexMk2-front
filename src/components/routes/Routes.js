import React from 'react';
import {Switch, Route} from 'react-router-dom'

import NotFound from './NotFound'
import PokemonsPage from '../../containers/PokemonsPage';


const Routes = () => {
  return ( 
    <Switch>
      <Route exact path="/" component={PokemonsPage}/>
      <Route path="*" component={NotFound}/>
    </Switch>
   );
}
 
export default  Routes;