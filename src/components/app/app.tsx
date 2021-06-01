import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

// Pages
import Home from '../../pages/home/home';
import MediaDetails from '../../pages/mediaDetails/mediaDetails';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';

// Actions
import { getTrendingAXN } from '../../redux/actions/trending/trendingActions';
import { getFreeTvShowsAXN } from '../../redux/actions/free/freeActions';

// Utilites
import languageDataSessionRestore from './helpers/language/languageDataSessionRestore';
import { getTvShowTrailers } from '../../redux/actions/trailer/trailerActions';

// TODO: https://medium.com/fredwong-it/react-jest-testing-mock-function-inside-functional-component-1e0d0bfb431a
// TODO: Helps to test functions inside functional components

languageDataSessionRestore();

// INTERFACE ROUTES
export interface IRoutes {
  path: string;
  name: string;
  Component: React.FC<any>;
}

// ROUTES
const routes: IRoutes[] = [
  { path: '/', name: 'Home', Component: Home },
  {
    path: '/details',
    name: 'Medial Details',
    Component: MediaDetails,
  },
  {
    path: '',
    name: 'Page Not Found',
    Component: PageNotFound,
  },
];

const App: React.FC = () => {
  // Dispatch action
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFreeTvShowsAXN());
    dispatch(getTrendingAXN('week')); // Default - `week`
    dispatch(getTvShowTrailers()); // Default - `week`

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-test="app-component">
      <Modal />
      <Router>
        <Navigation />
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;