import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/layout/Header';
import Alert from './components/layout/alert/Alert';
import Container from './components/layout/Container';

import State from './context/State';

import './index.css';
import './styles/zindex.scss';

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
