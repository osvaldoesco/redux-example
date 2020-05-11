import React from 'react';
import { Route } from 'react-router-dom';

import SiteLayout from './components/layouts/SiteLayout';

const SiteRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} render={props => (
        <SiteLayout>
          <Component {...props} />
        </SiteLayout>
      )} />
    );
}

export default SiteRoute;