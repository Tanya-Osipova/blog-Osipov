import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Publications from '../Publications/Publications';
import PageNotFound from '../PageNotFound/PageNotFound';
import publicationData from '../../data/publications';
import blogData from '../../data/blog';
import '../../vendor/fonts/fonts.css';
import useSemiPersistentState from '../../hooks/useSemiPersistentState';
import dataReducer from '../../reducers/dataReducer';
import './App.css';

const App = () => {
  const [publications, dispatchPubications] = useReducer(
    dataReducer,
    { data: [], isLoading: false, isError: false }
  );

  const getAsyncPublications = () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve({ data: { publications: publicationData } }),
        2000
      )
    );

  useEffect(() => {
    dispatchPubications({ type: 'DATA_FETCH_INIT' });

    getAsyncPublications()
      .then((result) => {
        dispatchPubications({
          type: 'DATA_FETCH_SUCCESS',
          payload: result.data.publications,
        });
      })
      .catch(() => 
        dispatchPubications({ type: 'DATA_FETCH_FAILURE' })
      );
  }, []);

  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    ''
  );

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedPublications = publicationData.filter((publication) => 
    publication.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/publications">
          <Publications 
            publicationData={searchedPublications} 
            handleSearchInput={handleSearchInput}
            searchTerm={searchTerm}
            isLoading={publications.isLoading}
            isError={publications.isError}
          />
        </Route>
        <Route path="/blog">
          <Blog 
            blogData={blogData}
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
