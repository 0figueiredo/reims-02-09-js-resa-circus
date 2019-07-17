import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import NavBar from './Components/NavBar';
import Carousel from './Components/Carousel';
import Footerbar from './Components/FooterBar';
import Search from './Components/search';

const mapStateToProps = state => ({
  listOfRegion: state.listOfRegion,
  region: state.region,
  circusByRegionId: state.circusByRegionId,
})

class App extends Component {
  componentDidMount() {
    const { dispatch, region } = this.props;
    axios.get('http://localhost:8000/regions')
      .then(response => dispatch ({type:'DISPLAY_ALL_REGION', listOfRegion: response.data}))
      .catch(err => console.log(err));
    if (region !== 0) {
      axios.get(`http://localhost:8000/regions/${region}/circus`)
        .then(response => dispatch ({type: 'STORE_CIRCUS_BY_REGION_ID', circusByRegionId: response.data}))
        .catch(err => console.log(err));
    }
  }


  render(){
    return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Search />
      <Footerbar />
    </div>
    );
  }
}

export default connect(mapStateToProps)(App);
