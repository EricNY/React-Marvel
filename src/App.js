import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'md5';
import './App.css';

class App extends Component {

  componentDidMount() {

      const urlBaseMarvel = 'http://gateway.marvel.com/v1/public/';
      const apiKey = 'a4175dba2a7fc9ccb00c6ac86098467d';
      const ts = Date.now();
      const privateKey = '90be868cb5a4f37fe5644a2e8a1619eee99c020a';
      const hash = md5(ts + privateKey + apiKey);
      const url = urlBaseMarvel + 'comics?apikey=' +  apiKey + '&hash=' + hash + '&ts=' + ts;

      axios.get(url).then((comics) => {
	  console.log(comics.data.data.results);
      }).catch(e => console.log(e));

  }

  render() {
    return (
      <div className="App">
	 <p>React Marvel</p>
      </div>
    );
  }
}

export default App;
