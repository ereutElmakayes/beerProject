import './App.scss';
import { Fragment, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/core/Header/Header';
import Routes from './components/routes/Routes';
import { get_request, post_request } from './Axios/axios';

const App = () => {



  useEffect(() => {
    setAxiosInterceptors()
  }, [])

  const setAxiosInterceptors = () => {
    get_request();
    post_request();
  } 

    return (
      <BrowserRouter>
        <div className="App">
          <Fragment>
            <Header />
            <Routes />
          </Fragment>
        </div>
      </BrowserRouter>
    );
}

export default App;
