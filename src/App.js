import './App.css';
import React, { Component } from "react";
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import LatestRelease from './components/LatestRelease';



class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        <LatestRelease />
        <Footer />
      </>
    )
  }
}

export default App;
