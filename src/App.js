import React, { Component } from 'react';
import axios from 'axios';

import Card from './Card';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      photos: [],
      favourites: []
    }
  }

  async componentDidMount() {
    const data = await axios.get('https://mol9bx2gs8.execute-api.us-east-1.amazonaws.com/test/api/photos')

    this.setState({
      photos: data.data.data.results,
      loading: false
    })
  }

  renderCard(photo) {
    return (
      <div className="col-sm-4">
        <Card photo={photo} />
      </div>
    )
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    return (
      <div className="App-header">
        <Header title="Auto Expo" subTitle="For all you car enthusiasts, here is a collection of our top cars of 2019 uploaded by people all over the world. Pick your favourite cars today!!ss" />
        <div className="container">
          <div className="row">
            {
              this.state.photos.map(photo => this.renderCard(photo))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;