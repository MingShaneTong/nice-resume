import React, { Component } from "react";
import $ from "jquery";
import Header from "../Components/CurrentWork/Header";
import Footer from "../Components/layout/Footer";
import Current from "../Components/CurrentWork/Current";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  getWebsiteData() {
    $.ajax({
      url: "./websiteData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getWebsiteData();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Current data={this.state.data.current} />
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
