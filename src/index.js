import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Header from './components/layout/Header';
import Alert from './components/layout/alert/Alert';
import Container from './components/layout/Container';

import State from './context/State';

import './index.css';
import './styles/zindex.scss';
import './styles/keyframes.css';

function App() {
  return (
    <>
      <Header />
      <Alert />
      <Container />
    </>
  );
}

const StateContainer = () => {
  return (
    <State>
      <App />
    </State>
  )
}

ReactDOM.render(<StateContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
