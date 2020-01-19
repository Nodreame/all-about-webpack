'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import pic from './img/leetcode-process.png';
import logo from './img/babel.svg';
import { common } from '../../common';

class Search extends React.Component {
  render() {
    return <div className="search-text">
      <h1>
        <img src={ logo }/>Search Text
        <span>{ common() }</span>
      </h1>
      <img src={ pic }/>
    </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
);