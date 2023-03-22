import React, { Component } from "react";
import $ from "jquery";
import Header from "../Components/Projects/Header";
import Portfolio from "../Components/Projects/Portfolio";
import Footer from "../Components/layout/Footer";

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
        <Portfolio data={this.state.data.portfolio} />
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
