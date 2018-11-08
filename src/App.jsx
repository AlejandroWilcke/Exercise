import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import InsideBlock from './components/InsideBlock/InsideBlock';
import style from './app.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={style.container}>
        <InsideBlock />
      </div>
    );
  }
}

export default hot(module)(App);
