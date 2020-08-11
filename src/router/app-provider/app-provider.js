import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loading } from '../../modules/shared/components';

const PostAdd = lazy(() => import('../../modules/post/post-add/post-add'));
const PostHome = lazy(() => import('../../modules/post/post-home/post-home'));
const PostDetails = lazy(() => import('../../modules/post/post-details/post-details'));

const AppProvider = () => (
  <Router>
    <main>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={PostHome} />
          <Route path="/add" component={PostAdd} />
          <Route path="/details" component={PostDetails} />
        </Switch>
      </Suspense>
    </main>
  </Router>
);

export default AppProvider;
