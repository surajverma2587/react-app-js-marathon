import React, { Component } from 'react';
import { getPhotoData, renderCards} from './AppHelper'

import Card from './Card';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <span>Use JS here to fetch data and render photos</span>
  }
}

export default App;