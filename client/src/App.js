import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

import Home from './pages/Home';
import Menu from './pages/Menu';

import Nav from './components/Nav';
import Footer from './components/Footer';
const httplink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httplink,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloClient client= {client}>
      <Router>
        <div> 
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu' component={Menu} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloClient>
  );
}

export default App;

